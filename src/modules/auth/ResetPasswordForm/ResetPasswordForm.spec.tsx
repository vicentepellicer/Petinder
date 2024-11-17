import { render } from '@testing-library/react';
// import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';

import { RootMock } from '@/__mocks__/RootMock';

import {
	ResetPasswordForm,
	RESET_PASSWORD_TEST_IDS,
} from './ResetPasswordForm';

describe('Given ResetPasswordForm component', () => {
	describe('When it is rendered', () => {
		test('Then it should render form fields and submit button', () => {
			const { getByTestId } = render(<ResetPasswordForm />, {
				wrapper: RootMock,
			});

			const passwordInput = getByTestId(RESET_PASSWORD_TEST_IDS.INPUT_PASSWORD);
			const confirmPasswordInput = getByTestId(
				RESET_PASSWORD_TEST_IDS.INPUT_CONFIRM_PASSWORD,
			);
			const submitButton = getByTestId(RESET_PASSWORD_TEST_IDS.SUBMIT_BUTTON);

			expect(confirmPasswordInput).to.exist;
			expect(passwordInput).to.exist;
			expect(submitButton).to.exist;
		});
		// TODO: Add submit button is clicked test
		// describe('And submit button is clicked', () => {
		// 	test('Then it should redirect to login page', () => {
		// 		const { getByTestId } = render(<ResetPasswordForm />, {
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
