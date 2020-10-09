<template>
    <div>
      <div class="title">
        <span></span>
        <p>中信理财</p>
      </div>
      <div class="bank_logo">
        <img src="" alt="">
        <p>中信金融详情</p>
      </div>
      <div class="bank_details">
        <div>
          <p>产品名称</p>
          <p>中信理财之慧赢成长</p>
        </div>
        <div>
          <p>服务优势</p>
          <p>我行预期收益型理财产品种类多，收益较同业较具有竞争优势</p>
        </div>
        <div>
          <p>服务简介</p>
          <p>是指在发行时明确披露预期收益或预期收益率区间的理财产品</p>
        </div>
        <div>
          <p>成立日期</p>
          <p>2018年11月21日</p>
        </div>
      </div>
      <div class="share">
        <div>海报式推广</div>
        <div>链接式推广</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "financial-details",
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
  .bank_logo{
    border-bottom: solid 1px #C3C3C3;
  }
  .bank_logo>img{
    width: 80%;
  }
  .bank_logo>p{
    padding: 0.3rem;
    font-size: 0.3rem;
  }
  .bank_details{
    font-size: 0.3rem;
  }
  .bank_details>div{
    overflow: hidden;
    padding: 0.2rem 0.3rem 0 0.3rem;
  }
  .bank_details>div>p:nth-of-type(1){
    width: 27%;
    float: left;
    color: #989898;
  }
  .bank_details>div>p:nth-of-type(2){
    /*width: auto;*/
    width: 73%;
    float: left;
  }
  .bank_details{
    padding: 0.3rem 0;
  }
  .share{
    font-size: 0.3rem;
    display: flex;
    justify-content: space-around;
  }
  .share>div{
    padding: 0.15rem 0.25rem;
    background: linear-gradient(left,#FE6F03,#FB9201);
    color: white;
    border-radius: 5px;
    margin-top: 1.5rem;
  }
</style>
