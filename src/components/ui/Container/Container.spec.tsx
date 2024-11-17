import { render } from '@testing-library/react';

import { Container, CONTAINER_TEST_IDS } from './Container';

describe('Given Container component', () => {
	describe('When the component is rendered with children', () => {
		it('Then it should render correctly with children passed', () => {
			const divElements = ['div1', 'div2'];
			const { getByTestId } = render(
				<Container>
					<>
						{divElements.map((divElement) => (
							<div key={divElement}>{divElement}</div>
						))}
					</>
				</Container>,
			);

			const containerElement = getByTestId(CONTAINER_TEST_IDS.CONTAINER);
			expect(containerElement).to.exist;
			expect(containerElement.childNodes).to.have.length(
				divElements.length || 1,
			);
		});
	});
	describe('When the component is rendered with as prop', () => {
		it('Then it should render correctly with provided tag', () => {
			const { getByTestId } = render(
				<Container as='section'>Container text</Container>,
			);

			const containerElement = getByTestId(CONTAINER_TEST_IDS.CONTAINER);
			expect(containerElement.tagName).toBe('SECTION');
		});
	});
	describe('When the component is rendered with className prop', () => {
		it('Then it should render correctly with provided classes', () => {
			const classNames = 'bg-[#F3F8FE] text-[#636363]';
			const { getByTestId } = render(
				<Container className='bg-[#F3F8FE] text-[#636363]'>
					Container text
				</Container>,
			);

			const containerElement = getByTestId(CONTAINER_TEST_IDS.CONTAINER);
			expect(containerElement.className).to.contain(classNames);
		});
	});
});
