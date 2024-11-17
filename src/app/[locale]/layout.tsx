import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/index.css';
import { useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';

import { Footer, Navbar } from '@/components/Layout';
import { locales } from '@/i18n';

import { Provider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	title: 'Petinder',
	description:
		'Encuentra dónde adoptar una mascota cerca de ti, playas y hoteles para perros y mucho más. El buscador de protectoras de animales.',
};

export const viewport: Viewport = {
	maximumScale: 1,
	width: 'device-width',
	initialScale: 1,
};

const LocaleLayout = ({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) => {
	unstable_setRequestLocale(locale);
	const messages = useMessages();
	return (
		<html
			className={`${inter.className} flex min-h-screen min-w-[380px] flex-col scroll-smooth bg-white text-black antialiased`}
			lang={locale}>
			<body className='flex grow flex-col'>
				<Provider locale={locale} messages={messages} timeZone='Europe/Madrid'>
					<Navbar />
					<div className='grow'>{children}</div>
					<Footer />
				</Provider>
				<Toaster />
			</body>
		</html>
	);
};
export default LocaleLayout;
