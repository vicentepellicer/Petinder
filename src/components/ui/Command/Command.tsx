'use client';

import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';

import { Dialog, DialogContent } from '@/components/ui';
import { cn } from '@/lib/utils';

import { SearchIcon } from '../icons';

const Command = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		ref={ref}
		className={cn(
			'flex h-full flex-col overflow-hidden rounded-md bg-white text-stone-950 dark:bg-stone-950 dark:text-stone-50',
			className,
		)}
		{...props}
	/>
));
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps;

interface CommandInputProps
	extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
	wrapperClassName?: string;
}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
	<Dialog {...props}>
		<DialogContent className='overflow-hidden p-0 shadow-lg'>
			<Command className='dark:[&_[cmdk-group-heading]]:text-gray-dark [&_[cmdk-group-heading]]:text-gray-dark [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[data-cmdk-input-wrapper]_svg]:h-5'>
				{children}
			</Command>
		</DialogContent>
	</Dialog>
);

const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	CommandInputProps
>(({ className, wrapperClassName, ...props }, ref) => (
	<div
		data-cmdk-input-wrapper
		className={cn('flex items-center border-b px-3', wrapperClassName)}>
		<SearchIcon className='mr-2 h-4 w-4 shrink-0' />
		<CommandPrimitive.Input
			ref={ref}
			className={cn(
				'dark:placeholder:text-gray-dark placeholder:text-gray-dark flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	</div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
		{...props}
	/>
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className='py-6 text-center text-sm'
		{...props}
	/>
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn(
			'dark:[&_[cmdk-group-heading]]:text-gray-dark [&_[cmdk-group-heading]]:text-gray-dark overflow-hidden p-1 text-stone-950 dark:text-stone-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
			className,
		)}
		{...props}
	/>
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn('bg-gray-light -mx-1 h-px dark:bg-black', className)}
		{...props}
	/>
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cn(
			'aria-selected:bg-gray-light relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:text-black data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50 dark:aria-selected:bg-black dark:aria-selected:text-stone-50',
			className,
		)}
		{...props}
	/>
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
	<span
		className={cn(
			'dark:text-gray-dark text-gray-dark ml-auto text-xs tracking-widest',
			className,
		)}
		{...props}
	/>
);
CommandShortcut.displayName = 'CommandShortcut';

export {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
};
