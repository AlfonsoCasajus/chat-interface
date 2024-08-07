<template>
	<img
		v-if="imageUrl"
		:class="['rounded-full', sizeClasses]"
		:src="imageUrl"
		alt="Customer Avatar"
	/>
	<div
		v-else
		:class="[
			'flex items-center justify-center rounded-full text-white bg-blue-500',
			sizeClasses
		]"
	>
		{{ initials }}
	</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	name: {
		type: String,
		required: true
	},
	size: {
		type: String,
		default: "medium"
	},
	imageUrl: {
		type: String,
		default: ""
	}
});

const initials = computed(() => {
	const words = props.name.split(" ");
	if (words.length === 1) return words[0][0].toUpperCase();
	else return words[0][0].toUpperCase() + words[1][0].toUpperCase();
});

const sizeClasses = computed(() => {
	if (props.size === "small") return `w-8 h-8 text-sm`;
	if (props.size === "large") return `w-16 h-16 text-2xl`;
	else return `w-12 h-12 text-xl`;
});
</script>

<style scoped></style>
