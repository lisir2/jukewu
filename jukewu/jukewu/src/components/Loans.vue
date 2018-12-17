<template>
    <div>
      <div class="title">
        <span></span>
        <p>贷款详情</p>
      </div>
      <div class="money">
        <p>最高额度（元）</p>
        <p>150000</p>
        <p>月费率低至0.69%</p>
      </div>
      <div class="condition">
        <p>申请条件</p>
        <p>1、月费率低至0.69%</p>
        <p>2、有至少一张信用卡</p>
        <p>3、手机号连续使用6个月以上</p>
      </div>
      <div class="flow">
        <p>申请流程</p>
      </div>
      <div class="introduce">
        <p>产品介绍</p>
      </div>
      <div class="btn">
        我要贷
      </div>
    </div>
</template>

<script>
    export default {
        name: "loans",
        mounted() {
          //引入外部js文件
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
    border-bottom: #F1F1F1 solid 1px;
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
  .money{
    border-bottom: 0.2rem solid #FCF9FC;
  }
  .money>p:nth-of-type(1){
    font-size: 0.2rem;
    text-align: center;
    color: #989898;
    margin-top: 0.3rem;
  }
  .money>p:nth-of-type(2){
    font-size: 1.1rem;
    text-align: center;
    color: #FF8900;
    margin: 0.2rem 0;
  }
  .money>p:nth-of-type(3){
    font-size: 0.23rem;
    text-align: center;
    color: #989898;
    margin-bottom: 0.3rem;
  }
  .condition{
    font-size: 0.32rem;
    border-bottom: 0.2rem solid #FCF9FC;
    padding: 0.2rem 0.3rem;
    line-height: 0.5rem;
  }
  .condition>p:nth-of-type(1){
    border-left: solid #FF8900 2px;
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .condition>p:nth-of-type(n+2){
    font-size: 0.26rem;
    color: #989898;
    line-height: 0.4rem;
    margin-left: 0.1rem;
  }
  .flow{
    font-size: 0.32rem;
    border-bottom: 0.2rem solid #FCF9FC;
    padding: 0.2rem 0.3rem;
    line-height: 0.5rem;
  }
  .flow>p:nth-of-type(1){
    border-left: solid #FF8900 2px;
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .introduce{
    font-size: 0.32rem;
    padding: 0.2rem 0.3rem;
    line-height: 0.5rem;
  }
  .introduce>p:nth-of-type(1){
    border-left: solid #FF8900 2px;
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .btn{
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    background: linear-gradient(left,#FE6F03,#FB9201);
    font-size: 0.3rem;
    color: white;
  }
</style>
