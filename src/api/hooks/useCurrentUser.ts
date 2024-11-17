import type { AxiosError } from 'axios';
import React from 'react';

import { getCurrentUser } from '../instance';

export const useCurrentUser = () => {
	const [user, setUser] = React.useState<User | null>(null);
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState<AxiosError | null>(null);

	React.useEffect(() => {
		const fetchData = async () => {
			await getCurrentUser({})
				.then((response) => {
					if (response.status === 200) {
						setUser(response.data.user);
					}
					throw new Error("User doesn't exist");
				})
				.catch((error: AxiosError) => {
					setError(error);
				});
		};
		fetchData();
		setIsLoading(false);
	}, []);

	return { user, isLoading, error };
};
