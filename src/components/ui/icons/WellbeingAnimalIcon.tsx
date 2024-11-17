import type { SVGAttributes } from 'react';

export const WellbeingAnimalIcon: React.FC<SVGAttributes<SVGElement>> = (
	props,
) => (
	<svg
		fill='none'
		height='20'
		viewBox='0 0 14 20'
		width='14'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path
			d='M4.5095 19.4994C3.40067 19.4994 2.45517 19.1132 1.673 18.3407C0.891 17.5684 0.5 16.6341 0.5 15.5379C0.5 15.0059 0.62725 14.5133 0.88175 14.0599C1.13625 13.6068 1.5795 13.0802 2.2115 12.4802C2.41417 12.3034 2.59333 12.1174 2.749 11.9224C2.90483 11.7276 3.08342 11.5161 3.28475 11.2879C2.48592 10.0648 1.875 8.78877 1.452 7.45994C1.02883 6.1311 0.81725 4.82694 0.81725 3.54744C0.81725 2.69627 0.950583 2.05244 1.21725 1.61594C1.48392 1.17927 1.86667 0.960938 2.3655 0.960938C3.11667 0.960938 3.83042 1.36319 4.50675 2.16769C5.18308 2.97219 5.7225 3.79627 6.125 4.63994C6.33917 5.11427 6.51833 5.60402 6.6625 6.10919C6.80667 6.61435 6.91917 7.12394 7 7.63794C7.08083 7.12394 7.19492 6.61435 7.34225 6.10919C7.48975 5.60402 7.6725 5.11427 7.8905 4.63994C8.27633 3.79627 8.809 2.97219 9.4885 2.16769C10.168 1.36319 10.8833 0.960938 11.6345 0.960938C12.1333 0.960938 12.5161 1.17927 12.7828 1.61594C13.0494 2.05244 13.1827 2.69627 13.1827 3.54744C13.1827 4.82694 12.9712 6.1311 12.548 7.45994C12.125 8.78877 11.5141 10.0648 10.7153 11.2879C10.9166 11.5161 11.0952 11.7276 11.251 11.9224C11.4067 12.1174 11.5858 12.3034 11.7885 12.4802C12.4205 13.0802 12.8637 13.6068 13.1182 14.0599C13.3728 14.5133 13.5 15.0059 13.5 15.5379C13.5 16.6341 13.109 17.5684 12.327 18.3407C11.5448 19.1132 10.5993 19.4994 9.4905 19.4994C8.8045 19.4994 8.21792 19.4064 7.73075 19.2204L7 18.9417L6.26925 19.2204C5.78208 19.4064 5.1955 19.4994 4.5095 19.4994ZM4.548 17.9994C4.91217 17.9994 5.28592 17.952 5.66925 17.8572C6.05258 17.7624 6.41092 17.6233 6.74425 17.4399C6.57375 17.3566 6.41833 17.2229 6.278 17.0389C6.1375 16.8549 6.06725 16.6944 6.06725 16.5572C6.06725 16.4239 6.15667 16.3119 6.3355 16.2214C6.51433 16.1311 6.73583 16.0859 7 16.0859C7.25767 16.0859 7.47433 16.1328 7.65 16.2264C7.82567 16.3199 7.9135 16.4302 7.9135 16.5572C7.9135 16.6944 7.84333 16.8549 7.703 17.0389C7.5625 17.2229 7.407 17.3566 7.2365 17.4399C7.56983 17.6233 7.92817 17.7624 8.3115 17.8572C8.69483 17.952 9.06858 17.9994 9.43275 17.9994C10.1456 17.9994 10.7484 17.7609 11.2413 17.2839C11.7343 16.8071 11.9808 16.2251 11.9808 15.5379C11.9808 15.2123 11.8926 14.9046 11.7163 14.6149C11.5401 14.3251 11.2725 14.0289 10.9135 13.7264C10.693 13.5393 10.5173 13.3771 10.3865 13.2399C10.2558 13.1026 10.0655 12.8769 9.8155 12.5629C9.28717 11.8963 8.85508 11.469 8.51925 11.2812C8.18342 11.0934 7.67383 10.9994 6.9905 10.9994C6.30717 10.9994 5.79492 11.0934 5.45375 11.2812C5.11275 11.469 4.68325 11.8963 4.16525 12.5629C3.91542 12.8769 3.72508 13.1026 3.59425 13.2399C3.46342 13.3771 3.28775 13.5393 3.06725 13.7264C2.70825 14.0289 2.44067 14.3251 2.2645 14.6149C2.08817 14.9046 2 15.2123 2 15.5379C2 16.2251 2.2465 16.8071 2.7395 17.2839C3.23233 17.7609 3.83517 17.9994 4.548 17.9994ZM5.5 14.7494C5.36667 14.7494 5.25 14.6744 5.15 14.5244C5.05 14.3744 5 14.1994 5 13.9994C5 13.7994 5.05 13.6244 5.15 13.4744C5.25 13.3244 5.36667 13.2494 5.5 13.2494C5.63333 13.2494 5.75 13.3244 5.85 13.4744C5.95 13.6244 6 13.7994 6 13.9994C6 14.1994 5.95 14.3744 5.85 14.5244C5.75 14.6744 5.63333 14.7494 5.5 14.7494ZM8.5 14.7494C8.36667 14.7494 8.25 14.6744 8.15 14.5244C8.05 14.3744 8 14.1994 8 13.9994C8 13.7994 8.05 13.6244 8.15 13.4744C8.25 13.3244 8.36667 13.2494 8.5 13.2494C8.63333 13.2494 8.75 13.3244 8.85 13.4744C8.95 13.6244 9 13.7994 9 13.9994C9 14.1994 8.95 14.3744 8.85 14.5244C8.75 14.6744 8.63333 14.7494 8.5 14.7494ZM4.3635 10.1879C4.55967 10.0418 4.776 9.92194 5.0125 9.82844C5.249 9.73477 5.50892 9.6591 5.79225 9.60144C5.75892 8.83994 5.6445 8.0761 5.449 7.30994C5.2535 6.54394 5.00067 5.82952 4.6905 5.16669C4.36733 4.46169 4.00767 3.87194 3.6115 3.39744C3.21533 2.9231 2.82558 2.61927 2.44225 2.48594C2.40892 2.59877 2.37975 2.73919 2.35475 2.90719C2.32975 3.07519 2.31725 3.27902 2.31725 3.51869C2.31725 4.62002 2.49483 5.7476 2.85 6.90144C3.20517 8.05527 3.70967 9.15077 4.3635 10.1879ZM9.6365 10.1879C10.2903 9.15077 10.7948 8.05527 11.15 6.90144C11.5052 5.7476 11.6827 4.62002 11.6827 3.51869C11.6827 3.27902 11.6702 3.07519 11.6453 2.90719C11.6203 2.73919 11.5911 2.59877 11.5577 2.48594C11.1744 2.61927 10.7847 2.9231 10.3885 3.39744C9.99233 3.87194 9.63267 4.46169 9.3095 5.16669C9.0095 5.82952 8.76175 6.54394 8.56625 7.30994C8.37075 8.0761 8.25125 8.83994 8.20775 9.60144C8.47058 9.64877 8.72025 9.72185 8.95675 9.82069C9.19325 9.91935 9.41983 10.0418 9.6365 10.1879Z'
			fill='currentColor'
		/>
	</svg>
);
