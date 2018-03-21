<template>
 <div class="banner">
  <div class="swiper-container" :class="swiperid"><!-- 定义唯一性提高复用性-->
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div><!-- 通过定义pashow的布尔值设置是否具有分页器-->
    <div class="swiper-pagination"></div>
    <!-- 通过定义paginationdesition 的值设置分页器的位置-->
  </div>
 </div>
</template>

<script>
  import Swiper from 'swiper';
  // import 'swiper/dist/css/swiper.min.css';//引入方式有问题

	export default {
    name: "slider",
    props: {
      swiperid: {
        type: String,
        default: '',
      },
      autoplay: {//间隔时间
        type: Boolean,
        default: true,//默认两秒

      },
      loop: {
        type: Boolean,//是否进行轮播循环
        default: true,
      },
      direction: {
        type: String,//轮播方向
        default: 'horizontal',//默认水平
      },
      effect: {
        type: String,//切换效果淡入淡出  渐变
        default: 'fade'
      }
    },
    mounted:function(){ var That = this;
    new Swiper('.' + That.swiperid, {
         direction: That.direction,
         loop: That.loop,
         pagination: {
           el:'.swiper-pagination',
           type:'bullets',
           bulletElement : 'li',
           clickable :true,
           dynamicBullets: true,
           dynamicMainBullets: 1,


         },
         autoplay:{
           delay:2000,
           stopOnLastSlide: true,
           disableOnInteraction: false,//用户操作后是否继续轮播
         },
         effect: That.effect,
         observer: true, //修改swiper自己或子元素时，自动初始化swiper
         observeParents: true,//修改swiper的父元素时，自动初始化swiper

       },console.log(this.pagination));

    }
  }
</script>

<style >
  @import "../assets/libs/swiper/swiper-4.1.6.min.css";
.banner {
  width: 100%;
  height: 1.28rem;
  -webkit-overflow: hidden;
  -moz-overflow: hidden;
  -ms-overflow: hidden;
  -o-overflow: hidden;
  -khtml-overflow: hidden;
  overflow: hidden;
}
  .banner .swiper-wrapper img{
    width: 100%;
    height: 1.28rem;
  }
  .banner .swiper-pagination .swiper-pagination-bullet{
    background:#fff;
  }
  .banner .swiper-pagination .swiper-pagination-bullet-active{
    transition: all 0.2s;
  }
</style>
