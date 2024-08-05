import { createStore } from "vuex"
import customers from "./modules/customers";

const store = createStore({
	modules: {
		customers
	}
})

export default store;