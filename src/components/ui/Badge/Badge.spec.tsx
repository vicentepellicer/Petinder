import { render } from '@testing-library/react';

import { Badge } from './Badge';

describe('Given Badge component', () => {
	describe('When it is rendered', () => {
		it('Then it should render Badge correctly', () => {
			const { getByTestId } = render(
				<Badge content='5'>{/* children */}</Badge>,
			);

			const badgeElement = getByTestId('iui-badge__inner');
			expect(badgeElement).to.exist;
		});

		describe('And content is less than 9', () => {
			it('Then it should render correct content', () => {
				const { getByText } = render(
					<Badge content='5'>{/* children */}</Badge>,
				);

				const contentElement = getByText('5');
				expect(contentElement).to.exist;
			});
		});

		describe('And content is more than 9', () => {
			it('Then it should render "9+"', () => {
				const { getByText } = render(
					<Badge content='10'>{/* children */}</Badge>,
				);

				const contentElement = getByText('9+');
				expect(contentElement).to.exist;
			});
		});

		describe('And children is provided and icon not', () => {
			it('Then it should render children', () => {
				const { getByText } = render(<Badge content='5'>Test</Badge>);

				const childrenElement = getByText('Test');
				expect(childrenElement).to.exist;
			});
		});

		describe('And icon is provided', () => {
			it('Then it should render icon when icon is provided', () => {
				const icon = <div />;
				const { getByTestId } = render(
					<Badge content='5' icon={icon}>
						{/* children */}
					</Badge>,
				);

				const iconElement = getByTestId('iui-badge__icon');
				expect(iconElement).to.exist;
			});
		});
	});
});
