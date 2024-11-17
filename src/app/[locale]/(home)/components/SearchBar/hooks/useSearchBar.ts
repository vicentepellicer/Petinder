import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import type { SearchBarCredentials } from '../validators/generateSearchBarCredentials';
import { generateSearchBarCredentials } from '../validators/generateSearchBarCredentials';

export const useSearchBar = () => {
	const translations = {
		validations: useTranslations('validations'),
		category: useTranslations('home.search_bar.category'),
		search_bar: useTranslations('home.search_bar'),
		buttons: useTranslations('buttons'),
	};
	const router = useRouter();
	const [isFilterShown, setIsFilterShown] = React.useState(false);

	const searchForm = useForm<SearchBarCredentials>({
		defaultValues: {
			location: '',
			category: 'pets',
		},
		resolver: zodResolver(
			generateSearchBarCredentials(translations.validations),
		),
	});

	const onSubmit = searchForm.handleSubmit((data) => {
		router.push(`/explore/${data.category}?display=list`);
	});

	return {
		form: searchForm,
		functions: {
			onSubmit,
			setIsFilterShown,
		},
		state: {
			isFilterShown,
		},
		translations,
	};
};
