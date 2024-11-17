import { api } from '@/api/instance';

export type SignInConfig = AxiosRequestConfig<SignInParams>;
export interface SignInParams {
	email: string;
	password: string;
}

export const signIn = async ({ params, config }: SignInConfig) =>
	api.post<SignInResponse>(
		`/sign-in`,
		{ email: params.email, password: params.password },
		config,
	);
