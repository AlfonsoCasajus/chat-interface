import axios from 'axios';

const customers = {
	namespaced: true,
	state: () => ({
		customers: [],
		loading: false
	}),
	mutations: {
		addCustomers(state, newCustomers) {
			state.customers.unshift(newCustomers);
		},
		setLoading(state, loading) {
			state.loading = loading;
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

				  console.log(response);

			} catch (error) {
				console.error('Error al buscar customers', error);
			}
			commit('setLoading', false)
		}
	},
	getters: {
		customers: (state) => state.customers,
		isLoading: (state) => state.loading
	}
}

export default customers;