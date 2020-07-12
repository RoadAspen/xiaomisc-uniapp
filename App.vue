<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*官方ui库*/
	@import "/common/uni.css";
	/*第三方动画库*/
	@import "/common/animate.css";
	/*第三方图标库*/
	@import "/common/iconfont.css";
	/*公共样式库*/
	@import "/common/common.css";
</style>
