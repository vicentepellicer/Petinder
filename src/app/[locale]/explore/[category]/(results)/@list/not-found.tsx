import { useTranslations } from 'next-intl';

import { Typography } from '@/components/ui';
import { ErrorIcon } from '@/components/ui/icons';

const NotFound = () => {
	const explorePageTranslations = useTranslations('explore');

	return (
		<div className='flex gap-3 rounded-3 rounded-tl-none lg:bg-gray-light lg:p-4'>
			<ErrorIcon className='size-6' />
			<div>
				<Typography tag='h3' variant='mobile-subtitles'>
					{explorePageTranslations('results.no_results.title')}
				</Typography>
				<Typography tag='p'>
					{explorePageTranslations('results.no_results.message')}
				</Typography>
			</div>
		</div>
	);
};

export default NotFound;
