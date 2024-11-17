import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { CloseIcon } from '../icons';

const chipVariants = cva(
	'flex w-fit min-w-fit cursor-default border items-center justify-center gap-2 rounded-full bg-white px-2 py-0.5 font-light text-white',
	{
		variants: {
			variant: {
				default: 'text-gray-dark text-xs border-gray-dark',
				primary:
					'text-base h-8 px-3 w-14 font-semibold !rounded-3 text-gray-dark border-gray-dark',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

interface ChipProps {
	children: React.ReactNode;
	variant?: 'primary' | 'default';
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	className?: string;
	checked?: boolean;
	onClick?: () => void;
	onClose?: (
		e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>,
	) => void;
}

const CHIP_TEST_IDS = {
	CHILDREN: 'chip-children',
	CONTAINER: 'chip-container',
	START_CONTENT: 'chip-startContent',
	END_CONTENT: 'chip-endContent',
	CLOSE_ICON: 'chip-closeIcon',
};

const Chip: React.FC<ChipProps> = ({
	children,
	variant = 'default',
	startContent,
	endContent,
	checked,
	className,
	onClose,
	onClick,
}) => {
	const Tag = onClick ? 'button' : 'div';
	return (
		<Tag
			data-testid={CHIP_TEST_IDS.CONTAINER}
			tabIndex={onClick ? 0 : -1}
			type='button'
			className={cn(chipVariants({ variant }), className, {
				'border-primary-main text-primary-main bg-contrast-main': checked,
				'cursor-pointer': onClick,
			})}
			onClick={onClick}>
			{startContent && (
				<span data-testid={CHIP_TEST_IDS.START_CONTENT}>{startContent}</span>
			)}
			<span data-testid={CHIP_TEST_IDS.CHILDREN}>{children}</span>

			{(endContent || onClose) && (
				<span data-testid={CHIP_TEST_IDS.END_CONTENT}>
					{endContent ||
						(onClose && (
							<span
								aria-label='Close'
								data-testid={CHIP_TEST_IDS.CLOSE_ICON}
								role='button'
								tabIndex={0}
								onClick={onClose}
								onKeyDown={(e) => {
									if (e.key === 'Enter') onClose(e);
								}}>
								<CloseIcon className={cn('size-3')} />
							</span>
						))}
				</span>
			)}
		</Tag>
	);
};
Chip.displayName = 'Chip';

export { CHIP_TEST_IDS, Chip, chipVariants };
export type { ChipProps };
