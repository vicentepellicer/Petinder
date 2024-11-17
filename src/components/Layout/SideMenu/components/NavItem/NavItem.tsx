import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';
import type { RoutePath } from '@/navigation';

export interface MenuItemProps {
	icon: React.FC<React.SVGAttributes<SVGElement>>;
	label: string;
	to?: RoutePath;
	className?: string;
	onClick?: () => void;
}
const navItemClassNames =
	'group flex cursor-pointer text-base text-gray-dark items-center gap-2 px-3 py-4 hover:bg-contrast-main';

const NavItem = ({
	icon: MenuItemIcon,
	label,
	to,
	className,
	onClick,
}: MenuItemProps) => {
	const Tag = to ? Link : 'div';

	return (
		<Tag
			className={cn(navItemClassNames, className)}
			href={to ?? ''}
			onClick={onClick}>
			<MenuItemIcon className='size-5 transition-colors group-hover:text-primary-main' />
			<small className='text font-semibold transition-colors group-hover:text-primary-main'>
				{label}
			</small>
		</Tag>
	);
};

export { NavItem, navItemClassNames };
