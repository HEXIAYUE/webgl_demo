import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入公共css
import './assets/style/common.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Vue.prototype.$OrbitControls = OrbitControls
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
