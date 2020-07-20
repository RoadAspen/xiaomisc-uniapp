<template>
	<view>
		<!--首页轮播图-->
		<swiper-image :swiper_list="swipers"></swiper-image>
		
		<!--首页分类-->
		<index-nav :resdata="indexnavs"></index-nav>
		
		<!--全局分割线-->
		<divider></divider>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue';
	import indexNav from '@/components/index/index-nav.vue';
	export default {
		components:{
			swiperImage,
			indexNav
		},
		data() {
			return {
				swipers:[
					{src:"../../static/images/demo/demo4.jpg"},
					{src:"../../static/images/demo/demo4.jpg"},
					{src:"../../static/images/demo/demo4.jpg"}
				],
				indexnavs:[
					{src:"../../static/images/indexnav/1.png",text:"新品发布"},
					{src:"../../static/images/indexnav/2.gif",text:"小米众筹"},
					{src:"../../static/images/indexnav/3.gif",text:"以旧换新"},
					{src:"../../static/images/indexnav/4.gif",text:"1分拼团"},
					{src:"../../static/images/indexnav/5.gif",text:"超值特卖"},
					{src:"../../static/images/indexnav/6.gif",text:"小米秒杀"},
					{src:"../../static/images/indexnav/7.gif",text:"真心想要"},
					{src:"../../static/images/indexnav/8.gif",text:"电视热卖"},
					{src:"../../static/images/indexnav/9.gif",text:"家电热卖"},
					{src:"../../static/images/indexnav/10.gif",text:"米粉卡"}
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
