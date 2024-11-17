'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';

import {
	Button,
	Calendar,
	Chip,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Loader,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	inputVariants,
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { useUserProfile } from './hooks/useUserProfileForm';

export const UserProfileForm = () => {
	const { form, translations, countries, genders, functions, state } =
		useUserProfile();

	if (form.formState.isLoading) {
		return <Loader />;
	}
	return (
		<>
			<h1 className='m-4 mb-8 text-center text-xl md:text-3xl'>
				{translations.userProfilePage('title')}
			</h1>
			<Form {...form}>
				<form
					className='flex flex-col gap-8 md:gap-12'
					onSubmit={functions.onSubmit}>
					<section className='space-y-5'>
						<h2 className='uppercase'>
							{translations.userProfilePage('personal_info_section_title')}
						</h2>
						<div className='grid gap-4 md:grid-cols-2'>
							<FormField
								control={form.control}
								name='firstName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.inputs('first_name')}</FormLabel>
										<FormControl>
											<Input
												className='text-primary-main font-bold placeholder:font-normal'
												placeholder={translations.inputs(
													'first_name_placeholder',
												)}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lastName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.inputs('last_name')}</FormLabel>
										<FormControl>
											<Input
												className='text-primary-main font-bold placeholder:font-normal'
												placeholder={translations.inputs(
													'last_name_placeholder',
												)}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='gender'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.selectors('gender')}</FormLabel>
										<Select
											defaultValue={field.value}
											onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger
													className={cn(
														inputVariants({ variant: 'default' }),
														'text-primary-main font-bold',
													)}>
													<SelectValue
														placeholder={translations.selectors(
															'gender_options.default',
														)}
													/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													{genders.map((gender) => (
														<SelectItem key={gender.value} value={gender.value}>
															{gender.label}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='dob'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.inputs('birth_date')}</FormLabel>
										<Popover>
											<FormControl>
												<PopoverTrigger
													className={cn(inputVariants({ variant: 'default' }))}>
													<span className='text-primary-main font-bold'>
														{field.value
															? format(field.value, 'dd/MM/yyyy')
															: translations.inputs('date_placeholder')}
													</span>
													<CalendarIcon className='size-5' />
												</PopoverTrigger>
											</FormControl>
											<PopoverContent align='start'>
												<Calendar
													fixedWeeks
													pagedNavigation
													showOutsideDays
													captionLayout='dropdown'
													defaultMonth={field.value}
													fromYear={new Date().getFullYear() - 100}
													mode='single'
													selected={field.value}
													toYear={new Date().getFullYear() - 18}
													onSelect={(date) => {
														field.onChange(date);
													}}
												/>
											</PopoverContent>
											<FormMessage />
										</Popover>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.inputs('phone')}</FormLabel>
										<FormControl>
											<Input
												className='text-primary-main font-bold placeholder:font-normal'
												placeholder={translations.inputs('phone_placeholder')}
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
									<FormItem>
										<FormLabel>{translations.inputs('email')}</FormLabel>
										<FormControl>
											<Input
												disabled
												className='text-primary-main font-bold placeholder:font-normal'
												placeholder={translations.inputs('email_placeholder')}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</section>
					<section className='space-y-5'>
						<h2 className='uppercase'>
							{translations.userProfilePage('address_section_title')}
						</h2>
						<div className='grid gap-4 md:grid-cols-2'>
							<FormField
								control={form.control}
								name='country'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.selectors('country')}</FormLabel>
										<Select
											defaultValue={field.value}
											onValueChange={(value) => {
												functions.onCountryChange(value);
												field.onChange(value);
											}}>
											<FormControl>
												<SelectTrigger
													className={cn(
														inputVariants({ variant: 'default' }),
														'text-primary-main font-bold',
													)}>
													<SelectValue
														placeholder={translations.selectors(
															'country_options.default',
														)}
													/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													{countries.map((country) => (
														<SelectItem
															key={country.value}
															value={country.value}>
															{country.label}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='region'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.selectors('region')}</FormLabel>
										<Select
											defaultValue={field.value}
											disabled={!state.states.length}
											onValueChange={(value) => {
												functions.onRegionChange(
													form.getValues('country'),
													value.slice(0, 2),
												);
												field.onChange(value);
											}}>
											<FormControl>
												<SelectTrigger
													className={cn(
														inputVariants({ variant: 'default' }),
														'text-primary-main font-bold',
													)}>
													<SelectValue
														placeholder={translations.selectors(
															'region_options.default',
														)}
													/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													{state.states.map((state) => (
														<SelectItem key={state.id} value={state.iso2}>
															{state.name}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='location'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{translations.selectors('location')}</FormLabel>
										<Select
											defaultValue={field.value}
											disabled={!state.cities.length}
											onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger
													className={cn(
														inputVariants({ variant: 'default' }),
														'text-primary-main font-bold',
													)}>
													<SelectValue
														placeholder={translations.selectors(
															'location_options.default',
														)}
													/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													{state.cities.map((city) => (
														<SelectItem key={city.id} value={city.name}>
															{city.name}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Input
								className='text-primary-main font-bold placeholder:font-normal'
								label={translations.inputs('address')}
								placeholder={translations.inputs('address_placeholder')}
								type='text'
								{...form.register('address')}
								feedbackMessage={form.formState.errors?.address?.message}
							/>
							<Input
								className='text-primary-main font-bold placeholder:font-normal'
								feedbackMessage={form.formState.errors?.zip_code?.message}
								label={translations.inputs('zip_code')}
								placeholder={translations.inputs('zip_code_placeholder')}
								type='text'
								{...form.register('zip_code')}
							/>
						</div>
					</section>
					<section className='space-y-5'>
						<h2 className='uppercase'>
							{translations.userProfilePage('interests_section.title')}
						</h2>
						<p className='text-gray-dark text-sm'>
							{translations.userProfilePage('interests_section.description')}
						</p>
						<div className='flex w-full flex-wrap gap-2'>
							{state.interests.map((interest, index) => (
								<Chip
									key={index}
									checked={state.userInterests.includes(interest)}
									onClick={() => functions.onInterestClick(interest)}>
									{interest}
								</Chip>
							))}
						</div>
					</section>
					<div className='flex md:justify-end'>
						<Button
							className='w-full md:w-auto'
							disabled={state.isSubmitting}
							type='submit'>
							{translations.buttons('save')}
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
};
