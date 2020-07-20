<template>
	<view>
		<swiper indicator-dots autoplay circular 
		:interval="3000" :duration="1000">
			<block v-for="(item,idx) in swiper_list" :key="idx">
				<swiper-item style="height: 825upx;">
					<view class="swiper-item" @tap="tapEvent(item,idx)">
						<image 
						:src="item.src" 
						mode="widthFix"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			swiper_list:Array
		},
		methods: {
			tapEvent(item,idx){
				console.log(`我点击了banner图`)
			}
		},
	}
</script>

<style>
</style>
