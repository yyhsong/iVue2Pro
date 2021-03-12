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
							ref="chart1" auto-resize style="height:250px;"></v-chart>
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
				        top: 35,
				        bottom: 10,
				        containLabel: true
				    },
				    tooltip: {
				    	trigger: "axis",
						axisPointer: {
							type: "shadow"
						},
						formatter: function(params) {
							let tip = params[0].name + '<br />';
							for(let i in params) {
								tip += params[i].marker + params[i].seriesName + '：' + params[i].value + '%<br />'
							}
							return tip;
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
				        name: '占比',
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
				    	name: '是否含有党员董事',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#0098d9'
			            }
				    }, {
			            name: '董事长是否兼任党委（党组）书记',
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
				        top: 35,
				        bottom: 10,
				        containLabel: true
				    },
				    tooltip: {
				    	trigger: "axis",
						axisPointer: {
							type: "shadow"
						},
						formatter: function(params) {
							let tip = params[0].name + '<br />';
							for(let i in params) {
								tip += params[i].marker + params[i].seriesName + '：' + params[i].value + '%<br />'
							}
							return tip;
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
				        name: '占比',
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
				    	name: '是否含有党员董事',
			            type: 'bar',
			            barMaxWidth: 10,
			            itemStyle: {
			            	color: '#0098d9'
			            }
				    }, {
			            name: '董事长是否兼任党委（党组）书记',
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
						},
						selected: {
							'所有(党建)': true,
							'所有(非党建)': true,
							'国有(党建)': false,
							'国有(非党建)': false,
							'国有相对控股(党建)': false,
							'国有相对控股(非党建)': false,
							'民营(党建)': false,
							'民营(非党建)': false,
//							'民营相对控股(党建)': false,
//							'民营相对控股(非党建)': false,
							'集体(党建)': false,
							'集体(非党建)': false,
							'外资(党建)': false,
							'外资(非党建)': false
						}
					},
					grid: {
				        left: 10,
				        right: 15,
				        top: 100,
				        bottom: 10,
				        containLabel: true
				    },
				    tooltip: {
				    	trigger: "axis",
						axisPointer: {
							type: "shadow"
						},
						formatter: function(params) {
							let tip = params[0].name + '<br />';
							for(let i in params) {
								tip += params[i].marker + params[i].seriesName + '：' + params[i].value + '%<br />'
							}
							return tip;
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
			            data: ['2014', '2015', '2016', '2017', '2018', '2019']
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
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            lineStyle: {
			            	type: 'dashed'
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
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#339ca8'
			            },
			            lineStyle: {
			            	type: 'dashed'
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
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            lineStyle: {
			            	type: 'dashed'
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
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            lineStyle: {
			            	type: 'dashed'
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
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#d4237a'
			            },
			            lineStyle: {
			            	type: 'dashed'
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
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#b03a5b'
			            },
			            lineStyle: {
			            	type: 'dashed'
			            }
				    }, {
			            type: 'line',
			            symbol: 'circle',
			            smooth: true,
			            itemStyle: {
			            	color: '#2b821d'
			            }
				    }, {
				    	type: 'line',
			            symbol: 'diamond',
			            smooth: true,
			            itemStyle: {
			            	color: '#2b821d'
			            },
			            lineStyle: {
			            	type: 'dashed'
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
	    				name: '是否含有党员董事',
	    				data: resp.data.index_2
	    			}, {
	    				name: '董事长是否兼任党委（党组）书记',
	    				data: resp.data.index_1
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
	    				name: '是否含有党员董事',
	    				data: resp.data.index_2
	    			}, {
	    				name: '董事长是否兼任党委（党组）书记',
	    				data: resp.data.index_1
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
	    				name: resp.data.ownership_structure[0]+'(党建)',
	    				data: resp.data.structure_dj_0
	    			}, {
	    				name: resp.data.ownership_structure[0]+'(非党建)',
	    				data: resp.data.structure_fdj_0
	    			}, {
	    				name: resp.data.ownership_structure[1]+'(党建)',
	    				data: resp.data.structure_dj_1
	    			}, {
	    				name: resp.data.ownership_structure[1]+'(非党建)',
	    				data: resp.data.structure_fdj_1
	    			}, {
	    				name: resp.data.ownership_structure[2]+'(党建)',
	    				data: resp.data.structure_dj_2
	    			}, {
	    				name: resp.data.ownership_structure[2]+'(非党建)',
	    				data: resp.data.structure_fdj_2
	    			}, {
	    				name: resp.data.ownership_structure[3]+'(党建)',
	    				data: resp.data.structure_dj_3
	    			}, {
	    				name: resp.data.ownership_structure[3]+'(非党建)',
	    				data: resp.data.structure_fdj_3
	    			}, 
//	    			{
//	    				name: resp.data.ownership_structure[4]+'(党建)',
//	    				data: resp.data.structure_dj_4
//	    			}, {
//	    				name: resp.data.ownership_structure[4]+'(非党建)',
//	    				data: resp.data.structure_fdj_4
//	    			}, 
	    			{
	    				name: resp.data.ownership_structure[5]+'(党建)',
	    				data: resp.data.structure_dj_5
	    			}, {
	    				name: resp.data.ownership_structure[5]+'(非党建)',
	    				data: resp.data.structure_fdj_5
	    			}, {
	    				name: resp.data.ownership_structure[6]+'(党建)',
	    				data: resp.data.structure_dj_6
	    			}, {
	    				name: resp.data.ownership_structure[6]+'(非党建)',
	    				data: resp.data.structure_fdj_6
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
	.echarts {width:100%;height:320px;}
	.el-card {overflow:visible;}
</style>