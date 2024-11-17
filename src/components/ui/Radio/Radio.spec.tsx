import { render } from '@testing-library/react';
import { ArrowDown } from 'lucide-react';

import {
	RadioGroup,
	RadioGroupItem,
	RADIO_GROUP_TEST_IDS,
	RADIO_GROUP_ITEM_TEST_IDS,
} from './Radio';

let value = '';

const onChange = (radioValue: string) => {
	value = radioValue;
};

describe('Given Radio component', () => {
	describe('When the component is rendered', () => {
		describe('With children RadioGroupItem', () => {
			describe('And are passed value and onValueChange props', () => {
				it('Then it should render correctly', () => {
					const { getByTestId } = render(
						<RadioGroup value={value} onValueChange={onChange}>
							<RadioGroupItem radioValue='test-1' />
						</RadioGroup>,
					);

					const RadioGroupContainer = getByTestId(
						RADIO_GROUP_TEST_IDS.CONTAINER,
					);
					const RadioGroupItemContainer = getByTestId(
						RADIO_GROUP_ITEM_TEST_IDS.CONTAINER,
					);
					const RadioGroupItemInput = getByTestId(
						RADIO_GROUP_ITEM_TEST_IDS.INPUT,
					);
					expect(RadioGroupContainer).to.exist;
					expect(RadioGroupItemContainer).to.exist;
					expect(RadioGroupItemInput.getAttribute('value')).toBe('test-1');
				});
			});
			describe('And are selected an RadioGroupItem', () => {
				it('Then it should have the data-checked attribute', () => {
					const { getByTestId } = render(
						<RadioGroup value='test-1' onValueChange={onChange}>
							<RadioGroupItem radioValue='test-1' />
						</RadioGroup>,
					);

					const RadioGroupItemContainer = getByTestId(
						RADIO_GROUP_ITEM_TEST_IDS.CONTAINER,
					);
					expect(RadioGroupItemContainer.getAttribute('data-checked')).toBe(
						'true',
					);
				});
			});
			describe('And RadioGroupItem has children', () => {
				it('Then it should have rendered children', () => {
					const { getByTestId } = render(
						<RadioGroup value='test-1' onValueChange={onChange}>
							<RadioGroupItem radioValue='test-1'>Test 1</RadioGroupItem>
						</RadioGroup>,
					);

					const RadioGroupItemChildren = getByTestId(
						RADIO_GROUP_ITEM_TEST_IDS.CHILDREN,
					);
					expect(RadioGroupItemChildren).to.exist;
				});
			});
			describe('And are passed customIcon and className to RadioGroupItem', () => {
				it('Then it should contain customIcon and provided classes', () => {
					const classNames = 'bg-secondary-main font-bold';
					const { getByTestId } = render(
						<RadioGroup value='test-1' onValueChange={onChange}>
							<RadioGroupItem
								className='bg-secondary-main font-bold'
								customIcon={<ArrowDown />}
								radioValue='test-1'>
								Test 1
							</RadioGroupItem>
						</RadioGroup>,
					);

					const RadioGroupItemContainer = getByTestId(
						RADIO_GROUP_ITEM_TEST_IDS.CONTAINER,
					);
					const customIcon = getByTestId(RADIO_GROUP_ITEM_TEST_IDS.CUSTOM_ICON);

					expect(customIcon).to.exist;
					expect(RadioGroupItemContainer.className).to.contain(classNames);
				});
			});
		});
		describe('And are passed className to RadioGroup', () => {
			it('Then it should contain provided classes', () => {
				const classNames = 'bg-secondary-main font-bold';
				const { getByTestId } = render(
					<RadioGroup
						className='bg-secondary-main font-bold'
						value='test-1'
						onValueChange={onChange}>
						<RadioGroupItem customIcon={<ArrowDown />} radioValue='test-1'>
							Test 1
						</RadioGroupItem>
					</RadioGroup>,
				);

				const RadioGroupContainer = getByTestId(RADIO_GROUP_TEST_IDS.CONTAINER);

				expect(RadioGroupContainer.className).to.contain(classNames);
			});
		});
		describe('And are passed label prop to RadioGroup', () => {
			it('Then it should contain label', () => {
				const { getByTestId } = render(
					<RadioGroup
						label='Test label'
						value='test-1'
						onValueChange={onChange}>
						<RadioGroupItem customIcon={<ArrowDown />} radioValue='test-1'>
							Test 1
						</RadioGroupItem>
					</RadioGroup>,
				);

				const RadioGroupLabel = getByTestId(RADIO_GROUP_TEST_IDS.LABEL);

				expect(RadioGroupLabel).to.exist;
			});
		});
	});
});
