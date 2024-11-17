import React from 'react';

import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children: React.ReactNode;
	feedbackMessage?: string;
	className?: string;
	customClasses?: string;
}

const CHECKBOX_TEST_IDS = {
	CONTAINER: 'checkbox-container',
	INPUT: 'checkbox-input',
	FEEDBACK_MESSAGE: 'checkbox-feedback-message',
	LABEL: 'checkbox-label',
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, children, feedbackMessage, customClasses, ...props }, ref) => (
		<div
			className={cn('text-sm leading-4', customClasses)}
			data-testid={CHECKBOX_TEST_IDS.CONTAINER}>
			<label
				className='flex items-center gap-2'
				data-testid={CHECKBOX_TEST_IDS.LABEL}>
				<input
					ref={ref}
					data-testid={CHECKBOX_TEST_IDS.INPUT}
					className={cn(
						'cursor-pointer border border-primary-main text-primary-main accent-primary-main',
						className,
					)}
					{...props}
					type='checkbox'
				/>
				{children}
			</label>
			{feedbackMessage && (
				<div
					className='pl-5 pt-1 text-xs text-secondary-main'
					data-testid={CHECKBOX_TEST_IDS.FEEDBACK_MESSAGE}>
					{feedbackMessage}
				</div>
			)}
		</div>
	),
);

Checkbox.displayName = 'Checkbox';

export { CHECKBOX_TEST_IDS, Checkbox };
