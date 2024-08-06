import axios from 'axios';

import conversationsExamples from '../../conversationsExamples';

const conversations = {
	namespaced: true,
	state: () => ({
		conversations: [],
		selectedConversation: null,
		loading: false,
		error: false
	}),
	mutations: {
		selectConversation(state, conversation) {
			state.selectedConversation = conversation;
		},
		setConversations(state, conversations) {
			if (!Array.isArray(conversations)) state.conversations = [];
			else state.conversations = conversations
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
		setError(state, error) {
			state.error = error;
		},
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

				  const conversations = customers.map((customer, index) => {
					// There are 3 hardcoded conversations
					const conversationIndex = Math.floor(Math.random() * 3);
	
					// Set one of the hardcoded conversations
					const conversation = conversationsExamples[conversationIndex];
	 
					return {
						uuid: `550e8400-e29b-1d4-a716-${index}4665544000`,
						// Conversation example
						// sector: 'Devolución',
						// agent: 'Alfonso Casajus',
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
					}})
				  
				  commit('setConversations', conversations);

			} catch (error) {
				console.error('Error al buscar customers: ', error);
				commit('setError', true)
			}
			commit('setLoading', false)
		},
		async updateConversation({ commit, state }, { uuid, message }) {
			const conversations = [...state.conversations];
			const conversation = conversations.find(conversation => conversation.uuid === uuid);

			const date = new Date();
			const hours = String(date.getHours()).padStart(2, '0');
			const minutes = String(date.getMinutes()).padStart(2, '0');
			const formattedTime = `${hours}:${minutes}`;

			conversation.messages.push({
				sender: { name: 'Alfonso Casajus', type: 'agent' },
				message,
				time: formattedTime
			})
			
			commit('setConversations', conversations);

		}
	},
	getters: {
		conversations: (state) => state.conversations,
		selectedConversation: (state) => state.selectedConversation,
		isLoading: (state) => state.loading,
		error: (state) => state.error
	}
}

export default conversations;