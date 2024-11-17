'use client';

import React from 'react';

import type { UseExploreFilterFormReturnType } from '../hooks/useExploreFilterForm';

// type ComboboxVariant = 'outdoors';

interface IndoorFilterFieldsProps {
	form: UseExploreFilterFormReturnType['form'];
}

export const IndoorFilterFields = ({ form }: IndoorFilterFieldsProps) => {
	const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

	return (
		<div
			ref={scrollableContainerRef}
			className='custom-scrollbar flex flex-col gap-6 overflow-y-auto pr-3'>
			Indoor Fields
		</div>
	);
};
