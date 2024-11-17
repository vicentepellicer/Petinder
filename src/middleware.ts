import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { getCurrentUserSSR } from './api/utils/getCurrentUserSSR';
import { locales } from './i18n';

const handleI18nRouting = createMiddleware({
	locales: [...locales],
	localePrefix: 'always',
	// Used when no locale matches
	defaultLocale: 'es',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/((?!.*\\..*).*)'],
};

const PROTECTED_ROUTES = {
	UNAUTENTIFICATED: ['/user/profile'],
	AUTHENTICATED: ['/login', '/sign-up'],
};

export async function middleware(req: NextRequest) {
	const response = handleI18nRouting(req);
	const { nextUrl, cookies } = req;
	// Redirect from "/playground" to "/" when in production
	if (
		process.env.NODE_ENV === 'production' &&
		req.nextUrl.pathname.includes('/playground')
	) {
		return NextResponse.redirect(nextUrl.origin);
	}

	const { isLoggedIn } = await getCurrentUserSSR();

	const locale = cookies.get('NEXT_LOCALE')?.value as string;
	const nextUrlWithoutLocale = nextUrl.pathname.replace(`/${locale}`, '');

	if (
		PROTECTED_ROUTES.UNAUTENTIFICATED.includes(nextUrlWithoutLocale) &&
		!isLoggedIn
	) {
		return NextResponse.redirect(`${nextUrl.origin}/login`);
	}
	if (
		PROTECTED_ROUTES.AUTHENTICATED.includes(nextUrlWithoutLocale) &&
		isLoggedIn
	) {
		return NextResponse.redirect(`${nextUrl.origin}/user/profile`);
	}

	return response;
}
