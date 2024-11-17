import React from 'react';

interface UseOverflowHiddenProps {
	isOverflowHidden: boolean;
	coloredOverlay?: boolean;
}

export const useOverflowHidden = ({
	isOverflowHidden,
	coloredOverlay,
}: UseOverflowHiddenProps) => {
	React.useEffect(() => {
		document.body.classList.toggle('overflow-hidden', isOverflowHidden);
		document.body.classList.toggle('colored-overlay', coloredOverlay);
	}, [isOverflowHidden, coloredOverlay]);
};
