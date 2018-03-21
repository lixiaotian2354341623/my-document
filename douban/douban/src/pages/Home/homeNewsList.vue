<template>
      <div class="newlistWrap clearfix">
          <div class="newlistLeft">
            <h4><slot name="tit"></slot></h4>
            <p class="des"><slot name="des"></slot></p>
            <div class="sep"></div>
            <div class="authorWrap">
             <img :src="authorimg" alt="" class="authorIMG">
              <p class="author">{{author}}</p>
              <div class="ex" @click="del">
              <i></i>
              <i></i>
              <i></i>
               </div>
              <div class="insering" v-show="bool" ><p @click.prevent="chooseFrom" >不感兴趣</p></div>
              <el-dialog title="不喜欢此内容吗？"  :visible.sync="dialogVisible" width="80%" top="35vh"
              :show-close="isshow"  ref="dialog"
              >
                  <el-button round v-for="(item,index) in arr3" :class="{'el-button--success':item.active}" :key="index" @click="changeType(index)">{{item.reson}}</el-button>

                  <el-button round disabled >提交</el-button>

              </el-dialog>
            </div>
          </div>
        <slot name="url"></slot>
      </div>
</template>

<script>
	export default {
    name: "home-news-list",
    props: ['authorimg', 'author', 'index', 'minin', 'bool2','dialogshow'],
    data() {
      return {
        dialogVisible: false,
        isshow: false,
        active: false,

        arr3: [
          {reson: '不感兴趣', active: false,},
          {reson: '内容质量差', active: false,},
          {reson: '内容重复', active: false,},
          {reson: '其他原因', active: false,}
        ],
      };

    },
    mounted() {

    },

    computed: {
      bool() {
        if (this.minin == this.index) {
          return this.bool2
        }

        return false


      },

    },

    methods: {
      del() {
        // this.$emit('same',this.clickNum)
        this.$emit('del', this.index, );



      },
      chooseFrom() {
        this.dialogVisible = !this.dialogVisible;
        console.log(this.dialogVisible)
        this.$emit('showOr',!this.dialogVisible)





      },
      changeType(index) {
        return this.arr3[index].active = !this.arr3[index].active;


      },
//关闭弹框的事件











      // touch(){
      //     this.bool=false
      // }

    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/emui.css";*/
.newlistWrap{padding: 0.2rem;text-align: left;
  height: 1.5rem;  margin: 0.2rem 0  0  0;
 background: #ffffff;
  position: relative;
}
.newlistWrap .newlistLeft h4{font-weight: bolder;
  font-size: 0.18rem;



}
.newlistWrap img{width: 1rem;height: 1rem;float: right;}
.newlistWrap .newlistLeft{width: 65%;float: left;}
.newlistWrap newlistLeft p{margin: 0.1rem 0;
  color: #999;font-size: .14rem; }
.newlistWrap  .newlistLeft .des{width: 100%;overflow-wrap: break-word;text-overflow:ellipsis;white-space: normal;
  word-break:break-all;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 3; /** 显示的行数 **/
  overflow: hidden;
  padding: 0.1rem 0 ;
  height: 0.5rem;
  font-size: .14rem;
  color: #999;


}

.newlistWrap  .newlistLeft .authorWrap{width: 150%; padding-top: 0.15rem;}
.newlistWrap  .newlistLeft .authorWrap .authorIMG{width: 0.2rem;height: 0.2rem;display: inline-block; float: none;vertical-align: middle;

 padding-right: 0.15rem; border-radius: 50%;
}
.newlistWrap  .newlistLeft .authorWrap .ex{
  float: right;
  width: 0.45rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;

}

.newlistWrap  .newlistLeft .authorWrap .insering{
  position: absolute;
  right: 5%;
  bottom: -20%;
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  --webkit-box-shadow: 0 -1px  10px #ccc;
  -moz-box-shadow: 0 -1px  10px #ccc;
  box-shadow: 0 -1px 10px #ccc;
  border: 0.01rem solid #eee;
  background: #eee;
  z-index: 1;
}

.newlistLeft .authorWrap .ex i{
  display: inline-block;
  vertical-align: middle;
  width: 0.05rem;
  height: 0.05rem;
  background: #ccc;
  border-radius: 100%;

}
.newlistWrap  .newlistLeft .author{
  color: #ccc; font-size: .12rem;display: inline-block;}
.newlistWrap .newlistLeft .sep{width: 0.2rem;height: 0.01rem;
  color: #eee; }




</style>


<style >

  .el-dialog .el-dialog__header .el-dialog__title{
    font-size: 15px;
    color: #999;
    text-align: left;

  }
  .el-dialog .el-dialog__body{
    padding: 10% 6%;
    text-align: center;
  }
  .el-dialog .el-button{
    width: 1.0rem;
    height: 0.4rem;
    text-align: center;
    padding: 0;
    margin: 0.2rem 0.2rem 0rem 0;
    cursor: none;
  }
  .el-dialog .el-button span{
    cursor: pointer;
  }
  .el-dialog .el-button:hover{
    background:#00c159 ;
    color: #fff;
    border-color:transparent;
    transition: none;
    transform: none;
  }


  .el-dialog .el-button--success{
    background:#00c159 ;
    border-color: #00c159;
  }
  .el-dialog .el-button:nth-of-type(5){
      width: 100%;
      background: #eee;
      color: #fff;
      border-color: none;
    }
  .el-dialog .el-button:nth-of-type(5):hover{
    border: none;
  }



</style>


