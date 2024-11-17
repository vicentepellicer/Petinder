import { Container, Typography } from '@ui';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { SeeAll } from '@/components/common';
import { cn } from '@/lib/utils';

import { SearchBar } from './components/SearchBar/SearchBar';
import { HeroSection } from './components/sections';
import { homePageSections } from './constants/sections';

interface HomePageProps {
	params: {
		locale: string;
	};
}

const HomePage = ({ params: { locale } }: HomePageProps) => {
	unstable_setRequestLocale(locale);
	const homePageSectionsTranslations = useTranslations('home.sections');

	return (
		<main className='flex h-full grow flex-col gap-5 pt-10'>
			<HeroSection className='mt-3 md:mx-auto md:mt-8 md:max-w-[56rem]' />
			<SearchBar />
			<Container>
				{homePageSections.map(({ title, component, id, className }, index) => (
					<section
						key={index}
						id={id}
						className={cn(
							'mb-8 scroll-mt-28 md:mb-14 md:scroll-mt-24 lg:scroll-mt-20',
							className,
						)}>
						<div className='flex flex-col gap-4'>
							<div className='flex items-center justify-between gap-2'>
								<div className='flex items-center gap-2 md:gap-4'>
									{title && (
										<Typography tag='h2' variant='section-title'>
											{homePageSectionsTranslations(title)}
										</Typography>
									)}
								</div>
								{/* TODO: Add correct href */}
								<SeeAll href='/' />
							</div>
							<div>{component}</div>
						</div>
					</section>
				))}
			</Container>
		</main>
	);
};

export default HomePage;
