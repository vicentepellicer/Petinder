interface User {
	_id: string;
	name: string;
	email: string;
	avatar: string;
	description: string;
}

type SignInResponse = {
	user: User;
	message: string;
	token: string;
};

type SignUpResponse = {
	user: User;
	message: string;
};

type PetImage = {
	id: number;
	src: string;
};
type PetSpecie =
	| 'cat'
	| 'dog'
	| 'rabbit'
	| 'reptile'
	| 'rodent'
	| 'horse'
	| 'fish'
	| 'other';
type PetSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
type PetAge = 'puppy' | 'young' | 'adult' | 'senior';
type Gender = 'male' | 'female';
type PetStatus = 'lost' | 'found' | 'urgent';

interface Pet {
	id: number;
	name: string;
	animal: PetSpecie;
	location: string;
	city: string;
	breed: string;
	age: PetAge;
	gender: Gender;
	size: PetSize;
	status?: PetStatus;
	avatar?: string;
	color: string;
	description: string;
	characteristics: string[];
	lostDate?: string;
	foundDate?: string;
	address?: string;
	petImages: PetImage[];
}

interface ApiComment {
	id: number;
	content: string;
	author: User;
	createdAt: string;
	updatedAt?: string;
}

interface Article {
	id: number;
	title: string;
	tags?: string[];
	content: string;
	author: User;
	createdAt: string;
	updatedAt?: string;
	views: number;
	comments: ApiComment[];
	images: string[];
	likes: number;
}

type PartnershipArticle = Article;

type Shelter = {
	id: number;
	type: 'shelter';
	name: string;
	logo: string;
	description: string;
	address: string;
	phone: string;
	email: string;
	website: string;
	socialMedia: {
		facebook?: string;
		instagram?: string;
	};
	servicesOffered: 'Adoption' | 'Fostering' | 'Veterinary Services';
	operatingHours: string;
	specialPrograms?: string;
};
