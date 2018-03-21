<template>
  <div id="app">
    <tabbar></tabbar>
   <router-view></router-view>
  </div>
</template>

<script>
  import  tabbar from './components/Tabbar.vue'//  定义全局 引入
  export default {
  name: 'app',//关联 app和tarbar
  components:{
    tabbar
  },
    beforeCreate:function(){
      this.$router.push('/');//路由重定向
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F4F4F4;

}
</style>
