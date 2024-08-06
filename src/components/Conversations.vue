<template>
	<div>
    <div class="p-2 mt-2 mb-2">
      <Input type="text" :model-value="filterQuery" placeholder="Filtra por nombre..." :input-delay="300" />
    </div>
	  <ConversationPreview v-for="(conversation, index) of conversations"
      :key="index"
      :conversation="conversation"
      @click="$emit('select', conversation)"
	  />
	</div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import ConversationPreview from './ConversationPreview.vue';
import Input from './utils/Input.vue';

const filterQuery = ref('')

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
  