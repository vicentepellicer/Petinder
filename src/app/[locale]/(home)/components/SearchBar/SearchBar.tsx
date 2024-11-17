'use client';

import React from 'react';

import { CategorySelector, LocationInput } from '@/components/common';
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	Label,
	Typography,
} from '@/components/ui';
import { FilterIcon, SearchIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

import { useSearchBar } from './hooks/useSearchBar';

export const SearchBar = () => {
	const { form, functions, state, translations } = useSearchBar();
	const sectionRef = React.useRef<HTMLDivElement>(null);

	return (
		<section ref={sectionRef} className='w-full bg-white px-4 py-3'>
			<Form {...form}>
				<form
					className={cn(
						'relative mx-auto max-h-[77px] w-full max-w-[56rem] transition-all md:max-h-none',
						state.isFilterShown && 'max-h-[300px]',
					)}
					onSubmit={functions.onSubmit}>
					<Label className='inline-block' htmlFor='location-input'>
						<Typography
							className='mb-2 text-primary-main'
							tag='h2'
							variant='section-title'>
							{translations.search_bar('label')}
						</Typography>
					</Label>
					<div className='flex items-end gap-2 md:gap-4'>
						<div className='relative flex w-full gap-2'>
							<FormField
								control={form.control}
								name='location'
								render={({ field }) => (
									<FormItem className='w-full'>
										<FormControl>
											<LocationInput
												className='focus:border-primary-main'
												id='location-input'
												placeholder={translations.search_bar('placeholder')}
												{...field}
												appendIconClassName='right-1'
												appendIcon={
													<button
														aria-label='Search'
														className='flex size-10 items-center justify-center md:relative md:hidden'
														type='submit'>
														<SearchIcon className='size-5 text-secondary-main' />
													</button>
												}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className='hidden h-12 md:relative md:block md:basis-2/6'
								type='submit'>
								<span className='hidden md:block'>
									{translations.buttons('search')}
								</span>
								<span className='md:hidden'>
									<SearchIcon height={20} width={20} />
								</span>
							</Button>
						</div>
						<Button
							type='button'
							variant='outline'
							className={cn(
								'relative h-12 transition-colors md:hidden',
								state.isFilterShown && 'bg-primary-main text-white',
							)}
							onClick={() => functions.setIsFilterShown(!state.isFilterShown)}>
							<FilterIcon className='size-5' />
						</Button>
					</div>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem
								className={cn(
									'mt-3 transition-opacity md:visible md:opacity-100',
									state.isFilterShown
										? 'visible opacity-100'
										: 'invisible opacity-0',
								)}>
								<FormControl>
									<CategorySelector
										category={field.value}
										onCategoryChange={(value) => field.onChange(value)}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</section>
	);
};
