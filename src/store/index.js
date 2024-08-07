import { createStore } from "vuex";
import conversations from "./modules/conversations";

const store = createStore({
	modules: {
		conversations
	}
});

export default store;
