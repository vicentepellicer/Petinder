import { zodResolver } from '@hookform/resolvers/zod';
import type { AxiosError } from 'axios';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { signUp } from '../api/requests';
import type { SignUpCredentials } from '../utils';
import { generateSignUpCredentials } from '../utils';

export const useSignUpForm = () => {
	const [passwordType, setPasswordType] = React.useState<'password' | 'text'>(
		'password',
	);
	const [confirmType, setConfirmType] = React.useState<'password' | 'text'>(
		'password',
	);

	const translations = {
		signUpPage: useTranslations('sign_up'),
		validations: useTranslations('validations'),
		inputs: useTranslations('inputs'),
		buttons: useTranslations('buttons'),
		requests: useTranslations('requests'),
	};

	const signUpForm = useForm<SignUpCredentials>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			terms: false,
			subscription: false,
		},
		resolver: zodResolver(
			generateSignUpCredentials(translations.validations).refine(
				(data) => data.password === data.confirmPassword,
				{
					message: translations.validations('passwords_match'),
					path: ['confirmPassword'],
				},
			),
		),
	});

	const changePasswordType = () => {
		setPasswordType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const changeConfirmType = () => {
		setConfirmType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const onSubmit = signUpForm.handleSubmit(async (data: SignUpCredentials) => {
		if (!data) return;
		await signUp({
			params: {
				name: data.name,
				email: data.email,
				password: data.password,
				passwordConfirmation: data.confirmPassword,
			},
		})
			.then((response) => {
				if (response.data) {
					toast.success(translations.signUpPage('notifications.success'));
				}
			})
			.catch((error: AxiosError) => {
				if (error.response?.status === 400) {
					signUpForm.setError('email', {
						message: translations.validations('email_exists'),
					});
				} else {
					toast.error(translations.requests('request_failed'));
				}
			});
	});

	return {
		form: signUpForm,
		state: {
			isSubmitting: signUpForm.formState.isSubmitting,
			passwordType,
			confirmType,
		},
		translations,
		functions: { onSubmit, changePasswordType, changeConfirmType },
	};
};
