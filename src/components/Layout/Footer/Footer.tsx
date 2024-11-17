'use client';

import { Container } from '@ui';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LogoLink } from '@/components/common';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TicTokIcon,
	XTwitterIcon,
	YoutubeIcon,
} from '@/components/ui/icons';
import { Link as NavigationLink, usePathname } from '@/navigation';
import type { RoutePath } from '@/navigation';

type FooterLink = {
	label: keyof IntlMessages['footer']['group_links']['labels'];
	links: {
		label: keyof IntlMessages['footer']['group_links']['links'];
		href: RoutePath;
	}[];
};

type SocialLink = {
	label: string;
	href: string;
	icon: React.FC<React.SVGAttributes<SVGAElement>>;
};

const footerLinks: FooterLink[] = [
	{
		label: 'about_us',
		links: [
			{ label: 'we_are_petinder', href: '/' },
			{ label: 'contact_us', href: '/' },
			{ label: 'partnership', href: '/' },
			{ label: 'sustainability', href: '/' },
			{ label: 'the_team', href: '/' },
		],
	},
	{
		label: 'sitemap',
		links: [
			{ label: 'pet_shelters', href: '/' },
			{ label: 'lost_found', href: '/' },
			{ label: 'services', href: '/' },
			{ label: 'lodging', href: '/' },
			{ label: 'outdoor_indoor_places', href: '/' },
			{ label: 'health', href: '/' },
			{ label: 'community_blog', href: '/' },
		],
	},
];

const socialLinks: SocialLink[] = [
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/petinder.online',
		icon: FacebookIcon,
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/company/petinder-online/',
		icon: LinkedinIcon,
	},
	{
		label: 'X',
		href: 'https://twitter.com/petinderonline',
		icon: XTwitterIcon,
	},
	{
		label: 'TikTok',
		href: 'https://www.tiktok.com/@petinderonline',
		icon: TicTokIcon,
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/petinder.online/',
		icon: InstagramIcon,
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/@Petinder.online',
		icon: YoutubeIcon,
	},
];

const restrictedFooterPaths: RoutePath[] = ['/login', '/sign-up'];

export const Footer = () => {
	const footerTranslations = useTranslations('footer');
	const groupLinksLabelsTranslations = useTranslations(
		'footer.group_links.labels',
	);
	const linksLabelsTranslations = useTranslations('footer.group_links.links');
	const pathname = usePathname();
	const isRestrictedPath = restrictedFooterPaths.includes(pathname);
	const currentYear = new Date().getFullYear();

	if (isRestrictedPath) return null;

	return (
		<footer className='z-10 bg-white'>
			<div className='bg-contrast-main py-2 md:py-4'>
				<p className='text-center font-semibold text-primary-main md:text-2xl md:font-bold'>
					{footerTranslations('title')}
				</p>
			</div>
			<Container className='flex flex-col py-7 md:py-10'>
				<div className='flex flex-wrap justify-between gap-x-10 gap-y-5 md:flex-nowrap'>
					<div className='flex basis-[423px] flex-col justify-center gap-3 md:gap-4'>
						<LogoLink className='h-full max-h-[63px] w-full max-w-[140px] sm:max-w-none' />
						<ul className='flex items-center gap-3'>
							{socialLinks.map(({ icon: SocialLinkIcon, label, href }) => {
								return (
									<li key={label}>
										<Link
											aria-label={label}
											className='group text-gray-dark transition-colors'
											href={href}
											target='_blank'>
											<SocialLinkIcon className='size-6 transition-colors group-hover:text-primary-main' />
										</Link>
									</li>
								);
							})}
						</ul>
						<Link
							className='text-gray-dark transition-colors hover:text-secondary-main'
							href='mailto:hello@petinder.online'>
							hello@petinder.online
						</Link>
					</div>
					<nav className='flex grow basis-[573px] flex-row-reverse gap-5 md:grow-0 md:gap-10'>
						{footerLinks.map((footerLink) => (
							<div key={footerLink.label} className='grow text-gray-dark'>
								<h4 className='mb-2 text-lg font-semibold text-gray-dark md:text-2xl md:font-bold'>
									{groupLinksLabelsTranslations(footerLink.label)}
								</h4>
								<ul className='space-y-1'>
									{footerLink.links.map((link) => (
										<li key={link.label}>
											<NavigationLink
												className='transition-colors hover:text-secondary-main'
												href={link.href}>
												{linksLabelsTranslations(link.label)}
											</NavigationLink>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
			</Container>
			<div className='bg-primary-main py-2 text-center text-[13px] font-medium text-white'>
				<Container>{currentYear} – Petinder.online</Container>
			</div>
		</footer>
	);
};
