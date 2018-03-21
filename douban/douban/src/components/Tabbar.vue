<template>
<div class="tabbarWrap">
      <Item txt="首页" mask="home" :sel="selected" @change="getval" >
     <img src="../assets/images/ic_tab_home_normal.png"  slot="normal">
     <img src="../assets/images/ic_tab_home_active.png"  slot="active">
      </Item>
      <Item txt="书影音" mask="audio" :sel="selected" @change="getval">
        <img src="../assets/images/ic_tab_subject_normal.png"  slot="normal">
        <img src="../assets/images/ic_tab_subject_active.png"  slot="active">
      </Item>
      <Item txt="广播" mask="broatcost" :sel="selected" @change="getval">
        <img src="../assets/images/ic_tab_status_normal.png"  slot="normal">
        <img src="../assets/images/ic_tab_status_active.png"  slot="active">

      </Item>
      <Item txt="小组" mask="group" :sel="selected" @change="getval">
        <img src="../assets/images/ic_tab_group_normal.png"  slot="normal">
        <img src="../assets/images/ic_tab_group_active.png"  slot="active">
      </Item>
      <Item txt="我的" mask="mine" :sel="selected" @change="getval">
        <img src="../assets/images/ic_tab_profile_normal.png"  slot="normal">
        <img src="../assets/images/ic_tab_profile_active.png"  slot="active">

      </Item>
</div>
</template>

<script>
  import Item from './Items.vue'
	export default {
    name: "tabbar",
    components: {
      Item
    },
    data(){
           return{
             selected:'home',
           }
    },
    methods:{
      getval(val){
          this.selected=val;

      }
    },

  }
</script>

<style>
/*.tabbarWrap{position: relative;}*/
  .tabbarWrap{position: fixed;bottom: 0;  left: 0;
    right: 0;width: 100%;height: 64px;
      border-top: 1px solid #ccc;background: #f7f7f7; z-index: 999}
</style>
