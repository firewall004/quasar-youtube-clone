import type { Video } from '@/types';

export async function fetchVideos(): Promise<Video[]> {
	try {
		const response = await fetch('/data/yt_videos.json');
		if (!response.ok) {
			throw new Error('Failed to fetch videos');
		}
		const data = await response.json();
		return data as Video[];
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
