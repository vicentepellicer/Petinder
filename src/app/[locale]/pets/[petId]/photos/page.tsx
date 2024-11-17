import Image from 'next/image';
import { notFound } from 'next/navigation';

import { mockPets } from '@/__mocks__/pets';

interface PhotosPageProps {
	params: { petId: string };
	searchParams: {
		photoId: string;
	};
}

const PhotoPage = ({ searchParams, params }: PhotosPageProps) => {
	const { petId } = params;
	const pet = mockPets.find((pet) => pet.id === +petId);

	if (
		!searchParams.photoId ||
		!pet ||
		+searchParams.photoId > pet.petImages.length - 1
	)
		return notFound();

	return (
		<div className='fixed inset-0 z-[100] flex h-full w-full items-center justify-center bg-white'>
			<Image
				fill
				alt='photo'
				className='object-contain'
				src={pet.petImages[+searchParams.photoId].src}
			/>
		</div>
	);
};

export default PhotoPage;
