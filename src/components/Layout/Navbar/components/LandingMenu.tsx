'use client';

import { Button } from '@ui';
import { useTranslations } from 'next-intl';
import React from 'react';

export const LandingMenu = () => {
	const t = useTranslations('home.navbar');
	const navigateToElement = (section: string) => {
		const element = document.querySelector(section);
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest',
		});
	};

	return (
		<ul className='hidden gap-5 text-sm lg:flex'>
			<Button onClick={() => navigateToElement('#urgent')}>
				{t('urgent')}
			</Button>
			<Button onClick={() => navigateToElement('#lost')}>{t('lost')}</Button>
			<Button onClick={() => navigateToElement('#veterinarians')}>
				{t('veterinarians')}
			</Button>
			<Button onClick={() => navigateToElement('#shelters')}>
				{t('shelters')}
			</Button>
			<Button onClick={() => navigateToElement('#pet-friendly')}>
				{t('pet_friendly')}
			</Button>
			<Button onClick={() => navigateToElement('#partnerships')}>
				{t('partnerships')}
			</Button>
			<Button onClick={() => navigateToElement('#blog')}>{t('blog')}</Button>
			<Button onClick={() => navigateToElement('#curiosities')}>
				{t('curiosities')}
			</Button>
		</ul>
	);
};
