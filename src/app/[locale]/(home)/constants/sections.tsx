import { mockArticles, mockPartnershipsArticles } from '@/__mocks__/articles';
import { mockPets, mockLostFoundPets } from '@/__mocks__/pets';
import { mockShelters } from '@/__mocks__/shelters';

import {
	BlogSection,
	LostFoundSection,
	PartnershipsSection,
	ServicesPlacesSection,
	UrgentSection,
} from '../components/sections';

type HomePageSection = {
	component: React.ReactNode;
	title: keyof IntlMessages['home']['sections'];
	action?: string;
	id: 'urgent' | 'lost' | 'shelters' | 'blog' | 'partnerships';
	icon?: React.FC<React.SVGAttributes<SVGAElement>>;
	className?: string;
};

export const homePageSections: HomePageSection[] = [
	{
		component: <UrgentSection data={mockPets} />,
		title: 'urgent_section_title',
		id: 'urgent',
	},
	{
		component: <LostFoundSection data={mockLostFoundPets} />,
		title: 'lost_found_section_title',
		id: 'lost',
	},
	{
		component: <ServicesPlacesSection data={mockShelters} />,
		title: 'services_places_section_title',
		id: 'shelters',
	},
	{
		component: <BlogSection data={mockArticles} />,
		title: 'community_blog_section_title',
		id: 'blog',
	},
	{
		component: <PartnershipsSection data={mockPartnershipsArticles} />,
		title: 'partnerships_section_title',
		id: 'partnerships',
	},
];
