<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

// Components
import Conversations from './components/Conversations.vue';
import Chat from './components/chat/Chat.vue';
import NavBar from './components/navigation/NavBar.vue';

const store = useStore()

const fetchConversations = () => {
  store.dispatch('conversations/fetchConversations');
}

const conversations = computed(() => store.getters['conversations/conversations']);

</script>

<template>
  <div class="light h-screen flex flex-col">
    <NavBar />
    <div class="h-1 flex flex-grow">

      <Conversations  />
      <Chat />
      <div>USER DATA</div>
    </div>
  </div>
</template>
