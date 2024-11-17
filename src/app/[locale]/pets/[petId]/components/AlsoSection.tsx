'use client';

import { Card } from '@/components/common';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui';

interface AlsoSectionProps {
	data: Pet[];
}

export const AlsoSection = ({ data }: AlsoSectionProps) => (
	<Carousel opts={{ align: 'start' }}>
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
