/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type FC } from 'react';

interface Props {
	rate: number;
	children?: React.ReactNode;
}

export const StarsOverview: FC<Props> = ({ rate, children }) => (
	<div className='flex items-center gap-5' data-testid='stars-overview'>
		<div className='flex items-center gap-1'>
			{[...Array(5)].map((_, index) => (
				<span
					key={index}
					data-testid='star'
					className={
						index < rate
							? 'text-secondary-light text-xl'
							: 'text-gray-light text-xl'
					}>
					★
				</span>
			))}
		</div>
		{children}
	</div>
);
