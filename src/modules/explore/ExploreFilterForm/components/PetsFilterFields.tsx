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
	PetSpecieField,
	AccessibilityField,
} from './common-fields';

const colors: FieldOption<keyof IntlMessages['explore']['filters']['color']>[] =
	[
		{ label: 'Black', value: 'black' },
		{ label: 'Brown', value: 'brown' },
		{ label: 'White', value: 'white' },
		{ label: 'Gray', value: 'gray' },
	];

const sizes: FieldOption<string>[] = [
	{ label: 'XS', value: 'size-xs' },
	{ label: 'S', value: 'size-s' },
	{ label: 'M', value: 'size-m' },
	{ label: 'L', value: 'size-l' },
	{ label: 'XL', value: 'size-xl' },
	{ label: 'XXL', value: 'size-xxl' },
];

const ages: FieldOption<keyof IntlMessages['explore']['filters']['age']>[] = [
	{ label: 'Puppy', value: 'puppy' },
	{ label: 'Young', value: 'young' },
	{ label: 'Adult', value: 'adult' },
	{ label: 'Senior', value: 'senior' },
];

const genders: FieldOption<
	keyof IntlMessages['explore']['filters']['gender']
>[] = [
	{ label: 'Male', value: 'male' },
	{ label: 'Female', value: 'female' },
];

const requirements: FieldOption<
	keyof IntlMessages['explore']['filters']['requirements']
>[] = [
	{ label: 'Kid friendly', value: 'kid_friendly' },
	{ label: 'Dog friendly', value: 'dog_friendly' },
	{ label: 'Cat friendly', value: 'cat_friendly' },
	{ label: 'Hypoallergenic', value: 'hypoallergenic' },
	{ label: 'House trained', value: 'house_trained' },
	{ label: 'Little exercise needed', value: 'little_exercise' },
	{ label: 'Apartment fit', value: 'apartment_fit' },
];

type ComboboxVariant = 'color' | 'requirements';

interface PetsFilterFieldsProps {
	form: UseExploreFilterFormReturnType['form'];
}

export const PetsFilterFields = ({ form }: PetsFilterFieldsProps) => {
	const scrollableContainerRef = React.useRef<HTMLDivElement>(null);
	const filtersTranslations = useTranslations('explore.filters');

	const [openedCombobox, setOpenedCombobox] =
		React.useState<ComboboxVariant | null>(null);

	const colorComboboxRef = React.useRef<HTMLDivElement>(null);
	const requirementsComboboxRex = React.useRef<HTMLDivElement>(null);

	const scrollToElement = React.useCallback(
		(element: React.RefObject<HTMLDivElement>) => {
			const controller = new AbortController();

			const scrollIntoView = () => {
				element.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
				});
			};

			scrollableContainerRef.current?.addEventListener(
				'animationend',
				scrollIntoView,
				{ signal: controller.signal },
			);

			return () => controller.abort();
		},
		[],
	);

	const handleComboboxToggle = (combobox: ComboboxVariant) => {
		setOpenedCombobox((prev) => (prev === combobox ? null : combobox));
	};

	React.useEffect(() => {
		if (openedCombobox === 'color') {
			scrollToElement(colorComboboxRef);
		}
		if (openedCombobox === 'requirements') {
			scrollToElement(requirementsComboboxRex);
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
				name='ages'
				render={({ field }) => (
					<FormItem className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{filtersTranslations('age.title')}
						</h5>
						<FormControl>
							<ToggleGroup
								className='flex-wrap justify-start gap-x-2 gap-y-3'
								type='multiple'
								value={field.value}
								onValueChange={field.onChange}>
								{ages.map((age) => (
									<ToggleGroupItem
										key={age.value}
										value={age.value}
										className={cn(
											chipVariants({ variant: 'primary' }),
											'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
										)}>
										<CheckmarkIcon className='hidden group-data-[state=on]:block' />
										{filtersTranslations(`age.${age.value}`)}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='genders'
				render={({ field }) => (
					<FormItem className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{filtersTranslations('gender.title')}
						</h5>
						<FormControl>
							<ToggleGroup
								className='flex-wrap justify-start gap-x-2 gap-y-3'
								type='multiple'
								value={field.value}
								onValueChange={field.onChange}>
								{genders.map((gender) => (
									<ToggleGroupItem
										key={gender.value}
										value={gender.value}
										className={cn(
											chipVariants({ variant: 'primary' }),
											'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
										)}>
										<CheckmarkIcon className='hidden group-data-[state=on]:block' />
										{gender.label}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='sizes'
				render={({ field }) => (
					<FormItem className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{filtersTranslations('size.title')}
						</h5>
						<FormControl>
							<ToggleGroup
								className='grid w-full grid-flow-row grid-cols-[max-content_max-content_max-content] justify-start gap-x-2 gap-y-3'
								type='multiple'
								value={field.value}
								onValueChange={field.onChange}>
								{sizes.map((size) => (
									<ToggleGroupItem
										key={size.value}
										value={size.value}
										className={cn(
											chipVariants({ variant: 'primary' }),
											'group min-w-[5rem] cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:justify-start data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
										)}>
										<CheckmarkIcon className='hidden shrink-0 group-data-[state=on]:block' />
										{size.label}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='colors'
				render={({ field }) => (
					<FormItem
						ref={colorComboboxRef}
						className='flex flex-col gap-2'
						id='color-combobox'>
						<h5 className='text-base font-bold'>
							{filtersTranslations('color.title')}
						</h5>
						<FormControl>
							<Combobox
								selectAll
								showChips
								isOpen={openedCombobox === 'color'}
								options={colors}
								setIsOpen={() => handleComboboxToggle('color')}
								type='color'
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='requirements'
				render={({ field }) => (
					<FormItem
						ref={requirementsComboboxRex}
						className='flex flex-col gap-2'>
						<h5 className='text-base font-bold'>
							{' '}
							{filtersTranslations('requirements.title')}
						</h5>
						<FormControl>
							<Combobox
								showChips
								isOpen={openedCombobox === 'requirements'}
								options={requirements}
								setIsOpen={() => handleComboboxToggle('requirements')}
								type='requirement'
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>

			<AccessibilityField control={form.control} name='accessibility' />
		</div>
	);
};
