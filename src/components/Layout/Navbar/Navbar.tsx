import { Container } from '@ui';
import React from 'react';

import { getCurrentUserSSR } from '@/api/utils/getCurrentUserSSR';
import { LocaleSwitcher, LogoLink } from '@/components/common';

import { SideMenu } from '../SideMenu/SideMenu';

import { SectionsNavigation, AuthLinks, MenuButton } from './components';
import { MobileSectionsNavigation } from './components/MobileSectionsNavigation';

export const Navbar: React.FC = async () => {
	const { isLoggedIn } = await getCurrentUserSSR();

	return (
		<>
			<SideMenu />
			<header className='sticky left-0 top-0 z-50 w-full bg-white shadow'>
				<Container
					as='nav'
					className='relative z-[48] flex items-center justify-between gap-3 bg-white py-2.5'>
					<div className='flex items-center gap-1'>
						<MenuButton />
						<LogoLink minimizedLogo className='md:w-52' />
					</div>
					<SectionsNavigation />
					<div className='flex items-center gap-2'>
						{!isLoggedIn && <AuthLinks />}
						<div className='flex items-center gap-2'>
							<LocaleSwitcher />
						</div>
					</div>
				</Container>
				<MobileSectionsNavigation showButtons />
			</header>
		</>
	);
};
