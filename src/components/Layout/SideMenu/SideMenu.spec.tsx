import { render } from '@testing-library/react';

import { RootMock } from '@/__mocks__/RootMock';
import { mockedUser } from '@/__mocks__/users';
import { useSideMenuStore, useUserStore } from '@/store';

import { SideMenu } from './SideMenu';
import {
	bottomMenuItems,
	mainMenuItems,
	SIDE_MENU_TEST_IDS,
} from './SideMenu.const';

// TODO: Correct tests

describe('Given SideMenu component', () => {
	beforeEach(() => {
		const header = document.createElement('header');
		header.style.height = '100px';
		document.body.appendChild(header);
	});

	afterEach(() => {
		document.body.innerHTML = '';
	});

	describe('When it is rendered', () => {
		it('Then it should render SideMenu correctly', () => {
			const { getByTestId } = render(<SideMenu />, { wrapper: RootMock });
			const sideMenuElement = getByTestId(SIDE_MENU_TEST_IDS.sidemenu);
			expect(sideMenuElement).to.exist;
		});

		it('Then it should render overlay correctly', () => {
			const { getByTestId } = render(<SideMenu />, { wrapper: RootMock });

			const overlayElement = getByTestId(SIDE_MENU_TEST_IDS.overlay);
			expect(overlayElement).to.exist;
		});

		// describe('And the user is logged in', () => {
		// 	beforeEach(() => {
		// 		useSideMenuStore.setState({ isOpen: true });
		// 		useUserStore.setState({ user: mockedUser });
		// 	});

		// 	it('Then it should render main menu items correctly', () => {
		// 		const { getAllByTestId } = render(<SideMenu />, { wrapper: RootMock });

		// 		const navItems = getAllByTestId(SIDE_MENU_TEST_IDS.navItem);
		// 		expect(navItems.length).toEqual(mainMenuItems.length);
		// 	});

		// 	it('Then it should render bottom menu items correctly', () => {
		// 		const { getAllByTestId } = render(<SideMenu />, { wrapper: RootMock });

		// 		const bottomItems = getAllByTestId(SIDE_MENU_TEST_IDS.bottomItem);
		// 		expect(bottomItems.length).toEqual(bottomMenuItems.length);
		// 	});
		// });

		// describe('And the user is not logged in', () => {
		// 	beforeEach(() => {
		// 		useSideMenuStore.setState({ isOpen: true });
		// 		useUserStore.setState({ user: null });
		// 	});

		// 	it('Then it should render main menu items correctly', () => {
		// 		const { getAllByTestId } = render(<SideMenu />, { wrapper: RootMock });

		// 		const navItems = getAllByTestId(SIDE_MENU_TEST_IDS.navItem);
		// 		const menuItems = mainMenuItems.filter((item) => !item.requiresAuth);
		// 		expect(navItems.length).toEqual(menuItems.length);
		// 	});

		// 	it('Then it should render bottom menu items correctly', () => {
		// 		const { getAllByTestId } = render(<SideMenu />, { wrapper: RootMock });

		// 		const bottomItems = getAllByTestId(SIDE_MENU_TEST_IDS.bottomItem);
		// 		const menuItems = bottomMenuItems.filter((item) => !item.requiresAuth);
		// 		expect(bottomItems.length).toEqual(menuItems.length);
		// 	});
		// });
	});
});
