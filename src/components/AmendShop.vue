<template>
    <div>
      <div class="title">
        <router-link to="/DaiKuan"><span></span></router-link>
        <p>修改店铺</p>
      </div>
      <div class="Set">
        <div class="common set1">
          <span>头像</span>
          <img src="../../static/img/phone1.png" alt="">
        </div>
        <div class="common set2">
          <span>店铺名称</span>
          <span>Mr Bean ></span>
        </div>
        <div class="common set3">
          <span>个性签名</span>
          <span>海阔凭鱼跃 ></span>
        </div>
        <div class="common set4">
          <span>修改背景图</span>
          <span>></span>
        </div>
      </div>
      <div class="bgc">

      </div>
    </div>
</template>

<script>
    export default {
        name: "amend-shop",
        mounted(){
          //引入js
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
        }
    }
</script>

<style scoped>
  .title{
    position: relative;
    padding: 0.3rem 0;
    font-family: '微软雅黑';
    border-bottom: 0.2rem solid #f2f2f2;
  }
  .title a{
    color: black;
  }
  .title span{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    transform: rotate(135deg);
    border: solid 1px;
    border-top: 0;
    border-left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.4rem;
    margin: auto;
  }
  .title p{
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }
  .Set{
    font-size: 0.3rem;
  }
  .common{
    position: relative;
    margin: 0 0 0 0.4rem;
  }
  .common>span:nth-of-type(1){
    display: inline-block;
    font-size: 0.3rem;
    font-family: '微软雅黑';
    height: 1rem;
    line-height: 1rem;
  }
  .set1{
    border-bottom: solid 1px #f2f2f2;
  }
  .set1>img{
    width: 0.5rem;
    position:absolute;
    top: 0;
    bottom: 0;
    right: 0.4rem;
    margin: auto;
  }
  .set2{
    border-bottom: solid 0.2rem #FCF9FC;
  }
  .set2>span:nth-of-type(2){
    float: right;
    line-height: 1rem;
    color: #989898;
    margin-right: 0.4rem;
  }
  .set3{
    border-bottom: solid 1px #f2f2f2;
  }
  .set3>span:nth-of-type(2){
    float: right;
    line-height: 1rem;
    color: #989898;
    margin-right: 0.4rem;
  }
  .set4>span:nth-of-type(2){
    float: right;
    line-height: 1rem;
    color: #989898;
    margin-right: 0.4rem;
  }
  .bgc{
    height: 5.95rem;
    background-color: #FCF9FC;
  }
</style>
