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

const budgets = [
	{ label: '€', value: 'low' },
	{ label: '€€', value: 'medium' },
	{ label: '€€€', value: 'expensive' },
];

export const BudgetField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const exploreFiltersTranslations = useTranslations('explore.filters');

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{exploreFiltersTranslations('budget.title')}
					</h5>
					<FormControl>
						<ToggleGroup
							className='flex-wrap justify-start gap-x-2 gap-y-3'
							type='multiple'
							value={field.value}
							onValueChange={field.onChange}>
							{budgets.map((budget) => (
								<ToggleGroupItem
									key={budget.value}
									value={budget.value}
									className={cn(
										chipVariants({ variant: 'primary' }),
										'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
									)}>
									<CheckmarkIcon className='hidden group-data-[state=on]:block' />
									{budget.label}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
