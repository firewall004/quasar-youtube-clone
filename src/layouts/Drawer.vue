<template>
	<q-drawer v-model="drawerOpen">
		<q-list>
			<q-item v-for="(item, index) in drawerItems" :key="index">
				<q-item-section>
					<q-btn :color="item.color" :label="item.label" />
				</q-item-section>
			</q-item>
		</q-list>
	</q-drawer>
</template>

<script setup lang="ts">

import { useDrawerStore } from '../store';
import { computed } from 'vue';

const drawerStore = useDrawerStore();
const drawerOpen = computed(() => drawerStore.drawerOpen);

const drawerItems = computed(() => [
	{ label: 'Home', color: 'primary', icon: 'home' },
	{ label: 'Shorts', color: 'primary', icon: 'watch_later' },
]);

</script>