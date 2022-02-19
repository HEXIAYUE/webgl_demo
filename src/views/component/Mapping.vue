<!-- 组件说明 -->
<template>
    <div class="box" ref="mapping">
        <div id="mapping">
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';
//场景 放在外面  避免vue遍历该变量 导致性能下降
let screen = null;
export default {
	name: 'Mapping',
	components: {},
	data() {
		return {
			camera: null, // 相机
			renderer: null, // 渲染器
			cube: null, // 网格对象
			stopRender: false, // 是否停止渲染
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
				this.$refs.mapping.clientWidth / this.$refs.mapping.clientHeight,
				0.1,
				1000
			);
			this.camera.position.z = 3;
			// 将摄像头添加到场景中
			this.camera.position.set(1, 1, 3);
			screen.add(this.camera);
			// 设置渲染器的大小 和挂载的dom结构
			this.renderer = new THREE.WebGLRenderer();
			//使用div的宽度，使模型一直在div中间 this.$refs.mapping.clientWidth window.innerWidth\
			this.renderer.setSize(this.$refs.mapping.clientWidth, this.$refs.mapping.clientHeight);
			// 颜色
			this.renderer.setClearColor(new THREE.Color(0x333333));
			// 将渲染器挂载在div app下
			const mapping = document.getElementById('mapping');
			mapping.appendChild(this.renderer.domElement);
			// 添加贴图
			var texture = new THREE.TextureLoader().load(
				require('../../assets/img/tietu.jpg')
			);
			texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;

			// 添加正方体模型
			// 创建一个正方体模型
			let geometry = new THREE.BoxGeometry(1, 1, 1);
			// 添加正方体材质
			let material = new THREE.MeshBasicMaterial({
				// 加载法向贴图
				map: texture,
			});
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
			this.renderer.setSize(this.$refs.mapping.clientWidth, this.$refs.mapping.clientHeight);
			// 使用动画循环函数 按照屏幕帧数渲染画面
			if (!this.stopRender) {
				requestAnimationFrame(this.animate);
				this.renderer.render(screen, this.camera);
			}
		},
	},
	activated() {
		const mapping = document.getElementById('mapping');
		mapping.innerHTML = '';
		this.init();
	},
	deactivated() {
		this.stopRender = true;
	},
};
</script>

<style lang="less" scoped>
#mapping {
	width: 100%;
}
</style>
