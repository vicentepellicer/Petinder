import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants, Container } from '@/components/ui';
import { cn } from '@/lib/utils';

const GlobalNotFoundPage = () => {
	const notFoundTranslations = useTranslations('not_found');

	return (
		<Container
			as='main'
			className='flex min-h-[500px] flex-col items-center justify-center gap-2 text-center'>
			<h2 className='text-2xl font-bold'>
				<div className='text-7xl'>404</div>
				{notFoundTranslations('title')}
			</h2>
			<p>{notFoundTranslations('message')}</p>
			<Link className={cn(buttonVariants({ variant: 'default' }))} href='/'>
				{notFoundTranslations('action')}
			</Link>
		</Container>
	);
};

export default GlobalNotFoundPage;
