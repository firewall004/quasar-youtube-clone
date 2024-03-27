<template>
	<q-page class="content">
		<q-page-section>
			<div class="q-pa-md">
				<div class="q-col-gutter-md">
					<div class="row">
						<div v-for="(video, index) in videos" :key="index" class="col-md-3 q-mb-md">
							<q-card flat bordered class="rounded-borders">
								<q-img :src="video.thumbnail" :alt="video.title" class="fixed-height" />
								<q-card-section class="title-section">
									<q-card-title>{{ video.title }}</q-card-title>
								</q-card-section>
								<q-card-section class="description-section">
									<q-card-main>{{ video.description }}</q-card-main>
								</q-card-section>
							</q-card>
						</div>
					</div>
				</div>
			</div>
		</q-page-section>
	</q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const videos = ref([
	{
		title: 'Video 1',
		description: 'Description for video 1',
		thumbnail: 'https://cdn.quasar.dev/img/parallax1.jpg',
	},
	{
		title: 'Video 2',
		description: 'Description for video 2',
		thumbnail: 'https://cdn.quasar.dev/img/parallax2.jpg',
	},
	{
		title: 'Video 3',
		description: 'Description for video 3',
		thumbnail: 'https://cdn.quasar.dev/img/mountains.jpg',
	},
	{
		title: 'Video 4',
		description: 'Description for video 4',
		thumbnail: 'https://cdn.quasar.dev/img/quasar.jpg',
	},
	{
		title: 'Video 5',
		description: 'Description for video 1',
		thumbnail: 'https://cdn.quasar.dev/img/parallax1.jpg',
	},
	{
		title: 'Video 6',
		description: 'Description for video 2',
		thumbnail: 'https://cdn.quasar.dev/img/parallax2.jpg',
	},
	{
		title: 'Video 7',
		description: 'Description for video 3',
		thumbnail: 'https://cdn.quasar.dev/img/mountains.jpg',
	},
	{
		title: 'Video 8',
		description: 'Description for video 4',
		thumbnail: 'https://cdn.quasar.dev/img/quasar.jpg',
	},
]);
</script>

<style scoped>
.content {
	padding: 20px;
}

.video-card {
	margin-bottom: 20px;
}

.fixed-height {
	height: 200px;
}

.title-section {
	padding: 10px;
}

.description-section {
	padding: 10px;
	opacity: 0.6;
}
</style>