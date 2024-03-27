import type { DrawerState } from '@/types';
import { defineStore } from 'pinia';

export const useDrawerStore = defineStore({
	id: 'drawer',
	state: (): DrawerState => ({
		drawerOpen: false,
	}),
	actions: {
		toggleDrawer() {
			this.drawerOpen = !this.drawerOpen;
		},
	},
});
