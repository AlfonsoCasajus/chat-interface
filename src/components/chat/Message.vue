<template>
	<div class="flex">
		<Avatar name="Alfonso" size="small" class="mr-1" />
		<div class="flex items-start p-2 rounded-md bg-slate-500 text-gray-700">
		  <div class="flex-grow">
			<p class="text-white dark:text-gray-100">{{ message }}</p>
		  </div>
		  <div class="ml-4">
			<time class="text-white dark:text-gray-400 text-xs">{{ time }}</time>
		  </div>
		</div>
	</div>
  </template>
  
  <script setup>
import Avatar from '../utils/Avatar.vue';

defineProps({
    message: String,
    time: String
})
  </script>
  
  <style scoped></style>