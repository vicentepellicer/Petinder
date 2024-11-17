import { notFound } from 'next/navigation';

import { mockPets } from '@/__mocks__/pets';
import { Gallery } from '@/components/common';

interface PhotoPageInterceptionProps {
	params: { petId: string };
	searchParams: {
		photoId: string;
	};
}

const PhotoPageInterception = ({
	params,
	searchParams,
}: PhotoPageInterceptionProps) => {
	const { petId } = params;
	const pet = mockPets.find((pet) => pet.id === +petId);

	if (
		!searchParams.photoId ||
		!pet ||
		+searchParams.photoId > pet.petImages.length - 1
	)
		return notFound();

	return (
		<Gallery
			navigation
			open
			images={pet.petImages}
			index={+searchParams.photoId}
		/>
	);
};

export default PhotoPageInterception;
