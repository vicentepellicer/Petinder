import { useMapsLibrary } from '@vis.gl/react-google-maps';
import React from 'react';

interface UseGeocodingParams extends google.maps.GeocoderRequest {
	geocodingReverse?: boolean;
	reverseLocation?: {
		lat: number;
		lng: number;
	};
}

export const useGeocoding = ({
	componentRestrictions = { country: 'es' },
	region = 'es',
	geocodingReverse = false,
	reverseLocation,
	...params
}: UseGeocodingParams = {}) => {
	const geocodingApiLoaded = useMapsLibrary('geocoding');
	const [geocodingService, setGeocodingService] =
		React.useState<google.maps.Geocoder | null>(null);
	const [isLoading, setIsLoading] = React.useState(true);
	const [geocodingResult, setGeocodingResult] =
		React.useState<google.maps.GeocoderResult | null>(null);
	const [address, setAddress] = React.useState<string | null>(null);
	const [location, setLocation] = React.useState<{
		lat: number;
		lng: number;
	} | null>(null);

	const initializeGeocodingService = React.useCallback(() => {
		if (!geocodingApiLoaded) return;
		setGeocodingService(new window.google.maps.Geocoder());
		setIsLoading(false);
	}, [geocodingApiLoaded]);

	const geocode = React.useCallback(
		(
			geocodingService: google.maps.Geocoder,
			params: google.maps.GeocoderRequest,
		) => {
			if (geocodingReverse) {
				if (!reverseLocation) return;
				geocodingService.geocode(
					{
						location: {
							lat: reverseLocation.lat,
							lng: reverseLocation.lng,
						},
						...params,
					},
					(results, status) => {
						if (status === 'OK' && results) {
							setGeocodingResult(results[0]);
							setAddress(results[0].formatted_address);
						}
					},
				);
			} else {
				if (!address) return;
				geocodingService.geocode(
					{
						address,
						...params,
					},
					(results, status) => {
						if (status === 'OK' && results) {
							setGeocodingResult(results[0]);
							setLocation({
								lat: results[0].geometry.location.lat(),
								lng: results[0].geometry.location.lng(),
							});
						}
					},
				);
			}
		},
		[geocodingReverse, reverseLocation, address],
	);

	React.useEffect(() => {
		initializeGeocodingService();
	}, [initializeGeocodingService]);

	React.useEffect(() => {
		if (!geocodingService) return;
		geocode(geocodingService, { componentRestrictions, region, ...params });
	}, [geocodingService, geocode, componentRestrictions, region, params]);

	return {
		geocodingResult,
		location,
		isLoading,
		address,
		setAddress,
	};
};
