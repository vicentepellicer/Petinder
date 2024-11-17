import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectGroup,
	SelectValue,
} from '@/components/ui';

export const ServicesSortBy = () => (
	<Select defaultValue='rating'>
		<SelectTrigger className='h-10 gap-2 border-none font-normal hover:underline'>
			Sort by:
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem value='rating'>Rating</SelectItem>
				<SelectItem value='service'>Service</SelectItem>
				<SelectItem value='price'>Price</SelectItem>
				<SelectItem value='distance'>Distance</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
);
