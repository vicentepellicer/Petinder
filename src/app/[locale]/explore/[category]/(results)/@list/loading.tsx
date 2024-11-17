import { CardSkeleton } from '@/components/common/Card';

const ResultsListLoading = () => {
	return (
		<div className='relative rounded-3 rounded-tl-none lg:bg-gray-light lg:p-4'>
			<div className='grid grid-flow-row grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
				{Array.from({ length: 12 }).map((_, index) => (
					<CardSkeleton key={index} />
				))}
			</div>
		</div>
	);
};

export default ResultsListLoading;
