'use client';

import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
	Input,
	Button,
} from '@/components/ui';

import { useForgotPasswordForm } from './hooks/useForgotPasswordForm';

export const FORGOT_PASSWORD_TEST_IDS = {
	INPUT_EMAIL: 'forgot-password-input-email',
	SUBMIT_BUTTON: 'forgot-password-submit-button',
};

export const ForgotPasswordForm = () => {
	const { form, functions, translations } = useForgotPasswordForm();

	return (
		<div className='space-y-5'>
			<div className='space-y-3 text-center'>
				<h1 className='text-3xl font-bold'>
					{translations.forgotPasswordPage('title')}
				</h1>
				<p>{translations.forgotPasswordPage('subtitle')}</p>
			</div>
			<Form {...form}>
				<form className='flex flex-col gap-5' onSubmit={functions.onSubmit}>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										data-testid={FORGOT_PASSWORD_TEST_IDS.INPUT_EMAIL}
										{...field}
										autoComplete='email'
										placeholder={translations.inputs('email_placeholder')}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						data-testid={FORGOT_PASSWORD_TEST_IDS.SUBMIT_BUTTON}
						type='submit'
						onSubmit={functions.onSubmit}>
						{translations.forgotPasswordPage('button')}
					</Button>
				</form>
			</Form>
		</div>
	);
};
