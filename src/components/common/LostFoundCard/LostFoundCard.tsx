import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { buttonVariants, Chip, Typography } from '@/components/ui';
import { DistanceIcon, FoundIcon, LostIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface LostFoundCardProps extends React.HTMLAttributes<HTMLDivElement> {
	pet: Pet;
}

// TODO: Add unit testing

export const LostFoundCard = React.forwardRef<
	HTMLDivElement,
	LostFoundCardProps
>(({ pet, className, ...props }, ref) => {
	const cardsTranslations = useTranslations('cards');
	return (
		<article
			ref={ref}
			className={cn(
				'flex h-full w-full flex-col overflow-hidden rounded-3 border-[1px] border-gray-medium bg-white md:flex-row',
				className,
			)}
			{...props}>
			<div className='relative h-[200px] w-full overflow-hidden md:h-auto md:basis-2/5'>
				<Link className='group' href={`/pets/${pet.id}`}>
					<Image
						alt={pet.name}
						className='absolute h-full w-full object-cover transition-transform group-hover:scale-105'
						height={500}
						src={pet.petImages[0].src}
						width={500}
					/>
				</Link>
			</div>
			<div className='flex grow flex-col items-start justify-between gap-2 p-4'>
				<Chip
					className='capitalize'
					startContent={pet.status === 'found' ? <FoundIcon /> : <LostIcon />}>
					{pet.status === 'found'
						? cardsTranslations('lost_found_card.found')
						: cardsTranslations('lost_found_card.lost')}
				</Chip>
				<div className='space-y-2'>
					<Link href={`/pets/${pet.id}`}>
						<Typography
							className='text-primary-main hover:opacity-80'
							tag='h3'
							variant='titles'>
							{pet.name}
						</Typography>
					</Link>
					<div>
						<div className='flex flex-wrap items-center gap-x-2'>
							<Typography className='font-bold'>
								{cardsTranslations('lost_found_card.address')}:
							</Typography>
							<Typography>{pet.address}</Typography>
						</div>
						<div className='flex flex-wrap items-center gap-x-2'>
							{pet.status === 'lost' ? (
								<>
									<Typography className='font-bold'>
										{cardsTranslations('lost_found_card.date_lost')}:
									</Typography>
									<Typography>{pet.lostDate}</Typography>
								</>
							) : (
								<>
									<Typography className='font-bold'>
										{cardsTranslations('lost_found_card.date_found')}:
									</Typography>
									<Typography>{pet.foundDate}</Typography>
								</>
							)}
						</div>
						<div className='flex flex-wrap items-center gap-x-2'>
							<Typography className='font-bold'>
								{cardsTranslations('lost_found_card.details')}:
							</Typography>
							<Typography>{pet.description}</Typography>
						</div>
					</div>
					<div className='flex items-center gap-x-2 text-gray-dark'>
						<DistanceIcon height={18} width={15} />
						<Link className='hover:underline' href='/'>
							{pet.city}
						</Link>
					</div>
				</div>
				<Link
					href={`/pets/${pet.id}`}
					className={cn(
						buttonVariants({ variant: 'default' }),
						'w-full self-auto',
					)}>
					{cardsTranslations('lost_found_card.action')}
				</Link>
			</div>
		</article>
	);
});
