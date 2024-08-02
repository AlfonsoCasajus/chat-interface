<script setup>
import Conversations from './components/Conversations.vue';
import NavBar from './components/navigation/NavBar.vue';
</script>

<template>
  <div class="light h-screen flex flex-col">
    <NavBar />
    <div class="h-1 flex flex-grow">

      <Conversations  />
      <div>CHAT</div>
      <div>USER DATA</div>
    </div>
  </div>
</template>

<style scoped>
</style>
