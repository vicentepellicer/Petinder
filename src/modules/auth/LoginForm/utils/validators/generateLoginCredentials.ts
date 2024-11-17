import type { TranslationValues } from 'next-intl';
import { z } from 'zod';

export type LoginCredentials = z.infer<
	ReturnType<typeof generateLoginCredentials>
>;

const PASSWORD_MIN_LENGTH = 8;

export const generateLoginCredentials = (
	t?: (
		key: GenerateValidationsMessages,
		object?: TranslationValues | undefined,
	) => string,
) =>
	z.object({
		email: z
			.string({ required_error: t?.('required') })
			.email({ message: t?.('email') }),
		password: z
			.string({ required_error: t?.('required') })
			.min(PASSWORD_MIN_LENGTH, {
				message: t?.('min_length', { min: PASSWORD_MIN_LENGTH }),
			}),
	});
