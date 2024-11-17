import { render } from '@testing-library/react';

import { RootMock } from '@/__mocks__/RootMock';

import { SignUpForm } from './SignUpForm';

describe('Given SignUpForm component', () => {
	describe('When it is rendered', () => {
		test('Then it should render form fields and submit button', () => {
			const { getByTestId } = render(<SignUpForm />, {
				wrapper: RootMock,
			});
			const nameInput = getByTestId('input-name');
			const emailInput = getByTestId('input-email');
			const passwordInput = getByTestId('input-password');
			const confirmPasswordInput = getByTestId('input-confirm-password');
			const submitButton = getByTestId('submit-button');

			expect(nameInput).to.exist;
			expect(emailInput).to.exist;
			expect(passwordInput).to.exist;
			expect(confirmPasswordInput).to.exist;
			expect(submitButton).to.exist;
		});
	});
});
