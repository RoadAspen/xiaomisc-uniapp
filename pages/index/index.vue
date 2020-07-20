<template>
	<view class="pb-5 mb-5">
		<!--首页轮播图-->
		<swiper-image :swiper_list="swipers" />
		
		<!--首页分类-->
		<index-nav :resdata="indexnavs" />
		
		<!--全局分割线-->
		<divider />
		
		<!--三图广告位组件-->
		<card :showhead="false">	
			<three-adv :resdata="threeAdv" />
		</card>
		
		<!--全局分割线-->
		<divider></divider>
		
		<!-- 基础卡片组件 -->
		<card headTitle="精选商品" bodyCover="/static/images/demo/demo4.jpg"/>
		
		<!-- 公共列表组件 750-8 = 742  371-->
		<common-list :resdata="commonList"/>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue';
	import indexNav from '@/components/index/index-nav.vue';
	import threeAdv from '@/components/index/three-adv.vue';
	import commonList from '@/components/common/common-list.vue';
	export default {
		components:{
			swiperImage,
			indexNav,
			threeAdv,
			commonList
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
				],
				threeAdv:{
					"big":{
						"src":"/static/images/demo/demo1.jpg"
					},
					"smalltop":{
						"src":"/static/images/demo/demo2.jpg"
					},
					"smallbottom":{
						"src":"/static/images/demo/demo2.jpg"
					}
				},
				commonList:[
					{
						src:"/static/images/demo/list/1.jpg",
						name:"小米 8",
						desc:"4000万像素",
						price:"2669",
						oldPrice:"3200"
					},
					{
						src:"/static/images/demo/list/2.jpg",
						name:"黑鲨 2",
						desc:"无敌水冷",
						price:"3269",
						oldPrice:"3699"
					},
					{
						src:"/static/images/demo/list/3.jpg",
						name:"米家空调",
						desc:"1.5匹变频",
						price:"2669",
						oldPrice:"1399"
					},
					{
						src:"/static/images/demo/list/4.jpg",
						name:"米家空调",
						desc:"1.5匹变频",
						price:"2669",
						oldPrice:"1399"
					},
					{
						src:"/static/images/demo/list/5.jpg",
						name:"小米 9",
						desc:"8000万超清三摄",
						price:"2799",
						oldPrice:"3299"
					},
					{
						src:"/static/images/demo/list/6.jpg",
						name:"mi pad 2",
						desc:"9英寸",
						price:"3199",
						oldPrice:"3399"
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
