import React from 'react';

/** The use geolocation params type */
export type UseGeolocationParams = PositionOptions;

/** The use geolocation return type */
export interface UseGeolocationReturn {
	/** The loading state */
	loading: boolean;
	/** The error of the last position update */
	error: GeolocationPositionError | null;
	/** The timestamp of the last position update */
	timestamp: number | null;
	/** The accuracy of the last position update */
	accuracy: number | null;
	/** The latitude of the last position update */
	latitude: number | null;
	/** The longitude of the last position update */
	longitude: number | null;
	/** The altitude of the last position update */
	altitude: number | null;
	/** The altitude accuracy of the last position update */
	altitudeAccuracy: number | null;
	/** The heading of the last position update */
	heading: number | null;
	/** The speed of the last position update */
	speed: number | null;
	/** The function to get the current location */
	getCurrentLocation: () => void;
}

export const useCurrentLocation = (
	params?: UseGeolocationParams,
): UseGeolocationReturn => {
	const [value, setValue] = React.useState<{
		loading: boolean;
		error: GeolocationPositionError | null;
		timestamp: number | null;
		accuracy: number | null;
		latitude: number | null;
		longitude: number | null;
		altitude: number | null;
		altitudeAccuracy: number | null;
		heading: number | null;
		speed: number | null;
	}>({
		loading: true,
		error: null,
		timestamp: Date.now(),
		accuracy: 0,
		latitude: Number.POSITIVE_INFINITY,
		longitude: Number.POSITIVE_INFINITY,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		speed: null,
	});

	const getCurrentLocation = React.useCallback(() => {
		const onEvent = ({ coords, timestamp }: GeolocationPosition) => {
			setValue({
				...value,
				loading: false,
				timestamp,
				latitude: coords.latitude,
				longitude: coords.longitude,
				altitude: coords.altitude,
				accuracy: coords.accuracy,
				altitudeAccuracy: coords.altitudeAccuracy,
				heading: coords.heading,
				speed: coords.speed,
			});
		};

		const onEventError = (error: GeolocationPositionError) => {
			setValue({
				...value,
				loading: false,
				error,
			});
		};

		navigator.geolocation.getCurrentPosition(onEvent, onEventError, params);
		const watchId = navigator.geolocation.watchPosition(
			onEvent,
			onEventError,
			params,
		);

		return () => {
			navigator.geolocation.clearWatch(watchId);
		};
	}, [params?.enableHighAccuracy, params?.maximumAge, params?.timeout]);

	return {
		...value,
		getCurrentLocation,
	};
};
