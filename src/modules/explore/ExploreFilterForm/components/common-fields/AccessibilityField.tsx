import { useRouter, useSearchParams } from 'next/navigation';
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

const accessibility: FieldOption<
	keyof IntlMessages['explore']['filters']['accessibility']
>[] = [
	{ label: 'Wheelchair access', value: 'wheelchair_access' },
	{ label: 'Elevator', value: 'elevator' },
	{ label: 'Step-free', value: 'step_free' },
	{ label: 'Disabled parking', value: 'disabled_parking' },
];

export const AccessibilityField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const router = useRouter();
	const accessibilityFormTranslations = useTranslations(
		'explore.filters.accessibility',
	);

	const searchParams = useSearchParams();
	const accessibilitySearchParams = searchParams.get('accessibility');

	const onChange = (
		values: string[],
		searchParam: string,
		callback: (values: string[]) => void,
	) => {
		callback(values);
		const params = new URLSearchParams(searchParams.toString());

		params.set(searchParam, values.join(','));
		router.replace(`?${params.toString()}`);
	};

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{accessibilityFormTranslations('title')}
					</h5>
					<FormControl>
						<ToggleGroup
							className='flex-wrap justify-start gap-x-2 gap-y-3'
							type='multiple'
							value={accessibilitySearchParams?.split(',') || field.value}
							onValueChange={(value) =>
								onChange(value, 'accessibility', field.onChange)
							}>
							{accessibility.map((item) => (
								<ToggleGroupItem
									key={item.value}
									value={item.value}
									className={cn(
										chipVariants({ variant: 'primary' }),
										'group cursor-pointer transition-opacity hover:opacity-85 data-[state=on]:border-primary-main data-[state=on]:bg-contrast-main data-[state=on]:text-primary-main',
									)}>
									<CheckmarkIcon className='hidden group-data-[state=on]:block' />
									{accessibilityFormTranslations(item.value)}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
