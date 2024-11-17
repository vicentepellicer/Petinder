import { useTranslations } from 'next-intl';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import {
	chipVariants,
	FormControl,
	FormField,
	FormItem,
	ToggleGroup,
	ToggleGroupItem,
} from '@/components/ui';
import { CheckmarkIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

const petFacilities: FieldOption<
	keyof IntlMessages['explore']['filters']['pet_facilities']
>[] = [
	{ label: 'Play area', value: 'play_area' },
	{ label: 'Waste disposal', value: 'waste_disposal' },
	{ label: 'Water stations', value: 'water_stations' },
	{ label: 'Rest stops', value: 'rest_stops' },
];

export const PetFacilitiesField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const petFacilitiesTranslations = useTranslations(
		'explore.filters.pet_facilities',
	);
	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{petFacilitiesTranslations('title')}
					</h5>
					<FormControl>
						<ToggleGroup
							className='flex-wrap justify-start gap-x-2 gap-y-3'
							type='multiple'
							value={field.value}
							onValueChange={field.onChange}>
							{petFacilities.map(({ value }) => (
								<ToggleGroupItem
									key={value}
									value={value}
									className={cn(
										chipVariants({ variant: 'primary' }),
										'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
									)}>
									<CheckmarkIcon className='hidden group-data-[state=on]:block' />
									{petFacilitiesTranslations(value)}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
