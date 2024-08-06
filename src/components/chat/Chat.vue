<template>
  <div class="h-full flex flex-col bg-[url('/images/chat-bg.png')] dark:bg-[url('/images/chat-bg-dark.jpg')]">
    <div v-if="conversation" class="bg-white p-2 mb-2 dark:bg-gray-800 border-b-2  border-gray-100 dark:border-slate-800">
      <slot name="top-toolbar" />
    </div>
    <div class="h-full overflow-auto p-4">
      <Message v-for="(messageData, index) of conversation ? conversation.messages : []"
        class="mb-1"
        :key="index"
        :message="messageData.message"
        :sender="messageData.sender"
        :time="messageData.time"
        :show-avatar="conversation?.messages[index - 1]?.sender.type !== messageData.sender.type"
      />
    </div>
    <MessageInput v-if="conversation" class="mt-2" @send="(message) => $emit('send-message', { uuid: conversation.uuid, message })" />
	</div>
  </template>
  
  <script setup>
  import Message from './Message.vue';
  import MessageInput from "./MessageInput.vue";


  const props = defineProps({
    conversation: {
      type: Array,
      default: () => []
    }
  })

  defineEmits(['send-message'])

</script>

<style scoped>

</style>
