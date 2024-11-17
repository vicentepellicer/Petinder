'use server';

import { cookies } from 'next/headers';

import { COOKIES_KEYS } from '@/lib/constants';

export const getCurrentUserSSR = async () => {
	const token = cookies().get(COOKIES_KEYS.TOKEN)?.value as string;
	if (!token) return { isLoggedIn: false, user: {} as User };

	try {
		const response = await fetch(
			'https://api.petinder.online/API/current-user',
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return {
			isLoggedIn: response.status === 200,
			user: (await response.json()) as User,
		};
	} catch (error) {
		return { isLoggedIn: false, user: {} as User };
	}
};
