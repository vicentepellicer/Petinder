'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

export const AuthLinks = () => {
	const buttonsTranslation = useTranslations('buttons');
	return (
		<>
			<Link
				className={cn(buttonVariants({ variant: 'outline' }))}
				href='/login'>
				{buttonsTranslation('login')}
			</Link>
			<Link
				href='/sign-up'
				className={cn(
					buttonVariants({ variant: 'default' }),
					'hidden md:inline-flex',
				)}>
				{buttonsTranslation('sign_up')}
			</Link>
		</>
	);
};
