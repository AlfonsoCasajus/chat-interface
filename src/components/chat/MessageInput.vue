<template>
	<div class="flex items-center p-2 bg-white">
	  <Input type="text" :model-value="chatInput" placeholder="Escribe un mensaje..." :input-delay="100"/>
	  <button @click="addFile" class="ml-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
		📎
	  </button>
	  <button @click="sendMessage" class="ml-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
		➤
	  </button>
	</div>
  </template>
  
  <script setup>
  import Input from '../utils/Input.vue';
  import { ref } from 'vue'
  
  const props = defineProps({
	modelValue: String
  })
  
  const emit = defineEmits(['update:modelValue', 'input', 'send', 'add-file'])
  
  let timeoutId = null
  const handleInput = (input) => {
	const inputElement = input.target
	emit('update:modelValue', inputElement.value)
  
	if (timeoutId) clearTimeout(timeoutId)
  
	timeoutId = setTimeout(() => {
	  emit('input', inputElement.value)
	}, props.inputDelay)
  }
  
  const inputRef = ref()
  
  const addFile = () => {
	emit('add-file')
  }
  
  const sendMessage = () => {
	emit('send', inputRef.value.value)
  }
  </script>
  
  <style scoped>
  </style>