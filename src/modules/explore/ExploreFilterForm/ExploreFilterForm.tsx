'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import type { z } from 'zod';

import type { CategorySchema } from '@/components/common';
import { Button, Form } from '@/components/ui';

import {
	ServicesFilterFields,
	OutdoorsFilterFields,
	PetsFilterFields,
	HealthFilterFields,
	IndoorFilterFields,
	LodgingFilterFields,
} from './components';
import { useExploreFilterForm } from './hooks/useExploreFilterForm';

interface ExploreFilterFormProps {
	category: string;
}

type FormField = {
	category: z.infer<typeof CategorySchema>['category'];
	fields: React.FC<{ form: any }>;
	onSubmit: ((e?: React.BaseSyntheticEvent) => Promise<void>) | (() => void); // TODO remove (() => void) after added all submit functions
};

export const ExploreFilterForm = ({ category }: ExploreFilterFormProps) => {
	const { form, functions } = useExploreFilterForm();
	const exploreFilterTranslations = useTranslations('explore');

	const formFields = React.useMemo<FormField[]>(
		() => [
			{
				category: 'pets',
				fields: PetsFilterFields,
				onSubmit: functions.onPetFilterFormSubmit,
			},
			{
				category: 'health',
				fields: HealthFilterFields,
				onSubmit: () => alert('submit health'),
			},
			{
				category: 'services',
				fields: ServicesFilterFields,
				onSubmit: functions.onServicesFilterFormSubmit,
			},
			{
				category: 'lodging',
				fields: LodgingFilterFields,
				onSubmit: () => alert('submit lodging'),
			},
			{
				category: 'outdoor',
				fields: OutdoorsFilterFields,
				onSubmit: functions.onOutdoorFilterFormSubmit,
			},
			{
				category: 'indoor',
				fields: IndoorFilterFields,
				onSubmit: () => alert('submit indoor'),
			},
		],
		[
			functions.onOutdoorFilterFormSubmit,
			functions.onPetFilterFormSubmit,
			functions.onServicesFilterFormSubmit,
		],
	);

	const matchedFields = formFields.find(
		({ category: fieldsCategory }) => fieldsCategory === category,
	);

	const Fields = matchedFields?.fields;

	return (
		<Form {...form}>
			<form
				className='relative flex h-full w-full flex-col'
				onSubmit={matchedFields?.onSubmit}>
				{!!Fields && <Fields form={form} />}
				<div className='flex w-full gap-2 pt-4'>
					<Button className='basis-1/2' type='submit'>
						{exploreFilterTranslations('buttons.save_selections')}
					</Button>
					<Button
						className='basis-1/2'
						type='button'
						variant='outline'
						onClick={() => functions.onReset()}>
						{exploreFilterTranslations('buttons.reset')}
					</Button>
				</div>
			</form>
		</Form>
	);
};
