import Vue from 'vue';
import VueRouter from 'vue-router';
// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
		meta: {
			title: '系统首页',
		},
		children: [
			{
				path: '/StereoModel',
				name: 'StereoModel',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/StereoModel.vue'),
				meta: {
					title: '立体模型',
				},
			},
			{
				path: '/Mapping',
				name: 'Mapping',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/Mapping.vue'),
				meta: {
					title: '贴图',
				},
			},
			{
				path: '/Lighting',
				name: 'Lighting',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/Lighting.vue'),
				meta: {
					title: '灯光',
				},
			},
			{
				path: '/Dynamiceffect',
				name: 'Dynamiceffect',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/Dynamiceffect.vue'),
				meta: {
					title: '动效',
				},
			},
			{
				path: '/Controller',
				name: 'Controller',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/Controller.vue'),
				meta: {
					title: '控制器',
				},
			},
			{
				path: '/Frame',
				name: 'Frame',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/Frame.vue'),
				meta: {
					title: '帧数',
				},
			},
			{
				path: '/Model',
				name: 'Model',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/component/Model.vue'),
				meta: {
					title: '引入模型',
				},
			},
		],
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
