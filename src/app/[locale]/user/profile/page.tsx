import { UserProfileForm } from '@user';

import { Container } from '@/components/ui';

const UserProfilePage = () => (
	<main className='bg-gray-light py-5'>
		<Container>
			<UserProfileForm />
		</Container>
	</main>
);

export default UserProfilePage;
