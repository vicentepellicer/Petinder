import { render, screen } from '@testing-library/react';
import { expect } from 'chai';

import { PlaygroundCard } from './PlaygroundCard';

describe('Given Card components', () => {
	describe('When rendering the Card', () => {
		it('Then it should render its children correctly', async () => {
			render(<PlaygroundCard>Test Card</PlaygroundCard>);

			const cardElement = await screen.findByTestId('card-wrapper');
			expect(cardElement).to.exist;
			expect(cardElement.textContent).to.equal('Test Card');
		});
	});
});
