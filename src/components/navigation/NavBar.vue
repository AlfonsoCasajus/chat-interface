<template>
	<nav class="z-10 w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-md">
		<div class="rounded-sm dark:invert dark:grayscale">
			<img width="100px" src="/growlat_logo.svg" alt="Growlat logo">
		</div>

		<button class="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full"
				@click="toggleDarkMode"
			>
				<IconSun v-if="!isDark" size="26" />
				<IconMoon size="26" v-else/>
		</button>
	</nav>
  </template>
  
  <script setup>
	import { ref, onMounted } from "vue"
	import { IconMoon, IconSun } from '@tabler/icons-vue';

	onMounted(() => {
		isDark.value = document.documentElement.classList.contains('dark');
	})

	const isDark = ref(false);
	
	const toggleDarkMode = () => {
	isDark.value = !isDark.value;
	if (isDark.value) {
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	}
	}

  </script>