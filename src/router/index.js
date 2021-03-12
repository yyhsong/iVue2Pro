import Vue from 'vue';
import Router from 'vue-router';
import UserLogin from '@/views/UserLogin';
import IndicatorSearch from '@/views/IndicatorSearch';
import PartyBuilding from '@/views/PartyBuilding';
import SustainableDevelopment from '@/views/SustainableDevelopment';
import IndicatorTree from '@/views/IndicatorTree';

Vue.use(Router);

const router = new Router({
  routes: [
    {
			path: '/',
			name: 'home',
            component: IndicatorSearch
    },
    {
			path: '/indicator-search',
			name: 'zbtx',
			component: IndicatorSearch
		},
		{
			path: '/party-building',
			name: 'djrz',
			component: PartyBuilding
		},
		{
			path: '/sustainable-development',
			name: 'kcxfz',
			component: SustainableDevelopment
		},
		{
			path: '/indicator-tree',
			name: 'zbcj',
			component: IndicatorTree
		},
		{
			path: '/login',
			name: 'login',
            component: UserLogin
    }
	]
});

//导航守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
	if(to.path !== '/login' && !document.cookie.match('Token=([^;]*)')) {
		next('/login');
	}else if(to.path == '/login' && document.cookie.match('Token=([^;]*)')) {
		next('/');
	}else {
		next();
	}
});

export default router;
