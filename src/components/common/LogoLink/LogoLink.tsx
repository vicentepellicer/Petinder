import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { RoutePath } from '@/navigation';
import { Link } from '@/navigation';

interface LogoLinkProps {
	minimizedLogo?: boolean;
	href?: RoutePath;
	className?: string;
}

export const LogoLink = ({
	minimizedLogo = false,
	href = '/',
	className,
}: LogoLinkProps) => (
	<Link className={cn('h-10 w-full', className)} href={href}>
		<Image
			alt='logo'
			height={200}
			src='/img/svg/logo-with-name.svg'
			width={200}
			className={cn(
				'h-full w-full object-contain',
				minimizedLogo && 'hidden md:block',
			)}
		/>
		{minimizedLogo && (
			<div className='block size-10 md:hidden'>
				<Image
					alt='logo'
					className='h-full w-full object-contain'
					height={200}
					src='/img/svg/logo.svg'
					width={200}
				/>
			</div>
		)}
	</Link>
);
