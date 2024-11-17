import { render } from '@testing-library/react';

import { StarsOverview } from './StarsOverview';

describe('Given StarsOverview component', () => {
	describe('When is rendered', () => {
		it('Then it should renders StarsOverview correctly', () => {
			const { getByTestId } = render(
				<StarsOverview rate={3}>{/* children */}</StarsOverview>,
			);

			const starsOverviewElement = getByTestId('stars-overview');
			expect(starsOverviewElement).to.exist;
		});

		describe('And rate is 3', () => {
			it('Then it should render correct number of stars', () => {
				const { getAllByTestId } = render(
					<StarsOverview rate={3}>{/* children */}</StarsOverview>,
				);

				const starElements = getAllByTestId('star');
				expect(starElements).to.have.length(5);
			});

			it('Then it should render correct number of active stars', () => {
				const { getAllByText } = render(
					<StarsOverview rate={3}>{/* children */}</StarsOverview>,
				);

				const activeStarElements = getAllByText('★', {
					selector: '.text-secondary-light',
				});
				expect(activeStarElements).to.have.length(3);
			});

			it('Then it should render correct number of inactive stars', () => {
				const { getAllByText } = render(
					<StarsOverview rate={3}>{/* children */}</StarsOverview>,
				);

				const inactiveStarElements = getAllByText('★', {
					selector: '.text-gray-light',
				});
				expect(inactiveStarElements).to.have.length(2);
			});
		});
	});
});
