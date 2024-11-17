import Image from 'next/image';

import { Container } from '@/components/ui';
import { ResetPasswordForm } from '@/modules/auth';

import resetPasswordImage from '~/public/img/svg/dog-reactions/dog-with-keys.svg';

const ResetPasswordPage = () => (
	<Container
		as='main'
		className='flex h-[calc(100vh-60px)] min-h-[600px] flex-col items-center md:justify-center'>
		<section className='my-12 flex w-full flex-col items-center gap-3 md:mt-0 md:w-[450px]'>
			<Image
				priority
				alt='Login image'
				className='size-[100px] md:size-[150px]'
				src={resetPasswordImage as string}
			/>
			<div className='w-full'>
				<ResetPasswordForm />
			</div>
		</section>
	</Container>
);

export default ResetPasswordPage;
