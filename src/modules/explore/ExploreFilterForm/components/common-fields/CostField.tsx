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

const costsText: FieldOption<
	keyof IntlMessages['explore']['filters']['cost']
>[] = [
	{ label: 'Free', value: 'free' },
	{ label: 'Entry fee', value: 'entry_fee' },
	{ label: 'Voluntary donation', value: 'voluntary_donation' },
];

const costsSymbols = [
	{ label: '€', value: 'low_price' },
	{ label: '€€', value: 'medium_price' },
	{ label: '€€€', value: 'heigh_price' },
];

interface CostFieldProps<T extends FieldValues, K extends FieldPath<T>>
	extends Omit<ControllerProps<T, K>, 'render'> {
	type?: 'text' | 'symbols';
}

export const CostField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	type = 'text',
	...props
}: CostFieldProps<TFieldValues, TName>) => {
	const costTranslations = useTranslations('explore.filters.cost');

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>{costTranslations('title')}</h5>
					<FormControl>
						<ToggleGroup
							className='flex-wrap justify-start gap-x-2 gap-y-3'
							type='multiple'
							value={field.value}
							onValueChange={field.onChange}>
							{type === 'text'
								? costsText.map(({ value }) => (
										<ToggleGroupItem
											key={value}
											value={value}
											className={cn(
												chipVariants({ variant: 'primary' }),
												'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
											)}>
											<CheckmarkIcon className='hidden group-data-[state=on]:block' />
											{costTranslations(value)}
										</ToggleGroupItem>
									))
								: costsSymbols.map(({ value, label }) => (
										<ToggleGroupItem
											key={value}
											value={value}
											className={cn(
												chipVariants({ variant: 'primary' }),
												'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
											)}>
											<CheckmarkIcon className='hidden group-data-[state=on]:block' />
											{label}
										</ToggleGroupItem>
									))}
						</ToggleGroup>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
