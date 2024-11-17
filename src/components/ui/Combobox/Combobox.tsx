// TODO: Refactor, make it compound, add translations

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { ChevronDown } from 'lucide-react';
import React from 'react';

import {
	Button,
	Checkbox,
	Chip,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Label,
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { FilterIcon } from '../icons';

interface ComboboxProps<T = string> {
	type: string;
	options: {
		label: string;
		value: T;
	}[];
	showChips?: boolean;
	value?: string[];
	onChange?: (value: string[]) => void;
	isOpen?: boolean;
	setIsOpen?: () => void;
	selectAll?: boolean;
}

const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
	(
		{
			type = 'type',
			options,
			showChips,
			isOpen,
			setIsOpen,
			value = [],
			onChange,
			selectAll,
		},
		ref,
	) => {
		const [open, setOpen] = React.useState(false);
		const isControlled = isOpen !== undefined && setIsOpen !== undefined;
		const actualOpen = isControlled ? isOpen : open;
		const actualSetOpen = isControlled ? setIsOpen : setOpen;
		const [selectedValue = [], setSelectedValue] = useControllableState({
			prop: value,
			onChange,
		});

		const onSelect = React.useCallback(
			(itemValue: string) => {
				if (selectedValue.includes(itemValue)) {
					setSelectedValue(
						selectedValue.filter((value) => value !== itemValue),
					);
				} else {
					setSelectedValue([...selectedValue, itemValue]);
				}
			},
			[setSelectedValue, selectedValue],
		);

		const onSelectAll = React.useCallback(() => {
			if (selectedValue.length === options.length) {
				setSelectedValue([]);
			} else {
				setSelectedValue(options.map((value) => value.value));
			}
		}, [setSelectedValue, selectedValue, options]);

		const isChecked = (value: string) => selectedValue.includes(value);
		const areAllChecked = () => selectedValue.length === options.length;

		return (
			<Collapsible
				ref={ref}
				open={actualOpen}
				onOpenChange={(open) => actualSetOpen(open)}>
				<CollapsibleTrigger asChild>
					<Button
						aria-expanded={actualOpen}
						aria-label='Select Department'
						role='combobox'
						variant='outline-gray'
						className={cn(
							'group h-auto max-h-[56px] w-full min-w-fit justify-between rounded-3 p-3 text-gray-dark transition-colors data-[state=open]:border-primary-main data-[state=open]:text-primary-main md:p-4',
							selectedValue.length && 'border-primary-main text-primary-main',
						)}>
						<span className='flex items-center gap-4'>
							<FilterIcon className='size-6' />
							{selectedValue.length ? (
								<div className='flex gap-1'>
									<span className='capitalize'>{type}:</span>
									<span>{`${selectedValue.length} selected`}</span>
								</div>
							) : (
								`Select ${type}`
							)}
						</span>
						<ChevronDown className='size-6 transition group-data-[state=open]:rotate-180' />
					</Button>
				</CollapsibleTrigger>
				<CollapsibleContent className='overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down'>
					<Command className='relative mt-1 h-[250px] rounded-3 border border-gray-dark p-3'>
						<CommandInput
							className='h-8 p-0 font-semibold placeholder:text-gray-dark focus:placeholder:opacity-0'
							placeholder={`Search ${type}`}
							wrapperClassName='text-gray-dark border border-gray-dark rounded-3'
						/>
						<CommandList className='h-[190px]'>
							<CommandEmpty className='pt-5 text-center'>
								No results found
							</CommandEmpty>
							<CommandGroup className='pb-9 text-gray-dark'>
								{selectAll && (
									<CommandItem
										className='aria-selected:bg-contrast-main'
										value='select_all'
										onSelect={onSelectAll}>
										<Checkbox checked={areAllChecked()} onChange={onSelectAll}>
											<Label
												className={cn(
													'font-semibold',
													areAllChecked() && 'text-primary-main',
												)}>
												Select All
											</Label>
										</Checkbox>
									</CommandItem>
								)}
								{options.map(({ value, label }) => (
									<CommandItem
										key={value}
										className='aria-selected:bg-contrast-main'
										value={value}
										onSelect={onSelect}>
										<Checkbox
											checked={isChecked(value)}
											onChange={() => onSelect(value)}>
											<Label
												className={cn(isChecked(value) && 'text-primary-main')}>
												{label}
											</Label>
										</Checkbox>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
						<div className='absolute bottom-0 left-0 h-[36px] w-full justify-start rounded-none border-t border-gray-medium bg-gray-light text-primary-main'>
							<Button
								className='h-full font-normal hover:underline'
								type='button'
								variant='ghost'
								onClick={() => setSelectedValue([])}>
								Clear All
							</Button>
						</div>
					</Command>
				</CollapsibleContent>
				{showChips && (
					<div
						className={cn(
							'hide-scrollbar flex w-full items-center gap-1 overflow-scroll',
							selectedValue.length && 'mt-2',
						)}>
						{selectedValue.map((value) => (
							<Chip
								key={value}
								checked={isChecked(value)}
								className='capitalize'
								variant='primary'
								onClose={() => onSelect(value)}>
								{value}
							</Chip>
						))}
					</div>
				)}
			</Collapsible>
		);
	},
);

export { Combobox };
