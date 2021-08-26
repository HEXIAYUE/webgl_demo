import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Vue.prototype.$Three = THREE
// Vue.prototype.$OrbitControls = OrbitControls
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
