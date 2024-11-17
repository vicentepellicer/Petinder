'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Combobox, FormControl, FormField, FormItem } from '@/components/ui';

import type { UseExploreFilterFormReturnType } from '../hooks/useExploreFilterForm';

import {
	LocationField,
	DistanceField,
	PetSpecieField,
	BudgetField,
	OperatingHoursField,
	ServiceAvailabilityField,
	RatingsField,
	AccessibilityField,
} from './common-fields';

const services = [
	{ label: 'Hairdresser', value: 'hairdresser' },
	{ label: 'Dog Walker', value: 'dog-walker' },
	{ label: 'Pet Shop', value: 'pet-shop' },
];

type ComboboxVariant = 'services';

interface ServicesFilterFieldsProps {
	form: UseExploreFilterFormReturnType['form'];
}

export const ServicesFilterFields = ({ form }: ServicesFilterFieldsProps) => {
	const scrollableContainerRef = React.useRef<HTMLDivElement>(null);
	const exploreFiltersTranslations = useTranslations('explore.filters');

	const [openedCombobox, setOpenedCombobox] =
		React.useState<ComboboxVariant | null>(null);

	const servicesComboboxRex = React.useRef<HTMLDivElement>(null);

	const scrollToElement = React.useCallback(
		(element: React.RefObject<HTMLDivElement>) => {
			const scrollIntoView = () => {
				element.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
				});
			};

			scrollableContainerRef.current?.addEventListener(
				'animationend',
				scrollIntoView,
			);

			return () => {
				scrollableContainerRef.current?.removeEventListener(
					'animationend',
					scrollIntoView,
				);
			};
		},
		[],
	);

	const handleComboboxToggle = (combobox: ComboboxVariant) => {
		setOpenedCombobox((prev) => (prev === combobox ? null : combobox));
	};

	React.useEffect(() => {
		if (openedCombobox === 'services') {
			scrollToElement(servicesComboboxRex);
		}
	}, [openedCombobox, scrollToElement]);

	return (
		<div
			ref={scrollableContainerRef}
			className='custom-scrollbar flex flex-col gap-6 overflow-y-auto pr-3'>
			<LocationField control={form.control} name='location' />

			<DistanceField control={form.control} name='distance' />

			<PetSpecieField control={form.control} name='petSpecie' />

			<FormField
				control={form.control}
				name='services'
				render={({ field }) => (
					<FormItem ref={servicesComboboxRex} className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{exploreFiltersTranslations('services.title')}
						</h5>
						<FormControl>
							<Combobox
								showChips
								isOpen={openedCombobox === 'services'}
								options={services}
								setIsOpen={() => handleComboboxToggle('services')}
								type='service'
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<BudgetField control={form.control} name='budgets' />

			<OperatingHoursField control={form.control} name='operatingHours' />

			<ServiceAvailabilityField
				control={form.control}
				name='servicesAvailability'
			/>

			<RatingsField control={form.control} name='ratings' />

			<AccessibilityField control={form.control} name='accessibility' />
		</div>
	);
};
