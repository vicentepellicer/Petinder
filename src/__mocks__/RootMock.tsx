import { NextIntlClientProvider } from 'next-intl';

import messages from '../../messages/en.json';

interface RootMockProps {
	children: React.ReactNode;
}

export const RootMock = ({ children }: RootMockProps) => (
	<NextIntlClientProvider locale='en' messages={messages}>
		{children}
	</NextIntlClientProvider>
);
