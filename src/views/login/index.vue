<template>
	<div class="login-page">
		<div class="login-box">
			<!-- logo -->
			<div class="logo">logo</div>
			
			<!-- 登录模板 -->
			<div class="model-box" v-if="!isLogin">
				<!-- 用户名 -->
				<van-cell-group>
					<van-field v-model="form.userName" clearable left-icon="friends-o" :placeholder="isCode ? '手机号' : '用户名'" />
				</van-cell-group>
				
				<van-cell-group v-if="isCode">
					<van-field v-model="form.tel" left-icon="phone-o" placeholder="验证码" />
				</van-cell-group>
				
				<!-- 密码 -->
				<van-cell-group v-else>
					<van-field v-model="form.password" :type="showPwd ? 'password' : 'text'" left-icon="bag-o" placeholder="密码" />
					<span @click="onShowPwd">
						<van-icon v-if="showPwd" name="eye-o" />
						<van-icon v-else name="closed-eye" />
					</span>
				</van-cell-group>
			</div>
			
			
			<!-- 注册模板 -->
			<div class="model-box" v-else>
				<!-- 用户名 -->
				<van-cell-group>
					<van-field v-model="form.userName" clearable left-icon="friends-o" placeholder="用户名" />
				</van-cell-group>
				
				<!-- 手机号 -->
				<van-cell-group>
					<van-field v-model="form.userName" clearable left-icon="friends-o" placeholder="手机号" />
				</van-cell-group>
				
				<!-- 验证码 -->
				<van-cell-group>
					<van-field v-model="form.tel" left-icon="phone-o" placeholder="验证码" />
				</van-cell-group>
				
				<!-- 密码 -->
				<van-cell-group>
					<van-field v-model="form.password" :type="showPwd ? 'password' : 'text'" left-icon="bag-o" placeholder="密码" />
					<span @click="onShowPwd">
						<van-icon v-if="showPwd" name="eye-o" />
						<van-icon v-else name="closed-eye" />
					</span>
				</van-cell-group>
				
				<!-- 确认密码 -->
				<van-cell-group>
					<van-field v-model="form.password" :type="showPwd ? 'password' : 'text'" left-icon="bag-o" placeholder="确认密码" />
					<span @click="onShowPwd">
						<van-icon v-if="showPwd" name="eye-o" />
						<van-icon v-else name="closed-eye" />
					</span>
				</van-cell-group>
			</div>
			
			
			
			<!-- 登录按钮 -->
			<div class="login">
				<div class="login-btn" @click="onLogin">
					<van-button type="info">登录</van-button>
				</div>
				
				<div class="isLogin">
					<span @click="onCode">{{isCode ? "密码登录" : "验证码登录"}}</span>
					<span>|</span>
					<span @click="onRegistered">{{isLogin ? "用户登录" : "用户注册"}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { loginApi } from "@/api/loginApi.js";
import { Toast } from 'vant';
export default {
	data(){
		return{
			showPwd: true,
			isLogin: false,
			isCode: false,
			form:{
				userName: '',
				tel: '',
				password: ''
			}
		}
	},
	methods:{
		//隐密按钮
		onShowPwd(){
			this.showPwd = !this.showPwd
		},
		
		//登录注册切换按钮
		onRegistered(){
			this.isLogin = !this.isLogin
		},
		
		//验证码登录按钮
		onCode(){
			this.isCode = !this.isCode
		},
		
		//登录注册提交按钮
		onLogin(){
			if(!this.form.userName){
				Toast('请输入用户名');
				return
			}
			if(!this.form.password){
				Toast('请输入密码');
				return
			}
			
			
			if(this.isLogin){
				let params = {
					...this.form
				}
				loginApi(params).then((res)=>{
					if(res.code == 200){
						this.$router.push('/home')
						Toast(res.message);
					}else{
						Toast(res.message);
					}
				})
			}else{
				//注册
			}
			
		}
	}
}
</script>

<style scoped lang="scss">
	.login-page {
		background-image: url(../../assets/bg.jpg);
		height: 100%;

		.login-box {
			position: absolute;
			top: 10%;
			left: 50%;
			transform: translateX(-50%);
			width: 76%;
			height: 500px;

			.logo {
				text-align: center;
				font-size: 40px;
				font-weight: 900;
			}
			.model-box{
				margin-top: 80px;
				.van-cell-group{
					position: relative;
					margin-top: 30px;
					border: 1px solid #1989fa ;
					border-radius: 20px;
					background: none;
					::v-deep .van-cell{
						border-radius: 20px;
						background: none;
						.van-icon{
							font-size: 24px;
							color: #1989fa;
						}
					}
					/*输入框内字体颜色*/
					::v-deep .van-field__control{
						color: #FFF;
					}
					span{
						position: absolute;
						top: 50%;
						right: 8px;
						transform: translateY(-50%);
						color:#fff
					}
				}
				::v-deep .van-cell-group::after{
					content: none;
				}
				.van-cell::after{
					content: none;
				}
			}
			
			//登录模块
			.login{
				.login-btn{
					margin-top: 50px;
					.van-button{
						width: 100%;
						border-radius: 20px;
					}
				}
			}
			
			//登录注册切换
			.isLogin{
				margin-top: 30px;
				text-align: center;
				span{
					padding: 0 6px;
					color: #fff;
					font-size: 13px;
				}
				
			}
		}
	}
</style>