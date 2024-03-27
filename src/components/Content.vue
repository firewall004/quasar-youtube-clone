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
import { ref, onMounted } from 'vue';

interface Video {
	title: string;
	description: string;
	thumbnail: string;
}

const videos = ref<Video[]>([]);

onMounted(async () => {
	try {
		const response = await fetch('/data/yt_videos.json');
		const data = await response.json();
		videos.value = data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
});

</script>

<style scoped>
.content {
	padding: 20px;
}

.fixed-height {
	height: 200px;
}

.title-section,
.description-section {
	padding: 10px;
}

.description-section {
	opacity: 0.6;
}
</style>