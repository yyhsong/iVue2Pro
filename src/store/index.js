import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	//应用的单一状态树，包含了所需的数据结构
	state: {
		username: ''
	},
	//定义行为，可被组件调用，但不会修改state中的数据
	//可调用变更状态的方法，可包含异步请求或提交多个变更
	actions: {},
	//真正修改state中的值
	//通常被actions中定义的方法调用，但也可以直接被组件调用
	//只能是同步函数
	mutations: {
		setUser(state, data) {
			state.username = data.username;
		}
	},
	//获取state中的值，可按需进行格式化
	getters: {}
});

export default store;
