'use client';

import React, { useMemo } from 'react';

import { cn } from '@/lib/utils';

type RadioContextType = {
	value?: string;
	onValueChange?: (value: string) => void;
};

const RadioContext = React.createContext<RadioContextType>({
	value: undefined,
	onValueChange: undefined,
});

const RADIO_GROUP_TEST_IDS = {
	CONTAINER: 'radio-group-container',
	LABEL: 'radio-group-label',
};

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	className?: string;
	label?: string;
	value: string;
	onValueChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
	label,
	children,
	className,
	value,
	onValueChange,
	...props
}) =>
	useMemo(
		() => (
			<RadioContext.Provider value={{ value, onValueChange }}>
				<div
					className={cn('flex flex-col gap-2', className)}
					data-testid={RADIO_GROUP_TEST_IDS.CONTAINER}
					{...props}
					aria-label={label}
					role='radiogroup'>
					{label && (
						<span data-testid={RADIO_GROUP_TEST_IDS.LABEL}>{label}</span>
					)}
					{children}
				</div>
			</RadioContext.Provider>
		),
		[value, onValueChange, label, children, props, className],
	);

RadioGroup.displayName = 'RadioGroup';

const RADIO_GROUP_ITEM_TEST_IDS = {
	CONTAINER: 'radio-group-item-container',
	DESCRIPTION: 'radio-group-item-description',
	CUSTOM_ICON: 'radio-group-item-custom-icon',
	INPUT: 'radio-group-item-input',
	CHILDREN: 'radio-group-item-children',
};

interface RadioGroupItemProps {
	children?: React.ReactNode;
	radioValue: string;
	className?: string;
	customIcon?: React.ReactNode;
	description?: string;
}

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
	children,
	radioValue,
	customIcon,
	className,
	description,
}) => {
	const context = React.useContext(RadioContext);
	const checked = radioValue === context?.value;
	return (
		<label
			data-checked={checked}
			data-testid={RADIO_GROUP_ITEM_TEST_IDS.CONTAINER}
			className={cn(
				'group inline-flex max-w-fit items-center gap-2',
				className,
			)}>
			{!customIcon ? (
				<span className='border-primary-main before:bg-primary-main flex h-4 w-4 shrink-0 cursor-pointer flex-col items-center justify-center rounded-full border-2 transition-all before:block before:h-2 before:w-2 before:scale-0 before:rounded-full before:content-[""] group-data-[checked="true"]:before:scale-100' />
			) : (
				<span data-testid={RADIO_GROUP_ITEM_TEST_IDS.CUSTOM_ICON}>
					{customIcon}
				</span>
			)}
			<input
				aria-hidden
				hidden
				checked={checked}
				data-testid={RADIO_GROUP_ITEM_TEST_IDS.INPUT}
				type='radio'
				value={radioValue}
				onChange={() => {
					context?.onValueChange?.(radioValue);
				}}
			/>
			<div className='flex flex-col'>
				{children && (
					<span data-testid={RADIO_GROUP_ITEM_TEST_IDS.CHILDREN}>
						{children}
					</span>
				)}
				{description && (
					<span
						className='text-gray-dark'
						data-testid={RADIO_GROUP_ITEM_TEST_IDS.DESCRIPTION}>
						{description}
					</span>
				)}
			</div>
		</label>
	);
};

RadioGroupItem.displayName = 'RadioGroupItem';

export {
	RADIO_GROUP_ITEM_TEST_IDS,
	RADIO_GROUP_TEST_IDS,
	RadioGroup,
	RadioGroupItem,
};
