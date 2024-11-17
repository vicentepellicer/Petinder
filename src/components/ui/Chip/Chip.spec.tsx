import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { Chip, CHIP_TEST_IDS } from './Chip';

describe('Given Chip component', () => {
	describe('When the component is rendered', () => {
		describe('And the children is passed', () => {
			it('Then it should render correctly', () => {
				const { getByTestId } = render(
					<Chip variant='default'>Chip text</Chip>,
				);

				const chipElement = getByTestId(CHIP_TEST_IDS.CONTAINER);
				expect(chipElement).to.exist;
			});
		});
		// TODO: Fix this test
		// describe('And the startContent and endContent props are passed', () => {
		// 	it('renders the start and end content correctly', () => {
		// 		const { getByTestId } = render(
		// 			<Chip
		// 				endContent={<span>End content</span>}
		// 				startContent={<span>Start content</span>}
		// 				variant='default'>
		// 				Chip text
		// 			</Chip>,
		// 		);

		// 		const startContentElement = getByTestId(CHIP_TEST_IDS.START_CONTENT);
		// 		expect(startContentElement).to.exist;

		// 		const endContentElement = getByTestId(CHIP_TEST_IDS.END_CONTENT);
		// 		expect(endContentElement).to.exist;
		// 	});
		// });
		// describe('When the variant prop is passed', () => {
		// 	it('should correctly show default classes', () => {
		// 		const classNames = 'bg-[#F3F8FE] text-[#636363]';
		// 		const { getByTestId } = render(
		// 			<Chip variant='default'>Chip text</Chip>,
		// 		);

		// 		const chipElement = getByTestId(CHIP_TEST_IDS.CONTAINER);
		// 		expect(chipElement.className).to.contain(classNames);
		// 	});
		// 	it('should correctly show primary classes', () => {
		// 		const classNames = 'bg-primary-main';
		// 		const { getByTestId } = render(
		// 			<Chip variant='primary'>Chip text</Chip>,
		// 		);

		// 		const chipElement = getByTestId(CHIP_TEST_IDS.CONTAINER);
		// 		expect(chipElement.className).to.contain(classNames);
		// 	});
		// 	it('should correctly show secondary classes', () => {
		// 		const classNames = 'bg-[#4D5652]';
		// 		const { getByTestId } = render(
		// 			<Chip variant='secondary'>Chip text</Chip>,
		// 		);

		// 		const chipElement = getByTestId(CHIP_TEST_IDS.CONTAINER);
		// 		expect(chipElement.className).to.contain(classNames);
		// 	});
		// 	it('should correctly show tertiary classes', () => {
		// 		const classNames = 'bg-secondary-main font-medium';
		// 		const { getByTestId } = render(
		// 			<Chip variant='tertiary'>Chip text</Chip>,
		// 		);

		// 		const chipElement = getByTestId(CHIP_TEST_IDS.CONTAINER);
		// 		expect(chipElement.className).to.contain(classNames);
		// 	});
		// });
		// describe('When custom className props is providev', () => {
		// 	it('should correctly show custom classes', () => {
		// 		const classNames = 'font-bold bg-secondary-main';
		// 		const { getByTestId } = render(
		// 			<Chip className={classNames}>Chip text</Chip>,
		// 		);

		// 		const chipElement = getByTestId(CHIP_TEST_IDS.CONTAINER);
		// 		expect(chipElement.className).to.contain(classNames);
		// 	});
		// });
		// describe('When onClose function is provided', () => {
		// 	it('should correctly show close icon', () => {
		// 		const { getByTestId } = render(
		// 			<Chip onClose={vi.fn()}>Chip text</Chip>,
		// 		);

		// 		const closeIcon = getByTestId(CHIP_TEST_IDS.CLOSE_ICON);
		// 		expect(closeIcon).to.exist;
		// 	});
		// });
	});
});
