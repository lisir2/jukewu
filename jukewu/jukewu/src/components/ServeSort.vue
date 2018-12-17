<template>
    <div>
      <div class="sort">
        <div>
          <img src="../../static/img/MoneyIntroduce.png" alt="">
        </div>
        <div class="sort_content">
          <p>中信银行标准卡</p>
          <p>芯片卡 更放心 <span>去申卡</span></p>
          <p><span style="color: #F23F48;">152113人</span>下卡成功</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "serve-sort"
    }
</script>

<style scoped>
  .sort{
    overflow: hidden;
    padding: 0.2rem 0;
  }
  .sort>div:nth-of-type(1){
    font-size: 0.3rem;
    width: 25%;
    float: left;
    margin: 0 0.2rem 0 0.3rem;
  }
  .sort>div:nth-of-type(1)>img{
    width: 100%;
    height: 0.9rem;
  }
  .sort_content{
    float: left;
    font-size: 0.25rem;
  }
  .sort_content>p:nth-of-type(2){
    font-size: 0.2rem;
    color: #989898;
    margin: 0.07rem 0;
  }
  .sort_content>p:nth-of-type(2)>span{
    border: solid 1px #FF6D00;
    padding: 0.1rem 0.2rem;
    /*float: right;*/
    margin-left: 1.2rem;
    color: #FF6D00;
  }
  .sort_content>p:nth-of-type(3){
    color: #989898;
    font-size: 0.2rem;
  }
</style>
