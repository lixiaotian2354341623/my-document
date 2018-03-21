<template>
 <div class="itemsWrap" @click="fn()" v-fb>
      <span v-show="bol"><slot name="normal"></slot><br/></span>
      <span v-show="!bol"><slot name="active"></slot><br/></span>
      <span :class="{ hover:!bol}" class="avatar">{{txt}}</span>

 </div>
</template>

<script>
	export default {
		name: "items",
    props:['txt','mask','sel'],
    computed:{
      bol:function(){
        if(this.mask==this.sel){
          return false;
        }
        return true;
      }
    },
    methods:{
		  fn:function(){
            this.$emit('change',this.mask);
            this.$router.push('/'+this.mask)
      }
    }
  }
</script>

<style>
  .itemsWrap{width: 20%; text-align: center;float: left; padding-top: 4px;}
  .itemsWrap  img{ width: 36px;height: 36px; vertical-align:top;display: inline-block;}
  .itemsWrap span{font-size: 12px;color: #999; }
  .itemsWrap .avatar{padding-top: 4px;display: inline-block;}
  .itemsWrap .hover{color:#00c159;}
</style>
