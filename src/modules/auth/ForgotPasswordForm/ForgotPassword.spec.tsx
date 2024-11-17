import { render } from '@testing-library/react';
// import mockRouter from 'next-router-mock';
// import { act } from 'react-dom/test-utils';

import { RootMock } from '@/__mocks__/RootMock';

import {
	ForgotPasswordForm,
	FORGOT_PASSWORD_TEST_IDS,
} from './ForgotPasswordForm';

describe('Given LoginForm component', () => {
	describe('When it is rendered', () => {
		test('Then it should render form fields and submit button', () => {
			const { getByTestId } = render(<ForgotPasswordForm />, {
				wrapper: RootMock,
			});

			const emailInput = getByTestId(FORGOT_PASSWORD_TEST_IDS.INPUT_EMAIL);
			const submitButton = getByTestId(FORGOT_PASSWORD_TEST_IDS.SUBMIT_BUTTON);

			expect(emailInput).to.exist;
			expect(submitButton).to.exist;
		});
		// TODO: Add submit button is clicked test
		// describe('And submit button is clicked', () => {
		// 	test('Then it should redirect to login page', () => {
		// 		const { getByTestId } = render(<ForgotPasswordForm />, {
		// 			wrapper: RootMock,
		// 		});

		// 		const submitButton = getByTestId('submit-button');
		// 		act(() => {
		// 			submitButton.click();
		// 			expect(mockRouter.asPath).toEqual('/');
		// 		});
		// 	});
		// });
	});
});
