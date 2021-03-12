<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>指标体系</el-breadcrumb-item>
			<el-breadcrumb-item>指标分析</el-breadcrumb-item>
		</el-breadcrumb>
		
		<div class="sel-div">
			<el-select filterable v-model="selectedStock" 
				@change="changeSel" placeholder="请选择...">
				<el-option 
					v-for="stock in stockList"
					:key="stock.code"
					:value="stock.code"
					:label="stock.code + ' ' + stock.name">
				</el-option>
			</el-select>
		</div>
		
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>董事会独立性及多元化程度分析</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt1"
							ref="chart1" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>董事会专业性分析</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt2"
							ref="chart2" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>董事会行为分析</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt3"
							ref="chart3" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>董事薪酬趋势及预测</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt4"
							ref="chart4" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;margin-bottom:20px;">
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>社会责任分析</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt5"
							ref="chart5" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>信息披露分析</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt6"
							ref="chart6" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import IndicatorSrv from '../api/IndicatorSrv';
	import 'echarts/lib/chart/bar';
	import 'echarts/lib/chart/line';
	import 'echarts/lib/chart/pie';
	import 'echarts/lib/chart/radar';
	import 'echarts/lib/component/legend';
	import 'echarts/lib/component/markLine';
	import 'echarts/lib/component/markPoint';
	
	export default {
		data() {
			return {
				//选中的股票代码
		        selectedStock: '',
		        //可选的股票列表
		        stockList: [],
		        //图表配置
				chartOpt1: {
				    grid: {
				        left: 0,
				        right: 20,
				        top: 30,
				        bottom: 15,
				        containLabel: true
				    },
				    xAxis: [{
			            type: 'category',
			            data: ['董事会总人数', '独立董事', '执行董事', '其他外部董事', '职工董事', '女性董事', '外籍董事'],
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
				        show: false
				    }],
				    series: [{
			            name: '董事会独立性分析',
			            type: 'bar',
			            barMaxWidth: 40,
			            itemStyle: {
			            	color: function(params) {
			            		if(params.dataIndex==0) {
			            			return '#f0b324';
			            		}else if(params.dataIndex>3) {
			            			return '#339ca8';
			            		}
			            		return '#0098d9';
			            	}
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#333'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#2b821d'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '行业内董事会规模人数均值：{c}'
			            	},
			            	data: [{
			            		name: '行业内董事会规模人数均值',
			            		yAxis: 8
			            	}]
			            },
			            data:[10, 6, 2, 2, 1, 3, 1]
				    }]
				},
				chartOpt2: {
					legend: {
						top: 10,
						left: 'center'
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
			            data: ['战略决策委员会', '提名委员会', '薪酬委员会', '审计委员会', '专业独董人数'],
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
				        show: false
				    }],
				    series: [{
			            name: '总人数',
			            type: 'bar',
			            barMaxWidth: 30,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#333'
			            },
			            data:[7, 6, 5, 4]
				    }, {
				    	name: '独董人数',
			            type: 'bar',
			            barMaxWidth: 30,
			            itemStyle: {
			            	color: (params) => {
			            		if(params.dataIndex==4) {
			            			return '#f0b324';
			            		}
			            		return '#339ca8';
			            	}
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#333'
			            },
			            data:[5, 4, 3, 2, 5]
				    }]
				},
				chartOpt3: {
					legend: {
						top: 10,
						left: 'center'
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
			            data: ['专门委员会会议', '董事会会议', '股东大会'],
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
				        show: false
				    }, {
				    	type: 'value',
				    	show: false
				    }],
				    series: [{
			            name: '会议召开次数',
			            type: 'bar',
			            barMaxWidth: 45,
			            itemStyle: {
			            	color: (params) => {
			            		if(params.dataIndex==0) {
			            			return '#0098d9';
			            		}else if(params.dataIndex==1) {
			            			return '#f0b324';
			            		}else if(params.dataIndex==2) {
			            			return '#339ca8';
			            		}
			            		return '#0098d9';
			            	}
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#333'
			            },
			            data:[18, 12, 8]
				    }, {
				    	name: '独董出席比率',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#c12e34'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#c12e34',
			            	formatter: '{c}%'
			            },
			            data:[66, 90, 72]
				    }]
				},
				chartOpt4: {
					legend: {
						top: 10,
						left: 'center'
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
			            data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
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
				        show: false
				    }, {
				    	type: 'value',
				    	show: false
				    }],
				    series: [{
			            name: '董事薪酬',
			            type: 'bar',
			            barMaxWidth: 40,
			            itemStyle: {
			            	color: (params) => {
			            		if(params.dataIndex<2) {
			            			return '#0098d9';
			            		}else if(params.dataIndex==2) {
			            			return '#7760f6';
			            		}else if(params.dataIndex>2) {
			            			return '#339ca8';
			            		}
			            		return '#0098d9';
			            	}
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#333',
			            	formatter: '{c}万'
			            },
			            data:[880, 1020, 1240, 1360, 1480]
				    }, {
				    	name: '董事薪酬增长率',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#c12e34'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#c12e34',
			            	formatter: '{c}%'
			            },
			            data:[10, 16, 22, 12, 8]
				    }, {
				    	name: '公司净利润增长率',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            label: {
			            	show: true,
			            	position: 'top',
			            	color: '#f0b324',
			            	formatter: '{c}%'
			            },
			            data:[12, 20, 18, 16, 10]
				    }]
				},
				chartOpt5: {
				    series: [{
			            name: '社会责任',
			            type: 'pie',
			            roseType: 'area',
						center: ['50%', '50%'],
			            label: {
			            	show: true,
			            	position: 'outside',
			            	formatter: '{b}：{c}亿'
			            },
			            data:[
			            	{name:'纳税总额', value:11.8},
			            	{name:'环保投入', value:3.6},
			            	{name:'慈善捐助', value:5.2},
			            	{name:'扶贫投入', value:2.8},
			            	{name:'研发投入', value:6.6}
			            ]
				    }],
				    color: ['#0098d9', '#339ca8', '#7760f6', '#2b821d', '#f0b324']
				},
				chartOpt6: {
					legend: {
						top: 10,
						left: 10,
						orient: 'vertical'
					},
					radar: {
						indicator: [
							{name:'年报披露日期距1月1日的天数', max:15, min:1},
							{name:'一季报披露日期距4月1日的天数', max:15, min:1},
							{name:'半年报披露日期距7月1日的天数', max:15, min:1},
							{name:'三季报披露日期距10月1日的天数', max:15, min:1}
						],
						splitArea: {show:false},
						axisLine: {show:false}
					},
				    series: [{
			            name: '信息披露',
			            type: 'radar',
			            roseType: 'area',
						areaStyle: {},
						label: {
							show: true
						},
			            data:[
			            	{
			            		name: '披露日期',
			            		value: [15, 7, 12, 9]
			            	},
			            	{
			            		name: '行业均值',
			            		value: [10, 10, 10, 10]
			            	}
			            ]
				    }],
				    color: ['#0098d9', '#c12e34']
				}
			}
		},
		methods: {
	    	//选择股票
	    	changeSel(selectedCode) {
	    		//获取当前Vue组件对象
	    		let vm = this;
	    		console.log('SelectedCode: ', selectedCode);
	    	}
	    },
	    //钩子函数
	    created: function() {
	    	//获取当前Vue组件对象
	    	let vm = this;
	    	//获取股票列表
	    	IndicatorSrv.getStockList().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.stockList = resp.data;
	    	}).catch(function(err) {
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