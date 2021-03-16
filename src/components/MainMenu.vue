<template>
	<el-menu default-active="1" id="mainMenu">
		<el-menu-item index="1">
			<i class="el-icon-data-analysis"></i>
			<span slot="title">
				<router-link to="/company-operation">经营分析</router-link>
			</span>
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-data-line"></i>
				<span>财税分析</span>
			</template>
			<el-menu-item index="2-1">
				<router-link to="/company-finance"><i class="el-icon-s-operation"></i> 财务分析</router-link>
			</el-menu-item>
			<el-menu-item index="2-2">
				<router-link to="/company-taxation"><i class="el-icon-set-up"></i> 税务分析</router-link>
			</el-menu-item>
		</el-submenu>
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