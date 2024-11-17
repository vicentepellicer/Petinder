import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type TypographyTag =
	| 'div'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'label';

type TypographyVariant =
	| 'header'
	| 'titles'
	| 'section-title'
	| 'buttons'
	| 'subtitles'
	| 'mobile-subtitles'
	| 'text'
	| 'mobile-text'
	| 'secondary'
	| 'mobile-secondary'
	| 'content-web';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	tag?: TypographyTag;
	variant?: TypographyVariant;
	children: React.ReactNode;
}

const typographyVariants = cva('leading-5', {
	variants: {
		variant: {
			header:
				'font-semibold md:text-[2rem] lg:text-[2.5rem] xs:text-[1.4rem] text-[1.7rem]',
			titles:
				'font-bold  md:text-[1.5rem] text-[1.3rem] leading-6 md:leading-7',
			'section-title':
				'md:text-[2rem] font-semibold text-[1.33rem] leading-5 md:leading-normal',
			buttons: 'font-semibold',
			subtitles: 'font-semibold text-[1.125rem]',
			'mobile-subtitles': 'font-bold md:text-[1.25rem] text-[1.1rem] leading-6',
			text: 'font-medium',
			'mobile-text': 'text-[0.75rem] font-semibold',
			secondary: 'text-[0.75rem]',
			'mobile-secondary': 'text-[0.875rem]',
			'content-web': 'text-base leading-5',
		},
	},
	defaultVariants: {
		variant: 'content-web',
	},
});

export const Typography = ({
	tag: Tag = 'div',
	variant,
	children,
	className,
	...props
}: TypographyProps) => (
	<Tag className={cn(typographyVariants({ variant, className }))} {...props}>
		{children}
	</Tag>
);
