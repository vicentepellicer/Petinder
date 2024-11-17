import { cscApi } from '../../../../instance';

export type GetStatesConfig = AxiosRequestConfig<GetStatesParams>;
export interface GetStatesParams {
	ciso: string;
}

export const getStatesByCiso = async ({ params, config }: GetStatesConfig) =>
	cscApi.get<StatesResponse>(`/countries/${params.ciso}/states`, config);
