<template>
  <div class="h-full flex flex-col p-4 messages-wrapper">
    <div class="h-full overflow-auto">
      <Message v-for="(messageData, index) of messages" :key="index"
        class="mb-1"
        :message="messageData.message"
        :sender="messageData.sender"
        :time="messageData.time"
      />
    </div>
    <MessageInput class="mt-2" :model-value="chatInput" />
	</div>
  </template>
  
  <script setup>
  import { ref } from "vue"
import Message from './Message.vue';
import MessageInput from "./MessageInput.vue";

const chatInput = ref('')

const props = defineProps({
	messages: {
	  type: Array,
	  default: () => []
	}
})

</script>

<style scoped>
.messages-wrapper {
  background-image: url('/images/chat-bg.png');
}

</style>
