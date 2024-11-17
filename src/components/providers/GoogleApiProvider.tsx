import { APIProvider } from '@vis.gl/react-google-maps';

interface GoogleApiProviderProps {
	apiKey?: string;
	children: React.ReactNode;
}

export const GoogleApiProvider = ({
	apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
	children,
}: GoogleApiProviderProps) => (
	<APIProvider apiKey={apiKey}>{children}</APIProvider>
);
