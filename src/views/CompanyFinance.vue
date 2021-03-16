<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>企业财务分析</el-breadcrumb-item>
		</el-breadcrumb>
		
		<div class="sel-div">
			<el-row :gutter="20">
				<el-col :span="24">
					<el-select filterable v-model="selectedStock" placeholder="请选择...">
						<el-option 
							v-for="stock in stockList"
							:key="stock.code"
							:value="stock.code"
							:label="stock.code + ' ' + stock.name">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
		</div>
		
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>资产负债分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt1"
							ref="chart1" auto-resize></echart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>利润分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt2"
							ref="chart2" auto-resize></echart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		
		<el-row :gutter="20" style="margin-top:20px;margin-bottom:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>现金流量分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt3"
							ref="chart3" auto-resize></echart>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import ApiSrv from '@/api/ApiSrv';
	import 'echarts/lib/chart/bar';
	import 'echarts/lib/chart/line';
	import 'echarts/lib/chart/pie';
	import 'echarts/lib/chart/radar';
	import 'echarts/lib/component/legend';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/markLine';
	import 'echarts/lib/component/markPoint';
	
	export default {
		data() {
			return {
				//选中的股票
				selectedStock: '600398',
				//股票列表
				stockList: [
					{code:'600398', name:'海澜之家'}
				],
				//图表配置
				chartOpt1: {
					legend: {
						top: 10,
						left: 'center'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						}
					},
				    grid: {
				        left: 20,
				        right: 20,
				        top: 45,
				        bottom: 15,
				        containLabel: true
				    },
				    xAxis: [{
			            type: 'category',
			            data: [],
			            axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            }
				    }],
				    yAxis: [{
				        type: 'value',
				        name: '亿元',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            },
			            splitLine: {
							lineStyle: {color: ['#eee']}			            	
			            }
				    }, {
				    	type: 'value',
				        name: '%',
				        min: 53,
				        max: 59,
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            },
			            splitLine: {
							lineStyle: {color: ['#eee']}			            	
			            }
				    }],
				    series: [{
			            name: '流动资产',
			            type: 'bar',
			            stack: '资产',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#339ca8'
			            },
			            data:[]
				    }, {
				    	name: '非流动资产',
			            type: 'bar',
			            stack: '资产',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#2b821d'
			            },
			            data:[]
				    }, {
				    	name: '流动负债',
			            type: 'bar',
			            stack: '负债',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#5c8ee6'
			            },
			            data:[]
				    }, {
				    	name: '非流动资产',
			            type: 'bar',
			            stack: '负债',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            data:[]
				    }, {
				    	name: '股东权益',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            data:[]
				    }, {
				    	name: '资产负债率',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#d141d9'
			            },
			            label: {
			            	show: true,
			            	color: '#d141d9',
			            	formatter: '{c}%'
			            },
			            data:[]
				    }]
				},
				chartOpt2: {
					legend: {
						top: 10,
						left: 'center'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						}
					},
				    grid: {
				        left: 20,
				        right: 20,
				        top: 45,
				        bottom: 15,
				        containLabel: true
				    },
				    xAxis: [{
			            type: 'category',
			            data: [],
			            axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            }
				    }],
				    yAxis: [{
				        type: 'value',
				        name: '亿元',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            },
			            splitLine: {
							lineStyle: {color: ['#eee']}			            	
			            }
				    }, {
				    	type: 'value',
				        name: '%',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            },
			            splitLine: {
							lineStyle: {color: ['#eee']}			            	
			            }
				    }],
				    series: [{
			            name: '营业收入',
			            type: 'bar',
			            barMaxWidth: 20,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            markPoint: {
			            	data: [
			            		{type:'max', name:'最大值'}
			            	]
			            },
			            data:[]
				    }, {
				    	name: '净利润',
			            type: 'bar',
			            barMaxWidth: 20,
			            itemStyle: {
			            	color: '#5c8ee6'
			            },
			            markPoint: {
			            	data: [
			            		{type:'max', name:'最大值'}
			            	]
			            },
			            data:[]
				    }, {
				    	name: '营业收入环比',
			            type: 'line',
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            label: {
			            	show: true,
			            	color: '#f0b324',
			            	formatter: '{c}%'
			            },
			            data:[]
				    }, {
				    	name: '净利润环比',
			            type: 'line',
			            itemStyle: {
			            	color: '#d141d9'
			            },
			            label: {
			            	show: true,
			            	color: '#d141d9',
			            	formatter: '{c}%'
			            },
			            data:[]
				    }]
				},
				chartOpt3: {
					legend: {
						top: 10,
						left: 'center'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						}
					},
				    grid: {
				        left: 20,
				        right: 20,
				        top: 45,
				        bottom: 15,
				        containLabel: true
				    },
				    xAxis: [{
			            type: 'category',
			            data: [],
			            axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            }
				    }],
				    yAxis: [{
				        type: 'value',
				        name: '亿元',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            },
			            splitLine: {
							lineStyle: {color: ['#eee']}			            	
			            }
				    }, {
				    	type: 'value',
				        name: '%',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	interval: 0,
			            	color: '#333'
			            },
			            splitLine: {
							lineStyle: {color: ['#eee']}			            	
			            }
				    }],
				    series: [{
			            name: '经营活动产生的现金流量净额',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            data:[]
				    }, {
				    	name: '投资活动产生的现金流量净额',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            data:[]
				    }, {
				    	name: '筹资活动产生的现金流量净额',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            data:[]
				    }, {
				    	name: '期末现金及现金等价物余额',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#d141d9'
			            },
			            label: {
			            	show: true,
			            	color: '#d141d9',
			            	formatter: '{c}%'
			            },
			            data:[]
				    }]
				}
			}
		},
		created: function() {
			let vm = this;
			// 资产负债分析
			ApiSrv.getFinanceBalanceSheet()
				 .then(function(resp) {
				 	vm.$refs.chart1.mergeOptions({
						xAxis: [{
							data: resp.data.cycle
						}],
						series: [{
							name: '流动资产',
							data: resp.data.circulatingAssets
						}, {
							name: '非流动资产',
							data: resp.data.nonCurrentAssets
						}, {
							name: '流动负债',
							data: resp.data.cashLiabilities
						}, {
							name: '非流动负债',
							data: resp.data.nonCurrentLiabilities
						}, {
							name: '股东权益',
							data: resp.data.shareholdersEquity
						}, {
							name: '资产负债率',
							data: resp.data.assetLiabilityRatio
						}]
				 	});
				 })
				 .catch(function(err) {
				 	console.error('Axios Error: ', err);
				 });
			// 利润分析
			ApiSrv.getFinanceProfitStatement()
				 .then(function(resp) {
				 	vm.$refs.chart2.mergeOptions({
						xAxis: [{
							data: resp.data.cycle
						}],
						series: [{
							name: '营业收入',
							data: resp.data.income
						}, {
							name: '净利润',
							data: resp.data.profit
						}, {
							name: '营业收入环比',
							data: resp.data.incomeRatio
						}, {
							name: '净利润环比',
							data: resp.data.profitRatio
						}]
				 	});
				 })
				 .catch(function(err) {
				 	console.error('Axios Error: ', err);
				 });
			// 现金流量分析
			ApiSrv.getFinanceCashFlow()
				 .then(function(resp) {
				 	vm.$refs.chart3.mergeOptions({
						xAxis: [{
							data: resp.data.cycle
						}],
						series: [{
							name: '经营活动产生的现金流量净额',
							data: resp.data.operatingActivity
						}, {
							name: '投资活动产生的现金流量净额',
							data: resp.data.activityInvesment
						}, {
							name: '筹资活动产生的现金流量净额',
							data: resp.data.financing
						}, {
							name: '期末现金及现金等价物余额',
							data: resp.data.endNetRatio
						}]
				 	});
				 })
				 .catch(function(err) {
				 	console.error('Axios Error: ', err);
				 });
		}
	}
</script>

<style scoped>
	.sel-div .el-select {width:100%;}
	.view-t {table-layout:fixed;border-collapse:collapse;margin-bottom:20px;width:100%;}
	.view-t caption {padding:10px;text-align:center;font-size:16px;font-weight:bold;}
	.view-t th,
	.view-t td {padding:10px;text-align:left;font-size:14px;font-weight:normal;border:1px solid #bbb;}
	.view-t th {background-color:#ddd;}
	.card-header {margin:-8px -5px;font-weight:bold;}
	.card-body {margin:-20px;}
	.echarts {width:100%;height:250px;}
</style>