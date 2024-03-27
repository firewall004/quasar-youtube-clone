<template>
	<q-header class="header" reveal>
		<q-toolbar class="toolbar">
			<q-btn flat dense round icon="menu" @click="toggleDrawer" class="menu-btn" />

			<q-toolbar-title>
				<q-btn flat dense round class="logo-btn" @click="navigateToHome">
					<div>
						<youtube-icon />
					</div>
				</q-btn>
			</q-toolbar-title>

			<div class="search-container">
				<q-input outlined dense placeholder="Search" class="search-input" v-model="searchQuery" clearable>
					<template v-slot:before>
						<q-icon name="search" />
					</template>
				</q-input>
			</div>
			<q-space />
			<q-btn flat dense round icon="notifications" class="icon-btn" />
			<q-btn flat dense round icon="apps" class="icon-btn" />
			<q-btn flat dense round icon="more_vert" class="icon-btn" />
			<q-avatar>
				<user-icon />
			</q-avatar>
		</q-toolbar>
	</q-header>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import { useDrawerStore } from '../store';
import { ref } from 'vue';

import YoutubeIcon from '../components/icons/Youtube.vue';
import UserIcon from '../components/icons/User.vue';

const searchQuery = ref<string>('');

const toggleDrawer = () => {
	useDrawerStore().toggleDrawer();
};

const navigateToHome = () => {
	const router = useRouter();
	router.push('/');
};

</script>

<style scoped>
.header {
	background-color: #ffffff;
	color: #000;
}

.toolbar {
	padding: 0 16px;
}

.search-container {
	display: flex;
	align-items: center;
}

.search-input {
	color: #606060;
	border-color: #d9d9d9;
	border-radius: 24px;
}

.search-input .q-field__control {
	padding-left: 12px;
}

.search-input .q-field__label {
	display: none;
}

.icon-btn {
	color: #606060;
}
</style>
