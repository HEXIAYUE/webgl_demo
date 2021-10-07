<!-- 组件说明 -->
<template>
    <div class=''>

    </div>
</template>

<script>
import * as THREE from 'three';

//import x from ''
export default {
	name: 'StereoModel',
	components: {},
	data() {
		return {
			// 场景对象Scene
			screen: null,
		};
	},
	computed: {},
	methods: {
		// 初始化函数
		init() {
			this.screen = new THREE.screen();
		},
	},
	mounted() {
		this.init();
	},
};
</script>

<style lang='less' scoped>
//@import url()
</style>