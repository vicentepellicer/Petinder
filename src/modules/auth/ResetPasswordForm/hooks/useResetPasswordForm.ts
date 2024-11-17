import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import type { SignUpCredentials } from '../../SignUpForm/utils';
import { generateSignUpCredentials } from '../../SignUpForm/utils';

export const useResetPasswordForm = () => {
	const [passwordType, setPasswordType] = React.useState<'password' | 'text'>(
		'password',
	);
	const [confirmType, setConfirmType] = React.useState<'password' | 'text'>(
		'password',
	);

	const translations = {
		resetPasswordPage: useTranslations('reset_password'),
		validations: useTranslations('validations'),
		inputs: useTranslations('inputs'),
		notifications: useTranslations('reset_password.notifications'),
	};

	const changePasswordType = () => {
		setPasswordType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const changeConfirmType = () => {
		setConfirmType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const resetPasswordForm = useForm<
		Pick<SignUpCredentials, 'password' | 'confirmPassword'>
	>({
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		resolver: zodResolver(
			generateSignUpCredentials(translations.validations)
				.pick({
					password: true,
					confirmPassword: true,
				})
				.refine((data) => data.password === data.confirmPassword, {
					message: translations.validations('passwords_match'),
					path: ['confirmPassword'],
				}),
		),
	});

	const onSubmit = resetPasswordForm.handleSubmit((data) => {
		if (!data) return;
		// TODO: integrate with API
		toast.success(translations.notifications('success'));
		// TODO: add redirect to login page
	});

	return {
		form: resetPasswordForm,
		translations,
		state: {
			isSubmitting: resetPasswordForm.formState.isSubmitting,
			passwordType,
			confirmType,
		},
		functions: { onSubmit, changePasswordType, changeConfirmType },
	};
};
