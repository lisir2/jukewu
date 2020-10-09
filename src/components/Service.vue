<template>
  <div>
    <div class="title">
      <span @click="Return"></span>
      <p>客服与帮助</p>
    </div>
    <div class="Service">
      <p>微信专属客服：<span style="color: #2C79F9;">复制添加a123456789</span></p>
      <div>
        <img src="../../static/img/commaSymbol1.png" alt="">
        <img src="../../static/img/QRCode.png" alt="">
        <img src="../../static/img/commaSymbol.png" alt="">
      </div>
      <p>服务热线：400-123-123</p>
      <p>服务时间：9:00-21:00</p>
    </div>

    <div class="btn">
      <div>智能客服</div>
      <div>拨打电话</div>
    </div>
    <div class="help">
      <span>帮助中心</span>
      <span>更多问题&nbsp></span>
    </div>
    <div class="help_list">
      <ul>
        <li>什么是聚客屋的适用人群？</li>
        <li>邀请代理分佣是什么样的？</li>
        <li>提现什么时候到帐？</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "service",
        mounted() {
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
        },
        methods:{
          Return:function () {
            history.back()
          }
        }
    }
</script>

<style scoped>
  .title{
    position: relative;
    padding: 0.3rem 0;
    font-family: '微软雅黑';
    border-bottom:dashed  #E0E0E0 1px;
    background-color: white;
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
    left: 0.3rem;
    margin: auto;
  }
  .title p{
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }
  .Service{
    text-align: center;
    font-size: 0.25rem;
    padding: 0.3rem 0;
  }
  .btn>div{
    font-size: 0.3rem;
    width: 75%;
    height: 0.7rem;
    border-radius:0.4rem;
    background: linear-gradient(right,#F46921,#F4A323);
    line-height: 0.7rem;
    text-align: center;
    color: white;
    margin: 0 auto;
  }
  .btn>div:nth-of-type(2){
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .btn{
    border-bottom: 0.2rem solid #FCF9FC;
  }
  .help{
    overflow: hidden;
    font-size: 0.3rem;
    padding: 0.3rem 0;
    border-bottom: solid #C3C3C3 1px;
    line-height: 0.3rem;
  }
  .help>span:nth-of-type(1){
    float: left;
    margin-left: 0.3rem;
    color: #333333;
    font-family: '微软雅黑';
  }
  .help>span:nth-of-type(2){
    font-size: 0.25rem;
    float: right;
    margin-right: 0.3rem;
    color: #989898;
  }
  .help_list{
    font-size: 0.25rem;
    margin-left: 0.6rem;
    line-height: 0.6rem;
    margin-top: 0.3rem;
    color: #333333;
  }
  .Service div{
    width: 50%;
    height: 2.2rem;
    overflow: hidden;
    margin: 0.4rem auto;
    position: relative;
  }
  .Service img:nth-of-type(1){
    width: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  .Service img:nth-of-type(2){
    width: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .Service img:nth-of-type(3){
    width: 0.4rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
