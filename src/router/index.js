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
        children: [
            {
                path: '/StereoModel',
                name: 'StereoModel',
                component: () => import(/* webpackChunkName: "about" */ '../views/component/StereoModel.vue'),
                meta: {
                    title: '立体模型',
                },
            },
            {
                path: '/Mapping',
                name: 'Mapping',
                component: () => import(/* webpackChunkName: "about" */ '../views/component/Mapping.vue'),
                meta: {
                    title: '贴图',
                },
            },
            {
                path: '/Lighting',
                name: 'Lighting',
                component: () => import(/* webpackChunkName: "about" */ '../views/component/Lighting.vue'),
                meta: {
                    title: '灯光',
                },
            },
            {
                path: '/Controller',
                name: 'Controller',
                component: () => import(/* webpackChunkName: "about" */ '../views/component/Controller.vue'),
                meta: {
                    title: '控制器',
                },
            }
        ]
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
