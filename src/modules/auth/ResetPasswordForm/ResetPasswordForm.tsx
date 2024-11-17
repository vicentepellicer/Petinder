'use client';

import { EyeIcon } from 'lucide-react';

import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
	Input,
	Button,
	FormLabel,
} from '@/components/ui';
import { onKeyDown } from '@/lib/utils';

import { useResetPasswordForm } from './hooks/useResetPasswordForm';

export const RESET_PASSWORD_TEST_IDS = {
	INPUT_PASSWORD: 'reset-password-input-password',
	INPUT_CONFIRM_PASSWORD: 'reset-password-input-confirm-password',
	SUBMIT_BUTTON: 'reset-password-submit-button',
};

export const ResetPasswordForm = () => {
	const { form, functions, translations, state } = useResetPasswordForm();

	return (
		<div className='space-y-5'>
			<div className='space-y-3 text-center'>
				<h1 className='text-3xl font-bold'>
					{translations.resetPasswordPage('title')}
				</h1>
			</div>
			<Form {...form}>
				<form className='flex flex-col gap-5' onSubmit={functions.onSubmit}>
					<input hidden autoComplete='email' name='email' type='text' />
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{translations.inputs('password')}</FormLabel>
								<FormControl>
									<Input
										data-testid={RESET_PASSWORD_TEST_IDS.INPUT_PASSWORD}
										placeholder='**********'
										{...field}
										autoComplete='new-password'
										type={state.passwordType}
										appendIcon={
											<EyeIcon
												className='cursor-pointer'
												tabIndex={0}
												onClick={functions.changePasswordType}
												onKeyDown={(event) =>
													onKeyDown(
														event,
														'Enter',
														functions.changePasswordType,
													)
												}
											/>
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{translations.inputs('password_confirm')}</FormLabel>
								<FormControl>
									<Input
										data-testid={RESET_PASSWORD_TEST_IDS.INPUT_CONFIRM_PASSWORD}
										placeholder='**********'
										{...field}
										hidden
										autoComplete='new-password'
										type={state.confirmType}
										appendIcon={
											<EyeIcon
												className='cursor-pointer'
												tabIndex={0}
												onClick={functions.changeConfirmType}
												onKeyDown={(event) =>
													onKeyDown(event, 'Enter', functions.changeConfirmType)
												}
											/>
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						data-testid={RESET_PASSWORD_TEST_IDS.SUBMIT_BUTTON}
						type='submit'
						onSubmit={functions.onSubmit}>
						{translations.resetPasswordPage('button')}
					</Button>
				</form>
			</Form>
		</div>
	);
};
