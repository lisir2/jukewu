<template>
  <div class="body">
    <div class="earnings_list">
      <div class="earnings">
        <img src="" alt="">
        <img src="" alt="">
        <span>小明</span>
        <span>累计收益 <span style="color: #F23F48;">$1024.00</span></span>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "day-rank"
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
</style>
