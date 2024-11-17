import type { SVGAttributes } from 'react';

export const FishIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
	<svg
		fill='none'
		height='21'
		viewBox='0 0 32 21'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path
			d='M7.7018 10.8934C7.7018 12.5949 5.14894 12.5949 5.14894 10.8934C5.14894 9.19064 7.7018 9.19064 7.7018 10.8934Z'
			fill='currentColor'
		/>
		<path
			clipRule='evenodd'
			d='M11.8002 2.67037L8.8262 3.60391C8.24608 3.65059 6.79909 3.96399 6.25231 4.1707C-0.695873 6.83128 -0.749219 17.2802 6.0856 20.0675C8.3661 20.9944 11.1667 20.8677 13.4672 20.1675L15.6944 20.4142C15.8877 20.4409 16.0877 20.4609 16.2877 20.4809C16.9478 20.5543 17.6148 20.621 18.2749 20.681C18.3082 20.6842 18.3444 20.6878 18.383 20.6917C18.7476 20.7281 19.3265 20.786 19.6219 20.7076C20.1087 20.5743 20.3687 20.1475 20.3887 19.6741C20.4021 19.494 20.3821 19.3073 20.3554 19.1273C20.302 18.7405 20.2087 18.3405 20.1153 17.9604C20.0553 17.7204 19.9953 17.4802 19.9286 17.2469L19.7619 16.6334C20.6288 15.9133 21.4556 15.1131 22.1824 14.2596C22.2222 14.2108 22.2663 14.1582 22.3133 14.102C22.4401 13.9507 22.5882 13.7739 22.7292 13.5794C23.4427 14.3396 24.4829 15.0264 25.0297 15.3731C25.9499 15.9533 27.3236 16.6801 28.4371 16.6801C29.1173 16.6801 29.7641 16.5001 30.2442 15.9933C31.0309 15.1655 31.0112 13.7485 30.9953 12.5978C30.9931 12.4415 30.991 12.2901 30.991 12.1458C30.991 12.0014 30.9931 11.8501 30.9953 11.6938C31.0112 10.543 31.0309 9.12604 30.2442 8.29827C29.7641 7.79816 29.1173 7.61145 28.4371 7.61145C27.3236 7.61145 25.9499 8.34495 25.0231 8.93174C24.4763 9.27848 23.4627 9.9653 22.7492 10.7121C22.5973 10.4951 22.4366 10.3002 22.303 10.1381C22.2724 10.101 22.2431 10.0656 22.2158 10.032C21.1822 8.79171 19.9486 7.67147 18.6417 6.72459C18.6726 6.6363 18.7041 6.54688 18.736 6.4565C19.1225 5.35909 19.5597 4.11785 19.6952 2.99044C19.7819 2.30363 19.7286 1.49012 19.0218 1.13004C18.4638 0.847916 17.4401 1.0904 16.7988 1.24234C16.758 1.252 16.7187 1.2613 16.6812 1.27007C15.6344 1.51679 14.5875 1.82352 13.5539 2.13026C12.9671 2.3103 12.3803 2.49033 11.8002 2.67037ZM22.9093 12.1658C22.9093 11.4123 26.6701 8.56499 28.4371 8.56499C30.0662 8.56499 30.0574 9.93074 30.0461 11.6957C30.0451 11.8453 30.0442 11.9977 30.0442 12.1524C30.0442 12.3077 30.0451 12.4606 30.0461 12.6107C30.0574 14.3809 30.0661 15.7466 28.4371 15.7466C26.6701 15.7466 22.9093 12.9193 22.9093 12.1658ZM11.6335 12.1591C11.6335 15.3331 9.83309 18.0804 7.19918 19.454C0.197656 17.4136 0.197656 6.89796 7.19918 4.86419C9.83309 6.23115 11.6335 8.98509 11.6335 12.1591ZM17.9349 9.65857C17.1547 9.1918 13.8673 10.3454 12.687 10.7855C12.7537 11.2322 12.7871 11.6923 12.7871 12.1591C12.7871 12.4192 12.7737 12.6792 12.7537 12.9326C13.1872 13.386 14.0874 14.2529 14.7742 14.3729C15.7077 14.533 18.8951 10.232 17.9349 9.65857ZM14.7408 8.88506C13.9807 9.10511 13.2005 9.3585 12.447 9.63856C11.8669 7.56478 10.5999 5.77772 8.89288 4.55745C9.15961 4.53745 9.43967 4.52411 9.7264 4.52411C16.9813 4.52411 22.4492 11.419 22.4492 12.1591C22.4492 12.8993 16.7946 19.8074 9.7264 19.8074C9.43967 19.8074 9.16628 19.7941 8.89288 19.7741C10.6799 18.4805 12.0002 16.5667 12.527 14.3463C13.1471 14.8997 13.8873 15.3998 14.5675 15.5198C15.3143 15.6465 15.9878 15.1798 16.5079 14.7063C17.0147 14.2529 17.4748 13.6994 17.8748 13.1527C18.6083 12.1458 19.9153 10.1387 18.8817 8.96508C18.735 8.79838 18.7217 8.78504 18.5283 8.67169C17.5481 8.08489 15.7677 8.59167 14.7408 8.88506ZM19.3818 19.7941C19.2151 19.8341 17.3881 19.6474 15.8011 19.474C16.9346 18.9273 18.0149 18.2538 19.0084 17.5069C19.2618 18.4138 19.5819 19.7408 19.3818 19.7941ZM17.9015 5.97109C16.1278 4.81751 14.1607 3.95065 12.0869 3.57057C14.6875 2.75706 18.1349 1.75017 18.595 1.97689C19.1284 2.25028 18.375 4.63747 17.9015 5.97109Z'
			fill='currentColor'
			fillRule='evenodd'
		/>
		<path
			d='M7.7018 10.8934C7.7018 12.5949 5.14894 12.5949 5.14894 10.8934C5.14894 9.19064 7.7018 9.19064 7.7018 10.8934Z'
			stroke='currentColor'
			strokeWidth='0.3'
		/>
		<path
			clipRule='evenodd'
			d='M11.8002 2.67037L8.8262 3.60391C8.24608 3.65059 6.79909 3.96399 6.25231 4.1707C-0.695873 6.83128 -0.749219 17.2802 6.0856 20.0675C8.3661 20.9944 11.1667 20.8677 13.4672 20.1675L15.6944 20.4142C15.8877 20.4409 16.0877 20.4609 16.2877 20.4809C16.9478 20.5543 17.6148 20.621 18.2749 20.681C18.3082 20.6842 18.3444 20.6878 18.383 20.6917C18.7476 20.7281 19.3265 20.786 19.6219 20.7076C20.1087 20.5743 20.3687 20.1475 20.3887 19.6741C20.4021 19.494 20.3821 19.3073 20.3554 19.1273C20.302 18.7405 20.2087 18.3405 20.1153 17.9604C20.0553 17.7204 19.9953 17.4802 19.9286 17.2469L19.7619 16.6334C20.6288 15.9133 21.4556 15.1131 22.1824 14.2596C22.2222 14.2108 22.2663 14.1582 22.3133 14.102C22.4401 13.9507 22.5882 13.7739 22.7292 13.5794C23.4427 14.3396 24.4829 15.0264 25.0297 15.3731C25.9499 15.9533 27.3236 16.6801 28.4371 16.6801C29.1173 16.6801 29.7641 16.5001 30.2442 15.9933C31.0309 15.1655 31.0112 13.7485 30.9953 12.5978C30.9931 12.4415 30.991 12.2901 30.991 12.1458C30.991 12.0014 30.9931 11.8501 30.9953 11.6938C31.0112 10.543 31.0309 9.12604 30.2442 8.29827C29.7641 7.79816 29.1173 7.61145 28.4371 7.61145C27.3236 7.61145 25.9499 8.34495 25.0231 8.93174C24.4763 9.27848 23.4627 9.9653 22.7492 10.7121C22.5973 10.4951 22.4366 10.3002 22.303 10.1381C22.2724 10.101 22.2431 10.0656 22.2158 10.032C21.1822 8.79171 19.9486 7.67147 18.6417 6.72459C18.6726 6.6363 18.7041 6.54688 18.736 6.4565C19.1225 5.35909 19.5597 4.11785 19.6952 2.99044C19.7819 2.30363 19.7286 1.49012 19.0218 1.13004C18.4638 0.847916 17.4401 1.0904 16.7988 1.24234C16.758 1.252 16.7187 1.2613 16.6812 1.27007C15.6344 1.51679 14.5875 1.82352 13.5539 2.13026C12.9671 2.3103 12.3803 2.49033 11.8002 2.67037ZM22.9093 12.1658C22.9093 11.4123 26.6701 8.56499 28.4371 8.56499C30.0662 8.56499 30.0574 9.93074 30.0461 11.6957C30.0451 11.8453 30.0442 11.9977 30.0442 12.1524C30.0442 12.3077 30.0451 12.4606 30.0461 12.6107C30.0574 14.3809 30.0661 15.7466 28.4371 15.7466C26.6701 15.7466 22.9093 12.9193 22.9093 12.1658ZM11.6335 12.1591C11.6335 15.3331 9.83309 18.0804 7.19918 19.454C0.197656 17.4136 0.197656 6.89796 7.19918 4.86419C9.83309 6.23115 11.6335 8.98509 11.6335 12.1591ZM17.9349 9.65857C17.1547 9.1918 13.8673 10.3454 12.687 10.7855C12.7537 11.2322 12.7871 11.6923 12.7871 12.1591C12.7871 12.4192 12.7737 12.6792 12.7537 12.9326C13.1872 13.386 14.0874 14.2529 14.7742 14.3729C15.7077 14.533 18.8951 10.232 17.9349 9.65857ZM14.7408 8.88506C13.9807 9.10511 13.2005 9.3585 12.447 9.63856C11.8669 7.56478 10.5999 5.77772 8.89288 4.55745C9.15961 4.53745 9.43967 4.52411 9.7264 4.52411C16.9813 4.52411 22.4492 11.419 22.4492 12.1591C22.4492 12.8993 16.7946 19.8074 9.7264 19.8074C9.43967 19.8074 9.16628 19.7941 8.89288 19.7741C10.6799 18.4805 12.0002 16.5667 12.527 14.3463C13.1471 14.8997 13.8873 15.3998 14.5675 15.5198C15.3143 15.6465 15.9878 15.1798 16.5079 14.7063C17.0147 14.2529 17.4748 13.6994 17.8748 13.1527C18.6083 12.1458 19.9153 10.1387 18.8817 8.96508C18.735 8.79838 18.7217 8.78504 18.5283 8.67169C17.5481 8.08489 15.7677 8.59167 14.7408 8.88506ZM19.3818 19.7941C19.2151 19.8341 17.3881 19.6474 15.8011 19.474C16.9346 18.9273 18.0149 18.2538 19.0084 17.5069C19.2618 18.4138 19.5819 19.7408 19.3818 19.7941ZM17.9015 5.97109C16.1278 4.81751 14.1607 3.95065 12.0869 3.57057C14.6875 2.75706 18.1349 1.75017 18.595 1.97689C19.1284 2.25028 18.375 4.63747 17.9015 5.97109Z'
			fillRule='evenodd'
			stroke='currentColor'
			strokeWidth='0.3'
		/>
	</svg>
);
