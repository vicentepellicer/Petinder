import React from 'react';

interface UseIsPinnedProps {
	ref: React.RefObject<HTMLElement>;
}

export const useIsPinned = ({ ref }: UseIsPinnedProps) => {
	const [isPinned, setIsPinned] = React.useState(false);
	const [currentValue, setCurrentValue] = React.useState(0);
	const prevValue = React.useRef(0);

	const updateIsPinned = React.useCallback(() => {
		if (!ref.current) return;
		setCurrentValue(ref.current.getBoundingClientRect().top);
		if (
			Math.ceil(prevValue.current) ===
			Math.ceil(ref.current?.getBoundingClientRect().top)
		) {
			setIsPinned(true);
		} else {
			setIsPinned(false);
		}
	}, [ref]);

	React.useEffect(() => {
		const handleScroll = () => {
			updateIsPinned();
		};
		prevValue.current = currentValue;
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [currentValue, updateIsPinned]);

	return { isPinned };
};
