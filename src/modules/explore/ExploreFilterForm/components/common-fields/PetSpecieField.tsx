import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import {
	FormControl,
	FormField,
	FormItem,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui';
import {
	CatIcon,
	DogIcon,
	FishIcon,
	HorseIcon,
	PetIcon,
	PetIconOutlined,
	RabbitIcon,
	ReptileIcon,
	RodentIcon,
} from '@/components/ui/icons';

import { exploreFormCredentials } from '../../utils/exploreFormCredentials';

type PetSpecie = {
	label: string;
	value: keyof IntlMessages['explore']['filters']['pet_specie'];
	icon: React.FC<React.SVGAttributes<SVGAElement>>;
};

const petSpecies: PetSpecie[] = [
	{ label: 'Dog', value: 'dog', icon: DogIcon },
	{ label: 'Cat', value: 'cat', icon: CatIcon },
	{ label: 'Rabbit', value: 'rabbit', icon: RabbitIcon },
	{
		label: 'Reptile',
		value: 'reptile',
		icon: ReptileIcon,
	},
	{ label: 'Rodent', value: 'rodent', icon: RodentIcon },
	{ label: 'Horse', value: 'horse', icon: HorseIcon },
	{ label: 'Fish', value: 'fish', icon: FishIcon },
	{
		label: 'Other',
		value: 'other',
		icon: PetIconOutlined,
	},
];

export const PetSpecieField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const petSpecieFilterTranslations = useTranslations(
		'explore.filters.pet_specie',
	);

	const params = new URLSearchParams(searchParams);

	const validatedPetSpecieParams = exploreFormCredentials
		.pick({ petSpecie: true })
		.safeParse({
			petSpecie: params.get('pet')?.toString(),
		}).data?.petSpecie;

	const onChange = (value: string, callback: (values: string) => void) => {
		callback(value);

		params.set('pet', value);
		router.replace(`?${params.toString()}`);
	};

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-2'>
					<h5 className='text-base font-bold'>
						{petSpecieFilterTranslations('title')}
					</h5>
					<FormControl>
						<Select
							value={validatedPetSpecieParams || ''}
							onValueChange={(value) => onChange(value, field.onChange)}>
							<SelectTrigger
								className='data-[selected=true]:border-primary-main data-[selected=true]:text-primary-main'
								data-selected={!!validatedPetSpecieParams}>
								<SelectValue
									placeholder={
										<div className='flex items-center gap-4 whitespace-nowrap'>
											<PetIcon className='size-6' />
											{petSpecieFilterTranslations('placeholder')}
										</div>
									}
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{petSpecies.map(({ icon: SpecieIcon, value }) => {
										return (
											<SelectItem key={value} value={value}>
												<div className='flex items-center gap-2'>
													<SpecieIcon className='size-5' />
													{petSpecieFilterTranslations(value)}
												</div>
											</SelectItem>
										);
									})}
								</SelectGroup>
							</SelectContent>
						</Select>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};
