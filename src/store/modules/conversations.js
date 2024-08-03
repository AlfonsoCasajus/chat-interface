const conversations = {
	namespaced: true,
	state: () => ({
		conversations: [],
		loading: false
	}),
	mutations: {
		addConversations(state, newConversations) {
			state.conversations.unshift(newConversations);
		},
		setLoading(state, loading) {
			state.loading = loading;
		}
		
	},
	actions: {
		async fetchConversations({ commit }) {
			commit('setLoading', true)
			try {
				commit('addConversations', ['1', '2', '5'])
			} catch (error) {
				console.error('Error al buscar conversaciones', error);
			}
			commit('setLoading', false)
		}
	},
	getters: {
		conversations: (state) => state.conversations,
		isLoading: (state) => state.loading
	}
}

export default conversations;