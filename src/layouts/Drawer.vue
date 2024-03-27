<template>
	<q-drawer v-model="drawerOpen">
		<q-list>
			<q-item>
				<q-item-section>
					<q-btn color="primary" label="Home" />
				</q-item-section>
			</q-item>

			<q-item>
				<q-item-section>
					<q-btn color="primary" label="Shorts" />
				</q-item-section>
			</q-item>
		</q-list>
	</q-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDrawerStore } from '../store';

const drawerStore = useDrawerStore();

const drawerOpen = computed(() => drawerStore.drawerOpen);

</script>