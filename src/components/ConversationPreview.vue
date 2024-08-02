<template>
	<div class="flex items-center p-4 border-b border-gray-200 max-w-md mx-auto cursor-pointer hover:bg-gray-100 transition">
	  <Avatar name="Alfonso" class="mr-4"/>
	  <div class="flex flex-col flex-grow">
		<p class="text-gray-700 text-sm truncate">Último mensaje enviado por uno de l...</p>
		<p class="text-gray-500 text-xs">Hace 10 minutos</p>
		<div class="flex justify-between items-center mt-2">
			<span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Agente que se hace cargo</span>
			<span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Sector</span>
		  <time class="text-gray-500 text-xs">20:00</time>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
	import Avatar from './utils/Avatar.vue';
  </script>
  
  <style scoped>
  </style>
  