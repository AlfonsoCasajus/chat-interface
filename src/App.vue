<script setup>
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { IconArrowBack, IconUser } from '@tabler/icons-vue';

// Components
import Conversations from './components/Conversations.vue';
import Chat from './components/chat/Chat.vue';
import NavBar from './components/navigation/NavBar.vue';
import CustomerDetail from './components/ConversationDetail.vue';

const store = useStore()

onMounted(() => {
  fetchCustomers();
});

const fetchCustomers = () => {
  store.dispatch('conversations/fetchCustomers');
}

const conversations = computed(() => store.getters['conversations/conversations']);
const selectedConversation = computed(() => store.getters['conversations/selectedConversation']);

const selectConversation = (conversation) => {
  store.commit('conversations/selectConversation', conversation);
}

const isCustomerVisible = ref(false);
const toggleCustomerDetail = () => {
  isCustomerVisible.value = !isCustomerVisible.value;
}

const updateConversation = ({ uuid, message }) => {
  if (!uuid || !message) return;
  store.dispatch('conversations/updateConversation', { uuid, message });
}

const handleScroll = (event) => {
  const element = event.target;
  if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    fetchCustomers();
  }
}

</script>

<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <div class="h-1 flex justify-between flex-grow max-lg:flex-col">
      <span
        id="conversations-list"
        :class="['min-w-[400px] max-lg:w-full w-1/4 overflow-y-auto h-full dark:bg-gray-800', { 'max-lg:hidden': selectedConversation }]"
        @scroll="handleScroll"
      >
        <Conversations :conversations="conversations" @select="selectConversation" />
      </span>
      <span :class="['h-full w-full', { 'max-lg:hidden': !selectedConversation || isCustomerVisible }]">
        <Chat :conversation="selectedConversation" @send-message="updateConversation">
          <template #top-toolbar>
            <div class="flex justify-between">
              <button
                class="p-2 bg-gray-200 rounded-full focus:outline-none" 
                aria-label="Volver a la conversación anterior" 
                title="Atras"
                @click="() => selectConversation(null)" 
              >
                <IconArrowBack size="22"/>
              </button>
              <button
                class="p-2 bg-gray-200 rounded-md focus:outline-none"
                aria-label="Mostrar/Ocultar información de cliente"
                :title="isCustomerVisible ? 'Ocultar' : 'Mostrar'"
                @click="toggleCustomerDetail"
              >
                <IconUser size="22"/>
              </button>
            </div>
          </template>
        </Chat>
      </span>
      <span v-if="selectedConversation && isCustomerVisible" class="min-w-80 h-full max-lg:w-full">
        <CustomerDetail :conversation="selectedConversation" @close="toggleCustomerDetail" />
      </span>
    </div>
  </div>
</template>
