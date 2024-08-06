<template>
	<nav class="z-10 w-full flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-md">
		<span class="rounded-sm dark:invert dark:grayscale">
			<img width="100px" src="/growlat_logo.svg" alt="Growlat logo">
		</span>

		<span class="flex items-center">
			<button class="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full"
					@click="toggleDarkMode"
				>
					<IconSun v-if="!isDark" size="18" />
					<IconMoon size="18" v-else/>
			</button>
			<span class="flex items-center">
				<Avatar name="Alfonso Casajus" size="small" class="ml-3" />
				<p class="ml-2 dark:text-white">Alfonso Casajus</p>
			</span>
		</span>
	</nav>
  </template>
  
  <script setup>
	import { onMounted, ref } from 'vue';
	import { IconMoon, IconSun } from '@tabler/icons-vue';
	import Avatar from '../utils/Avatar.vue';
	
	const isDark = ref(false);
	
	onMounted(() => {
		isDark.value = localStorage.getItem('theme') === 'dark';
		setTheme(isDark.value ? 'dark' : 'light');
	})

	const toggleDarkMode = () => {
		isDark.value = !isDark.value;
		setTheme(isDark.value ? 'dark' : 'light');
	}

	const setTheme = (theme) => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

  </script>