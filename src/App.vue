<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

// Components
import Conversations from './components/Conversations.vue';
import Chat from './components/chat/Chat.vue';
import NavBar from './components/navigation/NavBar.vue';
import CustomerDetail from './components/ConversationDetail.vue';

const store = useStore()

onMounted(() => {
  fetchCustomers();
})

const fetchCustomers = () => {
  store.dispatch('conversations/fetchCustomers');
}

const conversations = computed(() => store.getters['conversations/conversations']);
const selectedConversation = computed(() => store.getters['conversations/selectedConversation']);

const selectConversation = (conversation) => {
  store.commit('conversations/selectConversation', conversation);
}

</script>

<template>
  <div class="light h-screen flex flex-col">
    <NavBar />
    <div class="h-1 flex justify-between flex-grow">
      <span class="min-w-[400px] w-1/4 overflow-y-auto h-full dark:bg-gray-800">
        <Conversations :conversations="conversations" @select="selectConversation" />
      </span>
      <span class="h-full w-full">
        <Chat :messages="selectedConversation?.messages ? selectedConversation?.messages : [] " />
      </span>
      <span v-if="selectedConversation" class="w-1/6 h-full">
        <CustomerDetail :conversation="selectedConversation" />
      </span>
    </div>
  </div>
</template>
