import { useTranslations } from 'next-intl';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import { LocationInput } from '@/components/common';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui';
import { CloseIcon } from '@/components/ui/icons';

export const LocationField = <
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
					<FormLabel className='self-start text-base font-bold'>
						{filtersTranslations('location')}
					</FormLabel>
					<FormControl>
						<LocationInput
							{...field}
							appendIcon={
								field.value && (
									<button
										aria-label='Clear input'
										type='button'
										onClick={() => field.onChange?.('')}>
										<CloseIcon className='size-3 text-gray-dark transition-colors hover:text-black' />
									</button>
								)
							}
						/>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
