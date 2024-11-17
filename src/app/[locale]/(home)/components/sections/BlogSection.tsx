import { BlogCard } from '@/components/common';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui';

interface BlogSectionsProps {
	data?: Article[];
}

export const BlogSection = ({ data }: BlogSectionsProps) => (
	<Carousel opts={{ align: 'start' }}>
		<CarouselContent showBordersGradient>
			{data?.map((article) => (
				<CarouselItem
					key={article.id}
					className='basis-1/2 md:basis-1/3 xl:basis-[30%] xs:basis-4/5'>
					<BlogCard article={article} />
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious className='hidden lg:block' />
		<CarouselNext className='hidden lg:block' />
	</Carousel>
);
