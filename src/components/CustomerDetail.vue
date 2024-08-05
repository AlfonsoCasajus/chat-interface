<template>
	<div v-if="isVisible" class="bg-white shadow-md p-5 w-80 dark:bg-gray-800 dark:text-gray-300 text-gray-600">
		<div class="flex flex-col items-center mb-4">
			<img class="w-24 h-24 rounded-full mb-4" :src="customer.avatar" alt="Customer Avatar">
			<h2 class="text-xl font-bold">{{ customer.firstname }} {{ customer.lastname }}</h2>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">First Name</p>
			<p class="">{{ customer.firstname }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Last Name</p>
			<p >{{ customer.lastname }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Email</p>
			<p>{{ customer.email }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Cellphone</p>
			<p>{{ customer.cellphone }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Birthdate</p>
			<p>{{ customer.birthdate }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Status</p>
			<p>{{ customer.status }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Document Type</p>
			<p>{{ customer.document_type }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Document</p>
			<p>{{ customer.document }}</p>
		</div>
		<div class="pt-2 pb-2 border-b dark:border-gray-700">
			<p class="font-semibold">Address</p>
			<p>{{ customer.address }}</p>
		</div>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const customer = {
	firstname: 'Nelle',
	lastname: 'Rosenbaum',
	email: 'creola89@example.net',
	cellphone: '(567) 935-6820',
	birthdate: '1967-02-13',
	status: 'active',
	document_type: 'PASSPORT',
	document: 'DKSBRE97UVA',
	address: '83076 Gerard Hollow Suite 573',
	avatar: 'https://via.placeholder.com/150' // URL del avatar
  };
  
  const isVisible = ref(true);

  const toggleVisibility = () => {
	isVisible.value = !isVisible.value;
  };
  </script>
  
  <style scoped>
  .slide-enter-active, .slide-leave-active {
	transition: transform 0.3s ease;
  }
  .slide-enter-from, .slide-leave-to {
	transform: translateX(100%);
  }
  </style>