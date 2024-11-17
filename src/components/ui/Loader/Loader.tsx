import { Loader2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LoaderProps {
	children?: React.ReactNode;
	className?: string;
	loaderIcon?: React.ReactNode;
	loaderClassName?: string;
}

export const Loader: React.FC<LoaderProps> = ({
	children,
	className,
	loaderIcon,
	loaderClassName,
}) => (
	<div
		className={cn(
			'flex h-screen w-full items-center justify-center text-center',
			className,
		)}>
		{loaderIcon || (
			<Loader2Icon
				className={cn(
					'text-primary-main mr-2 size-10 animate-spin',
					loaderClassName,
				)}
			/>
		)}
		{children}
	</div>
);
