import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import type { Pathnames } from 'next-intl/routing';

import { locales } from './i18n';

// Default
export const localePrefix = 'always';

export const pathnames = {
	'/': '/',
	'/login': '/login',
	'/sign-up': '/sign-up',
	'/calendar': '/calendar',
	'/vets': '/vets',
	'/pet-friendly-places': '/pet-friendly-places',
	'/lost': '/lost',
	'/messages': '/messages',
	'/academy': '/academy',
	'/adoptions': '/adoptions',
	'/videos': '/videos',
	'/explore': '/explore',
	'/blog': '/blog',
	'/lost-found': '/lost-found',
	'/favorites': '/favorites',
	'/about-us': '/about-us',
	'/user/profile': '/user/profile',
	'/reset-password': '/reset-password',
	'/forgot-password': '/forgot-password',
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

export type RoutePath = keyof typeof pathnames;
