'use client';

import { buttonVariants, Typography } from '@ui';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

import { cn } from '@/lib/utils';

import { Distance } from '../Distance/Distance';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	data: Pet;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ data, className, ...props }, ref) => {
		const petCharacteristics: string[] = [];
		petCharacteristics.push(data.breed, data.gender, data.age);
		const cardTranslations = useTranslations('cards');
		const { locale } = useParams<{ locale: string }>();

		return (
			<article
				ref={ref}
				className={cn(
					'relative flex h-full w-full flex-col overflow-hidden rounded-3 border border-gray-medium bg-white',
					className,
				)}
				{...props}>
				{data.status === 'urgent' && (
					<span className='pointer-events-none absolute top-4 z-10 flex justify-center rounded-br-3 rounded-tr-3 bg-secondary-main px-5 py-1 text-xs font-bold text-white'>
						{cardTranslations('pet_card.urgent')}
					</span>
				)}
				<Link
					className='group min-h-[100px] basis-2/3 overflow-hidden'
					href={`/pets/${data.id}`}>
					<Image
						alt={data.name}
						className='h-full w-full object-cover transition-transform group-hover:scale-105'
						height={500}
						width={500}
						src={
							data?.petImages[0]?.src ||
							`/img/placeholders/empty-photo-placeholder-${locale}.jpg`
						}
					/>
				</Link>
				<div className='flex grow flex-col justify-between gap-2 p-3'>
					<div className='flex flex-col items-start gap-1'>
						<ul className='hide-scrollbar flex w-full gap-x-1 overflow-scroll whitespace-nowrap text-xs capitalize text-gray-dark'>
							{petCharacteristics.map((characteristic, index) => (
								<li key={index} className='flex items-center gap-1'>
									<Link className='hover:underline' href='/'>
										{characteristic}
									</Link>
									{index !== petCharacteristics.length - 1 && <span>•</span>}
								</li>
							))}
						</ul>
						<Link href={`/pets/${data.id}`}>
							<Typography
								className='text-secondary-main hover:opacity-80'
								tag='h3'
								variant='titles'>
								{data.name}
							</Typography>
						</Link>
						<Distance distance={data.city} />
					</div>
					<Link
						className={cn(buttonVariants({ variant: 'outline' }))}
						href={`/pets/${data.id}`}>
						{cardTranslations('pet_card.action')}
					</Link>
				</div>
			</article>
		);
	},
);
