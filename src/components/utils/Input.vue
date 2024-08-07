<template>
	<input
		ref="inputRef"
		v-bind="$attrs"
		:value="modelValue"
		class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
		@input="handleInput"
	/>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	modelValue: String,
	inputDelay: {
		type: Number,
		default: 0
	}
});

const emit = defineEmits(["update:modelValue", "input"]);

let timeoutId = null;
const handleInput = (input) => {
	const inputElement = input.target;
	emit("update:modelValue", inputElement.value);

	if (timeoutId) clearTimeout(timeoutId);

	timeoutId = setTimeout(() => {
		emit("input", inputElement.value);
	}, props.inputDelay);
};

const inputRef = ref();
</script>

<style scoped></style>
