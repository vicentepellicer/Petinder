import { render } from '@testing-library/react';
import { UserRound } from 'lucide-react';

import { Avatar, AVATAR_TEST_IDS } from './Avatar';

describe('Given Input component', () => {
	describe('When the component is rendered', () => {
		describe('And no props are passed', () => {
			it('Then it should render correctly', () => {
				const { getByTestId } = render(<Avatar />);

				const inputElement = getByTestId(AVATAR_TEST_IDS.CONTAINER);
				expect(inputElement).to.exist;
			});
		});
		describe('And img are passed', () => {
			it('Then it should render correctly with img', () => {
				const { getByTestId } = render(<Avatar img='/img/hero-1.jpg' />);

				const avatarElement = getByTestId(AVATAR_TEST_IDS.IMG);
				expect(avatarElement).to.exist;
			});
		});
		describe('And size props are passed', () => {
			it('Then it should contain correct classes for size = "sm"', () => {
				const { getByTestId } = render(<Avatar size='sm' />);

				const smClasses = 'h-8 w-8 text-xs';

				const avatarElement = getByTestId(AVATAR_TEST_IDS.CONTAINER);
				expect(avatarElement.className).to.contain(smClasses);
			});
			it('Then it should contain correct classes for size = "md"', () => {
				const { getByTestId } = render(<Avatar size='md' />);

				const mdClasses = 'h-10 w-10 text-sm';

				const avatarElement = getByTestId(AVATAR_TEST_IDS.CONTAINER);
				expect(avatarElement.className).to.contain(mdClasses);
			});
			it('Then it should contain correct classes for size = "lg"', () => {
				const { getByTestId } = render(<Avatar size='lg' />);

				const lgClasses = 'h-14 w-14 text-lg';

				const avatarElement = getByTestId(AVATAR_TEST_IDS.CONTAINER);
				expect(avatarElement.className).to.contain(lgClasses);
			});
		});
		describe('And withIcon props are passed', () => {
			it('Then it should render withIcon', () => {
				const { getByTestId } = render(
					<Avatar withIcon={<UserRound className='text-white' />} />,
				);

				const iconElement = getByTestId(AVATAR_TEST_IDS.ICON);
				expect(iconElement).to.exist;
			});
		});
		describe('And fallbackText props are passed', () => {
			it('Then it should render fallbackText element', () => {
				const { getByTestId } = render(<Avatar fallbackText='PT' />);

				const fallbackTextElement = getByTestId(AVATAR_TEST_IDS.FALLBACK_TEXT);
				expect(fallbackTextElement).to.exist;
			});
		});
		describe('And notification props are passed', () => {
			it('Then it should render notification element with animation', () => {
				const { getByTestId } = render(<Avatar notification={1} />);

				const notificationElement = getByTestId(AVATAR_TEST_IDS.NOTIFICATION);
				expect(notificationElement).to.exist;
			});
		});
	});
});
