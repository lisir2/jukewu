<template>
    <div>
      <div class="earnings_list">
        <div class="earnings">
          <img src="" alt="">
          <img src="" alt="">
          <span>小明</span>
          <span>累计收益 <span style="color: #F23F48;">$1024.00</span></span>
        </div>
      </div>
      <div class="img">
        <img src="" alt="">
      </div>
      <div class="font">
        <span>￥60</span>
        <span>原价￥199</span>
        <span>确认提交</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "month-ranking"
    }
</script>

<style scoped>
  .earnings_list{
    border-bottom: solid 0.2rem #FCF9FC;
  }
  .earnings{
    font-size: 0.25rem;
    padding: 0.3rem;
    border-bottom: solid #E4E4E4 1px;
  }
  .earnings>img{
    width: 0.6rem;
    height: 0.6rem;
    vertical-align: middle;
  }
  .earnings span:nth-of-type(2){
    float: right;
    line-height: 0.6rem;
  }
  .img{
    border-bottom: solid 0.4rem #FCF9FC;
  }
  .img img{
    width: 100%;
    height: 5rem;
  }
  .font{
    height: 0.8rem;
  }
  .font span:nth-of-type(1){
    display: inline-block;
    color: #E6333B;
    font-size: 0.3rem;
    line-height: 0.8rem;
    vertical-align: top;
    margin-left: 0.5rem;
  }
  .font span:nth-of-type(2){
    display: inline-block;
    color: #989898;
    text-decoration:line-through;
    font-size: 0.3rem;
    line-height: 0.8rem;
    vertical-align: top;
    margin-left: 0.9rem;
    font-size: 0.25rem;
  }
  .font span:nth-of-type(3){
    display: inline-block;
    font-size: 0.3rem;
    line-height: 0.8rem;
    vertical-align: top;
    float: right;
    padding: 0 0.5rem;
    background-color:#FF6800;
    color: white;
  }
</style>
