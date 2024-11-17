import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { getCurrentUser } from '@/api/instance';

import { getStatesByCiso, getCitiesBySiso } from '../api/requests';
import type { TProfileCredentialsValidator } from '../utils';
import { generateUserProfileCredentialsValidator } from '../utils';

const countries = [
	{ label: 'Spain', value: 'ES' },
	{ label: 'Portugal', value: 'PT' },
];

export const useUserProfile = () => {
	const [states, setStates] = React.useState<State[]>([]);
	const [cities, setCities] = React.useState<City[]>([]);
	// TODO: Add translations
	const [interests] = React.useState<string[]>([
		'Agility',
		'Walking',
		'Trekking',
		'Traveling',
		'Yoga',
		'Cooking',
		'Tennis',
		'Running',
		'Swimming',
		'Adventure',
		'Extreme sport',
		'Music',
		'Friends',
		'Work w. dog',
	]);

	// TODO: Get user interests from backend
	const [userInterests, setUserInterests] = React.useState<string[]>([
		'Tennis',
		'Cooking',
		'Running',
	]);

	const translations = {
		userProfilePage: useTranslations('user_profile'),
		validations: useTranslations('validations'),
		inputs: useTranslations('inputs'),
		selectors: useTranslations('selectors'),
		buttons: useTranslations('buttons'),
		requests: useTranslations('requests'),
	};

	const genders = [
		{ label: translations.selectors('gender_options.male'), value: 'male' },
		{ label: translations.selectors('gender_options.female'), value: 'female' },
		{ label: translations.selectors('gender_options.other'), value: 'other' },
	];

	const userProfileForm = useForm<TProfileCredentialsValidator>({
		defaultValues: async () => {
			const response = await getCurrentUser();
			if (response.data) {
				return {
					firstName: response.data.user.name,
					lastName: response.data.user.name,
					gender: 'male',
					phone: '+1234567890',
					email: response.data.user.email,
					country: 'ES',
					zip_code: '12345',
					address: 'Calle Falsa 123',
					dob: new Date(
						'Tue Dec 17 1990 00:00:00 GMT+0100 (Central European Standard Time)',
					),
					region: 'SE',
					location: 'Sevilla',
				};
			}
			return {} as TProfileCredentialsValidator;
		},
		resolver: zodResolver(
			generateUserProfileCredentialsValidator(translations.validations),
		),
	});

	const onSubmit = userProfileForm.handleSubmit(
		(data: TProfileCredentialsValidator) => {
			if (data) {
				toast.success(translations.userProfilePage('notifications.success'));
			}
			// TODO: Send data to backend
			console.log(data);
		},
	);

	const onCountryChange = async (ciso: string) => {
		userProfileForm.setValue('region', '');
		userProfileForm.setValue('location', '');
		setCities([]);
		try {
			const response = await getStatesByCiso({
				params: { ciso },
			});
			if (!response.data) {
				return;
			}
			setStates(response.data);
		} catch (error) {
			userProfileForm.setError('region', {
				message: translations.requests('request_failed'),
			});
		}
	};

	const onRegionChange = async (ciso: string, siso: string) => {
		try {
			const response = await getCitiesBySiso({
				params: { ciso, siso },
			});
			if (!response.data) {
				return;
			}
			setCities(response.data);
		} catch (error) {
			userProfileForm.setError('location', {
				message: translations.requests('request_failed'),
			});
		}
	};

	const onInterestClick = (interest: string) => {
		if (userInterests.includes(interest)) {
			setUserInterests(userInterests.filter((i) => i !== interest));
		} else {
			setUserInterests([...userInterests, interest]);
		}
	};
	// TODO: Add country and region fetch based on current user profile from API
	React.useEffect(() => {
		onCountryChange('ES');
		onRegionChange('ES', 'SE');
	}, []);

	return {
		form: userProfileForm,
		genders,
		translations,
		countries,
		state: {
			isSubmitting: userProfileForm.formState.isSubmitting,
			states,
			cities,
			userInterests,
			interests,
		},
		functions: {
			onInterestClick,
			onSubmit,
			onCountryChange,
			onRegionChange,
		},
	};
};
