<!-- 组件说明 -->
<template>
    <div id="app" ref="app">
        <div id="container">
            <!-- 显示帧率 -->
            <!-- <div id="Stats-output"></div> -->
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';

//场景 放在外面  避免vue遍历该变量 导致性能下降
let screen = new THREE.Scene();
export default {
	name: 'app',
	components: {},
	data() {
		return {
			camera: null, // 相机
			renderer: null, // 渲染器
            cube: null, // 网格对象
		};
	},
	computed: {},
	methods: {
		// 初始化函数
		init() {
			// 使用透视摄像机 属性含义，视野角度（FOV） 长宽比 远剪切面 近剪切面
			this.camera = new THREE.PerspectiveCamera(
				75,
				this.$refs.app.clientWidth / this.$refs.app.clientHeight,
				0.1,
				1000
			);
			this.camera.position.z = 2;
			// 将摄像头添加到场景中
			screen.add(this.camera);
			// 设置渲染器的大小 和挂载的dom结构
			this.renderer = new THREE.WebGLRenderer();
			//使用div的宽度，使模型一直在div中间 this.$refs.app.clientWidth window.innerWidth\
			this.renderer.setSize(this.$refs.app.clientWidth, this.$refs.app.clientHeight);
			// 颜色
			this.renderer.setClearColor(new THREE.Color(0x333333));
			// 将渲染器挂载在div app下
			const container = document.getElementById('container');
			container.appendChild(this.renderer.domElement);
			// 添加正方体模型
			// 创建一个正方体模型
			let geometry = new THREE.BoxGeometry(1, 1, 1);
			// 添加正方体颜色
			let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
			// 创建一个网格对象包含正方体的模型和材质
			this.cube = new THREE.Mesh(geometry, material);
			// 将网格添加到场景中
			screen.add(this.cube);
			// 调用渲染函数
			this.animate();
		},
		// 渲染函数
		animate() {
			//让模型一直保持在正中间
			this.renderer.setSize(this.$refs.app.clientWidth, this.$refs.app.clientHeight);
			// 使用动画循环函数 按照屏幕帧数渲染画面
			requestAnimationFrame(this.animate);
			this.renderer.render(screen, this.camera);
		},
	},
	mounted() {
        console.log('111111');
		this.init();
	},
};
</script>

<style lang="less" scoped>
body {
	margin: 0;
	overflow: hidden;
}

#app {
	width: 100%;
}
</style>
