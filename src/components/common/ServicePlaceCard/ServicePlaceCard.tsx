import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { buttonVariants, Chip, Typography } from '@/components/ui';
import { DistanceIcon, FamilyHomeIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface ServicePlaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
	data: Shelter;
}

// TODO: Add unit testing
// TODO: Add translations

export const ServicePlaceCard = React.forwardRef<
	HTMLDivElement,
	ServicePlaceCardProps
>(({ data, className, ...props }, ref) => {
	const cardsTranslations = useTranslations('cards');
	let icon;

	switch (data.type) {
		case 'shelter':
			icon = <FamilyHomeIcon />;
			break;
		default:
			break;
	}

	return (
		<article
			ref={ref}
			className={cn(
				'flex h-full w-full flex-col overflow-hidden rounded-3 border-[1px] border-gray-medium bg-white md:flex-row',
				className,
			)}
			{...props}>
			<div className='relative h-[200px] w-full overflow-hidden md:h-auto md:basis-2/5'>
				<Link className='group' href={`/${data.type}/${data.id}`}>
					<Image
						alt={data.name}
						className='absolute h-full w-full object-contain transition-transform group-hover:scale-105'
						height={500}
						src={data.logo}
						width={500}
					/>
				</Link>
			</div>
			<div className='flex grow basis-3/5 flex-col items-start justify-between gap-2 p-4'>
				<Chip className='capitalize' startContent={icon}>
					{data.type}
				</Chip>
				<div className='flex h-full flex-col space-y-2'>
					<Link href={`/${data.type}/${data.id}`}>
						<Typography
							className='text-primary-main hover:opacity-80'
							tag='h3'
							variant='titles'>
							{data.name}
						</Typography>
					</Link>
					<div>
						<div className='flex flex-wrap items-center gap-x-2'>
							<Typography className='font-bold'>Address:</Typography>
							<Typography>{data.address}</Typography>
						</div>
						<div className='flex flex-wrap items-center gap-x-2'>
							<Typography className='font-bold'>Hours:</Typography>
							<Typography>{data.operatingHours}</Typography>
						</div>
					</div>
					<div className='flex items-center gap-x-2 text-gray-dark'>
						<DistanceIcon height={18} width={15} />
						<Link className='line-clamp-1 hover:underline' href='/'>
							{data.address}
						</Link>
					</div>
				</div>
				<Link
					href={`/${data.type}/${data.id}`}
					className={cn(
						buttonVariants({ variant: 'outline' }),
						'w-full self-auto',
					)}>
					Contact
				</Link>
			</div>
		</article>
	);
});
