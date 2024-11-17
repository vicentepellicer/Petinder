'use client';

import { useDebounceValue } from '@siberiacancode/reactuse';
import { LocateIcon, NavigationIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { ChangeEvent } from 'react';
import React from 'react';

import {
	useAutocomplete,
	useGeocoding,
} from '@/components/common/GoogleMaps/hooks';
import type { InputProps } from '@/components/ui';
import { Input } from '@/components/ui';
import { DistanceIcon } from '@/components/ui/icons';
import { useCurrentLocation } from '@/lib/hooks';
import { cn, highlightText } from '@/lib/utils';
import { useGoogleMapsStore } from '@/store/google-maps.store';

interface LocationInputProps extends InputProps {
	onChange?: (event: ChangeEvent<HTMLInputElement> | string) => void;
	currentLocationText?: string;
}

export const LocationInput = React.forwardRef<
	HTMLInputElement,
	LocationInputProps
>(
	(
		{
			placeholder = 'Enter your location',
			currentLocationText = 'Current location',
			...props
		},
		ref,
	) => {
		const [isInputFocused, setIsInputFocused] = React.useState(false);
		const { latitude, longitude, getCurrentLocation } = useCurrentLocation();
		const {
			setLocation,
			setCameraProps,
			cameraProps,
			location: googleMapsLocation,
		} = useGoogleMapsStore((state) => state);
		const { autocompletePredictions, setAddress: setAutocompleteAddress } =
			useAutocomplete();
		const debouncedLocationInput = useDebounceValue(props.value, 500) as string;
		const { location: geocodingLocation, setAddress } = useGeocoding();
		React.useState(false);
		const buttonsTranslations = useTranslations('buttons');

		React.useEffect(() => {
			if (
				latitude === Number.POSITIVE_INFINITY ||
				latitude === Number.POSITIVE_INFINITY
			)
				return;
			setLocation({
				lat: latitude ?? 0,
				lng: longitude ?? 0,
			});
		}, [latitude, longitude]);

		React.useEffect(() => {
			setCameraProps({
				...cameraProps,
				center: {
					lat: googleMapsLocation?.lat,
					lng: googleMapsLocation?.lng,
				},
			});
		}, [googleMapsLocation]);

		React.useEffect(() => {
			if (
				!debouncedLocationInput ||
				debouncedLocationInput.includes(currentLocationText)
			)
				return;
			setAutocompleteAddress(debouncedLocationInput.toString());
		}, [debouncedLocationInput]);

		React.useEffect(() => {
			if (debouncedLocationInput.includes(currentLocationText)) return;
			setAddress(debouncedLocationInput);
			if (!geocodingLocation) return;
			setLocation({ ...geocodingLocation });
		}, [geocodingLocation, debouncedLocationInput]);

		const onClick = () => {
			props?.onChange?.(currentLocationText);
			if (
				latitude === Number.POSITIVE_INFINITY ||
				latitude === Number.POSITIVE_INFINITY
			)
				getCurrentLocation();
			else if (latitude && longitude) {
				setLocation({ lat: latitude, lng: longitude });
			}
		};

		return (
			<div className='relative'>
				<Input
					autoComplete='off'
					{...props}
					ref={ref}
					placeholder={placeholder}
					prependIcon={<DistanceIcon className='text-secondary-main size-5' />}
					onBlur={() => setIsInputFocused(false)}
					onFocus={() => setIsInputFocused(true)}
				/>
				<div
					className={cn(
						'invisible absolute z-10 mt-1 w-full overflow-hidden rounded-3 border bg-white opacity-0 shadow-sm transition-all',
						((isInputFocused && autocompletePredictions.length) ||
							(isInputFocused && !debouncedLocationInput.length)) &&
							'visible opacity-100',
					)}>
					{!debouncedLocationInput.length && (
						<button
							className='hover:bg-contrast-main flex w-full cursor-default items-center gap-1 px-2 py-2 font-semibold transition-all'
							type='button'
							onClick={onClick}>
							<LocateIcon className='text-secondary-main size-3' />
							<span className='text-sm'>
								{buttonsTranslations('current_location')}
							</span>
						</button>
					)}
					{autocompletePredictions && (
						<ul>
							{autocompletePredictions.map((autocompletePrediction) => (
								<li key={autocompletePrediction.place_id}>
									<button
										className='hover:bg-contrast-main flex w-full cursor-default items-center justify-start gap-1 px-2 py-0.5 text-left transition-all'
										type='button'
										onClick={() =>
											props.onChange?.(autocompletePrediction.description)
										}>
										<NavigationIcon className='text-secondary-main size-3 shrink-0' />
										<span className='line-clamp-1 text-sm'>
											{highlightText(
												autocompletePrediction.description,
												debouncedLocationInput,
											)}
										</span>
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		);
	},
);
