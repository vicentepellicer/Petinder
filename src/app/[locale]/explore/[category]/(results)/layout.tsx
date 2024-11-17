'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { z } from 'zod';

import type { CategorySchema } from '@/components/common';
import { Button } from '@/components/ui';
import { cn, updateSearchParam } from '@/lib/utils';
import { ServicesSortBy } from '@/modules/explore/ExploreFilterForm/components/sort-by-selectors';

interface ResultsLayoutProps {
	params: {
		category: string;
	};
	list: React.ReactNode;
	map: React.ReactNode;
}

type SortBySelector = {
	category: z.infer<typeof CategorySchema>['category'];
	selector: React.FC;
};

const sortBySelectors: SortBySelector[] = [
	{ category: 'pets', selector: ServicesSortBy },
	{ category: 'health', selector: ServicesSortBy },
	{ category: 'indoor', selector: ServicesSortBy },
	{ category: 'lodging', selector: ServicesSortBy },
	{ category: 'outdoor', selector: ServicesSortBy },
	{ category: 'services', selector: ServicesSortBy },
];

const ResultsLayout = ({ params, list, map }: ResultsLayoutProps) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const exploreResultsTranslations = useTranslations('explore.results');

	const display = searchParams.get('display');

	const updateDisplay = (newValue: string) => {
		updateSearchParam('display', newValue, searchParams, router);
	};
	const MatchedSortBySelector = sortBySelectors.find(
		({ category }) => category === params.category,
	)?.selector;

	return (
		<>
			<div className='flex items-center justify-between gap-1'>
				<div className='hidden lg:flex'>
					<Button
						variant='ghost'
						className={cn(
							'font-bold text-secondary-main',
							display === 'list' &&
								'relative rounded-bl-none rounded-br-none bg-gray-light',
						)}
						onClick={() => updateDisplay('list')}>
						{exploreResultsTranslations('buttons.list')}
					</Button>
					<Button
						variant='ghost'
						className={cn(
							'font-bold text-secondary-main',
							display === 'map' &&
								'rounded-bl-none rounded-br-none bg-gray-light',
						)}
						onClick={() => updateDisplay('map')}>
						{exploreResultsTranslations('buttons.map')}
					</Button>
				</div>
				<div className='ml-auto'>
					{!!MatchedSortBySelector && <MatchedSortBySelector />}
				</div>
			</div>
			{display === 'map' ? map : list}
		</>
	);
};

export default ResultsLayout;
