import type { SVGAttributes } from 'react';

export const DiversityIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
	<svg
		fill='none'
		height='19'
		viewBox='0 0 24 19'
		width='24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path
			d='M11.6152 3.65009C12.3037 2.76409 13.1182 2.07943 14.0585 1.59609C14.9988 1.11276 15.9844 0.871094 17.0152 0.871094C18.7097 0.871094 20.15 1.46418 21.336 2.65034C22.5222 3.83634 23.1152 5.27659 23.1152 6.97109C23.1152 7.39426 23.0687 7.81193 22.9757 8.22409C22.8827 8.63626 22.7561 9.03718 22.596 9.42684C22.5255 9.63968 22.3992 9.80376 22.217 9.91909C22.035 10.0346 21.8387 10.0596 21.628 9.99409C21.4297 9.94159 21.2789 9.82751 21.1757 9.65184C21.0726 9.47618 21.0562 9.29034 21.1267 9.09434C21.2767 8.75834 21.3957 8.41343 21.4835 8.05959C21.5713 7.70576 21.6152 7.34293 21.6152 6.97109C21.6152 5.68776 21.1694 4.60026 20.2777 3.70859C19.3861 2.81693 18.2986 2.37109 17.0152 2.37109C16.0791 2.37109 15.2281 2.63484 14.4622 3.16234C13.6962 3.69001 13.0068 4.31343 12.394 5.03259C12.1863 5.28393 11.9267 5.40959 11.6152 5.40959C11.3037 5.40959 11.0442 5.28393 10.8365 5.03259C10.2338 4.31343 9.54632 3.69001 8.77398 3.16234C8.00165 2.63484 7.14873 2.37109 6.21523 2.37109C4.9319 2.37109 3.8444 2.81693 2.95273 3.70859C2.06107 4.60026 1.61523 5.68776 1.61523 6.97109C1.61523 7.34126 1.65757 7.70526 1.74223 8.06309C1.82673 8.42109 1.94398 8.76801 2.09398 9.10384C2.14798 9.28968 2.12657 9.46784 2.02973 9.63834C1.9329 9.80884 1.79107 9.92176 1.60423 9.97709C1.3924 10.0463 1.19707 10.0267 1.01823 9.91834C0.839401 9.81001 0.711484 9.64943 0.634484 9.43659C0.474318 9.04676 0.347734 8.64476 0.254734 8.23059C0.161734 7.81643 0.115234 7.39659 0.115234 6.97109C0.115234 5.27659 0.708318 3.83634 1.89448 2.65034C3.08048 1.46418 4.52073 0.871094 6.21523 0.871094C7.24607 0.871094 8.23165 1.11276 9.17198 1.59609C10.1123 2.07943 10.9267 2.76409 11.6152 3.65009ZM0.980734 18.8903C0.735568 18.8903 0.529984 18.8074 0.363984 18.6416C0.198151 18.4756 0.115234 18.27 0.115234 18.0248V17.6711C0.115234 17.1929 0.295734 16.7733 0.656734 16.4123C1.01757 16.0515 1.5089 15.7826 2.13073 15.6056C2.54473 15.4788 2.91873 15.4086 3.25273 15.3951C3.58673 15.3816 3.94732 15.3915 4.33448 15.4248C4.48765 15.4398 4.59873 15.5106 4.66773 15.6371C4.73657 15.7636 4.74407 15.8954 4.69023 16.0326C4.59923 16.2608 4.5319 16.4948 4.48823 16.7346C4.44473 16.9743 4.42298 17.2217 4.42298 17.4768V17.9863C4.42298 18.2425 4.33632 18.4572 4.16298 18.6303C3.98982 18.8037 3.77523 18.8903 3.51923 18.8903H0.980734ZM6.11523 17.9863V17.5153C6.11523 16.5602 6.62348 15.7942 7.63998 15.2173C8.65648 14.6403 9.98248 14.3518 11.618 14.3518C13.2687 14.3518 14.5976 14.6403 15.6047 15.2173C16.6117 15.7942 17.1152 16.5602 17.1152 17.5153V17.9863C17.1152 18.2425 17.0286 18.4572 16.8552 18.6303C16.6821 18.8037 16.4674 18.8903 16.2112 18.8903H7.02298C6.76265 18.8903 6.54632 18.8037 6.37398 18.6303C6.20148 18.4572 6.11523 18.2425 6.11523 17.9863ZM19.7112 18.8903C19.4552 18.8903 19.2407 18.8037 19.0675 18.6303C18.8942 18.4572 18.8075 18.2425 18.8075 17.9863V17.4768C18.8075 17.2217 18.7857 16.9743 18.7422 16.7346C18.6986 16.4948 18.6312 16.2608 18.5402 16.0326C18.4864 15.8954 18.4939 15.7636 18.5627 15.6371C18.6317 15.5106 18.7428 15.4398 18.896 15.4248C19.2832 15.3915 19.6437 15.3816 19.9777 15.3951C20.3117 15.4086 20.6857 15.4788 21.0997 15.6056C21.7216 15.7826 22.2129 16.0515 22.5737 16.4123C22.9347 16.7733 23.1152 17.1929 23.1152 17.6711V18.0248C23.1152 18.27 23.0323 18.4756 22.8665 18.6416C22.7005 18.8074 22.4949 18.8903 22.2497 18.8903H19.7112ZM11.614 15.8518C10.575 15.8518 9.68215 15.9897 8.93548 16.2653C8.18865 16.541 7.77423 16.8808 7.69223 17.2846V17.3903H15.5537V17.2846C15.4614 16.8808 15.046 16.541 14.3075 16.2653C13.5692 15.9897 12.6713 15.8518 11.614 15.8518ZM3.87498 14.4191C3.40432 14.4191 3.0014 14.2515 2.66623 13.9163C2.3309 13.5812 2.16323 13.1783 2.16323 12.7076C2.16323 12.2308 2.3309 11.8279 2.66623 11.4991C3.0014 11.1703 3.40432 11.0058 3.87498 11.0058C4.35182 11.0058 4.75623 11.1703 5.08823 11.4991C5.4204 11.8279 5.58648 12.2308 5.58648 12.7076C5.58648 13.1783 5.4204 13.5812 5.08823 13.9163C4.75623 14.2515 4.35182 14.4191 3.87498 14.4191ZM19.3652 14.4191C18.8986 14.4191 18.4967 14.2515 18.1595 13.9163C17.8223 13.5812 17.6537 13.1783 17.6537 12.7076C17.6537 12.2308 17.8223 11.8279 18.1595 11.4991C18.4967 11.1703 18.8992 11.0058 19.367 11.0058C19.8492 11.0058 20.2547 11.1703 20.5835 11.4991C20.9123 11.8279 21.0767 12.2308 21.0767 12.7076C21.0767 13.1783 20.9127 13.5812 20.5847 13.9163C20.2567 14.2515 19.8502 14.4191 19.3652 14.4191ZM11.6187 13.6018C10.8984 13.6018 10.2851 13.3494 9.77874 12.8446C9.2724 12.3399 9.01923 11.727 9.01923 11.0058C9.01923 10.2702 9.27157 9.65359 9.77623 9.15609C10.2811 8.65843 10.8941 8.40959 11.6152 8.40959C12.3507 8.40959 12.9673 8.65809 13.465 9.15509C13.9625 9.65193 14.2112 10.2677 14.2112 11.0023C14.2112 11.7225 13.9628 12.3358 13.466 12.8423C12.969 13.3487 12.3532 13.6018 11.6187 13.6018ZM11.6152 9.90959C11.3127 9.90959 11.0544 10.0147 10.8402 10.2248C10.6261 10.4348 10.519 10.6952 10.519 11.0058C10.519 11.3083 10.6261 11.5667 10.8402 11.7808C11.0544 11.9948 11.3143 12.1018 11.62 12.1018C11.9258 12.1018 12.1842 11.9948 12.395 11.7808C12.606 11.5667 12.7115 11.3067 12.7115 11.0008C12.7115 10.6952 12.6064 10.4368 12.3962 10.2258C12.1861 10.015 11.9257 9.90959 11.6152 9.90959Z'
			fill='currentColor'
		/>
	</svg>
);
