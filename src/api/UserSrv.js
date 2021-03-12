import axios from 'axios';

//创建自定义配置的新实例
const axiosx = axios.create({
	baseURL: 'http://47.96.85.49:2244'
	//baseURL: 'http://localhost:8080'
	//baseURL: 'http://114.55.168.241:8080'
});

export default {
	//用户登录
	login(account, pwt) {
		return axiosx({
			method: 'post',
			url: '/login',
			data: {
				account: account,
				pwt: pwt
			}
		});
	}
}
