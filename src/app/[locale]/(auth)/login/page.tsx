import { LoginForm } from '@auth';
import Image from 'next/image';

import loginImage from '~/public/img/login.jpg';

const SignUpPage = () => (
	<main className='h-[calc(100vh-60px)] min-h-[600px] w-full'>
		<div className='grid h-full lg:grid-cols-2'>
			<div className='bg-muted hidden lg:block'>
				<Image
					priority
					alt='Login image'
					className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					height='1080'
					placeholder='blur'
					src={loginImage}
					width='1920'
				/>
			</div>
			<div className='relative flex content-center justify-center px-5 md:items-center'>
				<div className='w-full pt-12 md:max-w-[450px] md:pt-0'>
					<LoginForm />
				</div>
			</div>
		</div>
	</main>
);

export default SignUpPage;
