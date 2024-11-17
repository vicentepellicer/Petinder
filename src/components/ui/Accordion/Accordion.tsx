'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { AccordionTriggerProps } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const ACCORDION_TEST_IDS = {
	TRIGGER: {
		CONTAINER: 'accordion-trigger-container',
		CUSTOM_ICON: 'accordion-trigger-customIcon',
		DEFAULT_ICON: 'accordion-trigger-defaultIcon',
	},
};

const accordionClasses = {
	trigger: {
		primary: 'text-primary-dark',
	},
};

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('border-gray-light border-b', className)}
		{...props}
	/>
));
AccordionItem.displayName = 'AccordionItem';

interface CustomAccordionTriggerProps extends AccordionTriggerProps {
	variant?: 'primary';
	defaultIconClassName?: string;
	customIcon?: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger> &
		CustomAccordionTriggerProps,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
		CustomAccordionTriggerProps
>(
	(
		{
			className,
			children,
			variant,
			customIcon,
			defaultIconClassName,
			...props
		},
		ref,
	) => (
		<AccordionPrimitive.Header className='flex'>
			<AccordionPrimitive.Trigger
				ref={ref}
				data-testid={ACCORDION_TEST_IDS.TRIGGER.CONTAINER}
				className={cn(
					'group flex flex-1 items-center justify-between py-4 font-medium capitalize transition-all hover:underline [&[data-state=open]>[data-accordion-default-icon]]:rotate-180',
					className,
					variant && accordionClasses.trigger[variant],
				)}
				{...props}>
				{children}
				{!customIcon ? (
					<ChevronDown
						data-accordion-default-icon
						data-testid={ACCORDION_TEST_IDS.TRIGGER.DEFAULT_ICON}
						className={cn(
							'h-4 w-4 shrink-0 transition-transform duration-200',
							variant && accordionClasses.trigger[variant],
							defaultIconClassName,
						)}
					/>
				) : (
					<span data-testid={ACCORDION_TEST_IDS.TRIGGER.CUSTOM_ICON}>
						{customIcon}
					</span>
				)}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
	ACCORDION_TEST_IDS,
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
};
