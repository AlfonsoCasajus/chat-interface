<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

// Components
import Conversations from './components/Conversations.vue';
import Chat from './components/chat/Chat.vue';
import NavBar from './components/navigation/NavBar.vue';
import CustomerDetail from './components/CustomerDetail.vue';

const store = useStore()

const fetchCustomers = () => {
  store.dispatch('conversations/fetchConversations');
}

const customers = computed(() => store.getters['customers/customers']);

</script>

<template>
  <div class="light h-screen flex flex-col">
    <NavBar />
    <div class="h-1 flex flex-grow">
      <Conversations  />
      <Chat />
      <CustomerDetail />
    </div>
  </div>
</template>
