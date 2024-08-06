<template>
	<div class="h-full w-full bg-white shadow-md p-5 dark:bg-gray-800 dark:text-gray-300 text-gray-600">
	  <button
		class="p-2 bg-gray-200 rounded-full focus:outline-none text-gray-900"
		aria-label="Cerrar detalle"
		title="Cerrar"
		@click="$emit('close')"
	  >
		<IconX size="22" />
	  </button>
	  <div class="flex flex-col items-center mb-4">
		<Avatar :image-url="conversation.customer.photo" :name="`${conversation.customer.firstname} ${conversation.customer.lastName}`" size="large" />
		<h2 class="text-xl font-bold">{{ conversation.customer.firstname }} {{ conversation.customer.lastname }}</h2>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconUser size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Nombre</p>
		  <p>{{ conversation.customer.firstname }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconUser size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Apellido</p>
		  <p>{{ conversation.customer.lastname }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconMail size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Email</p>
		  <p>{{ conversation.customer.email }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconPhone size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Telefono</p>
		  <p>{{ conversation.customer.cellphone }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconCalendar size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Cumpleaños</p>
		  <p>{{ conversation.customer.birthdate }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconInfoCircle size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Estado</p>
		  <p>{{ conversation.customer.status }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconId size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Tipo de documento</p>
		  <p>{{ conversation.customer.document_type }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconId size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Documento</p>
		  <p>{{ conversation.customer.document }}</p>
		</div>
	  </div>
	  <div class="pt-2 pb-2 border-b dark:border-gray-700 flex items-center">
		<IconMapPin size="32" class="mr-3" />
		<div>
		  <p class="font-semibold">Dirección</p>
		  <p>{{ conversation.customer.address }}</p>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import Avatar from './utils/Avatar.vue';
  import { IconX, IconUser, IconMail, IconPhone, IconCalendar, IconInfoCircle, IconId, IconMapPin } from '@tabler/icons-vue';
  
  const props = defineProps({
	conversation: {
	  type: Object,
	  required: true,
	},
  });
  
  defineEmits(['close']);
  </script>
  
  <style scoped>
  </style>