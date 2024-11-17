import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { Slider, SLIDER_TEST_IDS } from './Slider';

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

const labelText = ' km';
const value = 10;
const classNames = 'bg-secondary-main';

describe('Given Slider component', () => {
	describe('Then the component is rendered', () => {
		describe('And no props are passed', () => {
			it('Then it should render correctly', () => {
				const { getByTestId } = render(<Slider />);

				const rootElement = getByTestId(SLIDER_TEST_IDS.ROOT);
				expect(rootElement).to.exist;
			});
		});
		describe('And are passed min, max, defaultValue and showLabels props', () => {
			it('Then it should render correctly values labels', () => {
				const { getByTestId } = render(
					<Slider showLabels max={100} min={1} value={[value]} />,
				);

				const startlabelElement = getByTestId(SLIDER_TEST_IDS.START_LABEL);
				const endLabelElement = getByTestId(SLIDER_TEST_IDS.END_LABEL);
				const thumbElement = getByTestId(SLIDER_TEST_IDS.THUMB);
				const currentValueElement = getByTestId(SLIDER_TEST_IDS.CURRENT_VALUE);
				expect(currentValueElement).to.exist;
				expect(startlabelElement).to.exist;
				expect(endLabelElement).to.exist;
				// TODO: fix this
				// expect(thumbElement.getAttribute('data-label')).to.equal(
				// 	value.toString(),
				// );
			});
		});
		describe('And are passed min, max, defaultValue, showLabels and labelsText props', () => {
			it('Then it should render correctly values labels with passed text', () => {
				const { getByTestId } = render(
					<Slider
						showLabels
						labelsText={labelText}
						max={100}
						min={1}
						value={[value]}
					/>,
				);

				const startlabelTextElement = getByTestId(
					SLIDER_TEST_IDS.START_LABEL_TEXT,
				);
				const endLabelTextElement = getByTestId(SLIDER_TEST_IDS.END_LABEL_TEXT);
				const thumbElement = getByTestId(SLIDER_TEST_IDS.THUMB);
				expect(startlabelTextElement).to.exist;
				expect(endLabelTextElement).to.exist;
				// TODO: fix this
				// expect(thumbElement.getAttribute('data-label')).to.equal(
				// 	`${value}${labelText}`,
				// );
			});
		});

		describe('And are passed trackClassName prop', () => {
			it('Then track it should contain passed classes', () => {
				const { getByTestId } = render(<Slider trackClassName={classNames} />);

				const trackElement = getByTestId(SLIDER_TEST_IDS.TRACK);

				expect(trackElement.className).to.contain(classNames);
			});
		});
		describe('And are passed thumbClassName prop', () => {
			it('Then track it should contain passed classes', () => {
				const { getByTestId } = render(<Slider thumbClassName={classNames} />);

				const thumbElement = getByTestId(SLIDER_TEST_IDS.THUMB);

				expect(thumbElement.className).to.contain(classNames);
			});
		});
		describe('And are passed rangeClassName prop', () => {
			it('Then track it should contain passed classes', () => {
				const { getByTestId } = render(<Slider rangeClassName={classNames} />);

				const rangeElement = getByTestId(SLIDER_TEST_IDS.RANGE);

				expect(rangeElement.className).to.contain(classNames);
			});
		});
	});
});
