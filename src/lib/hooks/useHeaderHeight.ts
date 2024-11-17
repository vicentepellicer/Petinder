import React from 'react';

const HEADER_HEIGHT = 60;

export const useHeaderHeight = () => {
	const [headerHeight, setHeaderHeight] = React.useState(HEADER_HEIGHT);

	React.useEffect(() => {
		const header = document.getElementsByTagName('header');
		setHeaderHeight(header[0].offsetHeight);

		window.addEventListener('resize', () =>
			setHeaderHeight(header[0].offsetHeight),
		);

		return () => {
			window.removeEventListener('resize', () =>
				setHeaderHeight(header[0].offsetHeight),
			);
		};
	}, []);

	return {
		headerHeight,
	};
};
