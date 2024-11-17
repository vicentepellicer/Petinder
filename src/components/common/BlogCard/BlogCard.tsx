import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Typography } from '@/components/ui';
import { CommentIcon, FavoriteOutlinedIcon } from '@/components/ui/icons';

interface BlogCardProps {
	article?: Article | PartnershipArticle;
}

export const BlogCard = ({ article }: BlogCardProps) => {
	const cardsTranslations = useTranslations('cards');

	return (
		<article className='flex h-full w-full flex-col overflow-hidden rounded-3 border-[1px] border-gray-medium'>
			<Link
				className='group max-h-[230px] overflow-hidden'
				href={`/articles/${article?.id || ''}`}>
				<Image
					alt={`${article?.title || ''} image`}
					className='h-full w-full object-cover transition-transform group-hover:scale-105'
					height={500}
					src={article?.images[0] || ''}
					width={500}
				/>
			</Link>
			<div className='flex grow flex-col gap-2 p-4'>
				{article?.tags?.length && (
					<ul className='flex flex-wrap gap-x-1 text-xs capitalize text-gray-dark'>
						{article.tags.map((tag, index) => (
							<li key={tag} className='flex items-center gap-1'>
								<Link className='hover:underline' href='/'>
									{tag}
								</Link>
								{index !== (article?.tags?.length ?? 0) - 1 && <span>•</span>}
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
					<div className='inline-flex items-center gap-2 font-semibold text-gray-dark'>
						<div className='flex items-center gap-1'>
							<FavoriteOutlinedIcon className='size-4' />
							{article?.likes}
						</div>
						<div className='flex items-center gap-1'>
							<CommentIcon className='size-4' />
							{article?.comments.length}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
