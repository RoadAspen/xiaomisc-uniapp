<template>
	<view>
		<!--首页轮播图-->
		<swiper-image :swiper_list="swipers"></swiper-image>
		
		<!--首页分类-->
		<view class="row j-center m-2">
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/1.png" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/2.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">小米众筹</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/3.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">以旧换新</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/4.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">1分拼团</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/5.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">超值特卖</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/6.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">小米秒杀</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/7.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">真心想要</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/8.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">电视热卖</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/9.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">家电热卖</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center p-2">
				<image src="/static/images/indexnav/10.gif" 
				mode="widthFix" 
				style="width: 60upx;height:60upx;"></image>
				<text class="font-sm">米粉卡</text>
			</view>
		</view>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue';
	export default {
		components:{
			swiperImage
		},
		data() {
			return {
				swipers:[
					{
						src:"../../static/images/demo/demo4.jpg"
					},
					{
						src:"../../static/images/demo/demo4.jpg"
					},
					{
						src:"../../static/images/demo/demo4.jpg"
					}
				]
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
	
</style>
