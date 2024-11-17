import { notFound } from 'next/navigation';

import { mockPets } from '@/__mocks__/pets';
import { GoogleMaps } from '@/components/common/GoogleMaps/GoogleMaps';

import { ListButton } from '../components/ListButton';

const Page = () => {
	const data = mockPets;

	if (!data) {
		return notFound();
	}

	return (
		<div className='rounded-3 lg:bg-gray-light lg:p-4'>
			<div className='fixed inset-0 z-20 w-full lg:relative lg:h-[calc(100vh-280px)]'>
				<GoogleMaps data={data} />

				{/* Mobile List Button  */}
				<div className='sticky bottom-5 z-30 mt-5 flex justify-center lg:hidden'>
					<ListButton />
				</div>
			</div>
		</div>
	);
};

export default Page;
