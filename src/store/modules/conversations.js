import axios from 'axios';

import conversationsExamples from '../../conversationsExamples';

const conversations = {
	namespaced: true,
	state: () => ({
		customers: [],
		selectedConversation: null,
		loading: false,
		error: false
	}),
	mutations: {
		addCustomers(state, newCustomers) {
			state.customers.unshift(...newCustomers);
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
		setError(state, error) {
			state.error = error;
		},
		selectConversation(state, conversation) {
			state.selectedConversation = conversation;
		}
		
	},
	actions: {
		async fetchCustomers({ commit }) {
			const BASE_URL = import.meta.env.VITE_GROWLAT_BASE_URL;
			const AUTH = import.meta.env.VITE_GROWLAT_AUTH;

			commit('setLoading', true)
			try {
				const response = await axios.get(`${BASE_URL}/customers`, {
					headers: {
					  Authorization: AUTH
					}
				  });

				  const customers = response.data.data;
				  commit('addCustomers', customers);

			} catch (error) {
				console.error('Error al buscar customers: ', error);
				commit('setError', true)
			}
			commit('setLoading', false)
		}
	},
	getters: {
		conversations: (state) => {
			if (!state?.customers?.length) return [];
			return state.customers.map(customer => {
				// There are 3 hardcoded conversations
				const conversationIndex = Math.floor(Math.random() * 3);

				// Set one of the hardcoded conversations
				const conversation = conversationsExamples[conversationIndex];
 
				return {
					// Conversation example
					// uuid: '87171f25-cd92-41f5-9eb9-bd693d2e74a6',
					// sector: 'Devolución',
					// agent: 'Alfonso',

					...conversation,
					customer,
					// Set customer data as sender of the conversation messages
					messages: conversation.messages.map(message => {
						if (message.sender.type === 'agent') return message;

						return {
							//  Message example
							// 	sender: { name: 'Nicolás', type: 'agent' },
							// 	message: "¡Hola! ¿En qué puedo ayudarte hoy?",
							// 	time: "09:00"
							...message,
							sender: { ...customer }

						}
					})
				}
			})
		},
		selectedConversation: (state) => state.selectedConversation,
		isLoading: (state) => state.loading,
		error: (state) => state.error
	}
}

export default conversations;