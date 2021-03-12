<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>党建入章</el-breadcrumb-item>
		</el-breadcrumb>

		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>党建指标统计（地域）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt1"
							ref="chart1" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;margin-bottom:20px;">
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>党建指标统计（股权结构）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt2"
							ref="chart2" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>利润增幅（股权结构）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt3"
							ref="chart3" auto-resize></v-chart>
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
	import 'echarts/lib/component/legend';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/markLine';
	import 'echarts/lib/component/markPoint';
	
	export default {
		data() {
			return {
				//党建指标统计 - 地域
				chartOpt1: {
					legend: {
						top: 10,
						left: 'center',
						itemGap: 10,
						itemWidth: 10,
						itemHeight: 10,
						textStyle: {
							fontSize: 12,
							color: "#333"
						}
					},
					grid: {
				        left: 10,
				        right: 15,
				        top: 30,
				        bottom: 10,
				        containLabel: true
				    },
				    tooltip: {
				    	trigger: "axis",
						axisPointer: {
							type: "shadow"
						}
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
			            }
				    }],
				    yAxis: [{
				        type: 'value',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	color: '#333'
			            },
			            splitLine: {
			            	show: false
			            }
				    }],
				    series: [{
			            name: '董事长是否兼任党委（党组）书记',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#0098d9'
			            }
				    }, {
				    	name: '是否含有党员董事',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#339ca8'
			            }
				    }, {
				    	name: '党建条款是否进入公司章程',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#f0b324'
			            }
				    }, {
				    	name: '党委与董事会成员是否双向进入、交叉任职',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#7760f6'
			            }
				    }, {
				    	name: '决策程序上是否党委会前置',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#d4237a'
			            }
				    }, {
				    	name: '是否披露党委会等党组织参与治理情况',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#b03a5b'
			            }
				    }]
				},
				chartOpt2: {
					legend: {
						orient: 'vertical',
						top: 10,
						left: 'right',
						align: 'left',
						itemGap: 10,
						itemWidth: 10,
						itemHeight: 10,
						textStyle: {
							fontSize: 12,
							color: "#333"
						}
					},
					grid: {
				        left: 10,
				        right: 15,
				        top: 30,
				        bottom: 10,
				        containLabel: true
				    },
				    tooltip: {
				    	trigger: "axis",
						axisPointer: {
							type: "shadow"
						}
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
			            }
				    }],
				    yAxis: [{
				        type: 'value',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	color: '#333'
			            },
			            splitLine: {
			            	show: false
			            }
				    }],
				    series: [{
			            name: '董事长是否兼任党委（党组）书记',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#0098d9'
			            }
				    }, {
				    	name: '是否含有党员董事',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#339ca8'
			            }
				    }, {
				    	name: '党建条款是否进入公司章程',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#f0b324'
			            }
				    }, {
				    	name: '党委与董事会成员是否双向进入、交叉任职',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#7760f6'
			            }
				    }, {
				    	name: '决策程序上是否党委会前置',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#d4237a'
			            }
				    }, {
				    	name: '是否披露党委会等党组织参与治理情况',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#b03a5b'
			            }
				    }]
				},
				chartOpt3: {
					legend: {
						top: 10,
						left: 'center',
						itemGap: 10,
						itemWidth: 10,
						itemHeight: 10,
						textStyle: {
							fontSize: 12,
							color: "#333"
						}
					},
					grid: {
				        left: 10,
				        right: 15,
				        top: 30,
				        bottom: 10,
				        containLabel: true
				    },
				    tooltip: {
				    	trigger: "axis",
						axisPointer: {
							type: "shadow"
						}
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
			            data: ['2013', '2014', '2015', '2016', '2017']
				    }],
				    yAxis: [{
				        type: 'value',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	color: '#333',
			            	formatter: '{value}%'
			            },
			            splitLine: {
			            	show: false
			            }
				    }],
				    series: [{
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#0098d9'
			            }
				    }, {
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#339ca8'
			            }
				    }, {
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#f0b324'
			            }
				    }, {
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#7760f6'
			            }
				    }, {
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#d4237a'
			            }
				    }, {
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#b03a5b'
			            }
				    }, {
				    	type: 'line',
				    	symbol: 'circle',
				    	smooth: true,
			            itemStyle: {
			            	color: '#2b821d'
			            }
				    }]
				}
			}
		},
	    //钩子函数
	    mounted: function() {
	    	//获取当前Vue组件对象
	    	let vm = this;
	    	//党建指标统计 - 地域
	    	IndicatorSrv.getPartyBuildingRegion().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart1.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.region
	    			}],
	    			series: [{
	    				name: '董事长是否兼任党委（党组）书记',
	    				data: resp.data.index_1
	    			}, {
	    				name: '是否含有党员董事',
	    				data: resp.data.index_2
	    			}, {
	    				name: '党建条款是否进入公司章程',
	    				data: resp.data.index_3
	    			}, {
	    				name: '党委与董事会成员是否双向进入、交叉任职',
	    				data: resp.data.index_4
	    			}, {
	    				name: '决策程序上是否党委会前置',
	    				data: resp.data.index_5
	    			}, {
	    				name: '是否披露党委会等党组织参与治理情况',
	    				data: resp.data.index_6
	    			}]
	    		});
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    	//党建指标统计 - 股权结构
	    	IndicatorSrv.getPartyBuildingStructure().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart2.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.ownership_structure
	    			}],
	    			series: [{
	    				name: '董事长是否兼任党委（党组）书记',
	    				data: resp.data.index_1
	    			}, {
	    				name: '是否含有党员董事',
	    				data: resp.data.index_2
	    			}, {
	    				name: '党建条款是否进入公司章程',
	    				data: resp.data.index_3
	    			}, {
	    				name: '党委与董事会成员是否双向进入、交叉任职',
	    				data: resp.data.index_4
	    			}, {
	    				name: '决策程序上是否党委会前置',
	    				data: resp.data.index_5
	    			}, {
	    				name: '是否披露党委会等党组织参与治理情况',
	    				data: resp.data.index_6
	    			}]
	    		});
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    	//利润增幅 - 股权结构
	    	IndicatorSrv.getProfitIncrease().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart3.mergeOptions({
	    			series: [{
	    				name: resp.data.ownership_structure[0],
	    				data: resp.data.structure_1
	    			}, {
	    				name: resp.data.ownership_structure[1],
	    				data: resp.data.structure_2
	    			}, {
	    				name: resp.data.ownership_structure[2],
	    				data: resp.data.structure_3
	    			}, {
	    				name: resp.data.ownership_structure[3],
	    				data: resp.data.structure_4
	    			}, {
	    				name: resp.data.ownership_structure[4],
	    				data: resp.data.structure_5
	    			}, {
	    				name: resp.data.ownership_structure[5],
	    				data: resp.data.structure_6
	    			}, {
	    				name: resp.data.ownership_structure[6],
	    				data: resp.data.structure_7
	    			}]
	    		});
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
	.view-t-yellow th {background-color:#ffffcc;}
	.card-header {margin:-8px -5px;font-weight:bold;}
	.card-body {margin:-20px;}
	.echarts {width:100%;height:250px;}
</style>