import { api } from '@/api/instance';

export type SignUpConfig = AxiosRequestConfig<SignUpParams>;
export interface SignUpParams {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

export const signUp = async ({ params, config }: SignUpConfig) =>
	api.post<SignUpResponse>(
		`/sign-up`,
		{
			email: params.email,
			password: params.password,
			name: params.name,
			passwordConfirmation: params.passwordConfirmation,
		},
		config,
	);
