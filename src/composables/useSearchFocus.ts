import { ref, onMounted, onUnmounted } from 'vue';

export function useSearchFocus() {
	const searchInput = ref<HTMLInputElement | null>(null);

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === '/' && searchInput.value) {
			searchInput.value.focus();
		}
	};

	onMounted(() => {
		searchInput.value = document.querySelector('.search-input');

		setTimeout(() => {
			window.addEventListener('keydown', handleKeyPress);
		}, 0);
	});

	onUnmounted(() => {
		window.removeEventListener('keydown', handleKeyPress);
	});

	return { searchInput };
}
