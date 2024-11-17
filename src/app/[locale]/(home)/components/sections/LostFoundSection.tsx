import { LostFoundCard } from '@/components/common';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui';

interface LostFoundSectionProps {
	data?: Pet[];
}

export const LostFoundSection = ({ data }: LostFoundSectionProps) => (
	<Carousel opts={{ align: 'start' }}>
		<CarouselContent showBordersGradient>
			{data?.map((pet) => (
				<CarouselItem
					key={pet.id}
					className='basis-1/2 xl:basis-[35%] xs:basis-4/5'>
					<LostFoundCard pet={pet} />
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious className='hidden lg:block' />
		<CarouselNext className='hidden lg:block' />
	</Carousel>
);
