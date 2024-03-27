<template>
	<q-page class="content">
		<div class="q-pa-md">
			<div class="q-col-gutter-md">
				<div class="row">
					<div v-for="(video, index) in videos" :key="index" class="col-md-3 col-sm-6 q-mb-md">

						<q-card flat bordered class="vid-card">

							<q-img :src="video.thumbnail" :alt="video.title" class="fixed-height">
								<template v-slot:loading>
									<div class="text-yellow">
										<q-spinner-ios />
										<div class="q-mt-md">Loading...</div>
									</div>
								</template>
							</q-img>

							<q-card-section class="title-section">
								<div class="text-h6">{{ video.title }}</div>
							</q-card-section>
							<q-card-section class="description-section">
								<div class="text-subtitle2">{{ video.description }}</div>
							</q-card-section>
						</q-card>

					</div>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchVideos } from '../api/index';
import type { Video } from '../types/index';
import { useSearchFocus } from '../composables/useSearchFocus';

const videos = ref<Video[]>([]);
const { searchInput } = useSearchFocus();

onMounted(async () => {
	try {
		videos.value = await fetchVideos();
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
	height: 180px;
}

.title-section,
.description-section {
	padding: 10px;
}

.description-section {
	opacity: 0.6;
}

.vid-card {
	border-radius: 15px;
	max-width: 300px;
	margin: 0 auto;
}
</style>
