import type { TranslationValues } from 'next-intl';
import { z } from 'zod';

export type SearchBarCredentials = z.infer<
	ReturnType<typeof generateSearchBarCredentials>
>;

const LOCATION_MIN_LENGTH = 4;

export const generateSearchBarCredentials = (
	t?: (
		key: GenerateValidationsMessages,
		object?: TranslationValues | undefined,
	) => string,
) =>
	z.object({
		location: z
			.string({ required_error: t?.('required') })
			.min(LOCATION_MIN_LENGTH, { message: t?.('min_length', { min: 6 }) }),
		category: z.string(),
	});
