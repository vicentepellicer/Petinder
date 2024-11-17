import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getCurrentUser } from '@/api/instance';

type UserStoreState = {
	user: User | null;
	setUser: (user: User) => void;
	getUser: () => Promise<void>;
};

export const useUserStore = create<UserStoreState>()(
	devtools((set) => ({
		user: null,
		getUser: async () => {
			await getCurrentUser()
				.then((response) => {
					if (response.status === 200) {
						set({ user: response.data.user });
					}
				})
				.catch(() => {
					set({ user: null });
				});
		},
		setUser: (user) => set({ user }),
	})),
);
