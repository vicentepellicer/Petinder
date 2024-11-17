import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';

interface SeeAllProps
	extends React.HtmlHTMLAttributes<HTMLAnchorElement>,
		LinkProps {}

export const SeeAll = ({ href, className, ...props }: SeeAllProps) => {
	const buttonsTranslations = useTranslations('buttons');

	return (
		<Link
			aria-label={buttonsTranslations('see_all')}
			href={href}
			className={cn(
				'hover:text-primary-main text-gray-dark whitespace-nowrap transition-colors hover:underline',
				className,
			)}
			{...props}>
			{buttonsTranslations('see_all')}
		</Link>
	);
};
