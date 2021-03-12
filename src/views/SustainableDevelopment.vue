<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>可持续发展</el-breadcrumb-item>
		</el-breadcrumb>

		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>研发投入占比 &amp; 毛利率均值（地域）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt1"
							ref="chart1" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>研发投入占比 &amp; 毛利率均值（行业）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt2"
							ref="chart2" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>扶贫投入（地域）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt3"
							ref="chart3" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>全样本与金圆桌样本的研发投入占比比较（地域）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt4"
							ref="chart4" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top:20px;margin-bottom:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>全样本与金圆桌样本的研发投入占比比较（行业）</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt5"
							ref="chart5" auto-resize></v-chart>
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
				//研发投入占比&毛利率均值（地域）
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
				        left: 20,
				        right: 60,
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
				        name: '研发占比',
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
				    }, {
				    	type: 'value',
				        name: '毛利率',
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
			            name: '研发占比',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#0098d9'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }, {
				    	name: '毛利率',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#d4237a'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#d4237a'
			            	},
			            	label: {
			            		position: 'end',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }]
				},
				//研发投入&毛利率均值（行业）
				chartOpt2: {
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
				        left: 20,
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
				        name: '研发占比',
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
				    }, {
				    	type: 'value',
				        name: '毛利率',
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
			            name: '研发占比',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#339ca8'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#339ca8'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }, {
				    	name: '毛利率',
			            type: 'line',
			            yAxisIndex: 1,
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#f0b324'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }]
				},
				//扶贫投入数量（地域）
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
				        left: 20,
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
								tip += params[i].marker + params[i].seriesName + '：' + params[i].value;
								if(i==0) {
									tip += '%<br />';
								}
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
				    }, {
				    	type: 'value',
				        name: '数量',
				        axisLine: {
			            	lineStyle: {color: '#999'}
			            },
			            axisTick: {
			            	show: false,
			                alignWithLabel: true
			            },
			            axisLabel: {
			            	color: '#333',
			            },
			            splitLine: {
			            	show: false
			            }
				    }],
				    series: [{
				    	name: '扶贫投入占比',
			            type: 'line',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#d4237a'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#d4237a'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '占比均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }, {
			            name: '扶贫投入数量',
			            type: 'bar',
			            yAxisIndex: 1,
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#7760f6'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#7760f6'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '数量均值：{c}'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }]
				},
				//全样本与金圆桌样本的研发投入占比比较（地域）
				chartOpt4: {
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
				        left: 20,
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
				        name: '研发占比',
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
			            name: '全样本',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#0098d9'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#0098d9'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }, {
				    	name: '金圆桌样本',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#d4237a'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#d4237a'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }]
				},
				//全样本与金圆桌样本的研发投入占比比较（行业）
				chartOpt5: {
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
				        left: 20,
				        right: 75,
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
				        name: '研发占比',
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
			            name: '全样本',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#339ca8'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#339ca8'
			            	},
			            	label: {
			            		position: 'middle',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }, {
				    	name: '金圆桌样本',
			            type: 'bar',
			            barMaxWidth: 15,
			            itemStyle: {
			            	color: '#f0b324'
			            },
			            markLine: {
			            	lineStyle: {
			            		color: '#f0b324'
			            	},
			            	label: {
			            		position: 'end',
			            		formatter: '均值：{c}%'
			            	},
			            	data: [{
			            		type: 'average'
			            	}]
			            }
				    }]
				}
			}
		},
	    //钩子函数
	    mounted: function() {
	    	//获取当前Vue组件对象
	    	let vm = this;
	    	//研发投入占比&毛利率均值（地域）
	    	IndicatorSrv.getRdrateProfitRegion().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart1.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.region
	    			}],
	    			series: [{
	    				name: '研发占比',
	    				data: resp.data.rd_rate
	    			}, {
	    				name: '毛利率',
	    				data: resp.data.gross_profit_rate
	    			}]
	    		});
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    	//研发投入占比&毛利率均值（行业）
	    	IndicatorSrv.getRdrateProfitIndustry().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart2.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.industry
	    			}],
	    			series: [{
	    				name: '研发占比',
	    				data: resp.data.rd_rate
	    			}, {
	    				name: '毛利率',
	    				data: resp.data.gross_profit_rate
	    			}]
	    		});
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    	//扶贫投入（地域）
	    	IndicatorSrv.getPovertyAlleviationNum().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart3.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.region
	    			}],
	    			series: [{
	    				name: '扶贫投入占比',
	    				data: resp.data.poverty_alleviation_per
	    			}, {
	    				name: '扶贫投入数量',
	    				data: resp.data.poverty_alleviation_num
	    			}]
	    		});
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    	//全样本与金圆桌样本的研发投入占比比较（地域）
	    	IndicatorSrv.getJyzRdRateRegion().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart4.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.region
	    			}],
	    			series: [{
	    				name: '全样本',
	    				data: resp.data.rd_rate
	    			}, {
	    				name: '金圆桌样本',
	    				data: resp.data.jyz_rd_rate
	    			}]
	    		});
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    	//全样本与金圆桌样本的研发投入占比比较（行业）
	    	IndicatorSrv.getJyzRdRateIndustry().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.$refs.chart5.mergeOptions({
	    			xAxis: [{
	    				data: resp.data.industry
	    			}],
	    			series: [{
	    				name: '全样本',
	    				data: resp.data.rd_rate
	    			}, {
	    				name: '金圆桌样本',
	    				data: resp.data.jyz_rd_rate
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