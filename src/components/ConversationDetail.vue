<template>
	<div class="h-full w-full bg-white shadow-md p-5 dark:bg-gray-800 dark:text-gray-300 text-gray-600">
		<button
			class="p-2 bg-gray-200 rounded-full focus:outline-none" 
			aria-label="Cerrar detalle" 
			title="Cerrar"
			@click="$emit('close')"
			>
			<IconX size="22"/>
		</button>
		<div class="flex flex-col items-center mb-4">
			<Avatar :image-url="conversation.customer.photo" :name="`${conversation.customer.firstname} ${conversation.customer.lastName}`" size="large" />
			<h2 class="text-xl font-bold">{{ conversation.customer.firstname }} {{ conversation.customer.lastname }}</h2>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">First Name</p>
			<p class="">{{ conversation.customer.firstname }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Last Name</p>
			<p >{{ conversation.customer.lastname }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Email</p>
			<p>{{ conversation.customer.email }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Cellphone</p>
			<p>{{ conversation.customer.cellphone }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Birthdate</p>
			<p>{{ conversation.customer.birthdate }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Status</p>
			<p>{{ conversation.customer.status }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Document Type</p>
			<p>{{ conversation.customer.document_type }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Document</p>
			<p>{{ conversation.customer.document }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Address</p>
			<p>{{ conversation.customer.address }}</p>
		</div>
	</div>
  </template>
  
  <script setup>
import Avatar from './utils/Avatar.vue';
import { IconX } from '@tabler/icons-vue';

  const props = defineProps({
    conversation: {
      type: Array,
      required: true
    },
  })

  defineEmits(['close'])
  
  </script>
  
  <style scoped>
  </style>