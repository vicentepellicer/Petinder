import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ReadonlyURLSearchParams } from 'next/navigation';

export const updateSearchParam = (
	searchParamName: string,
	searchParamNewValue: string | null,
	searchParams: ReadonlyURLSearchParams,
	router: AppRouterInstance,
) => {
	const params = new URLSearchParams(searchParams.toString());

	params.set(searchParamName, searchParamNewValue ?? '');

	router.replace(`?${searchParamName}=${searchParamNewValue ?? ''}`);
};
