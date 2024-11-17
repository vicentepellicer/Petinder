'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { ListIcon } from '@/components/ui/icons';
import { updateSearchParam } from '@/lib/utils';

export const ListButton = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const exploreResultsTranslations = useTranslations('explore.results');

	const updateDisplay = (newValue: string) => {
		updateSearchParam('display', newValue, searchParams, router);
	};

	return (
		<Button onClick={() => updateDisplay('list')}>
			<ListIcon />
			{exploreResultsTranslations('buttons.list')}
		</Button>
	);
};
