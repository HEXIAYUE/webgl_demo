<template>
	<div class="footer">
		<div class="round"></div>
		<div class="footer-text">
			禾下月/<a href="https://hxyxyz.top" target="_blank">小小窝</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vFooter',
};
</script>

<style lang="less" scope>
.footer {
	position: fixed;
	bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25px;
	color: #3a3a3a;
	font-size: 20px;

	.footer-text {
		margin-left: 0.15rem;
		a {
			color: #3a3a3a;
			text-decoration: none;

			&:hover {
				color: #ec0c38;
			}
		}
	}

	.round {
		width: 0.16rem;
		height: 0.16rem;
		position: relative;
		background-color: #f07c82;
		transform: rotate(45deg);
		animation: show 3.5s ease-in-out infinite;
		&::after {
			content: '';
			width: 0.16rem;
			height: 0.16rem;
			position: absolute;
			background-color: #f07c82;
			border-radius: 50%;
			left: -0.08rem;
			animation: show 3.5s ease-in-out infinite;
		}

		&::before {
			content: '';
			width: 0.16rem;
			height: 0.16rem;
			position: absolute;
			background-color: #f07c82;
			border-radius: 50%;
			top: -0.08rem;
			animation: show 3.5s ease-in-out infinite;
		}
	}

	@keyframes show {
		0% {
			background-color: #eee;
		}
		100% {
			background-color: #f07c82;
		}
	}
}
</style>
