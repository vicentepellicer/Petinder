'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@ui';
import Autoplay from 'embla-carousel-autoplay';

import { Card } from '@/components/common';

interface UrgentSectionProps {
	data?: Pet[];
}

export const UrgentSection = ({ data }: UrgentSectionProps) => (
	<Carousel
		opts={{ align: 'start', loop: true }}
		plugins={[Autoplay({ delay: 2500 })]}>
		<CarouselContent showBordersGradient className='h-[350px]'>
			{data?.map((pet) => (
				<CarouselItem
					key={pet.id}
					className='basis-1/2 sm:basis-[30%] lg:basis-1/5 xl:basis-1/6 xs:basis-4/5'>
					<Card data={pet} />
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious className='hidden lg:block' />
		<CarouselNext className='hidden lg:block' />
	</Carousel>
);
