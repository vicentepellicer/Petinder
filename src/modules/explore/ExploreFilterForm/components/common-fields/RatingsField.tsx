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

const ratings = [
	{ label: '1 ★', value: '1' },
	{ label: '2 ★', value: '2' },
	{ label: '3 ★', value: '3' },
	{ label: '4 ★', value: '4' },
	{ label: '5 ★', value: '5' },
];

export const RatingsField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const ratingsTranslations = useTranslations('explore.filters.ratings');
	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{ratingsTranslations('title')}
					</h5>
					<FormControl>
						<ToggleGroup
							className='flex-wrap justify-start gap-x-2 gap-y-3'
							type='multiple'
							value={field.value}
							onValueChange={field.onChange}>
							{ratings.map((ratings) => (
								<ToggleGroupItem
									key={ratings.value}
									value={ratings.value}
									className={cn(
										chipVariants({ variant: 'primary' }),
										'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
									)}>
									<CheckmarkIcon className='hidden group-data-[state=on]:block' />
									{ratings.label}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
