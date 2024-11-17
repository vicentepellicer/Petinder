import type { TranslationValues } from 'next-intl';
import { z } from 'zod';

export type SignUpCredentials = z.infer<
	ReturnType<typeof generateSignUpCredentials>
>;

const NAME_MIN_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const generateSignUpCredentials = (
	t?: (
		key: GenerateValidationsMessages,
		object?: TranslationValues | undefined,
	) => string,
) =>
	z.object({
		name: z.string({ required_error: t?.('required') }).min(NAME_MIN_LENGTH, {
			message: t?.('min_length', { min: NAME_MIN_LENGTH }),
		}),
		confirmPassword: z.string({ required_error: t?.('required') }),
		email: z
			.string({ required_error: t?.('required') })
			.email({ message: t?.('email') }),
		password: z
			.string({ required_error: t?.('required') })
			.regex(PASSWORD_REGEX, {
				message: t?.('strong_password', { min: PASSWORD_MIN_LENGTH }),
			}),
		terms: z.boolean().refine((checked) => checked, {
			message: t?.('terms'),
		}),
		subscription: z.boolean().optional(),
	});
