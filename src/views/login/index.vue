<template>
	<div class="login-page">
		<div class="login-box">
			<div class="logo">logo</div>
			<div>
				<van-cell-group>
					<van-field  label="文本" placeholder="请输入用户名" />
				</van-cell-group>
			</div>
		</div>
	</div> 
</template>

<script>
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
			border: 1px solid red;
			width: 80%;
			height: 500px;

			.logo {
				text-align: center;
				font-size: 40px;
				font-weight: 900;
			}
		}
	}
</style>