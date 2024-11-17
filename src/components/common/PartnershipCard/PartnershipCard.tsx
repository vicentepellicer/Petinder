import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Typography } from '@/components/ui';

interface PartnershipCardProps {
	article?: PartnershipArticle;
}

export const PartnershipCard = ({ article }: PartnershipCardProps) => {
	const cardsTranslations = useTranslations('cards');

	return (
		<article className='flex h-full min-h-[250px] w-full max-w-[800px] flex-row overflow-hidden rounded-3 border border-gray-medium xs:max-w-[500px]'>
			<Link
				className='group max-h-[250px] min-w-[150px] max-w-[150px] overflow-hidden'
				href={`/articles/${article?.id || ''}`}>
				<Image
					alt={`${article?.title || ''} image`}
					className='h-full w-full object-cover transition-transform group-hover:scale-105'
					height={500}
					src={article?.images[0] || ''}
					width={500}
				/>
			</Link>
			<div className='flex grow flex-col gap-2 text-wrap p-4'>
				{article?.tags?.length && (
					<ul className='flex flex-wrap gap-1 text-xs capitalize text-gray-dark'>
						{article.tags.map((tag) => (
							<li key={tag} className='flex items-center gap-1'>
								<Link
									className='rounded-[20px] border border-black px-[5px] hover:underline'
									href='/'>
									{tag}
								</Link>
							</li>
						))}
					</ul>
				)}
				<div className='flex grow flex-col gap-2'>
					<div className='flex flex-col gap-1'>
						<Link
							className='line-clamp-2 hover:underline'
							href={`/articles/${article?.id || ''}`}>
							<Typography tag='h3' variant='titles'>
								{article?.title}
							</Typography>
						</Link>
					</div>
					<Typography className='line-clamp-2' tag='p'>
						{article?.content}
					</Typography>
				</div>
				<div className='flex flex-wrap justify-between gap-2'>
					<div className='flex items-center gap-2'>
						<Image
							alt={article?.author.name || ''}
							className='size-10 rounded-full object-cover'
							height={40}
							src={article?.author.avatar || ''}
							width={40}
						/>
						<div>
							<div className='font-bold'>{article?.author.name}</div>
							<div className='flex items-center gap-1 text-xs text-gray-dark'>
								<span>{cardsTranslations('blog_card.posted')}:</span>
								{article?.createdAt}
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
