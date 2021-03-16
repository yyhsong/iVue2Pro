<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>企业经营分析</el-breadcrumb-item>
		</el-breadcrumb>
		
		<div class="sel-div">
			<el-row :gutter="20">
				<el-col :span="12">
					<el-select filterable v-model="selectedStock" placeholder="请选择...">
						<el-option 
							v-for="stock in stockList"
							:key="stock.code"
							:value="stock.code"
							:label="stock.code + ' ' + stock.name">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="12">
					<el-select filterable v-model="selectedQuarter" placeholder="请选择...">
						<el-option 
							v-for="quarter in quarterList"
							:key="quarter.code"
							:value="quarter.code"
							:label="quarter.text">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
		</div>
		
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>主营构成分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt1"
							ref="chart1" auto-resize></echart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		
		<el-row :gutter="20" style="margin-top:20px;margin-bottom:20px;">
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>产品销售分析</span>
					</div>
					<div class="card-body">
						<echart :options="chartOpt2"
							ref="chart2" auto-resize></echart>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>地区销售分析</span>
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
				//选中的季度
				selectedQuarter: '201803',
				//股票列表
				quarterList: [
					{code:'201803', text:'2018年三季度'}
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
							type: 'shadow'
						}
					},
				    grid: {
				        left: 0,
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
				    	show: false,
				        type: 'value',
				        max: '90',
				        min: '-45'
				    }, {
				    	show: false,
				    	type: 'value',
				    	max: '60',
				        min: '-30'
				    }],
				    series: [{
			            name: '主营收入（亿元）',
			            type: 'bar',
			            barMaxWidth: 40,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#0098d9'
			            },
			            data:[]
				    }, {
				    	name: '主营利润(亿元)',
			            type: 'bar',
			            barMaxWidth: 40,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#7760f6'
			            },
			            data:[]
				    }, {
				    	name: '毛利率',
				    	type: 'line',
				    	yAxisIndex: 1,
				    	itemStyle: {
			            	color: '#d141d9'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#d141d9',
			            	formatter: '{c}%'
			            },
			            data:[]
				    }]
				},
				chartOpt2: {
					series: [{
			            name: '按产品分类',
			            type: 'pie',
			            roseType: 'area',
						center: ['50%', '50%'],
			            label: {
			            	show: true,
			            	position: 'outside',
			            	formatter: '{b}：{c}亿 ({d}%)'
			            },
			            data:[]
				    }],
				    color: ['#0098d9', '#7760f6', '#339ca8', '#2b821d', 
				    	'#f0b324', '#c12e34', '#5c8ee6', '#d141d9']
				},
				chartOpt3: {
					series: [{
			            name: '按地区分类',
			            type: 'pie',
						center: ['50%', '50%'],
						radius: ['45%', '70%'],
			            label: {
			            	show: true,
			            	position: 'outside',
			            	formatter: '{b}：{c}亿 ({d}%)'
			            },
			            data:[]
				    }],
				    color: ['#0098d9', '#7760f6', '#c12e34', '#339ca8', '#2b821d', 
				    	'#f0b324', '#d141d9']
				}
			}
		},
		created: function() {
			let vm = this;
			// 主营构成分析
			ApiSrv.getOperationBrand()
				 .then(function(resp) {
				 	vm.$refs.chart1.mergeOptions({
				 		xAxis: [{
				 			data: resp.data.brand
				 		}],
				 		series: [{
				 			name: '主营收入（亿元）',
				 			data: resp.data.income
				 		}, {
				 			name: '主营利润（亿元）',
				 			data: resp.data.profit
				 		}, {
				 			name: '毛利率',
				 			data: resp.data.profitRate
				 		}]
				 	});
				 })
				 .catch(function(err) {
				 	console.error('Axios Error: ', err);
				 });
			// 产品销售分析
			ApiSrv.getOperationProduct()
				 .then(function(resp) {
				 	vm.$refs.chart2.mergeOptions({
				 		series: [{
				 			name: '按产品分类',
				 			data: resp.data
				 		}]
				 	});
				 })
				 .catch(function(err) {
				 	console.error('Axios Error: ', err);
				 });
			// 地区销售分析
			ApiSrv.getOperationArea()
				 .then(function(resp) {
				 	vm.$refs.chart3.mergeOptions({
				 		series: [{
				 			name: '按地区分类',
				 			data: resp.data
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
	.echarts {width:100%;height:280px;}
</style>