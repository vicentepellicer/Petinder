import type { SVGAttributes } from 'react';

export const DogQuestionIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
	<svg
		fill='none'
		height='258'
		viewBox='0 0 304 258'
		width='304'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path
			d='M270.061 41.0081V40.5229C270.073 38.271 270.284 36.4794 270.692 35.1481C271.113 33.8169 271.707 32.7469 272.474 31.9382C273.241 31.1171 274.176 30.3644 275.277 29.6801C276.032 29.2073 276.706 28.691 277.3 28.1312C277.907 27.5589 278.383 26.9243 278.73 26.2276C279.076 25.5185 279.249 24.7284 279.249 23.8575C279.249 22.8746 279.02 22.0224 278.563 21.3008C278.105 20.5792 277.486 20.0193 276.706 19.6212C275.939 19.2231 275.079 19.024 274.126 19.024C273.247 19.024 272.412 19.2169 271.62 19.6025C270.841 19.9758 270.191 20.5481 269.671 21.3195C269.164 22.0784 268.879 23.0426 268.817 24.2121H262.209C262.271 21.8482 262.84 19.87 263.917 18.2775C265.006 16.685 266.441 15.4906 268.223 14.6944C270.018 13.8981 271.998 13.5 274.163 13.5C276.527 13.5 278.606 13.9168 280.4 14.7504C282.207 15.5839 283.611 16.7721 284.614 18.3148C285.629 19.8451 286.136 21.6616 286.136 23.7642C286.136 25.1825 285.907 26.4516 285.449 27.5713C285.004 28.691 284.366 29.6863 283.537 30.5572C282.708 31.4281 281.724 32.2057 280.586 32.89C279.583 33.5121 278.761 34.159 278.117 34.8309C277.486 35.5027 277.016 36.2928 276.706 37.201C276.409 38.0968 276.255 39.2041 276.242 40.5229V41.0081H270.061ZM273.291 52.6533C272.177 52.6533 271.218 52.2552 270.414 51.4589C269.609 50.6627 269.207 49.6922 269.207 48.5476C269.207 47.4279 269.609 46.4699 270.414 45.6736C271.218 44.8774 272.177 44.4792 273.291 44.4792C274.392 44.4792 275.345 44.8774 276.149 45.6736C276.966 46.4699 277.375 47.4279 277.375 48.5476C277.375 49.3065 277.183 49.997 276.799 50.6191C276.428 51.2412 275.933 51.7388 275.314 52.1121C274.708 52.4729 274.033 52.6533 273.291 52.6533Z'
			fill='currentColor'
		/>
		<path
			d='M4.0477 228.082C7.79138 221.192 16.0986 198.42 17.0341 187.91C17.6198 182.07 17.7354 173.78 17.1513 162.218C16.6294 153.075 18.6102 145.507 22.6964 139.844C-1.28683 124.493 5.33463 97.4046 5.33463 97.4046C3.13882 121.997 19.3367 133.362 25.3651 136.71C31.5789 130.502 41.044 127.455 52.9541 128.235C81.1509 129.987 166.911 139.563 188.556 133.489C207.119 128.282 207.783 111.222 207.596 106.469C196.5 101.041 198.558 89.6561 200.841 78.603C203.181 67.2762 213.361 44.8549 224.125 45.9056C224.125 45.9056 224.239 45.9056 224.415 45.9514C224.509 45.8493 224.57 45.7931 224.592 45.7887C225.178 45.6717 225.645 45.6717 226.23 45.5548C229.473 45.1212 232.551 45.6333 235.442 46.8246C238.34 46.277 241.346 47.3262 243.547 49.293C245.53 51.1132 247.834 54.0093 249.041 58.2668C251.715 61.74 254.034 65.5374 255.95 69.1453C262.306 81.3052 276.389 83.4925 286.187 83.7322C286.759 83.053 287.6 82.7067 288.592 82.8088C290.814 83.0426 295.026 83.1595 297.717 83.2764C299.59 83.3933 301.109 85.0286 300.994 86.8962C300.877 87.8299 300.76 88.7652 300.293 89.9328C299.845 91.2736 299.249 92.4353 298.537 93.3705C292.08 107.138 277.673 109.739 265.667 109.18L265.778 109.317C265.778 109.317 265.178 109.304 264.241 109.098C254.446 108.435 246.59 105.815 246.59 105.815C246.59 105.815 250.427 134.721 247.605 169.247C247.78 169.196 247.938 169.167 248.075 169.167C250.766 169.284 254.159 170.92 254.159 170.92C254.159 170.92 272.879 179.911 276.739 202.1C277.091 203.969 277.208 205.954 277.091 207.94C277.091 209.224 276.155 210.392 274.868 210.626C273.581 210.859 271.943 211.093 270.656 211.326C269.252 211.559 267.848 210.975 267.029 209.807C264.69 206.421 259.074 199.297 249.714 195.444C249.714 195.444 247.183 195.265 244.314 194.174C243.329 199.673 242.295 204.712 241.208 209.285C237.816 223.299 234.188 232.874 231.614 238.596C230.912 240.115 230.327 241.399 229.858 242.333C229.04 243.851 227.401 244.902 225.646 244.785L220.03 244.551C217.807 244.434 216.052 242.682 216.052 240.464C216.052 215.24 210.436 202.393 210.436 202.393C202.363 206.948 164.923 206.597 127.366 197.255C111.223 193.246 98.0382 191.223 87.4062 190.344C89.3306 197.847 94.2411 219.647 92.0572 239.369C91.823 241.238 90.3018 242.639 88.4307 242.639H82.1132C80.3577 242.639 78.8365 241.472 78.3695 239.837C76.0299 231.779 68.7753 208.19 59.064 200.132C56.3864 197.899 55.1973 195.476 53.9504 193.902C53.1349 192.872 51.7235 192.517 50.5196 193.043C50.5062 193.049 50.4988 193.052 50.4988 193.052C50.4988 193.052 48.2763 195.271 45.8196 199.943C45.5853 200.527 45.234 201.11 45.0012 201.578C31.8976 226.219 20.081 236.495 14.1133 240.465C11.7737 241.984 8.84848 241.633 6.8588 239.766L5.57187 238.598C2.88086 235.795 2.17957 231.591 4.05066 228.088L4.0477 228.082Z'
			fill='currentColor'
			stroke='currentColor'
			strokeMiterlimit='10'
			strokeWidth='5.80049'
		/>
	</svg>
);
