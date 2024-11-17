import type { SVGAttributes } from 'react';

export const FilterIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
	<svg
		fill='none'
		height='14'
		viewBox='0 0 14 14'
		width='14'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path
			d='M7.25421 13.7923C7.10185 13.7923 6.97282 13.7404 6.86712 13.6365C6.76129 13.5327 6.70837 13.4041 6.70837 13.2507V9.75065C6.70837 9.59718 6.7599 9.46857 6.86296 9.36482C6.96601 9.26093 7.09365 9.20898 7.24587 9.20898C7.39823 9.20898 7.52726 9.26093 7.63296 9.36482C7.73879 9.46857 7.79171 9.59718 7.79171 9.75065V10.959H13.2442C13.3974 10.959 13.5269 11.0105 13.6327 11.1136C13.7387 11.2166 13.7917 11.3443 13.7917 11.4965C13.7917 11.6488 13.7398 11.7779 13.6359 11.8836C13.5321 11.9894 13.4035 12.0423 13.25 12.0423H7.79171V13.2507C7.79171 13.4041 7.74018 13.5327 7.63712 13.6365C7.53407 13.7404 7.40643 13.7923 7.25421 13.7923ZM0.750041 12.0423C0.596568 12.0423 0.467957 11.9908 0.364207 11.8877C0.260318 11.7847 0.208374 11.657 0.208374 11.5048C0.208374 11.3525 0.260318 11.2234 0.364207 11.1177C0.467957 11.0119 0.596568 10.959 0.750041 10.959H4.25004C4.40351 10.959 4.53212 11.0105 4.63587 11.1136C4.73976 11.2166 4.79171 11.3443 4.79171 11.4965C4.79171 11.6488 4.73976 11.7779 4.63587 11.8836C4.53212 11.9894 4.40351 12.0423 4.25004 12.0423H0.750041ZM3.75421 9.29232C3.60185 9.29232 3.47282 9.24037 3.36712 9.13648C3.26129 9.03273 3.20837 8.90412 3.20837 8.75065V7.54232H0.755457C0.602541 7.54232 0.473166 7.49079 0.367332 7.38773C0.26136 7.28468 0.208374 7.15704 0.208374 7.00482C0.208374 6.85246 0.260318 6.72343 0.364207 6.61773C0.467957 6.5119 0.596568 6.45898 0.750041 6.45898H3.20837V5.25065C3.20837 5.09718 3.2599 4.96857 3.36296 4.86482C3.46601 4.76093 3.59365 4.70898 3.74587 4.70898C3.89824 4.70898 4.02726 4.76093 4.13296 4.86482C4.23879 4.96857 4.29171 5.09718 4.29171 5.25065V8.75065C4.29171 8.90412 4.24018 9.03273 4.13712 9.13648C4.03407 9.24037 3.90643 9.29232 3.75421 9.29232ZM6.75004 7.54232C6.59657 7.54232 6.46796 7.49079 6.36421 7.38773C6.26032 7.28468 6.20837 7.15704 6.20837 7.00482C6.20837 6.85246 6.26032 6.72343 6.36421 6.61773C6.46796 6.5119 6.59657 6.45898 6.75004 6.45898H13.25C13.4035 6.45898 13.5321 6.51051 13.6359 6.61357C13.7398 6.71662 13.7917 6.84426 13.7917 6.99648C13.7917 7.14885 13.7398 7.27787 13.6359 7.38357C13.5321 7.4894 13.4035 7.54232 13.25 7.54232H6.75004ZM9.75421 4.79232C9.60185 4.79232 9.47282 4.74037 9.36712 4.63649C9.26129 4.53273 9.20837 4.40412 9.20837 4.25065V0.750651C9.20837 0.597179 9.2599 0.468567 9.36296 0.364817C9.46601 0.260928 9.59365 0.208984 9.74587 0.208984C9.89824 0.208984 10.0273 0.260928 10.133 0.364817C10.2388 0.468567 10.2917 0.597179 10.2917 0.750651V1.95898H13.25C13.4035 1.95898 13.5321 2.01051 13.6359 2.11357C13.7398 2.21662 13.7917 2.34426 13.7917 2.49648C13.7917 2.64885 13.7398 2.77787 13.6359 2.88357C13.5321 2.9894 13.4035 3.04232 13.25 3.04232H10.2917V4.25065C10.2917 4.40412 10.2402 4.53273 10.1371 4.63649C10.0341 4.74037 9.90643 4.79232 9.75421 4.79232ZM0.750041 3.04232C0.596568 3.04232 0.467957 2.99079 0.364207 2.88773C0.260318 2.78468 0.208374 2.65704 0.208374 2.50482C0.208374 2.35246 0.260318 2.22343 0.364207 2.11773C0.467957 2.0119 0.596568 1.95898 0.750041 1.95898H7.25004C7.40351 1.95898 7.53212 2.01051 7.63587 2.11357C7.73976 2.21662 7.79171 2.34426 7.79171 2.49648C7.79171 2.64885 7.73976 2.77787 7.63587 2.88357C7.53212 2.9894 7.40351 3.04232 7.25004 3.04232H0.750041Z'
			fill='currentColor'
		/>
	</svg>
);
