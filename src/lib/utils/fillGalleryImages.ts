export const fillGalleryImages = <T>(
	images: T[],
	imagesNeeded: number,
	locale?: string,
) => {
	const placeholderNeeded = imagesNeeded - images.length;
	if (placeholderNeeded) {
		const placeholders = Array.from(
			{ length: placeholderNeeded },
			(_, index) => ({
				id: images.length + 1 + index,
				src: `/img/placeholders/empty-photo-placeholder-${locale || 'en'}.jpg`,
			}),
		);

		return [...images, ...placeholders];
	}

	return images;
};
