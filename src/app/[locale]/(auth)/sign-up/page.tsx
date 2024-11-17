import { SignUpForm } from '@auth';
import Image from 'next/image';

import SignUpImage from '~/public/img/sign-up.jpg';

const SignUpPage = () => (
	<main className='h-[calc(100vh-60px)] min-h-[600px] w-full'>
		<div className='grid h-full w-full lg:grid-cols-2'>
			<div className='custom-scrollbar mx-auto my-12 flex overflow-y-scroll px-5 md:max-w-[470px]'>
				<SignUpForm />
			</div>
			<div className='bg-muted hidden lg:block'>
				<Image
					priority
					alt='Cat image'
					className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					height='1080'
					placeholder='blur'
					src={SignUpImage}
					width='1920'
				/>
			</div>
		</div>
	</main>
);

export default SignUpPage;
