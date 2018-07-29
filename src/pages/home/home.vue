<template>
	
	<div >
		
		<swiper :list="imgList" @click.native="goin" height="280px" auto loop :interval="3000" :duration="1000" dots-position="center"></swiper>
		<x-button class="mbtn" type="primary" action-type="button" link="/shoplist">进入店铺</x-button>
	</div>

</template>

<script>
	import { Swiper } from 'vux'
	export default {
	  name: 'home',
	  data(){
	  	return {
	  		imgList:[{
			  url: 'javascript:',
			  img: '/src/assets/code.jpg',
			 
			}, {
			  url: 'javascript:',
			  img: '/src/assets/cool.jpg',
			  
			}, {
			  url: 'javascript:',
			  img: '/src/assets/timg.jpg',
			}],
	  	}
	  },
	  methods:{
	  	goin(){
	  		this.$router.push({path:"/shoplist"});
	  	}
	  },
	  components: {
	    Swiper
	  }
	}
	
</script>

<style>
	.mbtn{
		margin: 20px 0px;
		width: 80%!important;
	}
</style>