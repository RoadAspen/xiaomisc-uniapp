<template>
	<view class="pb-5 mb-5">
		<!--顶部选项卡-->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;" :scroll-into-view="scrollinto"
		 scroll-with-animation="true">
			<view class="scroll-row-item px-3" v-for="(item,index) in newsitem" :key="index" style="height: 80rpx;line-height: 80rpx;"
			 :class="tabIndex === index ?'main-text-color border-bottom':''" @click="changeTab(index)" :id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>

		<!-- 页面级的y轴滚动，所有的tab页都在横向的滚动和竖向的滚动组件中 -->
		<!-- 高度为设备高度 - 顶部搜索 - 顶部 tab - 底部tab高度-->
		<swiper :duration="150" :current="tabIndex" :style="'height:'+ scrollH + 'px;'" @change="onChangeTab">
			<swiper-item v-for="(item,index) in newsitem" :key="index">
				<!-- 添加触底事件 -->
				<scroll-view scroll-y="true" :style="'height:'+ scrollH + 'px;'" @scrolltolower="loadMore(index)">
					<block v-for="(list,listIndex) in item.list" :key="listIndex">
						<!--首页轮播图-->
						<swiper-image v-if="list.type === 'swipers'" :swiper_list="list.data" />

						<!--首页分类-->
						<template v-else-if="list.type === 'indexnavs'">
							<index-nav :resdata="list.data" />
							<!--全局分割线-->
							<divider />
						</template>

						<template v-else-if="list.type === 'threeAdv'">
							<!--三图广告位组件-->
							<three-adv :resdata="list.data" />
							<!--全局分割线-->
							<divider></divider>
						</template>



						<!-- 基础卡片组件 -->
						<card v-else-if="list.type === 'card'" headTitle="精选商品" :bodyCover="list.data" />

						<!-- 公共列表组件 750-8 = 742  371-->
						<common-list v-else-if="list.type === 'commonList'" :resdata="list.data" />
					</block>
					<!-- 上拉加载更多 -->
					<view class="d-flex a-center j-center text-light-muted font-md line-h-md py-3">
						{{item.loadtext}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// 模拟后端数据
	import swiperImage from '@/components/index/swiper-image.vue';
	import indexNav from '@/components/index/index-nav.vue';
	import threeAdv from '@/components/index/three-adv.vue';
	import commonList from '@/components/common/common-list.vue';
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdv,
			commonList
		},
		data() {
			return {
				scrollinto: "tab0",
				scrollH: 500,
				tabIndex: 0,
				tabBars: [{
						text: '关注',
					},
					{
						text: '推荐'
					},
					{
						text: '体育'
					},
					{
						text: '热点'
					},
					{
						text: '财经'
					},
					{
						text: '娱乐'
					},
					{
						text: '军事'
					}
				],
				newsitem: [{
						name: '关注',
						list: [{
								type: 'swipers',
								data: [{
										src: "/static/images/demo/demo4.jpg"
									},
									{
										src: "/static/images/demo/demo4.jpg"
									},
									{
										src: "/static/images/demo/demo4.jpg"
									}
								]
							},
							{
								type: 'indexnavs',
								data: [{
										src: "/static/images/indexnav/1.png",
										text: "新品发布"
									},
									{
										src: "/static/images/indexnav/2.gif",
										text: "小米众筹"
									},
									{
										src: "/static/images/indexnav/3.gif",
										text: "以旧换新"
									},
									{
										src: "/static/images/indexnav/4.gif",
										text: "1分拼团"
									},
									{
										src: "/static/images/indexnav/5.gif",
										text: "超值特卖"
									},
									{
										src: "/static/images/indexnav/6.gif",
										text: "小米秒杀"
									},
									{
										src: "/static/images/indexnav/7.gif",
										text: "真心想要"
									},
									{
										src: "/static/images/indexnav/8.gif",
										text: "电视热卖"
									},
									{
										src: "/static/images/indexnav/9.gif",
										text: "家电热卖"
									},
									{
										src: "/static/images/indexnav/10.gif",
										text: "米粉卡"
									}
								]
							},
							{
								type: 'threeAdv',
								data: {
									"big": {
										"src": "/static/images/demo/demo1.jpg"
									},
									"smalltop": {
										"src": "/static/images/demo/demo2.jpg"
									},
									"smallbottom": {
										"src": "/static/images/demo/demo2.jpg"
									}
								}
							}, {
								type: 'card',
								data: '/static/images/demo/demo2.jpg'
							},
							{
								type: 'commonList',
								data: [{
										src: "/static/images/demo/list/1.jpg",
										name: "小米 8",
										desc: "4000万像素",
										price: "2669",
										oldPrice: "3200"
									},
									{
										src: "/static/images/demo/list/2.jpg",
										name: "黑鲨 2",
										desc: "无敌水冷",
										price: "3269",
										oldPrice: "3699"
									},
									{
										src: "/static/images/demo/list/3.jpg",
										name: "米家空调",
										desc: "1.5匹变频",
										price: "2669",
										oldPrice: "1399"
									},
									{
										src: "/static/images/demo/list/4.jpg",
										name: "米家空调",
										desc: "1.5匹变频",
										price: "2669",
										oldPrice: "1399"
									},
									{
										src: "/static/images/demo/list/5.jpg",
										name: "小米 9",
										desc: "8000万超清三摄",
										price: "2799",
										oldPrice: "3299"
									},
									{
										src: "/static/images/demo/list/6.jpg",
										name: "mi pad 2",
										desc: "9英寸",
										price: "3199",
										oldPrice: "3399"
									}
								]
							}

						],
						loadtext: '上拉加载更多'
					},
					{
						name: '推荐',
						list: []
					},
					{
						name: '体育',
						list: []
					},
					{
						name: '热点',
						list: []
					},
					{
						name: '财经',
						list: []
					},
					{
						name: '娱乐',
						list: []
					},
					{
						name: '军事',
						list: []
					},
				]
			}
		},
		onLoad() {
			// 页面级的生命周期
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(82)
				}
			});

			this.__init()
		},
		methods: {
			// 初始化事件
			__init() {
				// 获取顶部选项卡
				// this.tabBars = demoTabBars;
			},
			changeTab(index) {
				this.tabIndex = index;
				this.scrollinto = 'tab' + index
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			loadMore(index) {
				// 上拉加载更多
				console.log('加载更多', index)
				if (this.newsitem[index].loadtext === '上拉加载更多') {
					this.newsitem[index].loadtext = '正在加载中。。。'
					setTimeout((a) => {
						this.newsitem[index].loadtext = '加载更多'
					}, 1000)
				}
			}
		}
	}
</script>

<style>

</style>
