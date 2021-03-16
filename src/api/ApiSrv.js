import axios from 'axios';

//创建自定义配置的新实例
const apiSrv = axios.create({
	//baseURL: 'http://abc.com/'  // 定义API接口的baseURL
});

export default {
	// 主营构成分析
    getOperationBrand() {
        return apiSrv({
            method: 'get',
            url: './static/data/operation-brand.json'
        })
    },
    // 产品销售分析
    getOperationProduct() {
        return apiSrv({
            method: 'get',
            url: './static/data/operation-product.json'
        })
    },
    // 地区销售分析
    getOperationArea() {
        return apiSrv({
            method: 'get',
            url: './static/data/operation-area.json'
        })
    },
    // 资产负债分析
    getFinanceBalanceSheet() {
        return apiSrv({
            method: 'get',
            url: './static/data/finance-balance-sheet.json'
        })
    },
    // 利润分析
    getFinanceProfitStatement() {
        return apiSrv({
            method: 'get',
            url: './static/data/finance-profit-statement.json'
        })
    },
    // 现金流量分析
    getFinanceCashFlow() {
        return apiSrv({
            method: 'get',
            url: './static/data/finance-cash-flow.json'
        })
    },
    // 纳税分析
    getTaxationPay() {
        return apiSrv({
            method: 'get',
            url: './static/data/taxation-pay.json'
        })
    },
    // 税率分析
    getTaxationProfit() {
        return apiSrv({
            method: 'get',
            url: './static/data/taxation-profit.json'
        })
    }
}
