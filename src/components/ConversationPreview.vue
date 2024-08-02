<template>
	<div class="flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/95  transition dark:border-gray-700 dark:bg-gray-800">
	  <Avatar name="Alfonso" class="mr-4"/>
	  <div class="flex flex-col flex-grow">
		<p class="text-gray-700 text-sm truncate dark:text-gray-300">Último mensaje enviado por uno de l...</p>
		<p class="text-gray-500 text-xs dark:text-gray-400">Hace 10 minutos</p>
		<div class="flex justify-between items-center mt-2">
		  <span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Agente que se hace cargo</span>
		  <span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Sector</span>
		  <time class="text-gray-500 text-xs dark:text-gray-400">20:00</time>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
	import Avatar from './utils/Avatar.vue';
  </script>
  
  <style scoped>
  </style>
  