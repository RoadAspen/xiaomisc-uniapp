<script>
	export default {  // 监听 app 的生命周期
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError:function(){  // 报错时触发
			console.log("has error")
		},
		onUniNViewMessage:function(){ // 对 nvue 页面发送的数据进行监听， App 端应用
			console.log("发送数据")
		},
		globalData: {   // 小程序 全局变量机制
			text: 'text'  
		}
	}
</script>

<style>
	/*每个页面公共css , 全局样式*/  
	/*官方ui库*/
	@import "/common/uni.css";
	/*第三方动画库*/
	@import "/common/animate.css";
	/*第三方图标库*/
	@import "/common/iconfont.css";
	/*公共样式库*/
	@import "/common/common.css";
</style>
