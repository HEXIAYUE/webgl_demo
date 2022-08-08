<!-- 组件说明 -->
<template>
	<div class="header">
		<div style="width: 2.5rem"></div>
		<div class="title">webgl_demo 简单应用介绍</div>
		<div class="user">
			<el-avatar :src="imgSrc"></el-avatar>
			<span>用户: {{ user }}</span>
			<span title="跳转到博客" @click="loginOut">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-zhuanfa"></use>
				</svg>
			</span>
		</div>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'vHeader',
	components: {},
	data() {
		return {
			// 用户头像地址数组
			imgSrcItem: [
				require('../../assets/img/userImg1.png'),
				require('../../assets/img/userImg2.png'),
				require('../../assets/img/userImg3.png'),
				require('../../assets/img/userImg4.png'),
				require('../../assets/img/userImg5.png'),
			],
			imgSrc: '', // 用户头像地址
			user: 'hxy', // 用户名
		};
	},
	mounted() {
		// 随机选择头像
		this.imgSrc = this.imgSrcItem[Math.floor(Math.random() * 5)];
	},
	methods: {
		// 退出系统
		loginOut() {
			window.open('https://hxyxyz.top');
		},
	},
};
</script>

<style lang="less" scoped>
.header {
	display: flex;
	justify-content: space-between;
	.title {
		letter-spacing: 0.1rem;
		&:hover {
			color: #409eff;
		}
	}
	.user {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 2rem;
		height: 0.8rem;
	}
	.icon {
		font-size: 0.2rem;
		cursor: pointer;
	}
	.el-avatar {
		&:hover {
			animation: rotate360 1s linear infinite;
		}
	}

	@keyframes rotate360 {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
