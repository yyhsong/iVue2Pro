import axios from 'axios';

//创建自定义配置的新实例
const axiosx = axios.create({
	baseURL: 'http://47.96.85.49:2244'
	//baseURL: 'http://localhost:8080'
	//baseURL: 'http://114.55.168.241:8080'
});

export default {
	//获取党建入章统计 - 地域
	getPartyBuildingRegion() {
		return axiosx({
			method: 'get',
			url: '/get_party_building_region'
		});
	},
	//获取党建入章统计 - 股权结构
	getPartyBuildingStructure() {
		return axiosx({
			method: 'get',
			url: '/get_party_building_structure'
		});
	},
	//利润增幅 - 股权结构
	getProfitIncrease() {
		return axiosx({
			method: 'get',
			url: '/get_profit_increase'
		});
	},
	//研发占比&毛利率均值（地域）
	getRdrateProfitRegion() {
		return axiosx({
			method: 'get',
			url: '/get_rdrate_profit_region'
		});
	},
	//研发占比&毛利率均值（行业）
	getRdrateProfitIndustry() {
		return axiosx({
			method: 'get',
			url: '/get_rdrate_profit_industry'
		});
	},
	//扶贫投入（地域）
	getPovertyAlleviationNum() {
		return axiosx({
			method: 'get',
			url: '/get_poverty_alleviation_num'
		});
	},
	//全样本与金圆桌样本的研发投入占比比较（地域）
	getJyzRdRateRegion() {
		return axiosx({
			method: 'get',
			url: '/get_jyz_rd_rate_region'
		});
	},
	//全样本与金圆桌样本的研发投入占比比较（行业）
	getJyzRdRateIndustry() {
		return axiosx({
			method: 'get',
			url: '/get_jyz_rd_rate_industry'
		});
	},
	//获取股票列表
	getStockList() {
		return axiosx({
			method: 'get',
			url: '/get_stock_list'
		});
	},
	//获取指标详情
	getIndicator(stock_code) {
		return axiosx({
			method: 'get',
			url: '/get_indicator',
			params: {
				code: stock_code
			}
		});
	}
}
