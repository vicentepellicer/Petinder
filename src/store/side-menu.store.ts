import { create } from 'zustand';

type State = {
	isOpen: boolean;
	isOpenMenu: number[];
	isOpenSubmenu: number[];
	toggle: () => void;
	toggleMenuAcordion: (id: number) => void;
	toggleSubMenuAcordion: (id: number) => void;
};

export const useSideMenuStore = create<State>((set) => ({
	isOpen: false,
	isOpenMenu: [],
	isOpenSubmenu: [],
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
	toggleMenuAcordion: (id: number) =>
		set((state) => ({
			isOpenMenu: state.isOpenMenu.includes(id) ? [] : [id],
			isOpenSubmenu: [],
		})),
	toggleSubMenuAcordion: (id: number) =>
		set((state) => ({
			isOpenSubmenu: state.isOpenSubmenu.includes(id)
				? state.isOpenSubmenu.filter((item) => item !== id)
				: [...state.isOpenSubmenu, id],
		})),
}));
