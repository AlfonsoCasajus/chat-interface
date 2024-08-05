<template>
	<div v-if="conversation" class="flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/95 transition dark:border-gray-700 dark:bg-gray-800">
	  <Avatar :image-url="conversation.customer.photo" :name="`${conversation.customer.firstname} ${conversation.customer.lastName}`" size="large" class="mr-4" />
	  <div class="flex flex-col flex-grow">
		<p class="font-semibold">{{ conversation.customer.firstname }}</p>
		<p class="text-gray-700 text-sm truncate dark:text-gray-300 text-ellipsis">{{conversation.lastMessage}}</p>
		<p class="text-gray-500 text-xs dark:text-gray-400">{{lastMessageTime}}</p>
		<div class="flex items-center justify-between mt-2">
		  <span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{conversation.agent}}</span>
		  <span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{conversation.sector}}</span>
		  <time class="text-gray-500 text-xs dark:text-gray-400">20:00</time>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
import Avatar from './utils/Avatar.vue';

	const props = defineProps({
    conversation: {
      type: Object,
      required: true
    },
  })
  </script>
  
  <style scoped>
  </style>
  