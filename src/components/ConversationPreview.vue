<template>
	<div v-if="conversation && firstMessageSended && lastMessageSended"
		:class="[
			'flex',
			'items-center',
			'p-4',
			'border-b',
			'border-gray-200',
			'cursor-pointer',
			'hover:bg-gray-100',
			'dark:hover:bg-gray-700/95',
			'dark:border-gray-700',
			'dark:bg-gray-800',
			{ 'bg-gray-300': selected }
		]">
	  <Avatar :image-url="conversation.customer.photo" :name="`${conversation.customer.firstname} ${conversation.customer.lastName}`" size="large" class="mr-4" />
	  <div class="flex flex-col flex-grow">
		<p class="font-semibold dark:text-gray-300">{{ conversation.customer.firstname }}</p>
		<p class="text-gray-700 text-sm truncate dark:text-gray-300 text-ellipsis">{{ lastMessageSended.message }}</p>
		<p class="text-gray-500 text-xs dark:text-gray-400">{{lastMessageSended.time}}</p>
		<div class="flex items-center justify-between mt-2">
		  <span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{conversation.agent}}</span>
		  <span class="bg-gray-100 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{conversation.sector}}</span>
		  <time class="text-gray-500 text-xs dark:text-gray-400">{{ firstMessageSended.time }}</time>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
import { computed } from 'vue';
import Avatar from './utils/Avatar.vue';

	const props = defineProps({
    conversation: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
	  default: false
    },
  })

  const lastMessageSended = computed(() => {
	if (!props.conversation?.messages?.length) return null;
	return props.conversation.messages[props.conversation.messages.length - 1]
  })

  const firstMessageSended = computed(() => {
	if (!props.conversation?.messages?.length) return null;
	return props.conversation.messages[0];
  })
  </script>
  
  <style scoped>
  </style>
  