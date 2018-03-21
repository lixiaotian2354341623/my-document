<template>
      <div :class="{headWrap:true,green:bol}">
       <span>{{headTxt}}</span>
        <slot name="left" class="leftImg"></slot>
        <slot name="right" class="rightImg"></slot>
        <slot name="search"></slot>
      </div>
</template>

<script>
 export default{
    props:['head-txt','bol']
 }
</script>

<style scoped>
.headWrap{width: 100%;height: 44px;line-height:44px;text-align: center;border-bottom: 1px solid #ccc; position: relative;
  z-index: 2;
  top: 0;
  left: 0;
background: #f7f7f7;
  color: #333;font-size: .15rem;
}
.headWrap img{}
.headWrap .leftImg{position: absolute; width: 25px; right: 12%;
  margin-top: -12.5px;
  top: 50%;}
.headWrap .rightImg{position: absolute; width: 20px; right: 3%; top:10px;
margin-top: -10px;
  top: 50%;
}
.green{background:#42bd56;}
.headWrap .searchWrap{width: 100%;height: 100%; }
.headWrap .searchWrap input{width: 85%;height: .3rem;border-radius:5px;outline: none;border: none;
  text-indent: 0.3rem;position: absolute;left: 0.1rem;
  top: 0.07rem;
}
.headWrap .searchWrap img{position: absolute;width: .2rem;}
.headWrap .searchWrap .searchImg{
  top: 0.13rem;
  left: 0.15rem;}
.headWrap .searchWrap .scanImg{
  top: 0.13rem;
  right:15%;}


</style>
