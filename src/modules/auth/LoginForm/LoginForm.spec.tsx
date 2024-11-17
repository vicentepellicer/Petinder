import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { act } from 'react';

import { RootMock } from '@/__mocks__/RootMock';

import { LoginForm } from './LoginForm';

describe('Given LoginForm component', () => {
	describe('When it is rendered', () => {
		test('Then it should render form fields and submit button', () => {
			const { getByTestId } = render(<LoginForm />, {
				wrapper: RootMock,
			});

			const emailInput = getByTestId('input-email');
			const passwordInput = getByTestId('input-password');
			const submitButton = getByTestId('submit-button');

			expect(emailInput).to.exist;
			expect(passwordInput).to.exist;
			expect(submitButton).to.exist;
		});
		describe('And submit button is clicked', () => {
			test('Then it should redirect to login page', () => {
				const { getByTestId } = render(<LoginForm />, {
					wrapper: RootMock,
				});

				const submitButton = getByTestId('submit-button');
				act(() => {
					submitButton.click();
					expect(mockRouter.asPath).toEqual('/');
				});
			});
		});
	});
});
