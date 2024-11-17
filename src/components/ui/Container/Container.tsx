import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	className?: string;
	as?: React.ElementType;
}

export const CONTAINER_TEST_IDS = {
	CONTAINER: 'container',
};

const Container: React.FC<ContainerProps> = ({
	children,
	className,
	as = 'div',
}) => {
	const Tag = as;

	return (
		<Tag
			className={cn('mx-auto w-full max-w-screen-2xl px-4', className)}
			data-testid={CONTAINER_TEST_IDS.CONTAINER}>
			{children}
		</Tag>
	);
};

Container.displayName = 'Container';

export { Container };
