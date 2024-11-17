'use client';

import { GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

import {
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/ui';
import { locales } from '@/i18n';

const COUNTRIES: Record<string, string> = {
	en: 'English',
	es: 'Español',
};

export const LocaleSwitcher = () => {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const nextLocale = (event.target as HTMLButtonElement).value;
		router.push(pathname.replace(locale, nextLocale));
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className='group' size='icon' variant='ghost'>
					<GlobeIcon className='group-hover:text-primary-main text-gray-dark transition-colors' />
				</Button>
			</PopoverTrigger>
			<PopoverContent asChild className='w-auto p-1'>
				<ul>
					{locales.map((locale) => (
						<li key={locale}>
							<Button value={locale} variant='secondary' onClick={onClick}>
								<Image
									alt={locale}
									height={20}
									src={`/img/country-flags/${locale}.png`}
									width={20}
								/>
								{COUNTRIES[locale]}
							</Button>
						</li>
					))}
				</ul>
			</PopoverContent>
		</Popover>
	);
};
