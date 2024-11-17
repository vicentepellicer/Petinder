'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { FamilyHomeIcon } from '@/components/ui/icons';
import { updateSearchParam } from '@/lib/utils';

export const MapButton = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const exploreResultsTranslations = useTranslations('explore.results');

	const updateDisplay = (newValue: string) => {
		updateSearchParam('display', newValue, searchParams, router);
	};

	return (
		<Button onClick={() => updateDisplay('map')}>
			<FamilyHomeIcon />
			{exploreResultsTranslations('buttons.map')}
		</Button>
	);
};
