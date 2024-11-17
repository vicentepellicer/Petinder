import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'production') {
	nextConfig.compiler = {
		reactRemoveProperties: { properties: ['^data-testid$'] },
	};
}

if (process.env.NODE_ENV === 'development') {
	nextConfig.productionBrowserSourceMaps = false;
	nextConfig.optimizeFonts = false;
}

export default withNextIntl(nextConfig);
