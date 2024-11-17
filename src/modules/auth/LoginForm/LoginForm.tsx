'use client';

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@ui';
import { Eye } from 'lucide-react';
import React from 'react';

import { onKeyDown } from '@/lib/utils';
import { Link as NavLink } from '@/navigation';

import { useLoginForm } from './hooks/useLoginForm';

export const LoginForm = () => {
	const { form, functions, state, translations } = useLoginForm();
	return (
		<div className='mx-auto grid w-full gap-6'>
			<div className='grid gap-2 text-center'>
				<h1 className='text-3xl font-bold'>
					{translations.loginPage('title')}
				</h1>
				<p className='text-muted-foreground text-balance'>
					{translations.loginPage('subtitle')}
				</p>
			</div>
			<Form {...form}>
				<form className='flex flex-col gap-5' onSubmit={functions.onSubmit}>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='space-y-1'>
								<FormLabel>{translations.inputs('email')}</FormLabel>
								<FormControl>
									<Input
										{...field}
										autoComplete='email'
										data-testid='input-email'
										error={!!form.getFieldState('email').error}
										placeholder={translations.inputs('email_placeholder')}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem className='space-y-1'>
								<FormLabel>{translations.inputs('password')}</FormLabel>
								<FormControl>
									<Input
										{...field}
										autoComplete='current-password'
										data-testid='input-password'
										error={!!form.getFieldState('password').error}
										placeholder='**********'
										type={state.passwordType}
										appendIcon={
											<Eye
												className='cursor-pointer'
												tabIndex={0}
												onClick={functions.changePasswordType}
												onKeyDown={(event) => {
													onKeyDown(
														event,
														'Enter',
														functions.changePasswordType,
													);
												}}
											/>
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						data-testid='submit-button'
						isLoading={state.isSubmitting}
						loadingText={translations.buttons('loading')}
						type='submit'>
						{translations.buttons('login')}
					</Button>
				</form>
			</Form>
			<div className='mt-4 space-y-2 text-center text-sm'>
				<div>
					<NavLink className='underline' href='/forgot-password'>
						{translations.loginPage('forgot_password')}
					</NavLink>
				</div>
				<div>
					{translations.loginPage('no_account')}{' '}
					<NavLink className='underline' href='/sign-up'>
						{translations.buttons('sign_up')}
					</NavLink>
				</div>
			</div>
		</div>
	);
};
