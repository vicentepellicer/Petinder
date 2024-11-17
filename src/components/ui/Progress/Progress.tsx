import React from 'react';

import { cn } from '@/lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
	value: number;
	size?: 'sm' | 'md' | 'lg';
	maxValue: number;
	progressLabel?: 'percentual' | 'integer' | 'fractional';
	mainColor?: string;
	backgroundColor?: string;
}

const PROGRESS_TEST_IDS = {
	MAIN_CONTAINER: 'progress-mainContainer',
	CONTAINER: 'progress-container',
	BAR: 'progress-bar',
	LABEL: 'progress-label',
};

const progressClasses = {
	size: {
		sm: 'h-[6px]',
		md: 'h-3',
		lg: 'h-5',
	},
};

const Progress: React.FC<ProgressProps> = ({
	value = 1,
	size = 'sm',
	maxValue = 5,
	progressLabel,
	mainColor = 'bg-secondary-main',
	backgroundColor = 'bg-secondary-main-20',
	...props
}) => (
	<div data-testid={PROGRESS_TEST_IDS.MAIN_CONTAINER} {...props}>
		{progressLabel && (
			<span className='mb-1 block' data-testid={PROGRESS_TEST_IDS.LABEL}>
				{progressLabel === 'fractional' && `${value}/${maxValue}`}
				{progressLabel === 'integer' && value}
				{progressLabel === 'percentual' &&
					`${Math.round((100 / maxValue) * value)}%`}
			</span>
		)}
		<div
			data-testid={PROGRESS_TEST_IDS.CONTAINER}
			className={cn(
				'w-full overflow-hidden rounded-full',
				progressClasses.size[size],
				backgroundColor,
			)}>
			<div
				className={cn('h-full transition-all', mainColor)}
				data-testid={PROGRESS_TEST_IDS.BAR}
				style={{ width: `${(100 / maxValue) * value}%` }}
			/>
		</div>
	</div>
);

Progress.displayName = 'Progress';

export { PROGRESS_TEST_IDS, Progress };
