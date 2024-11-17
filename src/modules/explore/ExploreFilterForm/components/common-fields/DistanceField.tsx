import { useTranslations } from 'next-intl';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, Slider } from '@/components/ui';
import { PetIcon } from '@/components/ui/icons';

export const DistanceField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const filtersTranslations = useTranslations('explore.filters');

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{filtersTranslations('distance')}
					</h5>
					<FormControl>
						<Slider
							showLabels
							labelsText='km'
							max={100}
							min={1}
							step={1}
							thumbClassName='bottom-[15px]'
							value={[field.value]}
							customIcon={
								<PetIcon className='size-4 text-black transition-colors group-focus:text-primary-main' />
							}
							onValueChange={(value) => field.onChange(value[0])}
						/>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
