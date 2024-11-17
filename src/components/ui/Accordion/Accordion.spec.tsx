import { render } from '@testing-library/react';
import { UserRound } from 'lucide-react';

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	ACCORDION_TEST_IDS,
} from './Accordion';

describe('Given Accordion component', () => {
	describe('When the component is rendered', () => {
		describe('With AccordionItem and AccordionTrigger component', () => {
			describe('And are passed customIcon props for AccordionTrigger', () => {
				it('Then it should render correctly', () => {
					const { getByTestId } = render(
						<Accordion type='single'>
							<AccordionItem value='item-1'>
								<AccordionTrigger customIcon={<UserRound />}>
									Accordion Trigger
								</AccordionTrigger>
							</AccordionItem>
						</Accordion>,
					);

					const accordionCustomIconElement = getByTestId(
						ACCORDION_TEST_IDS.TRIGGER.CUSTOM_ICON,
					);
					expect(accordionCustomIconElement).to.exist;
				});
			});
			describe('And are passed primary variant props for AccordionTrigger', () => {
				it('Then it should contain correct classes', () => {
					const accordionTriggerClasses = 'text-primary-dark';
					const { getByTestId } = render(
						<Accordion type='single'>
							<AccordionItem value='item-1'>
								<AccordionTrigger customIcon={<UserRound />} variant='primary'>
									Accordion Trigger
								</AccordionTrigger>
							</AccordionItem>
						</Accordion>,
					);

					const accordionTriggerElement = getByTestId(
						ACCORDION_TEST_IDS.TRIGGER.CONTAINER,
					);
					expect(accordionTriggerElement.className).to.contain(
						accordionTriggerClasses,
					);
				});
			});
			describe('And are passed defaultIconClassName props for AccordionTrigger', () => {
				it('Then it should contain correct classes', () => {
					const defaultIconClasses = 'text-secondary-main';
					const { getByTestId } = render(
						<Accordion type='single'>
							<AccordionItem value='item-1'>
								<AccordionTrigger defaultIconClassName='text-secondary-main'>
									Accordion Trigger
								</AccordionTrigger>
							</AccordionItem>
						</Accordion>,
					);

					const defaultIconElement = getByTestId(
						ACCORDION_TEST_IDS.TRIGGER.DEFAULT_ICON,
					);
					expect(defaultIconElement.classList.toString()).to.contain(
						defaultIconClasses,
					);
				});
			});
		});
	});
});
