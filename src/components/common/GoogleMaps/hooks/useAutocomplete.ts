import { useMapsLibrary } from '@vis.gl/react-google-maps';
import React from 'react';

type UseAutocompleteParams = Omit<
	google.maps.places.AutocompletionRequest,
	'input'
>;
export const useAutocomplete = ({
	componentRestrictions = { country: 'es' },
	region = 'es',
	...params
}: UseAutocompleteParams = {}) => {
	const placesApiLoaded = useMapsLibrary('places');
	const [autoCompleteService, setAutoCompleteService] =
		React.useState<google.maps.places.AutocompleteService | null>(null);
	const [autocompletePredictions, setAutocompletePredictions] = React.useState<
		google.maps.places.AutocompletePrediction[]
	>([]);
	const [address, setAddress] = React.useState('');

	const initializeAutoCompleteService = React.useCallback(() => {
		if (!placesApiLoaded) return;
		setAutoCompleteService(new window.google.maps.places.AutocompleteService());
	}, [placesApiLoaded]);

	const fetchAutocompletePredictions = React.useCallback(
		(address: string) => {
			if (!autoCompleteService) return;
			autoCompleteService.getPlacePredictions(
				{
					input: address,
					componentRestrictions,
					region,
					...params,
				},
				(results, status) => {
					if (status === 'OK' && results) {
						setAutocompletePredictions(results);
					} else {
						setAutocompletePredictions([]);
					}
				},
			);
		},
		[autoCompleteService, componentRestrictions, region, params],
	);

	React.useEffect(() => {
		initializeAutoCompleteService();
	}, [initializeAutoCompleteService]);

	React.useEffect(() => {
		fetchAutocompletePredictions(address);
	}, [address, fetchAutocompletePredictions]);

	return {
		autocompletePredictions,
		setAddress,
	};
};
