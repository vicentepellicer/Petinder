/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale)) notFound();
	return {
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
