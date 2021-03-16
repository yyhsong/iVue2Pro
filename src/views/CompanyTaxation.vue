<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>企业税务分析</el-breadcrumb-item>
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
						<span>企业纳税分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt1"
							ref="chart1" auto-resize></echart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		
		<el-row :gutter="20" style="margin-top:20px;margin-bottom:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>税率分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt2"
							ref="chart2" auto-resize></echart>
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
			            data: []
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
							show: false		            	
			            }
				    }, {
				    	type: 'value',
				        name: '万元',
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
							show: false			            	
			            }
				    }],
				    series: [{
				    	name: '营业收入',
			            type: 'bar',
			            barMaxWidth: 20,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            data:[]
				    }, {
				    	name: '毛利润',
			            type: 'bar',
			            barMaxWidth: 20,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            data:[]
				    }, {
				    	name: '净利润',
			            type: 'bar',
			            barMaxWidth: 20,
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            data:[]
				    }, {
				    	name: '营业税金及附加',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#d141d9'
			            },
			            label: {
			            	show: true,
			            	color: '#d141d9',
			            	formatter: '{c}万'
			            },
			            markLine: {
			            	data: [{
			            			name: '平均值', 
			            			type: 'average'
			            	}],
			            	label: {
			            		position: 'middle',
			            		formatter: '季度均值：{c}万元'
			            	}
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
			            boundaryGap: false,
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
			            data: []
				    }],
				    yAxis: [{
				    	type: 'value',
				        name: '%',
				        min: 5, 
				        max: 55,
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
				    	name: '毛利率',
			            type: 'line',
			            smooth: true,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            data:[]
				    }, {
				    	name: '净利率',
			            type: 'line',
			            smooth: true,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            data:[]
				    }, {
				    	name: '实际税率',
			            type: 'line',
			            smooth: true,
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
			// 纳税分析
			ApiSrv.getTaxationPay()
				 .then(function(resp) {
				 	vm.$refs.chart1.mergeOptions({
				 		xAxis: [{
							data: resp.data.cycle
						}],
						series: [{
							name: '营业收入',
							data: resp.data.income
						}, {
							name: '毛利润',
							data: resp.data.grossProfit
						}, {
							name: '净利润',
							data: resp.data.netProfit
						}, {
							name: '营业税金及附加',
							data: resp.data.taxMount
						}]
				 	});
				 })
				 .catch(function(err) {
				 	console.error('Axios Error: ', err);
				 });
			// 税率分析
			ApiSrv.getTaxationProfit()
				 .then(function(resp) {
				 	vm.$refs.chart2.mergeOptions({
				 		xAxis: [{
							data: resp.data.cycle
						}],
						series: [{
							name: '毛利率',
							data: resp.data.grossProfit
						}, {
							name: '净利率',
							data: resp.data.netProfit
						}, {
							name: '实际税率',
							data: resp.data.taxRate
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