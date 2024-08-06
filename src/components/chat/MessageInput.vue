<template>
	<div class="flex items-center p-2 bg-white dark:bg-gray-800 border-t-2 border-gray-100 dark:border-slate-800">
	  <Input type="text" v-model="chatInput" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />
	  <button @click="addFile" class="ml-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
		  <IconPaperclip size="26" />
	  </button>
	  <button @click="sendMessage"
    :disabled="!chatInput"
    class="
      ml-2
      px-4
      py-2
      text-white
      bg-green-500
      hover:bg-green-600
      rounded-md
      focus:outline-none
      focus:ring-2
      disabled:opacity-40
      disabled:focus:none
    ">
		  <IconSend2 size="26" />
	  </button>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Input from '../utils/Input.vue';
  import { IconSend2, IconPaperclip } from '@tabler/icons-vue';
  
  const props = defineProps({
	modelValue: String
  })
  
  const emit = defineEmits(['send', 'add-file'])
  
  const addFile = () => {
    emit('add-file')
  }
  
  const chatInput = ref('');
  const sendMessage = () => {
    if (!chatInput.value || !chatInput.value.trim()) return;
    emit('send', chatInput.value)
    chatInput.value = '';
  }
  </script>
  
  <style scoped>
  </style>