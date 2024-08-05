<template>
	<div class="border-r dark:bg-gray-800">
	  <ConversationPreview v-for="(conversation, index) of conversations"
      :key="index"
      :conversation="conversation"
      @click="$emit('select', conversation)"
	  />
	</div>
  </template>
  
  <script setup>
import ConversationPreview from './ConversationPreview.vue';

const props = defineProps({
    conversations: {
      type: Array,
      required: false,
	  default: () => []
    },
  })

  defineEmits('select');

  </script>
  
  <style scoped>
  </style>
  