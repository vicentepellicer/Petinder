'use client';

import React from 'react';

import type { UseExploreFilterFormReturnType } from '../hooks/useExploreFilterForm';

// type ComboboxVariant = 'outdoors';

interface HealthFilterFieldsProps {
	form: UseExploreFilterFormReturnType['form'];
}

export const HealthFilterFields = ({ form }: HealthFilterFieldsProps) => {
	const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

	return (
		<div
			ref={scrollableContainerRef}
			className='custom-scrollbar flex flex-col gap-6 overflow-y-auto pr-3'>
			Health Fields
		</div>
	);
};
