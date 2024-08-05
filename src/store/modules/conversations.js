import axios from 'axios';

const sectors = ['Devolución', 'Consulta', 'Asistencia', 'General']
const agents = ['Alfonso', 'Nicolás', 'Lucia', 'Adrian']

const conversations = {
	namespaced: true,
	state: () => ({
		customers: [],
		selectedConversation: null,
		loading: false
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
			}
			commit('setLoading', false)
		}
	},
	getters: {
		conversations: (state) => {
			return state.customers.map(customer => {
				return {
					customer,
					sector: sectors[Math.floor(Math.random() * sectors.length - 1) + 1],
					agent: agents[Math.floor(Math.random() * (agents.length - 1)) + 1],
					lastMessage: 'Último mensaje enviado por uno de los',
					lastMessageTime: 'Hace 10 minutos'
				}
			})
		},
		selectedConversation: (state) => state.selectedConversation,
		isLoading: (state) => state.loading
	}
}

export default conversations;