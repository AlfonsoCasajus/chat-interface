<template>
	<div :class="['flex', { 'flex-row-reverse': isAgentSender }]">
		<Avatar
			:image-url="sender.photo"
			:name="sender.name"
			size="small"
			:class="['mr-1 ml-1', { 'opacity-0': !showAvatar }]"
		/>
		<div
			:class="[
				`
			flex
			flex-col
			items-start
			p-2
			rounded-md
			text-gray-700,
			${isAgentSender ? 'bg-teal-900' : 'bg-white'}
			${isAgentSender ? 'dark:bg-teal-900' : 'dark:bg-slate-700'}
		`
			]"
		>
			<div class="flex-grow">
				<p
					:class="[
						`
				${isAgentSender ? 'text-gray-100' : 'text-gray-800'}
				${isAgentSender ? 'dark:text-gray-100' : 'dark:text-gray-100'}
			`
					]"
				>
					{{ message }}
				</p>
			</div>
			<div class="ml-4 self-end">
				<time
					:class="[
						`
				${isAgentSender ? 'text-gray-100' : 'text-gray-800'}
				${isAgentSender ? 'dark:text-gray-100' : 'dark:text-gray-100'}
			`
					]"
					>{{ time }}</time
				>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import Avatar from "../utils/Avatar.vue";

const props = defineProps({
	message: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	sender: {
		type: Object,
		required: true
	},
	showAvatar: {
		type: Boolean,
		required: false,
		default: true
	}
});

const isAgentSender = computed(() => {
	return props.sender.type === "agent";
});
</script>

<style scoped></style>
