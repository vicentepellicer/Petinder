import Image from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	img?: string;
	fallbackText?: string;
	size?: 'sm' | 'md' | 'lg';
	withIcon?: React.ReactNode;
	notification?: boolean | number;
}

const avatarClasses = {
	size: {
		sm: 'h-8 w-8 text-xs',
		md: 'h-10 w-10 text-sm',
		lg: 'h-14 w-14 text-lg',
	},
};

const AVATAR_TEST_IDS = {
	CONTAINER: 'avatar-container',
	IMG: 'avatar-img',
	NOTIFICATION: 'avatar-notification',
	ICON: 'avatar-icon',
	FALLBACK_TEXT: 'avatar-fallbackText',
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	(
		{
			className,
			img,
			size = 'sm',
			withIcon,
			fallbackText,
			notification,
			...props
		},
		ref,
	) => (
		<div className='relative z-10 inline-flex'>
			<div
				ref={ref}
				data-testid={AVATAR_TEST_IDS.CONTAINER}
				className={cn(
					'bg-gray-light relative z-[11] flex shrink-0 overflow-hidden rounded-full border-2 border-white text-white',
					avatarClasses.size[size],
					className,
				)}
				{...props}>
				{withIcon && !img && !fallbackText && (
					<span
						className='flex h-full w-full items-center justify-center'
						data-testid={AVATAR_TEST_IDS.ICON}>
						{withIcon}
					</span>
				)}
				{img && (
					<Image
						fill
						alt='avatar'
						className='aspect-square h-full w-full rounded-full'
						data-testid={AVATAR_TEST_IDS.IMG}
						sizes='100%'
						src={img}
					/>
				)}
				{fallbackText && !img && !withIcon && (
					<span
						data-testid={AVATAR_TEST_IDS.FALLBACK_TEXT}
						className={cn(
							'bg-muted flex h-full w-full items-center justify-center rounded-full',
						)}>
						{fallbackText}
					</span>
				)}
			</div>
			{notification && (
				<span
					className='background__gradient--primary absolute inline-flex h-full w-full animate-small-ping rounded-full'
					data-testid={AVATAR_TEST_IDS.NOTIFICATION}
				/>
			)}
		</div>
	),
);
Avatar.displayName = 'Avatar';

export { AVATAR_TEST_IDS, Avatar };
export type { AvatarProps };
