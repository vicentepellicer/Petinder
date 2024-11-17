import { useTranslations } from 'next-intl';

import { DistanceIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface DistanceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	distance: string | number;
}

export const Distance = ({ distance, className, ...props }: DistanceProps) => {
	const otherTranslations = useTranslations('other');

	return (
		<div
			className={cn(
				'text-gray-dark flex items-center gap-2 text-xs',
				className,
			)}
			{...props}>
			<DistanceIcon />
			{typeof distance === 'number' ? (
				<span>
					{otherTranslations('distance', {
						distance,
					})}
				</span>
			) : (
				<span className='capitalize'>{distance}</span>
			)}
		</div>
	);
};
