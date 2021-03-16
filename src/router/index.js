import Vue from 'vue';
import Router from 'vue-router';
import CompanyOperation from '@/views/CompanyOperation';
import CompanyFinance from '@/views/CompanyFinance';
import CompanyTaxation from '@/views/CompanyTaxation';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: CompanyOperation
        },
        {
            path: '/company-operation',
            component: CompanyOperation
        },
        {
            path: '/company-finance',
            component: CompanyFinance
        },
        {
            path: '/company-taxation',
            component: CompanyTaxation
        }
    ]
});
