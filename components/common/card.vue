<template>
	<!-- 卡片组件 -->
	<view>
		<!-- 标题 title -->
		<view v-if="showhead" class="p-2 border-bottom main-border-color">
			<!-- 插槽 -->
			<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>
			<slot name="title" />
		</view>
		<!-- content -->
		<view class="font-0">
			<!-- 插槽 -->
			<image v-if="bodyCover" lazy-load :src="bodyCover" mode="widthFix" />
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			// 头部标题
			headTitle:String,
			// 封面图
			bodyCover:String,
			// 是否显示头部
			showhead:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

