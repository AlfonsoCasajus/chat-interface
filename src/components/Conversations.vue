<template>
	<div>
    <div class="p-2 mt-2 mb-2">
      <Input type="text" v-model="filterQuery" placeholder="Nombre del cliente..." :input-delay="300" />
    </div>
    <div v-if="hasError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Error</strong>
      <span class="block sm:inline">Hubo un problema al buscar las conversaciones</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <IconX size="26" />
      </span>
    </div>
    <div v-if="!isLoadingConversations">
      <ConversationPreview v-for="(conversation, index) of filteredConversations"
        :key="index"
        :conversation="conversation"
        @click="$emit('select', conversation)"
      />
    </div>
    <div v-else>
      <div v-for="skeleton of 5" class="border shadow rounded-md p-4 w-full">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ConversationPreview from './ConversationPreview.vue';
import Input from './utils/Input.vue';
import { IconX } from '@tabler/icons-vue';


const props = defineProps({
  conversations: {
    type: Array,
    required: false,
    default: () => []
  },
})

defineEmits('select');

const store = useStore()

const hasError = computed(() => {
	return store.getters['conversations/error'];
})

const isLoadingConversations = computed(() => {
	return store.getters['conversations/isLoading'];
})


const filterQuery = ref('')
const filteredConversations = computed(() => {
  if (!props.conversations || !props.conversations.length) return [];
  return props.conversations.filter((conversation) => {
    const customerName = conversation.customer.firstname.toLowerCase();
    const query = filterQuery.value.toLowerCase();
    return customerName.includes(query);
  })
})

  </script>
  
  <style scoped>
  </style>
  