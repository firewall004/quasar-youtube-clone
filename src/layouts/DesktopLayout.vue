<template>
	<q-layout view="hHh lpR fFf">
		<Header />
		<Drawer />
		<Page />
	</q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import Drawer from './Drawer.vue';
import Page from './Page.vue';

export default defineComponent({
	name: 'DesktopLayout',
	components: {
		Header,
		Drawer,
		Page,
	},
});
</script>