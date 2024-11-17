import { ServicePlaceCard } from '@/components/common';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui';

interface ServicesPlacesSectionProps {
	data?: Shelter[];
}

export const ServicesPlacesSection = ({ data }: ServicesPlacesSectionProps) => (
	<Carousel opts={{ align: 'start' }}>
		<CarouselContent showBordersGradient>
			{data?.map((data) => (
				<CarouselItem
					key={data.id}
					className='basis-1/2 xl:basis-[35%] xs:basis-4/5'>
					<ServicePlaceCard data={data} />
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious className='hidden lg:block' />
		<CarouselNext className='hidden lg:block' />
	</Carousel>
);
