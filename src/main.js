import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';


const app = createApp(App);


// Axios
app.use(VueAxios, axios);
axios.defaults.baseURL = import.meta.env.VITE_GROWLAT_BASE_URL;
axios.defaults.headers = {
	'Authorization': `Bearer ${import.meta.env.VITE_GROWLAT_AUTH_TOKEN}`
};
app.provide('axios', app.config.globalProperties.axios);

// Vuex
app.use(store)

app.mount('#app')
