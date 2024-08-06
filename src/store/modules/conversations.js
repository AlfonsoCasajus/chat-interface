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
				state.error = true;
			}
			commit('setLoading', false)
		}
	},
	getters: {
		conversations: (state) => {
			return state.customers.map(customer => {
				const conversation = conversationsExamples[Math.floor(Math.random() * 3) + 1];

				return {
					...conversation,
					customer,
				}
			})
		},
		selectedConversation: (state) => state.selectedConversation,
		isLoading: (state) => state.loading,
		error: (state) => state.error
	}
}

export default conversations;