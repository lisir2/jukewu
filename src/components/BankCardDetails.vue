<template>
    <div>
      <div class="title">
        <span @click="Return"></span>
        <p>光大银行</p>
      </div>
      <div class="Bank_img">
        <img src="" alt="">
        <p>光大菁英信用卡</p>
        <p><span>已有</span> <span>5889人申请</span></p>
      </div>
      <div class="Bank_message">
        <p>基本信息</p>
        <div>
          <span style="color:#989898;">品&nbsp&nbsp牌</span><img src="" alt=""><br>
          <span style="color:#989898;margin-right: 0.3rem">产品名称</span><span>光大菁英白金卡</span><br>
          <span style="color:#989898;margin-right: 0.3rem">服务费率</span><span>3.2%</span><br>
          <span style="color:#989898;margin-right: 0.3rem">通 过 率</span><span>3.2%</span><br>
        </div>
      </div>
      <div class="Bank_message">
        <p>还款方式</p>
        <div>
          <span style="color:#989898;">余额代还</span><br>
          <span style="color:#989898;">余额代还</span>
        </div>
      </div>
      <div class="Bank_message">
        <p>优惠活动</p>
        <div>
          <span style="color:#FD1622;margin-right: 0.3rem">购&nbsp&nbsp物</span><span>唯品会满108元减18元</span>
        </div>
      </div>
      <div class="Bank_message">
        <p>相关费用</p>
        <div>
          <div>
            <span style="color:#989898;margin:0 0.3rem 0.4rem 0;display: inline-block;">年&nbsp&nbsp费</span><span style="display: inline;width: 77%;float: right;">200元/年，免首年年费，当年消费三笔累记金额2000元，免次年年费</span>
          </div>
          <span style="color:#989898;margin:0 0.3rem 0.4rem 0;display: inline-block;">取现比例</span><span style="display: inline;width: 77%;float: right;">最高取现比例50%优于 78.8其他卡片</span><br>
          <span style="color:#989898;margin:0 0.3rem 0.4rem 0;display: inline-block;">取现费用</span><span style="display: inline;width: 77%;float: right;">手续费为取现金额的5%</span>
        </div>
      </div>
      <div class="btn">
        立即申请
      </div>
    </div>
</template>

<script>
    export default {
        name: "bank-card-details",
        mounted(){
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
    margin-top: 0.3rem;
    font-family: '微软雅黑';
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
  .Bank_img{
    padding:0.3rem;
    border-bottom: 0.2rem solid #F2F2F2;
  }
  .Bank_img>img{
    width: 100%;
  }
  .Bank_img>p{
    font-size: 0.3rem;
  }
  .Bank_img span:nth-of-type(1){
    font-size: 0.2rem;
  }
  .Bank_img span:nth-of-type(2){
    font-size: 0.2rem;
    color: #FD1622;
  }
  .Bank_message{
    font-size: 0.25rem;
    border-bottom: 0.2rem solid #F2F2F2;
    padding-bottom: 0.2rem;
  }
  .Bank_message>p{
    padding:0 0.3rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #F2F2F2;
    margin-bottom: 0.3rem;
  }
  .Bank_message>div{
    padding: 0 0.3rem;
  }
  .Bank_message>div>span{
    display: inline-block;
    line-height: 0.5rem;
  }
  .btn{
    width: 100%;
    height: 1rem;
    background: linear-gradient(left,#FE6F03,#FB9201);
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    color: white;
  }
</style>
