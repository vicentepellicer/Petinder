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

const serviceAvailability: FieldOption<
	keyof IntlMessages['explore']['filters']['service_availability']
>[] = [
	{ label: 'Domiciliary visit', value: 'domiciliary_visit' },
	{ label: 'On Site', value: 'on_site' },
];

export const ServiceAvailabilityField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const serviceAvailabilityTranslations = useTranslations(
		'explore.filters.service_availability',
	);

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{serviceAvailabilityTranslations('title')}
					</h5>
					<FormControl>
						<ToggleGroup
							className='flex-wrap justify-start gap-x-2 gap-y-3'
							type='multiple'
							value={field.value}
							onValueChange={field.onChange}>
							{serviceAvailability.map(({ value }) => (
								<ToggleGroupItem
									key={value}
									value={value}
									className={cn(
										chipVariants({ variant: 'primary' }),
										'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
									)}>
									<CheckmarkIcon className='hidden group-data-[state=on]:block' />
									{serviceAvailabilityTranslations(value)}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
