import { buttonVariants, Typography } from '@ui';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Link } from '@/navigation';

import HeroDogMobile from '~/public/img/svg/hero-dog.svg';
import HeroImage from '~/public/img/svg/hero-image.svg';

type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

export const HeroSection = ({ className }: HeroSectionProps) => {
	const heroTranslations = useTranslations('home.hero_section');
	return (
		<section
			className={cn(
				'sm:gap-none relative flex h-full w-full flex-row-reverse gap-x-1 gap-y-[1rem] pt-5 before:absolute before:inset-0 before:bg-hero-bg-mobile before:bg-cover before:bg-no-repeat before:opacity-50 before:content-[""] sm:flex-row sm:bg-none sm:pt-0 before:sm:hidden',
				className,
			)}>
			<Image
				priority
				alt='Hero image'
				className='hidden self-end object-cover sm:block'
				height={300}
				src={HeroImage as string}
				width={300}
			/>
			<div className='relative z-10 flex w-[12.5rem] sm:hidden'>
				<Image
					priority
					alt='Hero image'
					className='self-end object-cover'
					height={300}
					src={HeroDogMobile as string}
					width={300}
				/>
			</div>
			<div className='relative z-10 flex h-full w-full flex-col items-center justify-center gap-[1.375rem] self-center pl-4 sm:px-4'>
				<div className='sm:space-y-[1.875rem]'>
					<Typography
						className='min-w-max capitalize text-secondary-main'
						tag='h1'
						variant='header'>
						{heroTranslations('title')}
					</Typography>
					<Typography
						className='hidden text-justify sm:block'
						tag='p'
						variant='text'>
						{heroTranslations('subtitle')}
					</Typography>
					<Typography className='block sm:hidden' tag='p' variant='text'>
						{heroTranslations('subtitle_short')}
					</Typography>
				</div>
				<Link
					href='/about-us'
					className={cn(
						buttonVariants({ variant: 'outline' }),
						'hidden sm:block sm:self-end',
					)}>
					{heroTranslations('buttons.learn_more')}
				</Link>
			</div>
		</section>
	);
};
