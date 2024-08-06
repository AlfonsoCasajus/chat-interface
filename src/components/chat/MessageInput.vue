<template>
	<div class="flex items-center p-2 bg-white dark:bg-gray-800 border-t-2 border-gray-100 dark:border-slate-800">
	  <Input type="text" :model-value="chatInput" placeholder="Escribe un mensaje..." @input="handleInput"/>
	  <button @click="addFile" class="ml-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
		  <IconPaperclip size="26" />
	  </button>
	  <button @click="sendMessage" class="ml-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
		  <IconSend2 size="26" />
	  </button>
	</div>
  </template>
  
  <script setup>
  import Input from '../utils/Input.vue';
  import { ref } from 'vue'
  import { IconSend2, IconPaperclip } from '@tabler/icons-vue';
  
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