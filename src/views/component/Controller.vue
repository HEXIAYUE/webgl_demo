<!-- 组件说明 -->
<template>
	<div class="box" ref="Controller">
		<div id="Controller">
			<!-- 显示帧率 -->
			<!-- <div id="Stats-output"></div> -->
		</div>
	</div>
</template>

<script>
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'; // 引入控制器
//场景 放在外面  避免vue遍历该变量 导致性能下降
let screen = null;
let controls; //控制器
export default {
	name: 'Controller',
	components: {},
	data() {
		return {
			screen: new THREE.Scene(),
			camera: null, // 相机
			renderer: null, // 渲染器
			cube: null, // 网格对象
			stopRender: false, // 是否停止渲染,
			clock: null,
		};
	},
	computed: {},
	methods: {
		// 初始化函数
		init() {
			screen = new THREE.Scene();
			this.stopRender = false;
			// 使用透视摄像机 属性含义，视野角度（FOV） 长宽比 远剪切面 近剪切面
			this.camera = new THREE.PerspectiveCamera(
				75,
				this.$refs.Controller.clientWidth / this.$refs.Controller.clientHeight,
				0.1,
				1000
			);
			this.camera.position.z = 2;
			// 将摄像头添加到场景中
			screen.add(this.camera);
			// 设置渲染器的大小 和挂载的dom结构
			this.renderer = new THREE.WebGLRenderer();
			//使用div的宽度，使模型一直在div中间 this.$refs.Controller.clientWidth window.innerWidth\
			this.renderer.setSize(
				this.$refs.Controller.clientWidth,
				this.$refs.Controller.clientHeight
			);
			// 颜色
			this.renderer.setClearColor(new THREE.Color(0x333333));
			//获得前后两次执行该方法的时间间隔
			this.clock = new THREE.Clock();
			// 将渲染器挂载在div app下
			const Controller = document.getElementById('Controller');
			Controller.appendChild(this.renderer.domElement);

			//轨迹球控件
			controls = new TrackballControls(this.camera, this.renderer.domElement);
			controls.rotateSpeed = 2;
			controls.zoomSpeed = 1.0;
			controls.panSpeed = 2.0;
			controls.noZoom = false; //如果设置为true, 则禁用 鼠标滚轮调整大小(远近)的功能
			controls.noPan = false; //如设置为true, 则禁用 按下鼠标右键平移的功能
			controls.staticMoving = false; // 静止移动，为 true 则没有惯性
			controls.dynamicDampingFactor = 0.1; // 阻尼系数 越小 则滑动越大
			controls.minDistance = 1; // 最小视角
			controls.maxDistance = 5; // 最大视角 Infinity 无穷大

			// 添加贴图
			var texture = new THREE.TextureLoader().load(require('../../assets/img/tietu.jpg'));
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			// 添加正方体模型
			// 创建一个正方体模型
			let geometry = new THREE.BoxGeometry(1, 1, 1);
			// 添加正方体材质
			let material = new THREE.MeshLambertMaterial({
				// 加载法向贴图
				map: texture,
			});
			// 创建一个网格对象包含正方体的模型和材质
			this.cube = new THREE.Mesh(geometry, material);
			// 将网格添加到场景中
			screen.add(this.cube);

			// 创建灯光
			let spotLight = new THREE.SpotLight(0xffffff);
			spotLight.position.set(-10, 20, 10);
			spotLight.castShadow = true;
			screen.add(spotLight); // 聚光灯添加到场景中

			// 环境光
			let ambientLight = new THREE.AmbientLight(0x0c0c0c); // 创建环境光
			screen.add(ambientLight); // 将环境光添加到场景
			// 调用渲染函数
			this.animate();
		},
		// 渲染函数
		animate() {
			this.cube.rotation.x += 0.01;
			this.cube.rotation.y += 0.01;
			//让模型一直保持在正中间
			this.renderer.setSize(
				this.$refs.Controller.clientWidth,
				this.$refs.Controller.clientHeight
			);
			// 使用动画循环函数 按照屏幕帧数渲染画面
			if (!this.stopRender) {
				requestAnimationFrame(this.animate);
				this.renderer.render(screen, this.camera);
			}
			//获得前后两次执行该方法的时间间隔
			let delta = this.clock.getDelta();
			controls.update(delta);
		},
	},
	activated() {
		const Controller = document.getElementById('Controller');
		Controller.innerHTML = '';
		this.init();
	},
	deactivated() {
		this.stopRender = true;
	},
};
</script>

<style lang="less" scoped>
#Controller {
	width: 100%;
}
</style>
