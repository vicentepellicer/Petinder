import { notFound } from 'next/navigation';

import { mockPets } from '@/__mocks__/pets';
import { Card } from '@/components/common/Card';

import { MapButton } from '../components/MapButton';

const Page = async () => {
	// Added delay to simulate request and to view loading state
	await new Promise((resolve) => {
		setTimeout(() => {
			const returnValue = 'fetch delay';
			resolve(returnValue);
		}, 300);
	});

	const data = mockPets;

	if (!data) {
		return notFound();
	}

	return (
		<div className='rounded-3 rounded-tl-none lg:bg-gray-light lg:p-4'>
			<div className='grid grid-flow-row grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
				{data.map((item) => (
					<Card
						key={item.id}
						className='max-h-[350px] xs:max-h-[270px]'
						data={item}
					/>
				))}
			</div>

			{/* Pagination */}
			<div className='pt-4 text-center'>1 2 3</div>

			{/* Mobile Map Button  */}
			<div className='sticky bottom-5 z-30 mt-5 flex justify-center lg:hidden'>
				<MapButton />
			</div>
		</div>
	);
};

export default Page;
