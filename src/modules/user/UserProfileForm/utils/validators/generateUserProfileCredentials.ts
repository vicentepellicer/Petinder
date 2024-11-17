import type { TranslationValues } from 'next-intl';
import { z } from 'zod';

import {
	ADDRESS_MIN_LENGTH,
	MOBILE_PHONE_REGEX,
	NAME_MIN_LENGTH,
	ZIP_CODE_MIN_LENGTH,
	ZIP_CODE_REGEX,
} from '../constants/sizes';

export type TProfileCredentialsValidator = z.infer<
	ReturnType<typeof generateUserProfileCredentialsValidator>
>;

export const generateUserProfileCredentialsValidator = (
	t?: (
		key: GenerateValidationsMessages,
		object?: TranslationValues | undefined,
	) => string,
) =>
	z.object({
		firstName: z
			.string()
			.min(1, { message: t?.('required') })
			.min(NAME_MIN_LENGTH, {
				message: t?.('min_length', { min: NAME_MIN_LENGTH }),
			}),
		lastName: z
			.string()
			.min(1, { message: t?.('required') })
			.min(NAME_MIN_LENGTH, {
				message: t?.('min_length', { min: NAME_MIN_LENGTH }),
			}),
		gender: z.string({ required_error: t?.('gender') }),
		dob: z.date({
			required_error: t?.('birth_date'),
			invalid_type_error: t?.('invalid_date_type'),
		}),
		phone: z.string().regex(MOBILE_PHONE_REGEX, {
			message: t?.('phone'),
		}),
		email: z.string().email({ message: t?.('email') }),
		country: z
			.string({
				required_error: t?.('country'),
			})
			.refine((value) => value),
		region: z
			.string({ required_error: t?.('region') })
			.refine((value) => value, {
				message: t?.('region'),
			}),
		location: z
			.string({ required_error: t?.('location') })
			.refine((value) => value, {
				message: t?.('location'),
			}),
		address: z
			.string()
			.min(1, { message: t?.('required') })
			.min(ADDRESS_MIN_LENGTH, {
				message: t?.('min_length', { min: ADDRESS_MIN_LENGTH }),
			}),
		zip_code: z
			.string()
			.min(1, { message: t?.('required') })
			.min(ZIP_CODE_MIN_LENGTH, {
				message: t?.('min_length', { min: ZIP_CODE_MIN_LENGTH }),
			})
			.regex(ZIP_CODE_REGEX, { message: t?.('zip_code') }),
	});

// * Testing

// console.log(
// 	generateUserProfileCredentialsValidator().safeParse({
// 		country: 'US',
// 		region: 'CA',
// 		location: 'Los Angeles',
// 		address: '123 Main St',
// 		zip_code: '12345',
// 		gender: 'male',
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		phone: '+123456789',
// 		dob: new Date('2022-01-01'),
// 	}),
// );
