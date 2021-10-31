<template>
	<div class="home">
		<el-container :style="height">
			<el-header height="80px">
				<v-header></v-header>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<v-aside></v-aside>
				</el-aside>
				<el-main>
					<transition>
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</transition>
				</el-main>
			</el-container>
			<el-footer>
				<v-footer></v-footer>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
import vAside from './Aside';
import vHeader from './Header';
import vFooter from '../../components/footer';
export default {
	name: 'Home',
	components: {
		vAside,
		vHeader,
		vFooter,
	},
	data() {
		return {
			height: {
				height: window.innerHeight + 'px',
			},
		};
	},
	mounted() {
		// // 进入首页 默认加载第一页
		let name = this.$route.name === 'Home' ? 'StereoModel' : this.$route.name;
		this.$router.push({ name: name });
	},
};
</script>

<style lang="less" scope>
.el-header {
	margin-right: 0.3rem;
	color: #333;
	text-align: center;
	line-height: 0.8rem;
	border: 1px solid #dcdfe6;
}

.el-aside {
	margin-top: 0.1rem;
	color: #333;
	line-height: auto;
	border-right: 1px solid #dcdfe6;
	margin-bottom: 0.1rem;
}

.el-main {
	margin: 0.1rem;
	margin-right: 0.3rem;
	border-radius: 0.1rem;
	color: #333;
	box-shadow: 0 0 0.08rem #333;
	text-align: center;
	padding: 0.05rem;
    max-width: 15rem;
    max-height: 5.8rem;
}
</style>
