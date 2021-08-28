import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
		meta: {
			title: '系统首页',
		},
	},
	{
		// 404页面
		path: '/404',
		name: '404',
		component: () => import(/* webpackChunkName: "about" */ '../views/404/404.vue'),
		meta: {
			title: '404',
		},
	},
	{
		path: '*',
		redirect: '/404',
	},
];

const router = new VueRouter({
	routes,
});

export default router;
