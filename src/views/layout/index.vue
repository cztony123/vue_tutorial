<template>
	<div class="layout-page">
		<!-- 头部 -->
		<div class="headr-box">
			<div>茶七网</div>
			<div><van-search v-model="value" shape="round" placeholder="请输入搜索关键词" /></div>
			<div><van-icon name="service-o" /></div>
		</div>


		<!-- 主体 -->
		<div class="main-box">
			<router-view></router-view>
		</div>


		<!-- 底部 -->
		<div>
			<van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
				<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
				<van-tabbar-item icon="search" to="/sort">分类</van-tabbar-item>
				<van-tabbar-item icon="friends-o" to="/masterTea">大师茶</van-tabbar-item>
				<van-tabbar-item icon="setting-o" to="/cart">购物车</van-tabbar-item>
				<van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				value: '',
				active: 0,
			}
		},
		created() {
			switch(this.$route.path){
				case '/sort':
					this.active = 1;
					break;
				case '/masterTea':
					this.active = 2;
					break;
				case '/cart':
					this.active = 3;
					break;
				case '/my':
					this.active = 4;
					break;
				default:
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	// 最外层盒子
	.layout-page {
		height: 100%;
		
		//头部
		.headr-box {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background: darkred;

			div {
				font-size: 18px;
				font-weight: 600;
				color: #fff;

				.van-icon {
					font-size: 26px;
				}

				.van-search {
					background: none;
				}
			}
		}
		
		//主体
		.main-box{
			height: 100%;
			margin-top: 50px;
			height: calc(100vh - 50px);
			overflow-y: auto;
		}
	}
</style>