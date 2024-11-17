import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import type { LoginCredentials } from '../../LoginForm/utils';
import { generateLoginCredentials } from '../../LoginForm/utils';

export const useForgotPasswordForm = () => {
	const translations = {
		forgotPasswordPage: useTranslations('forgot_password'),
		validations: useTranslations('validations'),
		inputs: useTranslations('inputs'),
		notifications: useTranslations('forgot_password.notifications'),
	};

	const forgotPasswordForm = useForm<Pick<LoginCredentials, 'email'>>({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(
			generateLoginCredentials(translations.validations).pick({
				email: true,
			}),
		),
	});

	const onSubmit = forgotPasswordForm.handleSubmit((data) => {
		if (!data) return;
		// TODO: integrate with API

		if (data.email === 'test@gmail.com') {
			forgotPasswordForm.setError('email', {
				message: translations.validations('email_not_found'),
			});
		}

		if (data.email !== 'test@gmail.com') {
			toast.success(translations.notifications('success'));
		}
		// TODO: Add redirect
	});

	return {
		form: forgotPasswordForm,
		translations,
		state: { isSubmitting: forgotPasswordForm.formState.isSubmitting },
		functions: { onSubmit },
	};
};
