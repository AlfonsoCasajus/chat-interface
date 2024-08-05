<template>
  <div class="h-full p-4 messages-wrapper">
    <Message message="Mensaje" time="20:00" />
    <Message message="Mensaje" time="20:00" />
    <Message message="Mensaje" time="20:00" />
    <Message message="Mensaje" time="20:00" />
		<Input type="text" :model-value="chatInput" :input-delay="100"/>
	</div>
  </template>
  
  <script setup>
  import { ref } from "vue"
import Input from '../utils/Input.vue';
import Message from './Message.vue';

const chatInput = ref('')

</script>

<style scoped>
.messages-wrapper {
  background-image: url('/images/chat-bg.png');
}

</style>
