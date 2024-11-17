'use client';

import { hasCookie } from 'cookies-next';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { GoogleApiProvider } from '@/components/providers';
import { COOKIES_KEYS } from '@/lib/constants';
import { useUserStore } from '@/store';

interface ProviderProps
	extends React.ComponentProps<typeof NextIntlClientProvider> {
	children: React.ReactNode;
	locale: string;
}

export const Provider: React.FC<ProviderProps> = ({
	children,
	locale,
	...props
}) => {
	const { getUser } = useUserStore();

	React.useEffect(() => {
		const token = hasCookie(COOKIES_KEYS.TOKEN);
		if (token) getUser();
	}, []);

	return (
		<NextIntlClientProvider locale={locale} {...props}>
			<GoogleApiProvider>{children}</GoogleApiProvider>
		</NextIntlClientProvider>
	);
};
