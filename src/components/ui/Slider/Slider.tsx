'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface SliderProps
	extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
	showLabels?: boolean;
	labelsText?: string;
	trackClassName?: string;
	thumbClassName?: string;
	rangeClassName?: string;
	customIcon?: React.ReactNode;
}

const SLIDER_TEST_IDS = {
	ROOT: 'slider-root',
	START_LABEL: 'slider-start-label',
	END_LABEL: 'slider-end-label',
	CURRENT_VALUE: 'slider-current-value',
	CURRENT_VALUE_TEXT: 'slider-current-value-text',
	START_LABEL_TEXT: 'slider-start-label-text',
	END_LABEL_TEXT: 'slider-end-label-text',
	THUMB: 'slider-thumb',
	TRACK: 'slider-track',
	RANGE: 'slider-range',
};

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	SliderProps
>(
	(
		{
			className,
			showLabels,
			labelsText,
			trackClassName,
			thumbClassName,
			rangeClassName,
			customIcon,
			...props
		},
		ref,
	) => (
		<SliderPrimitive.Root
			ref={ref}
			data-testid={SLIDER_TEST_IDS.ROOT}
			className={cn(
				'relative mx-auto mt-8 flex w-[95%] touch-none select-none items-center',
				className,
				showLabels && 'mb-6',
			)}
			{...props}>
			<div className='absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black' />

			<SliderPrimitive.Track
				data-testid={SLIDER_TEST_IDS.TRACK}
				className={cn(
					'bg-gray-dark h-0.5 w-full overflow-hidden rounded-full dark:bg-black',
					trackClassName,
				)}>
				<SliderPrimitive.Range
					data-testid={SLIDER_TEST_IDS.RANGE}
					className={cn(
						'absolute h-full rounded-full bg-black dark:bg-stone-50',
						rangeClassName,
					)}
				/>
			</SliderPrimitive.Track>

			<div className='bg-gray-dark absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full' />

			{!customIcon ? (
				<SliderPrimitive.Thumb
					data-testid={SLIDER_TEST_IDS.THUMB}
					id='slider-thumb'
					className={cn(
						'from-primary-main to-secondary-light dark:focus-visible:ring-gray-light relative block size-3 cursor-pointer rounded-full bg-gradient-to-br ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-stone-50 dark:bg-stone-950 dark:ring-offset-stone-950',
						thumbClassName,
					)}
				/>
			) : (
				<SliderPrimitive.Thumb
					id='slider-thumb'
					className={cn(
						'group relative cursor-pointer rounded-full focus:outline-none',
						thumbClassName,
					)}>
					{customIcon}
				</SliderPrimitive.Thumb>
			)}

			{showLabels && (
				<>
					<div
						className='text-gray-dark absolute -bottom-7 -right-1'
						data-testid={SLIDER_TEST_IDS.END_LABEL}>
						{props.max}
						{labelsText && (
							<span
								className='ml-1'
								data-testid={SLIDER_TEST_IDS.END_LABEL_TEXT}>
								{labelsText}
							</span>
						)}
					</div>
					<div
						className='text-gray-dark absolute -bottom-7 -left-1'
						data-testid={SLIDER_TEST_IDS.START_LABEL}>
						{props.min}
						{labelsText && (
							<span
								className='ml-1'
								data-testid={SLIDER_TEST_IDS.START_LABEL_TEXT}>
								{labelsText}
							</span>
						)}
					</div>
					<div
						className='absolute -bottom-7 left-1/2 -translate-x-1/2 font-semibold'
						data-testid={SLIDER_TEST_IDS.CURRENT_VALUE}>
						{props.value}
						{labelsText && (
							<span
								className='ml-1'
								data-testid={SLIDER_TEST_IDS.CURRENT_VALUE_TEXT}>
								{labelsText}
							</span>
						)}
					</div>
				</>
			)}
		</SliderPrimitive.Root>
	),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { SLIDER_TEST_IDS, Slider };
