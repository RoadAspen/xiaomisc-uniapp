<template>
	<view class="content">
		<image v-if="show" class="logo animate__animated animate__bounceIn animate__fast" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view style="font-size: 50px;" class="iconfont icon-xiaoxi"></view>
		<button @click="toggle">点击显示图片</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello1',
				show:true
			}
		},
		onLoad() {

		},
		methods: {
			toggle(){
				this.show = !this.show
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
