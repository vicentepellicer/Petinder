import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

export const PlaygroundCard: React.FC<CardProps> = ({
	children,
	className,
	...props
}) => (
	<div
		data-testid='card-wrapper'
		{...props}
		className={cn('w-full rounded-xl bg-white', className)}>
		{children}
	</div>
);
