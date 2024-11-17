'use client';

import React from 'react';

import type { UseExploreFilterFormReturnType } from '../hooks/useExploreFilterForm';

// type ComboboxVariant = 'outdoors';

interface LodgingFilterFieldsProps {
	form: UseExploreFilterFormReturnType['form'];
}

export const LodgingFilterFields = ({ form }: LodgingFilterFieldsProps) => {
	const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

	return (
		<div
			ref={scrollableContainerRef}
			className='custom-scrollbar flex flex-col gap-6 overflow-y-auto pr-3'>
			Lodging Fields
		</div>
	);
};
