<template>
<div >
  <PublicHead bol="true">
    <div class="searchWrap" slot="search">
      <input type="text" placeholder="影音,图书等"/>
      <img src="../../assets/images/ic_scan_gray.png" alt="" class="scanImg">
      <img src="../../assets/images/ic_group_search_small.png" alt="" class="searchImg">
    </div>
    <img src="../../assets/images/ic_chat_white.png" alt=""  slot="right"  class="rightImg">
  </PublicHead>
  <Banner swiperid="HeadSwiper">
    <div slot="swiper-con" class="swiper-slide">
      <img src="../../assets/images/banner/01.jpg" alt="">
    </div>
    <div slot="swiper-con" class="swiper-slide">
      <img src="../../assets/images/banner/02.jpg" alt="">
    </div>
    <div slot="swiper-con" class="swiper-slide">
      <img src="../../assets/images/banner/03.jpg" alt="">
    </div>
  </Banner>
  <div class="List" >
  <NewList v-for="(item,index) in this.arr" :author="item.target.author.name"
            :authorimg="item.target.author.avatar"
           @del="getNum" :index="index"  :minin="n" :bool2="bool2" :key="item.id"
           @showOr="getDialog" :dialogshow="dialog1"
  >
    <p slot="tit">{{item.title}}</p>
    <span slot="des">{{item.target.desc}}</span>


    <img src='https://img1.doubanio.com/lpic/s11174718.jpg' alt="" slot="url">
  </NewList>
  </div>
</div>
</template>

<script>
  import  PublicHead from '../../components/PublicHead.vue'
  import  Banner from '../../components/slider.vue'
  import  NewList from './homeNewsList.vue'
  export default {
    components:{
      PublicHead,
      Banner,
      NewList
    },
    data(){
       return {
          arr:[],
          index:null,
          n:0,
          bool2:false,
          dialog1:null,

      }
    },
    mounted(){
        this.$http.get('http://localhost:8080/api/seller').then((response) => {
            this.arr=response.data.data.recommend_feeds;
             console.log(this.arr)
          }
        ).catch(function(error){console.log(error)})


      document.addEventListener('touchstart',this.handledocumentClick )
    },

    methods:{
      getNum(val,bool){
            this.n=val
            this.bool2=!this.bool2

           //默认bool2false即每个组件的弹框消失
           //点击第一次 传过来的值是bool undefined
           //此时子组件计算属性计算弹那个组件的框 bool2已经=true
           //再次点击传值此时bool=true
           //此时判断bool=true bool2=!true
           //点击相邻的组件时
           //子组件计算属性 bool2=false 即对应的组件的弹框消失
           //以上循环周而复始


         },
      //监控dialog是否弹出
      getDialog(val){
        this.dialog1=val;

      }




      },





    //  created(){
    //   let url=this.HOST +"/movie/top250";
    //   this.$axios.get(url,{
    //     params:{
    //       count:1000,
    //       start:0
    //     }
    //   }).then(res=>{
    //     console.log(res.data)
    //   }).catch(error=>{
    //     console.log(error)
    //   })
    //  }
  }
</script>

<style scoped>

</style>
