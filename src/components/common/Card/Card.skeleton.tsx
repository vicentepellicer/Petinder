import { cn } from '@/lib/utils';

type CardSkeletonProps = React.HtmlHTMLAttributes<HTMLElement>;

export const CardSkeleton = ({ className, ...props }: CardSkeletonProps) => {
	return (
		<div
			className={cn(
				'flex h-[270px] w-full animate-pulse flex-col overflow-hidden rounded-3 border border-gray-medium bg-white md:h-[300px] lg:h-[350px]',
				className,
			)}
			{...props}>
			<div className='bg-neutral-200 grow basis-2/3' />
			<div className='flex flex-col justify-between gap-2 p-3'>
				<div className='flex flex-col items-start gap-2'>
					<div className='bg-neutral-200 h-3 w-5/6 rounded-sm' />
					<div className='bg-neutral-200 h-6 w-4/6 rounded-sm' />
					<div className='bg-neutral-200 h-3 w-5/6 rounded-sm' />
				</div>
				<div className='bg-neutral-200 h-10 w-full rounded-3' />
			</div>
		</div>
	);
};
