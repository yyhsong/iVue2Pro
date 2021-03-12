<template>
    <div class="view">
        <el-row :gutter="20" style="margin-top:50px;">
			<el-col :span="12" :offset="6">
				<el-card shadow="hover">
                    <div slot="header" class="card-header">
						<span>用户登录</span>
                        <span class="error-msg" v-text="errorMsg"></span>
					</div>
					<div class="card-body">
						<el-form ref="loginForm" :model="user" :rules="rules" label-width="80px">
                            <el-form-item prop="account" label="账号">
                                <el-input v-model="user.account"></el-input>
                            </el-form-item>
                            <el-form-item prop="pwt" label="密码">
                                <el-input type="password" v-model="user.pwt" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onLogin">登录</el-button>
                            </el-form-item>
                        </el-form>
					</div>
				</el-card>
			</el-col>
		</el-row>
    </div>
</template>

<script>
    import UserSrv from '../api/UserSrv';

    export default {
        name: 'UserLogin',
        data() {
            return {
                user: {
                    account: '',
                    pwt: ''
                },
                rules: {
                    account: [
                        {required:true, message:'请输入账号', trigger:'blur'}
                    ],
                    pwt: [
                        {required:true, message:'请输入密码', trigger:'blur'}
                    ]
                },
                errorMsg: ''
            }
        },
        methods: {
            onLogin() {
                this.$refs.loginForm.validate((valid) => {
                    if(valid) {
                        let vm = this;
                        UserSrv.login(this.user.account, this.user.pwt).then(function(resp) {
                            //console.log('Resp: ', resp.data);
                            if(resp.data.result == 'error') {
                                vm.errorMsg = resp.data.message;
                            }else {
                                //设置Cookie
                                vm.$cookies.set('Token', resp.data.token, '0');
                                vm.$cookies.set('User', vm.user.account, '0');
                                //把用户名加入到全局store中
                                vm.$store.commit('setUser', {username: vm.user.account});
                                //重定向到首页
                                vm.$router.push({path: '/'});
                            }
                        });
                    }else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .error-msg {margin-left:15px;font-size:12px;color:#ec0000;}
</style>
