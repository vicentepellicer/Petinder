import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex text-sx group md:text-base font-semibold disabled:opacity-50 justify-center transition text-nowrap disabled:pointer-events-none items-center gap-2.5 rounded-[10px]',
	{
		variants: {
			variant: {
				default: 'bg-primary-main hover:brightness-125 text-white',
				gradient: 'bg-gradient-primary',
				destructive:
					'bg-secondary-main text-stone-50 hover:bg-secondary-main/90 dark:bg-secondary-main dark:text-stone-50 dark:hover:bg-secondary-main/90',
				outline:
					'border border-primary-main bg-white text-primary-main hover:bg-primary-main hover:text-white',
				'outline-gray':
					'bg-white border hover:text-primary-main border-gray-dark text-gray-dark hover:border-primary-main',
				secondary: 'text-black hover:text-gray-dark',
				ghost: 'font-normal',
				link: 'text-black underline-offset-4 hover:underline ',
			},
			size: {
				'default-no-padding': 'h-10',
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			isLoading,
			loadingText,
			children,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				ref={ref}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}>
				{isLoading ? (
					<div className='flex items-center'>
						<Loader2Icon className='mr-2 h-4 w-4 animate-spin text-white' />
						<span>{loadingText}</span>
					</div>
				) : (
					children
				)}
			</Comp>
		);
	},
);

Button.displayName = 'Button';

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isLoading?: boolean;
	loadingText?: string;
	children?: React.ReactNode;
}

export { Button, buttonVariants };
export type { ButtonProps };
