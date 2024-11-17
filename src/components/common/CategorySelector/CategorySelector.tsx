'use client';

import { notFound, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

import { RadioGroup, RadioGroupItem } from '@/components/ui';
import {
	HeartLineIcon,
	ServiceIcon,
	DistanceIcon,
	OutdoorIcon,
	FamilyHomeIcon,
	PetIcon,
} from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export const CategorySchema = z.object({
	category: z.enum([
		'pets',
		'health',
		'services',
		'lodging',
		'outdoor',
		'indoor',
	]),
});

interface CategorySelectorProps {
	category: string;
	className?: string;
	onCategoryChange?: (category: string) => void;
}

type CategoryRadioItem = {
	value: keyof IntlMessages['category_selector'];
	icon: React.FC<React.SVGAttributes<SVGElement>>;
};

const categoryRadioItems: CategoryRadioItem[] = [
	{ value: 'pets', icon: PetIcon },
	{ value: 'health', icon: HeartLineIcon },
	{ value: 'services', icon: ServiceIcon },
	{ value: 'lodging', icon: DistanceIcon },
	{ value: 'outdoor', icon: OutdoorIcon },
	{ value: 'indoor', icon: FamilyHomeIcon },
];

const CategorySelector = ({
	className,
	category,
	onCategoryChange,
}: CategorySelectorProps) => {
	const translations = useTranslations('category_selector');
	const searchParams = useSearchParams();
	const router = useRouter();

	const validatedCategory = CategorySchema.safeParse({
		category: category.toString(),
	}).data?.category;

	if (!validatedCategory) {
		return notFound();
	}

	const handleCategoryChange = (newCategory: string) => {
		if (onCategoryChange) {
			onCategoryChange(newCategory);
		} else {
			const params = new URLSearchParams(searchParams.toString());

			router.push(`/explore/${newCategory}?${params.toString()}`);
		}
	};

	return (
		<RadioGroup
			value={category}
			className={cn(
				'grid w-full grid-flow-row grid-cols-3 gap-2 font-semibold text-gray-dark md:grid-cols-6',
				className,
			)}
			onValueChange={handleCategoryChange}>
			{categoryRadioItems.map(({ value, icon: RadioItemIcon }) => (
				<RadioGroupItem
					key={value}
					className='max-w-full grow flex-col justify-center rounded-lg border border-gray-dark bg-white p-3 text-xs data-[checked="true"]:border-primary-main data-[checked="true"]:bg-contrast-main data-[checked="true"]:text-primary-main'
					radioValue={value}
					customIcon={
						<RadioItemIcon className='size-[40px] group-data-[checked="true"]:text-primary-main xs:size-[30px]' />
					}>
					{translations(value)}
				</RadioGroupItem>
			))}
		</RadioGroup>
	);
};

export { CategorySelector };
