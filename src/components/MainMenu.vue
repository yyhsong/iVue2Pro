<template>
	<el-menu default-active="2" id="mainMenu">
		<el-menu-item index="1">
			<i class="el-icon-menu"></i>
			<span slot="title">
				<a href="dashboard/summary.html" target="_blank">上市公司全景概览</a>
			</span>
		</el-menu-item>
		<el-menu-item index="2">
			<i class="el-icon-zoom-in"></i>
			<span slot="title">
				<router-link to="/indicator-search">指标查询</router-link>
			</span>
		</el-menu-item>
		<el-menu-item index="3">
			<i class="el-icon-star-on"></i>
			<span slot="title">
				<router-link to="/party-building">党建入章</router-link>
			</span>
		</el-menu-item>
		<el-menu-item index="4">
			<i class="el-icon-date"></i>
			<span slot="title">
				<router-link to="/sustainable-development">可持续发展</router-link>
			</span>
		</el-menu-item>
		<el-menu-item index="5">
			<i class="el-icon-share"></i>
			<span slot="title">
				<router-link to="/indicator-tree">指标层级</router-link>
			</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		name: 'MainMenu'
	}
</script>

<style>
	#mainMenu {color:#c6cfda;background-color:#364150;border:none;}
	#mainMenu .el-menu {background-color:#364150;}
	#mainMenu .el-menu-item:focus,
	#mainMenu .el-menu-item:hover,
	#mainMenu .el-submenu__title:hover {background-color:#2c3542;}
	#mainMenu a {color:#c6cfda;}
	#mainMenu .el-menu-item.is-active {background-color:#2c3542;}
	#mainMenu .el-menu-item.is-active a {color:#409eff;}
	#mainMenu .el-submenu__title {color:#c6cfda;}
	#mainMenu .el-submenu .el-menu-item {padding-left:56px !important;}
</style>