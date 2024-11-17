'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Avatar,
} from '@ui';
import { deleteCookie } from 'cookies-next';
import { motion } from 'framer-motion';
import { LogInIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { COOKIES_KEYS } from '@/lib/constants';
import { useHeaderHeight, useOverflowHidden } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useSideMenuStore, useUserStore } from '@/store';

import {
	SIDE_MENU_TEST_IDS,
	bottomMenuItems,
	mainMenuItems,
	overlayVariants,
	sideMenuVariants,
} from './SideMenu.const';
import { NavItem, navItemClassNames } from './components';

const Icon = (
	<svg
		className='text-gray-dark transition-colors group-hover:text-primary-main'
		height='12'
		width='12'
		xmlns='http://www.w3.org/2000/svg'>
		<rect
			className='origin-center transform transition duration-300 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary-main'
			fill='currentColor'
			height='2'
			rx='1'
			width='12'
			y='5'
		/>
		<rect
			className='origin-center rotate-90 transform transition duration-300 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary-main'
			fill='currentColor'
			height='2'
			rx='1'
			width='12'
			y='5'
		/>
	</svg>
);

export const SideMenu = () => {
	const { isOpen, toggle } = useSideMenuStore((state) => state);
	const { user } = useUserStore((state) => state);
	const translation = useTranslations('sidemenu');
	const buttonsTranslation = useTranslations('buttons');
	const { headerHeight } = useHeaderHeight();

	useOverflowHidden({ isOverflowHidden: isOpen, coloredOverlay: isOpen });

	const mainMenuItemsToShow = React.useMemo(
		() =>
			user ? mainMenuItems : mainMenuItems.filter((item) => !item.requiresAuth),
		[user],
	);

	const bottomMenuItemsToShow = React.useMemo(
		() =>
			user
				? bottomMenuItems
				: bottomMenuItems.filter((item) => !item.requiresAuth),
		[user],
	);

	const logOut = () => {
		deleteCookie(COOKIES_KEYS.TOKEN);
		window.location.reload();
	};

	return (
		<>
			<motion.aside
				animate={isOpen ? 'visible' : 'hidden'}
				className='fixed left-0 top-0 z-[48] h-screen w-screen'
				data-testid={SIDE_MENU_TEST_IDS.overlay}
				initial={isOpen ? 'visible' : 'hidden'}
				transition={{ type: 'spring', stiffness: 100 }}
				variants={overlayVariants}
				onClick={toggle}
			/>
			<motion.nav
				animate={isOpen ? 'visible' : 'hidden'}
				className='fixed left-0 z-[49] h-full gap-3 bg-white shadow backdrop-blur-xl'
				data-testid={SIDE_MENU_TEST_IDS.sidemenu}
				exit={{ x: '100%' }}
				initial={isOpen ? 'visible' : 'hidden'}
				style={{ paddingTop: `${headerHeight}px` }}
				variants={sideMenuVariants}>
				<div className='hide-scrollbar flex h-full w-screen min-w-[320px] flex-grow flex-col overflow-y-scroll md:w-full'>
					{user && (
						<div className='p-3'>
							<div className='flex gap-5'>
								<Avatar
									fallbackText={user?.name.slice(0, 2).toLocaleUpperCase()}
									img={user?.avatar}
									size='lg'
								/>
								<div className='flex flex-col gap-1 font-bold text-gray-dark'>
									<strong>{user?.name}</strong>
									<small>User description</small>
								</div>
							</div>
						</div>
					)}
					<Accordion asChild collapsible type='single'>
						<ul className='custom-scrollbar flex grow flex-col gap-1 overflow-y-auto'>
							{mainMenuItemsToShow.map(
								({ id, label, icon, subMenuItems, to }) => {
									const requiredAuthSubItems = user
										? subMenuItems
										: subMenuItems?.filter((item) => !item.requiresAuth);
									return (
										<AccordionItem
											key={`${label}-${id}`}
											asChild
											className='border-none'
											value={`${label}-${id}`}>
											<li className='flex flex-col gap-1'>
												{requiredAuthSubItems ? (
													<>
														<AccordionTrigger
															customIcon={Icon}
															className={cn(
																'hover:no-underline data-[state=open]:bg-contrast-main',
																navItemClassNames,
															)}>
															<NavItem
																className='border-none p-0 group-data-[state=open]:text-primary-main'
																icon={icon}
																label={translation(label)}
															/>
														</AccordionTrigger>
														<AccordionContent
															asChild
															className='flex flex-col gap-1 pb-0'>
															{requiredAuthSubItems.map(
																({ id, label, icon, to }) => (
																	<NavItem
																		key={id}
																		className='pl-10 hover:bg-gray-light'
																		icon={icon}
																		label={translation(label)}
																		to={to}
																		onClick={toggle}
																	/>
																),
															)}
														</AccordionContent>
													</>
												) : (
													<NavItem
														icon={icon}
														label={translation(label)}
														to={to}
														onClick={toggle}
													/>
												)}
											</li>
										</AccordionItem>
									);
								},
							)}
						</ul>
					</Accordion>
					<div className='flex flex-col bg-gray-light py-2'>
						{bottomMenuItemsToShow.map(({ id, icon: ItemIcon, label, to }) => {
							return to ? (
								<Link
									key={id}
									className='group flex items-center gap-2 px-3 py-2.5'
									data-testid={SIDE_MENU_TEST_IDS.bottomItem}
									href={to}
									onClick={toggle}>
									<ItemIcon className='size-5 text-gray-dark transition-colors group-hover:text-primary-main' />
									<small className='font-medium text-gray-dark transition-colors group-hover:text-primary-main'>
										{translation(label)}
									</small>
								</Link>
							) : (
								<button
									key={id}
									className='group flex items-center gap-2 px-3 py-2.5'
									data-testid={SIDE_MENU_TEST_IDS.bottomItem}
									onClick={logOut}>
									<ItemIcon className='size-5 text-gray-dark transition-colors group-hover:text-primary-main' />
									<small className='font-medium text-gray-dark transition-colors group-hover:text-primary-main'>
										{translation(label)}
									</small>
								</button>
							);
						})}
						{!user && (
							<Link
								className='group flex items-center gap-2 px-3 py-2.5'
								href='/login'
								onClick={toggle}>
								<LogInIcon className='size-5 text-gray-dark transition-colors group-hover:text-primary-main' />
								<small className='font-medium text-gray-dark transition-colors group-hover:text-primary-main'>
									{buttonsTranslation('login')}
								</small>
							</Link>
						)}
					</div>
				</div>
			</motion.nav>
		</>
	);
};
