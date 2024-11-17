import { render } from '@testing-library/react';

import { Input } from './Input';

describe('Given Input component', () => {
	describe('When the component is rendered', () => {
		describe('And no props are passed', () => {
			it('Then it should render correctly', () => {
				const { getByTestId } = render(<Input />);

				const inputElement = getByTestId('input');
				expect(inputElement).to.exist;
			});
		});
		describe('And the label prop is passed', () => {
			it('renders label correctly', () => {
				const { getByTestId } = render(<Input label='Test label' />);
				const labelElement = getByTestId('label');
				expect(labelElement).to.exist;
			});
		});

		describe('And the prependIcon and appendIcon props are passed', () => {
			it('renders prependIcon and appendIcon correctly', () => {
				const { getByTestId } = render(
					<Input
						appendIcon={<span>Append Icon</span>}
						prependIcon={<span>Prepend Icon</span>}
					/>,
				);
				const prependIconElement = getByTestId('prepend-icon');
				expect(prependIconElement).to.exist;

				const appendIconElement = getByTestId('append-icon');
				expect(appendIconElement).to.exist;
			});
		});

		describe('And the feedbackMessage prop is passed', () => {
			it('Then it should render the feedback message correctly', () => {
				const { getByTestId } = render(
					<Input feedbackMessage='Test feedback message' />,
				);
				const feedbackMessageElement = getByTestId('feedback-message');
				expect(feedbackMessageElement).to.exist;
			});
		});
		describe('And the id prop is passed', () => {
			it('Then it should contain correct id attribute', () => {
				const { getByTestId } = render(<Input id='test-id' />);
				const inputElement = getByTestId('input');
				expect(inputElement.getAttribute('id')).toBe('test-id');
			});
		});
	});
});
