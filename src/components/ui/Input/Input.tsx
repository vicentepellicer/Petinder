import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

interface InputProps
	extends VariantProps<typeof inputVariants>,
		Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	label?: string;
	prependIcon?: React.ReactNode;
	prependIconClassName?: string;
	appendIcon?: React.ReactNode;
	appendIconClassName?: string;
	feedbackMessage?: React.ReactNode;
	id?: string;
	containerClassName?: string;
	error?: boolean;
}

const inputVariants = cva(
	'flex w-full border focus:placeholder:opacity-0  items-center gap-2 bg-white px-4 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-dark placeholder:italic disabled:cursor-not-allowed disabled:opacity-50 ',
	{
		variants: {
			variant: {
				default: 'rounded-3',
				error: 'bg-secondary-main ',
			},
			size: {
				default: 'h-12',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			variant,
			size,
			containerClassName,
			type,
			label,
			id,
			error,
			prependIcon,
			prependIconClassName,
			appendIcon,
			appendIconClassName,
			feedbackMessage,
			...props
		},
		ref,
	) => {
		const randomId = React.useId();
		const inputId = id || randomId;
		return (
			<div className='flex w-full flex-col gap-2.5'>
				{label && (
					<label
						className='text-sm font-bold'
						data-testid='label'
						htmlFor={inputId}>
						{label}
					</label>
				)}
				<div className={cn('relative', containerClassName)}>
					{prependIcon && (
						<span
							data-testid='prepend-icon'
							className={cn(
								'absolute left-4 top-1/2 -translate-y-1/2',
								prependIconClassName,
							)}>
							{prependIcon}
						</span>
					)}
					<input
						ref={ref}
						data-testid='input'
						id={inputId}
						tabIndex={0}
						type={type}
						className={cn(
							inputVariants({
								variant,
								size,
							}),
							{
								'pl-12': prependIcon,
								'pr-12': appendIcon,
								'ring-secondary-main ring-1 ring-offset-2':
									error || feedbackMessage,
							},
							className,
						)}
						{...props}
					/>
					{appendIcon && (
						<span
							data-testid='append-icon'
							className={cn(
								'absolute right-4 top-1/2 -translate-y-1/2',
								appendIconClassName,
							)}>
							{appendIcon}
						</span>
					)}
				</div>
				{feedbackMessage && (
					<div
						className='text-secondary-main text-xs'
						data-testid='feedback-message'>
						{feedbackMessage}
					</div>
				)}
			</div>
		);
	},
);

Input.displayName = 'Input';

export { Input, inputVariants };
export type { InputProps };
