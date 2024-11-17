import { Cog, PawPrintIcon, LogOut, PlaneIcon } from 'lucide-react';

import {
	HandshakeIcon,
	WellbeingAnimalIcon,
	FoodIcon,
	CuriositiesIcon,
	ContactUsIcon,
	InfoIcon,
	HomeIcon,
	SocialImpactIcon,
	PrivacyIcon,
	HealthIcon,
	HelpIcon,
	LegislationIcon,
	ServiceAnimalIcon,
	TipsIcon,
	PartyIcon,
	InterviewIcon,
	WaterParkIcon,
	ShelterIcon,
	BallIcon,
	SearchIcon,
	SocialIcon,
	LostFoundIcon,
	CalendarIcon,
	AddIcon,
	AcademyIcon,
	RssIcon,
	FavoriteIcon,
	SportsIcon,
	StarIcon,
	PetFriendlyIcon,
	BedIcon,
	GiftIcon,
	DiversityIcon,
	LocationIcon,
	CalendarDayIcon,
} from '@/components/ui/icons';
import { BeachOutlinedIcon } from '@/components/ui/icons/BeachOutlinedIcon';
import type { RoutePath } from '@/navigation';

export interface MenuItem {
	id: number;
	icon: React.FC<React.SVGAttributes<SVGElement>>;
	label: keyof IntlMessages['sidemenu'];
	to?: RoutePath;
	requiresAuth: boolean;
	subMenuItems?: Omit<MenuItem[], 'subMenuItems'>;
}

export const SIDE_MENU_TEST_IDS = {
	overlay: 'side-menu__overlay',
	sidemenu: 'side-menu',
	navItem: 'side-menu__nav-item',
	bottomItem: 'side-menu__bottom-item',
};

export const bottomMenuItems: MenuItem[] = [
	{
		id: 1,
		icon: Cog,
		label: 'account',
		to: '/user/profile',
		requiresAuth: true,
	},
	{
		id: 2,
		icon: LogOut,
		label: 'logout',
		requiresAuth: true,
	},
];

export const mainMenuItems: MenuItem[] = [
	{
		id: 1,
		icon: HomeIcon,
		label: 'home',
		to: '/',
		requiresAuth: false,
	},
	{
		id: 2,
		icon: InfoIcon,
		label: 'about_petinder',
		requiresAuth: false,
		subMenuItems: [
			{
				id: 21,
				icon: SocialImpactIcon,
				label: 'social_impact',
				to: '/',
				requiresAuth: true,
			},
			{
				id: 22,
				icon: ContactUsIcon,
				label: 'contact_us',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 23,
				icon: PrivacyIcon,
				label: 'privacy_policy',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 3,
		icon: RssIcon,
		label: 'blog',
		requiresAuth: true,
		subMenuItems: [
			{
				id: 31,
				icon: WellbeingAnimalIcon,
				label: 'animals_wellbeing',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 32,
				icon: CuriositiesIcon,
				label: 'curiosities',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 33,
				icon: FoodIcon,
				label: 'food',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 34,
				icon: HealthIcon,
				label: 'health',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 35,
				icon: HelpIcon,
				label: 'help',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 36,
				icon: LegislationIcon,
				label: 'legislation',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 37,
				icon: PartyIcon,
				label: 'parties_and_festivities',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 38,
				icon: ServiceAnimalIcon,
				label: 'service_animals',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 39,
				icon: TipsIcon,
				label: 'tips',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 4,
		icon: SportsIcon,
		label: 'sports',
		to: '/',
		requiresAuth: false,
		subMenuItems: [
			{
				id: 41,
				icon: BallIcon,
				label: 'sports_animals',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 5,
		icon: StarIcon,
		label: 'featured',
		to: '/',
		requiresAuth: false,
		subMenuItems: [
			{
				id: 51,
				icon: InterviewIcon,
				label: 'interviews',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 52,
				icon: HandshakeIcon,
				label: 'sponsored',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 6,
		icon: PetFriendlyIcon,
		label: 'pet_friendly',
		to: '/',
		requiresAuth: true,
		subMenuItems: [
			{
				id: 61,
				icon: BeachOutlinedIcon,
				label: 'dog_beaches',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 62,
				icon: BedIcon,
				label: 'pet_friendly_accommodations',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 63,
				icon: WaterParkIcon,
				label: 'water_parks_for_dogs',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 64,
				icon: ShelterIcon,
				label: 'pet_shelters',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 7,
		icon: SocialIcon,
		label: 'social',
		to: '/',
		requiresAuth: false,
		subMenuItems: [
			{
				id: 71,
				icon: GiftIcon,
				label: 'gifts',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 72,
				icon: DiversityIcon,
				label: 'social',
				to: '/',
				requiresAuth: false,
			},
			{
				id: 73,
				icon: PlaneIcon,
				label: 'traveling_with_pets',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 8,
		icon: SearchIcon,
		label: 'search',
		to: '/',
		requiresAuth: false,
		subMenuItems: [
			{
				id: 81,
				icon: LostFoundIcon,
				label: 'lost_found',
				to: '/',
				requiresAuth: false,
			},
		],
	},
	{
		id: 9,
		icon: AcademyIcon,
		label: 'academy',
		to: '/academy',
		requiresAuth: false,
	},
	{
		id: 10,
		icon: AddIcon,
		label: 'add_places',
		to: '/explore',
		requiresAuth: true,
	},
	{
		id: 11,
		icon: CalendarIcon,
		label: 'events',
		to: '/videos',
		requiresAuth: true,
	},
	{
		id: 12,
		icon: FavoriteIcon,
		label: 'favorites',
		to: '/favorites',
		requiresAuth: true,
		subMenuItems: [
			{
				id: 121,
				icon: PawPrintIcon,
				label: 'pets_adoption',
				to: '/',
				requiresAuth: true,
			},
			{
				id: 122,
				icon: LocationIcon,
				label: 'places',
				to: '/',
				requiresAuth: true,
			},
			{
				id: 123,
				icon: CalendarDayIcon,
				label: 'events',
				to: '/',
				requiresAuth: true,
			},
		],
	},
];

export const overlayVariants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.3,
		},
	},
};

export const sideMenuVariants = {
	visible: {
		x: 0,
		transition: {
			type: 'easeIn',
			duration: 0.3,
		},
	},
	hidden: {
		x: '-100%',
		transition: {
			type: 'easeOut',
			duration: 0.3,
		},
	},
};
