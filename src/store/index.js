import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		user: {name: 'Admin'}
	},
	actions: {},
	mutations: {},
	getters: {}
});

export default store;
