<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>企业分析</el-breadcrumb-item>
			<el-breadcrumb-item>关联图谱</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-row :gutter="20" style="margin-bottom:20px;">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>企业关联图谱</span>
					</div>
					<div class="card-body">
						<v-chart :options="chartOpt"
							ref="chart" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				chartOpt: {
					animationDurationUpdate: 1500,
				    animationEasingUpdate: 'quinticInOut',
				    label: {
				        normal: {
				            show: true,
				            textStyle: {
				                fontSize: 12
				            }
				        }
				    },
				    series: [{
				    	name: '企业关联图谱',
			            type: 'graph',
			            layout: 'force', //力引导布局，环形布局circular
			            focusNodeAdjacency: true,
			            force: {
			                repulsion: 500 //斥力因子，值越大，斥力越大
			            },
			            roam: true, //开启漫游
			            symbol: 'circle',
			            symbolSize: 45,
			            label: {
			                normal: {
			                    show: true,
			                    textStyle: {
			                        fontSize: 12
			                    },
			                }
			            },
			            edgeSymbol: ['none', 'arrow'],
			            edgeSymbolSize: [3, 3],
			            edgeLabel: {
			                normal: {
			                    show: true,
			                    textStyle: {
			                        fontSize: 10
			                    },
			                    formatter: "{c}"
			                }
			            },
			            categories: [{
			            	name: '公司',
			            	draggable: false,
			            	itemStyle: {
			            		normal: {
			            			color: '#7760f6'
			            		}
			            	}
			            }, {
			                name: '高管',
			                draggable: true,
			                itemStyle: {
			                    normal: {
			                        color: "#0098d9",
			                    }
			                }
			            }, {
			            	name: '股东',
			            	draggable: true,
			                itemStyle: {
			                    normal: {
			                        color: "#2b821d",
			                    }
			                }
			            }, {
			            	name: '子公司',
			            	draggable: true,
			                itemStyle: {
			                    normal: {
			                        color: "#f0b324",
			                    }
			                }
			            }],
			            data: [{
			            	name: '海澜之家',
			            	category: 0
			            }, {
			            	name: '高管',
			            	category: 1
			            }, {
			            	name: '十大股东',
			            	category: 2
			            }, {
			            	name: '子公司',
			            	category: 3
			            }, {
			            	name: '周建平',
			            	category: 1,
			            	itemStyle: {
			            		normal: {color: '#f2637b'}
			            	}
			            }, {
			            	name: '顾东升',
			            	category: 1
			            }, {
			            	name: '周立宸',
			            	category: 1
			            }, {
			            	name: '许庆华',
			            	category: 1
			            }, {
			            	name: '钱亚萍',
			            	category: 1
			            }, {
			            	name: '赵方伟',
			            	category: 1
			            }, {
			            	name: '王光明',
			            	category: 1
			            }, {
			            	name: '杨小龙',
			            	category: 1
			            }, {
			            	name: '姚宁',
			            	category: 1
			            }, {
			            	name: '龚琴霞',
			            	category: 1
			            }, {
			            	name: '黄凯',
			            	category: 1
			            }, {
			            	name: '张勤学',
			            	category: 1
			            }, {
			            	name: '海澜集团有限公司',
			            	category: 2,
			            	itemStyle: {
			            		normal: {color: '#f2637b'}
			            	}
			            }, {
			            	name: '荣基国际(香港)有限公司',
			            	category: 2
			            }, {
			            	name: '深圳市腾讯普和有限合伙企业',
			            	category: 2
			            }, {
			            	name: '江阴恒盛国际贸易有限公司',
			            	category: 2
			            }, {
			            	name: '国星集团有限公司',
			            	category: 2
			            }, {
			            	name: '全国社保基金一零二组合',
			            	category: 2
			            }, {
			            	name: '中国证券金融股份有限公司',
			            	category: 2
			            }, {
			            	name: '江阴市晟汇国际贸易有限公司',
			            	category: 2
			            }, {
			            	name: '香港中央结算有限公司',
			            	category: 2
			            }, {
			            	name: '招商银行股份有限公司',
			            	category: 2
			            }, {
			            	name: '海澜之家品牌管理有限公司',
			            	category: 3
			            }, {
			            	name: '圣凯诺服饰有限公司',
			            	category: 3
			            }, {
			            	name: '江阴海澜之家投资有限公司',
			            	category: 3
			            }, {
			            	name: '江阴中汇服饰有限公司',
			            	category: 3
			            }, {
			            	name: '江阴海澜之家国际商业有限公司',
			            	category: 3
			            }, {
			            	name: '南京理工科技园股份有限公司',
			            	category: 3
			            }, {
			            	name: '江阴市海澜投资控股有限公司',
			            	draggable: true,
			            	itemStyle: {
			            		normal: {color: '#f2637b'}
			            	}
			            }],
			            links: [{
			            	source: '海澜之家',
			            	target: '高管',
			            	value: ''
			            }, {
			            	source: '海澜之家',
			            	target: '十大股东',
			            	value: ''
			            }, {
			            	source: '海澜之家',
			            	target: '子公司',
			            	value: ''
			            }, {
			            	source: '高管',
			            	target: '周建平',
			            	value: '董事长、董事、法人'
			            }, {
			            	source: '高管',
			            	target: '顾东升',
			            	value: '总经理、董事'
			            }, {
			            	source: '高管',
			            	target: '周立宸',
			            	value: '副董事长、董事'
			            }, {
			            	source: '高管',
			            	target: '许庆华',
			            	value: '副总经理、董事、董秘'
			            }, {
			            	source: '高管',
			            	target: '钱亚萍',
			            	value: '董事、财务总监'
			            }, {
			            	source: '高管',
			            	target: '赵方伟',
			            	value: '董事'
			            }, {
			            	source: '高管',
			            	target: '王光明',
			            	value: '独立董事'
			            }, {
			            	source: '高管',
			            	target: '杨小龙',
			            	value: '独立董事'
			            }, {
			            	source: '高管',
			            	target: '姚宁',
			            	value: '独立董事'
			            }, {
			            	source: '高管',
			            	target: '龚琴霞',
			            	value: '监事会主席、监事'
			            }, {
			            	source: '高管',
			            	target: '黄凯',
			            	value: '监事'
			            }, {
			            	source: '高管',
			            	target: '张勤学',
			            	value: '职工监事'
			            }, {
			            	source: '十大股东',
			            	target: '海澜集团有限公司',
			            	value: '39.31%'
			            }, {
			            	source: '十大股东',
			            	target: '荣基国际(香港)有限公司',
			            	value: '24.65%'
			            }, {
			            	source: '十大股东',
			            	target: '深圳市腾讯普和有限合伙企业',
			            	value: '5.31%'
			            }, {
			            	source: '十大股东',
			            	target: '江阴恒盛国际贸易有限公司',
			            	value: '3.61%'
			            }, {
			            	source: '十大股东',
			            	target: '国星集团有限公司',
			            	value: '3.44%'
			            }, {
			            	source: '十大股东',
			            	target: '全国社保基金一零二组合',
			            	value: '2.92%'
			            }, {
			            	source: '十大股东',
			            	target: '中国证券金融股份有限公司',
			            	value: '2.53%'
			            }, {
			            	source: '十大股东',
			            	target: '江阴市晟汇国际贸易有限公司',
			            	value: '1.97%'
			            }, {
			            	source: '十大股东',
			            	target: '香港中央结算有限公司',
			            	value: '1.83%'
			            }, {
			            	source: '十大股东',
			            	target: '招商银行股份有限公司',
			            	value: '0.85%'
			            }, {
			            	source: '子公司',
			            	target: '海澜之家品牌管理有限公司',
			            	value: '全资'
			            }, {
			            	source: '子公司',
			            	target: '圣凯诺服饰有限公司',
			            	value: '全资'
			            }, {
			            	source: '子公司',
			            	target: '江阴海澜之家投资有限公司',
			            	value: '全资'
			            }, {
			            	source: '子公司',
			            	target: '江阴中汇服饰有限公司',
			            	value: '全资'
			            }, {
			            	source: '子公司',
			            	target: '江阴海澜之家国际商业有限公司',
			            	value: '全资'
			            }, {
			            	source: '子公司',
			            	target: '南京理工科技园股份有限公司',
			            	value: '21.6%'
			            }, {
			            	source: '周建平',
			            	target: '江阴市海澜投资控股有限公司',
			            	value: '52%'
			            }, {
			            	source: '江阴市海澜投资控股有限公司',
			            	target: '海澜集团有限公司',
			            	value: '100%'
			            }],
			            lineStyle: {
			                normal: {
			                    opacity: 0.9,
			                    width: 1,
			                    curveness: .1 //弧度
			                }
			            }
				    }]
				}
			}
		}
	}
</script>

<style scoped>
	.view-t {table-layout:fixed;border-collapse:collapse;margin-bottom:20px;width:100%;}
	.view-t caption {padding:10px;text-align:center;font-size:16px;font-weight:bold;}
	.view-t th,
	.view-t td {padding:10px;text-align:left;font-size:14px;font-weight:normal;border:1px solid #bbb;}
	.view-t th {background-color:#ddd;}
	.card-header {margin:-8px -5px;font-weight:bold;}
	.card-body {margin:-20px;}
	.echarts {width:100%;height:800px;}
</style>