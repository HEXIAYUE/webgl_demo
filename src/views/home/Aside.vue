<!-- 组件说明 -->
<template>
	<div class="sider">
		<el-menu router :default-active="$route.path" class="el-menu-vertical-demo">
			<el-menu-item v-for="item in items" :key="item.router" :index="item.router">
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="item.svgClass"></use>
				</svg>
				<span slot="title">{{ item.text }}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'Aside',
	// components: {},
	data() {
		return {
			items: [
				{
					router: '/StereoModel',
					svgClass: '#icon-zhengfangti',
					text: '立体模型',
				},
				{
					router: '/Mapping',
					svgClass: '#icon-pifu',
					text: '贴图',
				},
				{
					router: '/Lighting',
					svgClass: '#icon-dengguang',
					text: '灯光',
				},
				{
					router: '/Dynamiceffect',
					svgClass: '#icon-dongxiao',
					text: '动效',
				},
				{
					router: '/Controller',
					svgClass: '#icon-kongzhiqi',
					text: '控制器',
				},
				{
					router: '/Frame',
					svgClass: '#icon-yizhenshuju',
					text: '帧数',
				},
				{
					router: '/Model',
					svgClass: '#icon-moxingdaoru',
					text: '引入模型',
				},
			],
		};
	},
	// computed: {},
	// methods: {},
};
</script>

<style lang="less" scoped>
// 激活后的样式
.is-active {
	font-size: 0.16rem;
	.icon {
		font-size: 0.2rem;
	}
}
.icon {
	margin-right: 0.05rem;
	display: inline-block;
	width: 0.5rem;
	vertical-align: middle;
}
</style>
