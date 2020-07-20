<template>
	<!-- 公共列表组件 750-8 = 742  371-->
	<view class="row j-sb">
		<block v-for="(item,index) in resdata" :key="index">
			<view style="width: 371upx;padding: 2upx;">
				<image :src="item.src" mode="widthFix" lazy-load></image>
				<view class="p-2">
					<view class="font-md">{{item.name}}</view>
					<text class="d-block font text-light-muted line-h-md">{{item.desc}}</text>
					<view class="d-flex my-1">
						<price>{{item.price}}</price>
						<view class="font-sm text-light-muted line-through line-h" style="vertical-align: bottom;">
							￥{{item.oldPrice}}
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue';
	export default {
		props:{
			resdata:Array
		},
		components:{
			price
		},
	}
</script>

<style>
</style>
