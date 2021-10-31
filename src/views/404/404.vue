<template>
    <div>
        <div class="_404">
            <h2 class="m-0">
                抱歉，页面未找到，<span>{{ countDown }}</span>s后自动跳转到
                <a href="javascript:;" @click="goHome">首页</a>
            </h2>
            <img src="'../../assets/img/img/404.png" alt="页面未找到" />
        </div>
        <div>
            <v-footer></v-footer>
        </div>
    </div>
</template>
<script>
import vFooter from '../../components/footer';
export default {
	name: 'page404',
	components: {
		vFooter,
	},
	data() {
		return {
			countDown: 5,
			timer: null,
		};
	},
	created() {
		this.timer = setInterval(() => {
			this.countDown > 0 ? this.countDown-- : this.goHome();
		}, 1000);
		document.body.classList.add('body');
	},
	methods: {
		goHome() {
			// 每次跳转页面前 清除定时器
			clearInterval(this.timer);
			this.$router.push({ name: 'Home' });
		},
	},
	beforeDestroy() {
		document.body.classList.remove('body');
	},
};
</script>

<style lang="less" scope>
.body {
	background-color: #dceebc;
}

._404 {
	width: 30%;
	margin: 1rem auto;
}

._404 img {
	width: 5rem;
}

._404 a {
	color: #010101;
}

._404 a:hover {
	color: skyblue;
}
</style>
