import { useTranslations } from 'next-intl';

import { CategorySelector } from '@/components/common';
import { Container } from '@/components/ui';
import { ExploreFilterForm } from '@/modules/explore';

interface CategoryLayoutProps {
	children: React.ReactNode;
	params: {
		category: string;
	};
}

const CategoryLayout = ({ children, params }: CategoryLayoutProps) => {
	const { category } = params;

	const translations = useTranslations('explore');

	return (
		<Container as='main' className='space-y-6 py-5'>
			<section className='mx-auto flex max-w-[1030px] flex-col gap-4'>
				<CategorySelector category={category} className='gap-4' />
			</section>
			<section className='flex flex-col gap-5 lg:flex-row'>
				<aside className='top-[70px] flex flex-col transition-all lg:sticky lg:h-[calc(100vh-210px)]'>
					<h2 className='py-2 text-2xl font-bold text-secondary-main'>
						{translations('filters.title')}
					</h2>
					<div className='w-full overflow-hidden lg:w-[320px]'>
						<ExploreFilterForm category={category} />
					</div>
				</aside>
				<div className='w-full'>{children}</div>
			</section>
		</Container>
	);
};

export default CategoryLayout;
