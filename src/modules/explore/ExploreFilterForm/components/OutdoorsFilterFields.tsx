'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import {
	chipVariants,
	Combobox,
	FormControl,
	FormField,
	FormItem,
	ToggleGroup,
	ToggleGroupItem,
} from '@/components/ui';
import { CheckmarkIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

import type { UseExploreFilterFormReturnType } from '../hooks/useExploreFilterForm';

import {
	LocationField,
	DistanceField,
	PetFacilitiesField,
	OperatingHoursField,
	RatingsField,
	AccessibilityField,
	CostField,
} from './common-fields';

const outdoors = [
	{ label: 'Beach', value: 'beach' },
	{ label: 'Mountain', value: 'mountain' },
	{ label: 'Forest', value: 'forest' },
	{ label: 'Sanctuary', value: 'sanctuary' },
	{ label: 'National park', value: 'national-park' },
	{ label: 'Lake', value: 'lake' },
	{ label: 'Country side', value: 'country-side' },
];

const seasons: FieldOption<
	keyof IntlMessages['explore']['filters']['seasons']
>[] = [
	{ label: 'Year round', value: 'year_round' },
	{ label: 'Summer', value: 'summer' },
	{ label: 'Winter', value: 'winter' },
	{ label: 'Favorable weather', value: 'favorable_weather' },
];

const levels: FieldOption<
	keyof IntlMessages['explore']['filters']['difficulty']['level']
>[] = [
	{ label: 'Easy', value: 'easy' },
	{ label: 'Moderate', value: 'moderate' },
	{ label: 'High', value: 'high' },
];

const durations = [
	{ label: '< 1 hs', value: 'less-1hs' },
	{ label: '1-3 hs', value: '1-3hs' },
	{ label: '3-5 hs', value: '3-5hs' },
	{ label: '5-8 hs', value: '5-8hs' },
	{ label: '> 8 hs', value: 'more-8hs' },
];

const surfaces: FieldOption<
	keyof IntlMessages['explore']['filters']['difficulty']['surface']
>[] = [
	{ label: 'Smooth', value: 'smooth' },
	{ label: 'Rough', value: 'rough' },
	{ label: 'Slope', value: 'slope' },
];

type ComboboxVariant = 'outdoors';

interface OutdoorsFilterFieldsProps {
	form: UseExploreFilterFormReturnType['form'];
}

export const OutdoorsFilterFields = ({ form }: OutdoorsFilterFieldsProps) => {
	const scrollableContainerRef = React.useRef<HTMLDivElement>(null);
	const [openedCombobox, setOpenedCombobox] =
		React.useState<ComboboxVariant | null>(null);
	const outdoorsComboboxRex = React.useRef<HTMLDivElement>(null);
	const exploreFiltersTranslations = useTranslations('explore.filters');
	const seasonsTranslations = useTranslations('explore.filters.seasons');
	const levelTranslations = useTranslations('explore.filters.difficulty.level');
	const surfaceTranslations = useTranslations(
		'explore.filters.difficulty.surface',
	);

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
		if (openedCombobox === 'outdoors') {
			scrollToElement(outdoorsComboboxRex);
		}
	}, [openedCombobox, scrollToElement]);

	return (
		<div
			ref={scrollableContainerRef}
			className='custom-scrollbar flex flex-col gap-6 overflow-y-auto pr-3'>
			<LocationField control={form.control} name='location' />

			<DistanceField control={form.control} name='distance' />

			<FormField
				control={form.control}
				name='outdoors'
				render={({ field }) => (
					<FormItem ref={outdoorsComboboxRex} className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{exploreFiltersTranslations('outdoors.title')}
						</h5>
						<FormControl>
							<Combobox
								showChips
								isOpen={openedCombobox === 'outdoors'}
								options={outdoors}
								setIsOpen={() => handleComboboxToggle('outdoors')}
								type='service'
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<PetFacilitiesField control={form.control} name='petFacilities' />

			<FormField
				control={form.control}
				name='seasons'
				render={({ field }) => (
					<FormItem className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{seasonsTranslations('title')}
						</h5>
						<FormControl>
							<ToggleGroup
								className='flex-wrap justify-start gap-x-2 gap-y-3'
								type='multiple'
								value={field.value}
								onValueChange={field.onChange}>
								{seasons.map(({ value }) => (
									<ToggleGroupItem
										key={value}
										value={value}
										className={cn(
											chipVariants({ variant: 'primary' }),
											'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
										)}>
										<CheckmarkIcon className='hidden group-data-[state=on]:block' />
										{seasonsTranslations(value)}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</FormControl>
					</FormItem>
				)}
			/>

			<div className='space-y-3'>
				<h5 className='text-base font-bold'>
					{exploreFiltersTranslations('difficulty.title')}
				</h5>
				<div className='flex flex-col gap-3'>
					<FormField
						control={form.control}
						name='level'
						render={({ field }) => (
							<FormItem className='flex flex-col gap-2'>
								<h6 className='text-[14px] font-bold'>
									{levelTranslations('title')}
								</h6>
								<FormControl>
									<ToggleGroup
										className='flex-wrap justify-start gap-x-2 gap-y-3'
										type='multiple'
										value={field.value}
										onValueChange={field.onChange}>
										{levels.map(({ value }) => (
											<ToggleGroupItem
												key={value}
												value={value}
												className={cn(
													chipVariants({ variant: 'primary' }),
													'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
												)}>
												<CheckmarkIcon className='hidden group-data-[state=on]:block' />
												{levelTranslations(value)}
											</ToggleGroupItem>
										))}
									</ToggleGroup>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='duration'
						render={({ field }) => (
							<FormItem className='flex flex-col gap-2'>
								<h6 className='text-[14px] font-bold'>
									{exploreFiltersTranslations(
										'difficulty.approximate_duration.title',
									)}
								</h6>
								<FormControl>
									<ToggleGroup
										className='flex-wrap justify-start gap-x-2 gap-y-3'
										type='multiple'
										value={field.value}
										onValueChange={field.onChange}>
										{durations.map((duration) => (
											<ToggleGroupItem
												key={duration.value}
												value={duration.value}
												className={cn(
													chipVariants({ variant: 'primary' }),
													'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
												)}>
												<CheckmarkIcon className='hidden group-data-[state=on]:block' />
												{duration.label}
											</ToggleGroupItem>
										))}
									</ToggleGroup>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='surface'
						render={({ field }) => (
							<FormItem className='flex flex-col gap-2'>
								<h6 className='text-[14px] font-bold'>
									{surfaceTranslations('title')}
								</h6>
								<FormControl>
									<ToggleGroup
										className='flex-wrap justify-start gap-x-2 gap-y-3'
										type='multiple'
										value={field.value}
										onValueChange={field.onChange}>
										{surfaces.map(({ value }) => (
											<ToggleGroupItem
												key={value}
												value={value}
												className={cn(
													chipVariants({ variant: 'primary' }),
													'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
												)}>
												<CheckmarkIcon className='hidden group-data-[state=on]:block' />
												{surfaceTranslations(value)}
											</ToggleGroupItem>
										))}
									</ToggleGroup>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
			</div>

			<OperatingHoursField control={form.control} name='operatingHours' />

			<CostField control={form.control} name='costs' />

			<RatingsField control={form.control} name='ratings' />

			<AccessibilityField control={form.control} name='accessibility' />
		</div>
	);
};
