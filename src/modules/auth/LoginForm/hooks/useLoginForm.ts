import { zodResolver } from '@hookform/resolvers/zod';
import type { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { COOKIES_KEYS } from '@/lib/constants';
import { useUserStore } from '@/store';

import { signIn } from '../api/requests';
import type { LoginCredentials } from '../utils';
import { generateLoginCredentials } from '../utils';

export const useLoginForm = () => {
	const [passwordType, setPasswordType] = React.useState<'text' | 'password'>(
		'password',
	);

	const router = useRouter();

	const translations = {
		loginPage: useTranslations('login'),
		buttons: useTranslations('buttons'),
		validations: useTranslations('validations'),
		inputs: useTranslations('inputs'),
		requests: useTranslations('requests'),
	};

	const loginForm = useForm<LoginCredentials>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(generateLoginCredentials(translations.validations)),
	});

	const changePasswordType = () => {
		setPasswordType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const onSubmit = loginForm.handleSubmit(async (data: LoginCredentials) => {
		if (!data) return;
		await signIn({
			params: {
				email: data.email,
				password: data.password,
			},
		})
			.then((response) => {
				if (response.data) {
					setCookie(COOKIES_KEYS.TOKEN, response.data.token, {
						maxAge: 60 * 60 * 24 * 7, // 7 days
						secure: true,
					});
					useUserStore.setState({ user: response.data.user });
					toast.success(
						translations.loginPage('notifications.welcome', {
							name: response.data.user.name,
						}),
					);
					router.push('/');
					router.refresh();
				}
			})
			.catch((error: AxiosError) => {
				if (error.response?.status === 400) {
					loginForm.setError('email', {
						message: translations.loginPage('notifications.wrong_credentials'),
					});
					loginForm.setError('password', {
						message: translations.loginPage('notifications.wrong_credentials'),
					});
				} else {
					toast.error(translations.requests('request_failed'));
				}
			});
	});

	return {
		form: loginForm,
		translations,
		state: { isSubmitting: loginForm.formState.isSubmitting, passwordType },
		functions: { onSubmit, changePasswordType },
	};
};
