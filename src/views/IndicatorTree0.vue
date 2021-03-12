<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>指标体系</el-breadcrumb-item>
			<el-breadcrumb-item>指标层级</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-row :gutter="20">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="card-header">
						<span>指标体系层级结构</span>
					</div>
					<div class="card-body">
						<v-chart :options="treeChartOpt"
							ref="treeChart" auto-resize></v-chart>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import 'echarts/lib/chart/tree';
	
	const treeData1 = {
		name: '董事会结构',
		children: [
			{
				name: '董事会独立性',
				children: [
					{name: '董事会总人数'},
					{name: '行业内董事会规模人数均值'},
					{name: '独立董事人数'},
					{name: '独立董事兼职其他上市公司独董数'},
					{name: '其他外部董事人数'},
					{name: '执行董事人数'},
					{name: '董事长是否兼任其他高管'},
					{name: '董事长是否来自大股东'},
					{name: '董事长是否兼任党委（党组）书记'},
					{name: '兼任经理层的董事人数'},
					{name: '董事是否变更'},
					{name: '是否含有党员董事'},
					{
						name: '多元化程度',
						children: [
							{name: '职工董事人数'},
							{name: '女性董事人数'},
							{name: '外籍董事人数'},
							{name: '有无5%以下中小股东代表董事'}
						]
					}
				]
			},
			{
				name: '董事会专业性',
				children: [
					{name: '是否设立审计委员会'},
					{name: '委员会主任是否独董担任'},
					{name: '是否设立社会责任等其他专门委员会'},
					{name: '法律、财务等专业独立董事人数'},
					{name: '董事变更时间'},
					{
						name: '战略决策委员会',
						children: [
							{name: '总人数'},
							{name: '独董人数'},
							{name: '委员会主任是否独董担任'}
						]
					},
					{
						name: '提名委员会',
						children: [
							{name: '总人数'},
							{name: '独董人数'},
							{name: '委员会主任是否独董担任'}
						]
					},
					{
						name: '薪酬委员会',
						children: [
							{name: '总人数'},
							{name: '独董人数'},
							{name: '委员会主任是否独董担任'}
						]
					},
					{
						name: '审计委员会',
						children: [
							{name: '总人数'},
							{name: '独董人数'},
							{name: '委员会主任是否独董担任'}
						]
					}
				]
			}
		]
	};
	const treeData2 = {
		name: '董事会行为',
		children: [
			{
				name: '专门委员会会议',
				children: [
					{name: '召开次数'},
					{name: '独董出席比率'},
					{name: '提交董事会议题数'},
					{name: '董事会采纳议题数'}
				]
			},
			{
				name: '董事会会议',
				children: [
					{name: '召开次数'},
					{name: '通讯会议次数'},
					{name: '会议地址'},
					{name: '会议议题数'},
					{name: '表决反对票数'},
					{name: '独董亲自到会次数'},
					{name: '独董出席比率'},
					{name: '独董独立发表反对意见数'},
					{name: '独董是否购买董事责任险'}
				]
			},
			{
				name: '股东大会',
				children: [
					{name: '股东大会的董事出席率'},
					{name: '股东大会是否采用累积投票制'},
					{name: '单独或合计10%以上股东是否能提议开临时股东会'},
					{name: '单独或合计3%以上股东是否能够提出议案'},
					{name: '股东大会决议事项投票率'},
					{name: '董事会决议事项反对率'}
				]
			},
			{
				name: '与党委的关系',
				children: [
					{name: '党建条款是否进入公司章程'},
					{name: '党委与董事会成员是否双向进入、交叉任职'},
					{name: '决策程序上是否党委会前置'},
					{name: '是否披露党委会等党组织参与治理情况'}
				]
			}
		]
	};
	const treeData3 = {
		name: '社会责任',
		children: [
			{
				name: '价值创造',
				children: [{
					name: '社会',
					children: [
						{name: '每股社会责任值'},
						{name: '纳税总额'},
						{name: '就业人数'},
						{name: '环境保护'},
						{name: '扶贫或慈善投入'}
					]
				}, {
					name: '股东',
					children: [
						{name: '净资产收益率'},
						{name: '市值增值率'},
						{name: '股息率'}
					]
				}, {
					name: '员工',
					children: [
						{name: '员工收入增幅'},
						{name: '公司利润增幅'},
						{name: '公司人均薪酬'},
						{name: '行业平均人均薪酬'},
						{name: '是否员工持股'},
						{name: '是否工会发挥民主管理作用'}
					]
				}, {
					name: '客户',
					children: [
						{name: '研发占比'},
						{name: '市场份额'},
						{name: '毛利率'}
					]
				}]
			},
			{
				name: '外部评价',
				children: [
					{name: '是否进入沪、深社会责任指数成分股'},
					{name: '是否进入沪、深公司治理指数成分股'},
					{name: '是否入选上市公司“金圆桌奖”'},
					{name: '是否进入明晟指数'},
					{name: '是否上证180治理'},
					{name: '是否esg40股'},
					{name: '负面新闻报道转载数'},
					{name: '监管部门警告或处罚事件数'}
				]
			}
		]
	};
	const treeData4 = {
		name: '信息披露',
		children: [
			{
				name: '披露日期',
				children: [
					{name: '年报披露日期距1月1日的天数'},
					{name: '半年报披露日期距7月1日的天数'},
					{name: '一季报披露日期距4月1日的天数'},
					{name: '三季报披露日期距10月1日的天数'},
				]
			},
			{
				name: '披露一致性',
				children: [
					{name: '信息披露、定期报告披露后的更正数量'},
					{name: '业绩预告与正式公告是否一致'}
				]
			},
			{
				name: '内部控制',
				children: [
					{name: '内部控制文件累计数量（个）'},
					{name: '是否披露内部控制评价'},
					{name: '是否披露内部控制缺陷'},
					{name: '是否有效实施内部控制缺陷整改'}
				]
			},
			{
				name: '当初审计报告意见',
				children: [
					{name: '标准无保留'},
					{name: '有保留'},
					{name: '拒绝发表意见'},
					{name: '否定意见'}
				]
			}
		]
	};
	const treeData5 = {
		name: '董事薪酬、激励及约束',
		children: [
			{
				name: '非独立董事薪酬与激励',
				children: [
					{name: '董事上一年薪酬'},
					{name: '董事本年薪酬'},
					{name: '与公司净利润增幅比较'},
					{name: '行业董事平均薪酬'},
					{name: '董事持股人数'},
					{name: '总体持股比例'},
					{name: '平均持股比例'},
					{name: '董事评价是否披露'},
					{name: '董事增持次数'},
					{name: '董事减持次数'}
				]
			},
			{
				name: '独立董事津贴',
				children: [
					{name: '独立董事上一年津贴'},
					{name: '独立董事本年津贴'},
					{name: '行业独立董事平均津贴'}
				]
			},
			{
				name: '董事责任',
				children: [
					{name: '董事是否遭批评、谴责、禁入等处罚'},
					{name: '信息披露是否存在资金占用、关联交易、同行业竞争等违规事项'},
					{name: '诉讼金额'},
					{name: '赔偿金额'}
				]
			}
		]
	};
	export default {
		data() {
			return {
				treeChartOpt: {
				    series: [
					    {
					    	name: '董事会结构',
					    	type: 'tree',
					    	left: '15%',
					    	top: '1%',
					    	width: '32%',
					    	height: '50%',
					    	orient: 'RL', //方向
					    	initialTreeDepth: -1, //深度
					    	symbol: 'circle',
					    	itemStyle: {
					    		color: '#ab2042',
					    		borderColor: '#ab2042'
					    	},
					    	lineStyle: {
					    		width: 1,
					    		curveness: .8
					    	},
					    	label: {
					    		position: 'bottom'
					    	},
					    	leaves: {
					    		label: {
					    			position: 'left'
					    		}
					    	},
					    	data: [treeData1]
					    },
					    {
					    	name: '董事会行为',
					    	type: 'tree',
					    	left: '15%',
					    	top: '52%',
					    	width: '32%',
					    	height: '47%',
					    	orient: 'RL', //方向
					    	initialTreeDepth: -1, //深度
					    	symbol: 'circle',
					    	itemStyle: {
					    		color: '#f0b324',
					    		borderColor: '#f0b324'
					    	},
					    	lineStyle: {
					    		width: 1,
					    		curveness: .8
					    	},
					    	label: {
					    		position: 'bottom'
					    	},
					    	leaves: {
					    		label: {
					    			position: 'left'
					    		}
					    	},
					    	data: [treeData2]
					    },
					    {
					    	name: '社会责任',
					    	type: 'tree',
					    	left: '50%',
					    	top: '1%',
					    	width: '32%',
					    	height: '32%',
					    	orient: 'LR', //方向
					    	initialTreeDepth: -1, //深度
					    	symbol: 'circle',
					    	itemStyle: {
					    		color: '#0098d9',
					    		borderColor: '#0098d9'
					    	},
					    	lineStyle: {
					    		width: 1,
					    		curveness: .8
					    	},
					    	label: {
					    		position: 'bottom'
					    	},
					    	leaves: {
					    		label: {
					    			position: 'right'
					    		}
					    	},
					    	data: [treeData3]
					    },
					    {
					    	name: '董事薪酬、激励及约束',
					    	type: 'tree',
					    	left: '50%',
					    	top: '66%',
					    	width: '32%',
					    	height: '32%',
					    	orient: 'LR', //方向
					    	initialTreeDepth: -1, //深度
					    	symbol: 'circle',
					    	itemStyle: {
					    		color: '#7760f6',
					    		borderColor: '#7760f6'
					    	},
					    	lineStyle: {
					    		width: 1,
					    		curveness: .8
					    	},
					    	label: {
					    		position: 'bottom'
					    	},
					    	leaves: {
					    		label: {
					    			position: 'right'
					    		}
					    	},
					    	data: [treeData5]
					    },
					    {
					    	name: '信息披露',
					    	type: 'tree',
					    	left: '50%',
					    	top: '33%',
					    	width: '32%',
					    	height: '32%',
					    	orient: 'LR', //方向
					    	initialTreeDepth: -1, //深度
					    	symbol: 'circle',
					    	itemStyle: {
					    		color: '#2b821d',
					    		borderColor: '#2b821d'
					    	},
					    	lineStyle: {
					    		width: 1,
					    		curveness: .8
					    	},
					    	label: {
					    		position: 'bottom'
					    	},
					    	leaves: {
					    		label: {
					    			position: 'right'
					    		}
					    	},
					    	data: [treeData4]
					    }
				    ]
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
	.echarts {width:100%;height:2200px;}
</style>