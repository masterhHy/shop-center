<template>
	<div style="height: 100%;" >
		<view-box :body-padding-top="pageTitle?'50px':'0px'" ref="viewBox">
			<x-header slot="header" v-if="pageTitle" :title="pageTitle" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
			<router-view ></router-view>
			
			
			<tabbar slot="bottom">
				<tabbar-item selected link="/"  >
					<img slot="icon" src="../assets/toobar/shop_fill.png"/>
					<img slot="icon-active" src="../assets/toobar/gshop.png"/>
	        		<span slot="label">首页</span>
				</tabbar-item>
				<tabbar-item link="/chat" >
					<img slot="icon" src="../assets/toobar/activity.png"/>
					<img slot="icon-active" src="../assets/toobar/gactivity.png"/>
	        		<span slot="label">订单</span>
				</tabbar-item>
				<tabbar-item link="/chat" >
					<img slot="icon" src="../assets/toobar/people.png"/>
					<img slot="icon-active" src="../assets/toobar/gpeople.png"/>
	        		<span slot="label">我的</span>
				</tabbar-item>
			</tabbar>
			
		</view-box>
		
		
		
	</div>
	

</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	import { ViewBox } from 'vux'
	import { mapGetters } from 'vuex'
	export default {
	  name: 'shopIndex',
	  data () {
	    return {
	     
	    }
	  },
	  mounted:function(){
	  	
	  },
	  methods:{
	  	
	  },
	  components: {
	    Tabbar,
    	TabbarItem,
    	ViewBox
	  },
	  computed: {
	    ...mapGetters([
	      'pageTitle',
	      'pageLoading',
	    ])
  	  }
  	 
	  
	  
	}
	
</script>

<style>
	
</style>