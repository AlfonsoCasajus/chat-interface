<template>
	<div class="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-3xl">
		{{ name[0].toUpperCase() }}
	</div>
</template>
  
  <script setup>
 
  const props = defineProps({
    name: String
  })
  
  </script>
  
  <style scoped>
  </style>
  