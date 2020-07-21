<template>
	<view class="pb-5 mb-5">
		<!--顶部选项卡-->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;">
			<view class="scroll-row-item px-3" 
			v-for="(item,index) in tabBars" 
			:key="index"
			style="height: 80rpx;line-height: 80rpx;"
			:class="tabIndex === index ?'main-text-color border-bottom':''"
			>
				<text class="font-md">{{item.text}}</text>
			</view>
		</scroll-view>
		
		<!-- 页面级的y轴滚动，所有的tab页都在横向的滚动和竖向的滚动组件中 -->
		<!-- 高度为设备高度 - 顶部搜索 - 顶部 tab - 底部tab高度-->
		<swiper :current="tabIndex">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" style="height: 500rpx;">
					<view v-for="i in 100" :key="i">{{i}}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		
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
				tabIndex:0,
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
				],
				tabBars:[
					{
						text:'关注'
					},
					{
						text:'推荐'
					},
					{
						text:'体育'
					},
					{
						text:'热点'
					},
					{
						text:'财经'
					},
					{
						text:'娱乐'
					},
					{
						text:'军事'
					}
				]
			}
		},
		onLoad() {
			console.log("onload")
			// 页面级的生命周期
			uni.getSystemInfo({
				success:(res)=> {
					console.log(res.windowHeight)
				}
			})
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
