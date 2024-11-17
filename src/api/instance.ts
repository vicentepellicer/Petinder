import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import { COOKIES_KEYS } from '@/lib/constants';

export interface CurrentUserResponse {
	reason?: string | null;
	success: boolean;
	user: User;
}

export type SignUpConfig = AxiosRequestConfig<CurrentUserResponse>;

export const api = axios.create({
	baseURL: 'https://api.petinder.online/API',
});

export const getCurrentUser = (
	options?: AxiosRequestConfig,
): Promise<AxiosResponse<CurrentUserResponse>> =>
	api.get(`/current-user`, options?.config);

api.interceptors.request.use((config) => {
	const token = getCookie(COOKIES_KEYS.TOKEN);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
