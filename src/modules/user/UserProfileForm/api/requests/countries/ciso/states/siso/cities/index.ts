import { cscApi } from '@/modules/user/UserProfileForm/api/instance';

export type GetCitiesConfig = AxiosRequestConfig<GetCitiesParams>;
export interface GetCitiesParams {
	ciso: string;
	siso: string;
}

export const getCitiesBySiso = async ({ params, config }: GetCitiesConfig) =>
	cscApi.get<CitiesResponse>(
		`/countries/${params.ciso}/states/${params.siso}/cities`,
		config,
	);
