import { PartnershipCard } from '@/components/common/PartnershipCard/PartnershipCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui';

interface PartnershipsSectionProps {
	data?: PartnershipArticle[];
}

export const PartnershipsSection = ({ data }: PartnershipsSectionProps) => (
	<Carousel opts={{ align: 'start' }}>
		<CarouselContent showBordersGradient>
			{data?.map((article) => (
				<CarouselItem
					key={article.id}
					className='basis-4/5 md:basis-2/4 xl:basis-[40%] xs:basis-[100%]'>
					<PartnershipCard article={article} />
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious className='hidden lg:block' />
		<CarouselNext className='hidden lg:block' />
	</Carousel>
);
