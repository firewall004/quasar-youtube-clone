import { defineStore } from 'pinia';

export const useDrawerStore = defineStore({
	id: 'drawer',
	state: () => ({
		drawerOpen: false,
	}),
	actions: {
		toggleDrawer() {
			this.drawerOpen = !this.drawerOpen;
		},
	},
});
