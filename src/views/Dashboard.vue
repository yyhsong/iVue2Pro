<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>控制面板</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card>
					<a href="dashboard/summary.html" target="_blank">
						<img src="../../static/img/thumb-summary.jpg" class="card-thumb" />
						<p class="card-link">上市公司全景概览</p>
					</a>
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card>
					<a href="dashboard/industry.html" target="_blank">
						<img src="../../static/img/thumb-industry.jpg" class="card-thumb" />
						<p class="card-link">上市公司行业分类</p>
					</a>
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card>
					<a href="dashboard/mapchart.html" target="_blank">
						<img src="../../static/img/thumb-mapchart.jpg" class="card-thumb" />
						<p class="card-link">上市公司地域分布</p>
					</a>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Dashboard'
	}
</script>

<style scoped>
	.card-thumb {display:block;width:100%;}
	.card-link {margin-top:15px;text-align:center;font-size:14px;color:#409eff;}
</style>