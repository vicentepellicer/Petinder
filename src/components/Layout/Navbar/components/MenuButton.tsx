'use client';

import Hamburger from 'hamburger-react';

import { useSideMenuStore } from '@/store';

export const MenuButton = () => {
	const { isOpen, toggle } = useSideMenuStore((state) => state);

	return (
		<div className='hover:text-primary-main text-gray-dark transition-colors [&>.hamburger-react]:!-m-1'>
			<Hamburger
				duration={0.3}
				label='Menu Button'
				size={20}
				toggle={toggle}
				toggled={isOpen}
			/>
		</div>
	);
};
