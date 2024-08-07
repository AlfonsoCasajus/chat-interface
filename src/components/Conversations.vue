<template>
	<div>
		<!-- Filter Start -->
		<div class="p-2 mt-2 mb-2">
			<Input
				v-model="filterQuery"
				type="text"
				placeholder="Nombre del cliente..."
				:input-delay="300"
			/>
		</div>
		<!-- Filter End -->
		<!-- Error template Start -->
		<div
			v-if="hasError"
			class="m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong class="font-bold">Error</strong>
			<br />
			<span class="block sm:inline"
				>Hubo un problema al buscar las conversaciones</span
			>
		</div>
		<!-- Error template End -->
		<!-- List of conversations Start -->
		<div>
			<ConversationPreview
				v-for="(conversation, index) of filteredConversations"
				:key="index"
				:conversation="conversation"
				:selected="conversation.uuid === selectedConvUuid"
				@click="$emit('select', conversation)"
			/>
		</div>
		<!-- List of conversations End-->
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ConversationPreview from "./ConversationPreview.vue";
import Input from "./utils/Input.vue";

const props = defineProps({
	conversations: {
		type: Array,
		required: false,
		default: () => []
	}
});

defineEmits("select");

const store = useStore();

const hasError = computed(() => {
	return store.getters["conversations/error"];
});

const selectedConvUuid = computed(() => {
	const conv = store.getters["conversations/selectedConversation"];
	if (!conv) return null;
	return conv.uuid;
});

const filterQuery = ref("");
const filteredConversations = computed(() => {
	if (!props.conversations || !props.conversations.length) return [];
	return props.conversations.filter((conversation) => {
		const customerName = conversation.customer.firstname.toLowerCase();
		const query = filterQuery.value.toLowerCase();
		return customerName.includes(query);
	});
});
</script>

<style scoped></style>
