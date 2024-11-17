import { z } from 'zod';

export type ExploreFormCredentials = z.infer<typeof exploreFormCredentials>;

const PetSpecie = z.enum([
	'dog',
	'cat',
	'other',
	'rabbit',
	'reptile',
	'rodent',
	'horse',
	'fish',
]);
const PetSize = z.enum(['xs', 's', 'm', 'l', 'xl', 'xxl']);
const PetAge = z.enum(['puppy', 'young', 'adult', 'senior']);
const Gender = z.enum(['male', 'female']);
const PetStatus = z.enum(['lost', 'found', 'urgent']);

export const exploreFormCredentials = z.object({
	location: z.string(),
	distance: z.number(),
	petSpecie: PetSpecie,
	sizes: PetSize.array(),
	ages: PetAge.array(),
	genders: Gender.array(),
	colors: PetStatus.array(),
	requirements: z.string().array(),
	accessibility: z.string().array(),
	services: z.string().array(),
	budgets: z.string().array(),
	operatingHours: z.string().array(),
	servicesAvailability: z.string().array(),
	ratings: z.string().array(),
	// Outdoors
	outdoors: z.string().array(),
	petFacilities: z.string().array(),
	level: z.string().array(),
	duration: z.string().array(),
	surface: z.string().array(),
	approximateDuration: z.string().array(),
	surfaces: z.string().array(),
	seasons: z.string().array(),
	costs: z.string().array(),
});
