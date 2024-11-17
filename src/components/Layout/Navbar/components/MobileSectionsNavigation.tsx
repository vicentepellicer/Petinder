'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { homePageSections } from '@/app/[locale]/(home)/constants/sections';
import { cn } from '@/lib/utils';
import { usePathname, type RoutePath } from '@/navigation';
import { useSideMenuStore } from '@/store';

interface MobileSectionsNavigationProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	showButtons?: boolean;
}

const permittedPaths: RoutePath[] = ['/'];

export const MobileSectionsNavigation = React.forwardRef<
	HTMLDivElement,
	MobileSectionsNavigationProps
>(({ className, children, showButtons }, ref) => {
	const homePageSectionsTranslations = useTranslations('home.sections');

	const { isOpen } = useSideMenuStore();

	const listRef = React.useRef<HTMLUListElement>(null);

	const [listScrollLeft, setListScrollLeft] = React.useState(0);
	const [listWidth, setListWidth] = React.useState(0);

	React.useLayoutEffect(() => {
		if (!listRef.current) return;
		setListScrollLeft(listRef.current.scrollLeft);
		setListWidth(listRef.current.scrollWidth - listRef.current.clientWidth);
	}, []);

	React.useEffect(() => {
		const handleScrollUpdate = () => {
			setListScrollLeft(Math.round(listRef.current?.scrollLeft || 0));
		};

		const listContainer = listRef.current;

		listContainer?.addEventListener('scroll', handleScrollUpdate);

		return () => {
			listContainer?.removeEventListener('scroll', handleScrollUpdate);
		};
	}, []);

	const handleScroll = (direction: 'left' | 'right', pixels: number) => {
		if (direction === 'right') {
			listRef.current?.scrollTo({
				left: listScrollLeft + pixels,
				behavior: 'smooth',
			});
		} else {
			listRef.current?.scrollTo({
				left: listScrollLeft - pixels,
				behavior: 'smooth',
			});
		}
	};

	if (!permittedPaths.includes(usePathname())) return null;

	return (
		<div
			ref={ref}
			className={cn(
				'text-primary-main bg-contrast-main absolute z-10 flex w-full items-center justify-start leading-5 transition-all lg:hidden',
				className,
				isOpen && '-translate-y-full',
			)}>
			<ul
				ref={listRef}
				className={cn(
					'hide-scrollbar flex w-full flex-nowrap gap-x-4 overflow-scroll whitespace-nowrap py-2',
					showButtons ? 'px-8' : 'px-4',
				)}>
				{homePageSections.map(({ title, id }) => (
					<li key={id}>
						<Link
							className='hover:text-secondary-main transition-colors'
							href={`#${id}`}>
							{homePageSectionsTranslations(title)}
						</Link>
					</li>
				))}
				{children}
			</ul>
			{showButtons && (
				<>
					<button
						aria-label='scroll left navigation items'
						className='from-contrast-main group absolute left-0 z-20 flex w-8 cursor-pointer items-center justify-center bg-gradient-to-r from-70% disabled:cursor-default'
						disabled={listScrollLeft <= 0}
						onClick={() => handleScroll('left', 100)}>
						<ChevronLeftIcon className='group-disabled:opacity-50' />
					</button>
					<button
						aria-label='scroll right navigation items'
						className='from-contrast-main group absolute right-0 z-20 flex w-8 cursor-pointer items-center justify-center bg-gradient-to-l from-80% disabled:cursor-default'
						disabled={listScrollLeft >= listWidth && !!listScrollLeft}
						onClick={() => handleScroll('right', 100)}>
						<ChevronRightIcon className='group-disabled:opacity-50' />
					</button>
				</>
			)}
		</div>
	);
});
