export const mockArticles: Article[] = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		views: 10,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/blog-img-1.jpg'],
		likes: 10,
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor sit amet',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		updatedAt: '',
		views: 22,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/blog-img-2.jpg'],
		likes: 20,
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor sit amet',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		updatedAt: '',
		views: 32,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/blog-img-2.jpg'],
		likes: 30,
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor sit amet',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		updatedAt: '',
		views: 32,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/blog-img-2.jpg'],
		likes: 30,
	},
];

export const mockPartnershipsArticles: PartnershipArticle[] = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet',
		tags: ['Destacados', 'Partnership', 'Alimentación'],
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		views: 10,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/dog-4.jpg'],
		likes: 10,
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor sit amet',
		tags: ['Destacados', 'Partnership', 'Alimentación'],
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		updatedAt: '',
		views: 22,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/dog-4.jpg'],
		likes: 20,
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor sit amet',
		tags: ['Destacados', 'Partnership', 'Alimentación'],
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		updatedAt: '',
		views: 32,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/dog-4.jpg'],
		likes: 30,
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor sit amet',
		tags: ['Destacados', 'Partnership', 'Alimentación'],
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author: {
			_id: 'asd',
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: '/img/dog-5.jpg',
			email: 'example@example.com',
		},
		createdAt: '04/07/2022',
		updatedAt: '',
		views: 32,
		comments: [
			{
				id: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				author: {
					_id: 'asd',
					name: 'John Doe',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					avatar: '/img/dog-5.jpg',
					email: 'example@example.com',
				},
				createdAt: '04/07/2022',
				updatedAt: '',
			},
		],
		images: ['/img/dog-4.jpg'],
		likes: 30,
	},
];
