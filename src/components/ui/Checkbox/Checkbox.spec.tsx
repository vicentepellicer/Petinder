import { render } from '@testing-library/react';

import { Checkbox, CHECKBOX_TEST_IDS } from './Checkbox';

describe('Given Checkbox component', () => {
	describe('When the component is rendered with children', () => {
		it('Then it should render correctly', () => {
			const childrenElement = 'test';
			const { getByTestId } = render(<Checkbox>test</Checkbox>);
			const checkboxElement = getByTestId(CHECKBOX_TEST_IDS.CONTAINER);

			expect(checkboxElement).to.exist;
			expect(childrenElement).toBe(checkboxElement.textContent);
		});
	});
	describe('When feedbackMessage is provided', () => {
		it('Then it should render correctly', () => {
			const { getByTestId } = render(
				<Checkbox feedbackMessage='this is a feedback message'>test</Checkbox>,
			);
			const checkboxFeedback = getByTestId(CHECKBOX_TEST_IDS.FEEDBACK_MESSAGE);

			expect(checkboxFeedback).to.exist;
		});
	});
	describe('When className is provided', () => {
		it('Then input should contains the provided className', () => {
			const classNames = 'text-gray-dark';
			const { getByTestId } = render(
				<Checkbox className='text-gray-dark'>test</Checkbox>,
			);
			const checkboxInput = getByTestId(CHECKBOX_TEST_IDS.INPUT);

			expect(checkboxInput.className).toContain(classNames);
		});
	});
	describe('When customClasses are provided', () => {
		it('Then the container should contains the provided className', () => {
			const classNames = 'bg-secondary-main';
			const { getByTestId } = render(
				<Checkbox customClasses='bg-secondary-main'>test</Checkbox>,
			);
			const checkboxElement = getByTestId(CHECKBOX_TEST_IDS.CONTAINER);

			expect(checkboxElement.className).toContain(classNames);
		});
	});
});
