import React from 'react';

interface BadgeProps {
	dot?: boolean;
	content?: string | number;
	children?: React.ReactNode;
	icon?: React.ReactNode;
	pulse?: boolean;
}

export const Badge = ({ dot, children, icon, content, pulse }: BadgeProps) => {
	const getFormattedContent = React.useMemo(() => {
		if (!content) {
			return '';
		}

		return Number(content) > 9 ? '9+' : content;
	}, [content]);

	const commonClasses = `${pulse ? 'animate-ping' : ''} rounded-full bg-secondary-main absolute z-50`;

	return (
		<div className='relative w-[50px]'>
			<div
				data-testid='iui-badge__inner'
				className={
					dot
						? `right-5 top-0 h-2 w-2 ${commonClasses}`
						: `-top-2.5 right-5 h-5 w-5 ${commonClasses}`
				}>
				{!dot && content && (
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white'>
						<small>{getFormattedContent}</small>
					</div>
				)}
			</div>
			{!icon && children}
			{icon && <div data-testid='iui-badge__icon'>{icon}</div>}
		</div>
	);
};
