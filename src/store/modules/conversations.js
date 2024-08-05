import axios from 'axios';

const conversations = {
	namespaced: true,
	state: () => ({
		conversations: [],
		selectedConversation: null,
		loading: false
	}),
	mutations: {
		addConversations(state, newConversations) {
			state.conversations.unshift(...newConversations);
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
		selectConversation(state, conversation) {
			state.selectedConversation = conversation;
		}
		
	},
	actions: {
		async fetchConversations({ commit }) {
			const BASE_URL = import.meta.env.VITE_GROWLAT_BASE_URL;
			const AUTH = import.meta.env.VITE_GROWLAT_AUTH;

			commit('setLoading', true)
			try {
				const response = await axios.get(`${BASE_URL}/customers`, {
					headers: {
					  Authorization: AUTH
					}
				  });

				  const conversations = response.data.data;
				  commit('addConversations', conversations);

			} catch (error) {
				console.error('Error al buscar las conversaciones: ', error);
			}
			commit('setLoading', false)
		}
	},
	getters: {
		conversations: (state) => state.conversations,
		selectedConversation: (state) => state.selectedConversation,
		isLoading: (state) => state.loading
	}
}

export default conversations;