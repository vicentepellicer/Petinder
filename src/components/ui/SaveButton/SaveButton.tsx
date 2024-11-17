import { cn } from '@/lib/utils';

import type { ButtonProps } from '../Button/Button';
import { Button } from '../Button/Button';
import { BookmarkAddIcon } from '../icons';

export const SaveButton = ({
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
		<div className='inline-flex size-6 items-center justify-center'>
			<BookmarkAddIcon />
		</div>
		{children}
	</Button>
);
