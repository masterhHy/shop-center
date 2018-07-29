<template>
	<div style="height: 100%;">
		<div class="left" >
			<ul>
				<li :class="ix==curentIndex?'activity leftli':'leftli' " v-for="(val,ix) in sort" @click="jump(ix)" >{{val.sortName}}</li>
			</ul>
			
		</div>
		<div class="right" >
			<view-box ref="viewBox" >
				<ul >
					<span v-for="(val,ix) in sort">
						<sticky scroll-box="vux_view_box_body" ref="sticky" :data-ix="ix" >
						  <div  style="background-color: #e6e6e6;">{{val.sortName}}</div>
						</sticky>
						<li class="rightli" v-for="(v,i) in val.goods" >
							<shop-item :goodsImg="v.goddsImg" :goodsName="v.goodsName" :goodsPrice="v.price"></shop-item>
						</li>
					</span>
				</ul>
			</view-box>
			
		</div>
		
		
	</div>
</template>

<script>
	import { ViewBox,Sticky } from 'vux'
	import ShopItem from '@/components/ShopItem.vue'
	export default {
	  created(){
	  	this.$store.commit("pageTitle",{pageTitle:"商品详情"});
	  	
	  },
	  mounted(){
	  	this.$refs.viewBox.getScrollBody().addEventListener('scroll',(e)=>{
	  		this.currentHight = e.target.scrollTop;
	  		
	  	});
	  	
	  	var stickys = this.$refs.sticky
  		for (let ix in stickys) {
  			this.headHight.push(stickys[ix].$el.offsetTop)
  		}
	  	
	  },
	  name: 'shoplist',
	  data () {
	  	let sortName=["AA分类","BB分类","CC分类","DD分类","EE分类"];
	  	let list=[];
	  	for (let i=0 ;i<4;i++) {
	  		let s={
	  			sortName:sortName[i]
	  		}
	  		let goods=[];
	  		for (let j=1 ;j<11;j++) {
	  			let g={
	  				goodsName:"商品名称-->"+j,
	  				goddsImg:"/src/assets/shop.jpg",
	  				price:j.toFixed(1)
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
	   
	    return {sort:list,headHight:[],currentHight:0,curentIndex:0};
	  },
	  methods:{
	  	jump (index) {
		    // 获取需要滚动的距离
		    let total = this.headHight[index];
		    this.curentIndex=index;
		   // this.$vux.toast.text(total, 'top');
		    this.$refs.viewBox.scrollTo(total);
		    
		},
		getIndex(currentHight){
			for(let ix in this.headHight){
				ix = Number(ix);
				if(currentHight<0){
					return 0;
				}
				if(ix+1>=this.headHight.length){
					return ix;
				}
				if(this.headHight[ix]<=currentHight&&currentHight<this.headHight[ix+1]){
					return ix;
				}
			}
		}
	  	
	  },
	  
	  watch:{
	  	currentHight:function(o,n){
	  		this.curentIndex = this.getIndex(o);
	  		
	  	}
	  },
	  components: {
	    ViewBox,
	    Sticky,
	    ShopItem
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
		padding: 3px 0px;
	}
	.rightli{
		height: 50px;
	}
	.right{
		margin-left: 110px;
		height: 100%;
	}
	.right .weui-tab__panel{
		padding: 0px;
	}
	.activity{
		background-color: red;
	}
</style>