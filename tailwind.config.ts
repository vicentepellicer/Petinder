import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const tailwindConfig: Config = {
	darkMode: ['class'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1360px',
			},
		},
		colors: {
			black: '#1C1B1F',
			white: '#FAFAFA',
			primary: {
				main: '#973386',
				dark: '#47374F',
			},
			secondary: {
				main: '#EF325A',
				light: '#E37F5B',
			},
			contrast: {
				main: '#F5E0F1',
			},
			gray: {
				dark: '#666666',
				medium: '#C8BFC7',
				light: '#F1F1F1',
			},
			neutral: {
				200: '#e5e5e5',
			},
		},
		extend: {
			screens: {
				narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
				wide: { raw: '(min-aspect-ratio: 3 / 2)' },
				square: { raw: '(min-aspect-ratio: 1 / 1)' },
				'square-15': {
					raw: '(min-aspect-ratio: 1 / 1.15)',
				},
				landscape: {
					raw: '(orientation: landscape)',
				},
				portrait: {
					raw: '(orientation: portrait)',
				},
				xs: { raw: '(max-width: 450px)' },
			},
			backgroundImage: {
				'gradient-primary':
					'linear-gradient(180deg, #973386 0%, #C5326F 55%, #EF325A 100%)',
				'gradient-secondary-main':
					'linear-gradient(90deg, hsla(234, 80%, 88%, 0.3) 0%, hsla(340, 68%, 88%, 0.3) 50%, hsla(342, 72%, 85%, 0.3) 100%)',
				'hero-bg-mobile': "url('/img/svg/hero-bg.svg')",
			},
			borderRadius: {
				3: '12px',
				4: '16px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'small-ping': {
					'100%': { transform: 'scale(1.15)', opacity: '0' },
				},
				'slide-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-collapsible-content-height)' },
				},
				'slide-up': {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'small-ping': 'small-ping 1s ease-out infinite',
				'slide-up': 'slide-up 150ms cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-down': 'slide-down 150ms cubic-bezier(0.4, 0, 0.2, 1)',
			},
		},
	},

	resolve: {
		safelist: [
			{
				pattern: /col-(span|start|end)-\d+/,
			},
			{
				pattern: /row-(span|start|end)-\d+/,
			},
			{
				pattern: /grid-(cols|rows)-\d+/,
			},
			{
				pattern: /w-\[\d+px\]/,
			},
			{
				pattern: /h-\[\d+px\]/,
			},
			{
				pattern:
					/^(bg|text|border|ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
			},
		],
	},
	plugins: [tailwindcssAnimate],
};

export default tailwindConfig;
