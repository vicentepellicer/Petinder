'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { homePageSections } from '@/app/[locale]/(home)/constants/sections';
import { cn } from '@/lib/utils';
import { usePathname, type RoutePath } from '@/navigation';

interface SectionsNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const permittedPaths: RoutePath[] = ['/'];

export const SectionsNavigation = React.forwardRef<
	HTMLUListElement,
	SectionsNavigationProps
>(({ className, children }, ref) => {
	const homePageTranslations = useTranslations('home.sections');

	if (!permittedPaths.includes(usePathname())) return null;

	return (
		<ul
			ref={ref}
			className={cn(
				'hide-scrollbar text-gray-dark relative hidden w-full flex-wrap items-center justify-start gap-x-4 overflow-scroll whitespace-nowrap leading-5 lg:flex',
				className,
			)}>
			{homePageSections.map(({ title, id }) => (
				<li key={id}>
					<Link
						className='hover:text-secondary-main transition-colors'
						href={`#${id}`}>
						{homePageTranslations(title)}
					</Link>
				</li>
			))}
			{children}
		</ul>
	);
});
