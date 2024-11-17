'use client';

import {
	Button,
	Checkbox,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@ui';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';

import { onKeyDown } from '@/lib/utils';
import { Link as NavLink } from '@/navigation';

import { useSignUpForm } from './hooks/useSignUpForm';

export const SignUpForm = () => {
	const { form, functions, translations, state } = useSignUpForm();
	return (
		<div
			className='mx-auto grid h-full w-full gap-6'
			data-testid='sign-up-form'>
			<div className='grid gap-2 text-center'>
				<h1 className='text-3xl font-bold'>
					{translations.signUpPage('title')}
				</h1>
				<p className='text-muted-foreground text-balance'>
					{translations.signUpPage('subtitle')}
				</p>
			</div>
			<Form {...form}>
				<form className='flex flex-col gap-5' onSubmit={functions.onSubmit}>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='space-y-1'>
								<FormLabel>{translations.inputs('name')}</FormLabel>
								<FormControl>
									<Input
										autoComplete='name'
										data-testid='input-name'
										error={!!form.getFieldState('name').error}
										placeholder={translations.inputs('name_placeholder')}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='space-y-1'>
								<FormLabel>{translations.inputs('email')}</FormLabel>
								<FormControl>
									<Input
										autoComplete='email'
										data-testid='input-email'
										error={!!form.getFieldState('email').error}
										placeholder={translations.inputs('email_placeholder')}
										{...field}
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
										autoComplete='new-password'
										data-testid='input-password'
										error={!!form.getFieldState('password').error}
										placeholder='**********'
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
										{...field}
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
							<FormItem className='space-y-1'>
								<FormLabel>{translations.inputs('password_confirm')}</FormLabel>
								<FormControl>
									<Input
										autoComplete='new-password'
										data-testid='input-confirm-password'
										error={!!form.getFieldState('confirmPassword').error}
										placeholder='**********'
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
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						data-testid='submit-button'
						disabled={state.isSubmitting}
						loadingText={translations.buttons('loading')}
						type='submit'>
						{translations.buttons('sign_up')}
					</Button>
					<Checkbox
						{...form.register('terms')}
						customClasses='text-xs text-gray-dark'
						feedbackMessage={form.formState.errors?.terms?.message}>
						<div>
							{translations.signUpPage.rich('terms', {
								terms: (children) => (
									<Link
										className='font-bold hover:underline'
										href='/terms-conditions'>
										{children}
									</Link>
								),
								privacy: (children) => (
									<Link
										className='font-bold hover:underline'
										href='/privacy-policy'>
										{children}
									</Link>
								),
							})}
						</div>
					</Checkbox>
					<Checkbox
						customClasses='text-xs text-gray-dark'
						{...form.register('subscription')}>
						{translations.signUpPage('subscribe')}
					</Checkbox>
				</form>
			</Form>
			<div className='mt-4 text-center text-sm'>
				{translations.signUpPage('have_account')}{' '}
				<NavLink className='underline' href='/login'>
					{translations.buttons('login')}
				</NavLink>
			</div>
		</div>
	);
};
