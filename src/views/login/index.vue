<template>
	<div class="login-page">
		<div class="login-box">
			<!-- logo -->
			<div class="logo">logo</div>
			
			
			<div class="model-box">
				<!-- 用户名 -->
				<van-cell-group>
					<van-field v-model="form.userName" left-icon="friends-o" placeholder="用户名" />
				</van-cell-group>
				
				<!-- 密码 -->
				<van-cell-group>
					<van-field v-model="form.password" left-icon="bag-o" placeholder="密码" />
				</van-cell-group>
				
				
				<!-- 登录按钮 -->
				<div class="login-btn" @click="onLogin">
					<van-button type="info">登录</van-button>
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
			form:{
				userName: '',
				password: ''
			}
		}
	},
	methods:{
		onLogin(){
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
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
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
				}
				.van-cell-group::after{
					content: none;
				}
				.login-btn{
					margin-top: 50px;
					.van-button{
						width: 100%;
						border-radius: 20px;
					}
					
				}
			}
		}
	}
</style>