'use client';

import { Button } from '@ui';
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: 'horizontal' | 'vertical';
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />');
	}

	return context;
}

const Carousel = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{
			orientation = 'horizontal',
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref,
	) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y',
			},
			plugins,
		);
		const [canScrollPrev, setCanScrollPrev] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}

			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === 'ArrowRight') {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext],
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on('select', onSelect);
			api.on('reInit', onSelect);

			// eslint-disable-next-line consistent-return
			return () => {
				api?.off('select', onSelect);
			};
		}, [api, onSelect]);

		const providerValue = React.useMemo(
			() => ({
				carouselRef,
				api,
				opts,
				orientation:
					orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
			}),
			[
				api,
				canScrollNext,
				canScrollPrev,
				carouselRef,
				opts,
				orientation,
				scrollNext,
				scrollPrev,
			],
		);

		return (
			<CarouselContext.Provider value={providerValue}>
				<div
					ref={ref}
					aria-roledescription='carousel'
					className={cn('relative', className)}
					data-testid='carousel__wrapper'
					role='region'
					onKeyDownCapture={handleKeyDown}
					{...props}>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	},
);
Carousel.displayName = 'Carousel';

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
	showBordersGradient?: boolean;
}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
	({ className, showBordersGradient, ...props }, ref) => {
		const { carouselRef, orientation } = useCarousel();

		return (
			<div
				ref={carouselRef}
				data-testid='carousel__content'
				className={cn(
					'relative mx-auto overflow-hidden',
					orientation === 'horizontal' ? 'w-full' : 'h-full',
				)}>
				<div
					ref={ref}
					className={cn(
						'flex',
						orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
						className,
					)}
					{...props}
				/>
				{showBordersGradient && (
					<div className='pointer-events-none absolute -right-1 top-0 h-full w-20 bg-gradient-to-l from-white md:w-24' />
				)}
			</div>
		);
	},
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();

	return (
		<div
			ref={ref}
			aria-roledescription='slide'
			data-testid='carousel__item'
			role='group'
			className={cn(
				'min-w-0 shrink-0 grow-0 basis-full',
				orientation === 'horizontal' ? 'pl-4' : 'pt-4',
				className,
			)}
			{...props}
		/>
	);
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious: React.FC<
	React.HtmlHTMLAttributes<HTMLButtonElement>
> = ({ className }) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		canScrollPrev && (
			<Button
				size='icon'
				variant='ghost'
				className={cn(
					'hover:bg-primary-main group absolute bg-white shadow transition-colors',
					orientation === 'horizontal'
						? 'left-2 top-1/2 -translate-y-1/2'
						: 'left-1/2 top-0 -translate-x-1/2 rotate-90',
					className,
				)}
				onClick={scrollPrev}>
				<ChevronLeftIcon
					data-carrousel-previous
					className='text-primary-main relative left-[2px] block size-8 transition-colors group-hover:text-white'
				/>
			</Button>
		)
	);
};
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
	className,
}) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		canScrollNext && (
			<Button
				size='icon'
				variant='ghost'
				className={cn(
					'hover:bg-primary-main group absolute bg-white shadow transition-colors',
					orientation === 'horizontal'
						? 'right-2 top-1/2 -translate-y-1/2'
						: 'bottom-0 left-1/2 -translate-x-1/2 rotate-90',
					className,
				)}
				onClick={scrollNext}>
				<ChevronRightIcon
					data-carrousel-next
					className='text-primary-main relative left-1 block size-8 transition-colors group-hover:text-white'
				/>
			</Button>
		)
	);
};
CarouselNext.displayName = 'CarouselNext';

export {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselContext,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	useCarousel,
};
