import { cn } from '@/lib/utils';

import type { ButtonProps } from '../Button/Button';
import { Button } from '../Button/Button';
import { ShareIcon } from '../icons';

export const ShareButton = ({
	className,
	size = 'default-no-padding',
	onClick,
	children,
}: Omit<ButtonProps, 'isLoading' | 'loadingText'>) => (
	<Button
		size={size}
		variant='ghost'
		className={cn(
			'group gap-1 text-gray-dark hover:text-primary-main hover:underline',
			className,
		)}
		onClick={onClick}>
		<div className='flex size-6 items-center justify-center'>
			<ShareIcon />
		</div>
		{children}
	</Button>
);
