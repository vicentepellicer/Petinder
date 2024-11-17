import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import type { ExploreFormCredentials } from '../utils/exploreFormCredentials';

export type UseExploreFilterFormReturnType = ReturnType<
	typeof useExploreFilterForm
>;

export const useExploreFilterForm = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const display = searchParams.get('display')?.toString();

	const FilterForm = useForm<ExploreFormCredentials>({
		defaultValues: {
			location: '',
			distance: 10,
			petSpecie: 'dog',
			sizes: [],
			ages: [],
			genders: [],
			colors: [],
			requirements: [],
			accessibility: [],
			services: [],
			budgets: [],
			operatingHours: [],
			servicesAvailability: [],
			ratings: [],
			// Outdoors
			outdoors: [],
			petFacilities: [],
			level: [],
			duration: [],
			surface: [],
			approximateDuration: [],
			surfaces: [],
			seasons: [],
			costs: [],
		},
	});

	const onPetFilterFormSubmit = FilterForm.handleSubmit(
		({
			petSpecie,
			location,
			distance,
			ages,
			genders,
			sizes,
			colors,
			requirements,
			accessibility,
		}) => {
			alert(
				JSON.stringify({
					petSpecie,
					location,
					distance,
					ages,
					genders,
					sizes,
					colors,
					requirements,
					accessibility,
				}),
			);
		},
	);

	const onServicesFilterFormSubmit = FilterForm.handleSubmit((data) => {
		alert(JSON.stringify(data));
	});

	const onOutdoorFilterFormSubmit = FilterForm.handleSubmit((data) =>
		alert(JSON.stringify(data)),
	);

	const onReset = () => {
		FilterForm.reset();

		router.replace(`${pathname}?display=${display ?? 'list'}`);
	};

	return {
		form: FilterForm,
		functions: {
			onServicesFilterFormSubmit,
			onPetFilterFormSubmit,
			onOutdoorFilterFormSubmit,
			onReset,
		},
	};
};
