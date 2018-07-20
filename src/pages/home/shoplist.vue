<template>
	<div style="height: 100%;">
		<div class="left" >
			<ul>
				<li class="leftli" v-for="(val,ix) in sort" @click="jump(ix)" >{{val.sortName}}</li>
			</ul>
			
		</div>
		<div class="right" ref="scroll">
			<view-box ref="viewBox">
				<ul >
					<span v-for="(val,ix) in sort">
						<sticky scroll-box="vux_view_box_body">
						  <div class="js_head" style="background-color: red;">{{val.sortName}}</div>
						</sticky>
						<li class="rightli" v-for="(v,i) in val.goods" >{{v.name}}</li>
					</span>
				</ul>
			</view-box>
			
			
		</div>
		
		
	</div>
</template>

<script>
	import { ViewBox,Sticky } from 'vux'
	
	export default {
	  created(){
	  	this.$store.commit("pageTitle",{pageTitle:"商品详情"});
	  	
	  },
	  mounted(){
	  	this.$refs.scroll.addEventListener("scroll",this.handleScroll);
	  	console.log(this.$refs);
	  },
	  name: 'shoplist',
	  data () {
	  	let list=[];
	  	for (let i=1 ;i<11;i++) {
	  		let s={
	  			sortName:i
	  		}
	  		let goods=[];
	  		for (let j=1 ;j<11;j++) {
	  			let g={
	  				name:i+"--"+j
	  			}
	  			goods.push(g);
	  		}
	  		s.goods=goods;
	  		list.push(s);
	  	}
	  	/*{
	       sort:[{
	       		sortName:"",
	       		goods:[{
	       			name:""
	       		}]
	       }]
	    }*/
	   
	    return {sort:list};
	  },
	  methods:{
	  	handleScroll(){
	  		this.$vux.toast.text('hello', 'top')
	  		
	  	},
	  	jump (index) {
		    let jump = document.querySelectorAll('.js_head');
		    // 获取需要滚动的距离
		    let total = jump[index].offsetTop;
		    console.log(jump[index]);
		    this.$vux.toast.text(jump[index], 'top')
		    this.$refs.viewBox.scrollTo(total);
		    console.log(this.$refs);
		},
	  	
	  },
	  components: {
	    ViewBox,
	    Sticky 
	  }
	  
	}
	
</script>

<style>
	.left{
		float: left;
		width: 100px;
		height: 100%;
	}
	.leftli{
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid red;
	}
	.rightli{
		height: 50px;
		border: 1px solid red;
	}
	.right{
		margin-left: 100px;
		height: 100%;
	}
	.right .weui-tab__panel{
		padding: 0px;
	}
</style>