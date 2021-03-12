<template>
  <div id="app">
  	<el-container id="container">
  		<el-header height="46px" id="header">
  			<h1 class="sys-name">
  				<img src="../static/img/sys-logo.png" class="sys-logo" />
  				<span>董事会指标体系分析及评估系统</span>
  			</h1>
  			<div class="sys-user" v-if="username">
  				<el-dropdown trigger="click">
  					<span class="sys-user-name">
  						<img src="../static/img/user-default.gif" class="sys-user-pic" />
  						{{username}} <i class="el-icon-arrow-down el-icon--right"></i>
  					</span>
  					<el-dropdown-menu slot="dropdown" class="sys-user-menu">
  						<!-- <el-dropdown-item>
  							<a href="#"><i class="el-icon-edit-outline"></i> 修改密码</a>
  						</el-dropdown-item> -->
  						<el-dropdown-item>
  							<a @click="onLogout"><i class="el-icon-refresh"></i> 退出系统</a>
  						</el-dropdown-item>
  					</el-dropdown-menu>
  				</el-dropdown>
  			</div>
  		</el-header>
  		<el-container id="content">
  			<el-aside width="220px" id="aside">
  				<main-menu></main-menu>
  			</el-aside>
  			<el-main id="main">
  				<router-view></router-view>
  			</el-main>
  		</el-container>
  	</el-container>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu';
	
export default {
  name: 'App',
  computed: {
  	username() {
  		return this.$store.state.username;
  	}
  },
  components: {
  	MainMenu
  },
	beforeMount: function() {
			//手动刷新页面时，重新获取用户信息保存到全局状态
			if(this.$cookies.isKey('User') && !this.$store.state.username) {
				this.$store.commit('setUser', {username: this.$cookies.get('User')});
			}
	},
	methods: {
		  onLogout() {
			//删除Cookie
			this.$cookies.remove('Token');
			this.$cookies.remove('User');
			//重置全局状态
			this.$store.commit('setUser', {username: ''});
			//重定向到登录页
			this.$router.push({path: '/login'});
		  }
	}
}
</script>

<style>
* {margin:0;padding:0;box-sizing:border-box;}
html, body {width:100%;height:100%;min-width:1200px;min-height:640px;overflow:hidden;font-size:14px;
font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;}
a {text-decoration:none;}
#app {width:100%;height:100%;}
#container {position:relative;width:100%;height:100%;padding-top:46px;}
#header {position:absolute;left:0;right:0;top:0;height:46px;background:#2b3643;}
.sys-name {margin-left:-10px;line-height:46px;font-size:18px;font-weight:400;color:#c6cfda;}
.sys-logo {height:32px;vertical-align:middle;}
.sys-user {position:absolute;top:0;right:10px;}
.sys-user-name {display:inline-block;padding:0 15px;height:46px;line-height:46px;color:#c6cfda;cursor:pointer;}
.sys-user-name:hover {background-color:#3f4f62;}
.sys-user-pic {margin:7px;width:32px;height:32px;vertical-align:middle;border-radius:50%;}
.sys-user-menu {color:#bcc7d4;background-color:#3f4f62;}
.sys-user-menu .popper__arrow,
.sys-user-menu .popper__arrow::after {border-bottom-color:#3f4f62 !important;}
.sys-user-menu .el-dropdown-menu__item {margin-bottom:0;padding:0 15px;line-height:32px;}
.sys-user-menu .el-dropdown-menu__item:hover {background-color:#47596e;}
.sys-user-menu .el-dropdown-menu__item a {color:#bcc7d4;text-decoration:none;}
#content {height:100%;}
#aside {height:100%;background-color:#364150;border-right:1px solid #364150;}
#main {padding:15px;height:100%;}
.el-breadcrumb {margin:-15px -15px 15px -15px;padding:15px;background-color:#f7f7f7;}
</style>
