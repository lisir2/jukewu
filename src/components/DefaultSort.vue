<template>
    <div class="DefaultSort">
      <div class="DefaultSort_list">
        <div>
          <img src="" alt="">
          <span>盈盈有钱</span>
        </div>
        <div>
          <span>费率底至</span>
          <span>3小时放款</span>
          <span>最低费率2.5%</span>
        </div>
        <div>
          <span>0.88%</span>
          <span>贷款期限12个月</span>
          <span>申请贷款</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "default-sort"
    }
</script>

<style scoped>
  .DefaultSort{
    font-size: 0.27rem;
  }
  .DefaultSort>div{
    padding: 0.2rem;
  }
  .DefaultSort_list>div:nth-of-type(1){
    color:#656565;
    margin-bottom: 0.3rem;
  }
  .DefaultSort_list>div:nth-of-type(n+2){
    /*height: 0.4rem;*/
    /*line-height: 0.4rem;*/
  }
  .DefaultSort_list>div:nth-of-type(2)>span:nth-of-type(1){
    margin-right: 0.3rem;
  }
  .DefaultSort_list>div:nth-of-type(2)>span:nth-of-type(2){
    margin-right: 0.8rem;
  }
  .DefaultSort_list>div:nth-of-type(2)>span:nth-of-type(3){
    display: inline-block;
    text-align: center;
    background: linear-gradient(left,#FE6F03,#FB9201);
    color: white;
    border-radius: 0.2rem;
    padding: 0.08rem 0.3rem;
    vertical-align: top;
    margin-top: -0.15rem;
    float: right;
  }
  .DefaultSort_list>div:nth-of-type(3){
    font-size: 0.22rem;
    margin-top: 0.2rem;
  }
  .DefaultSort_list>div:nth-of-type(3)>span:nth-of-type(1){
    margin-left: 0.2rem;
    color: #F23F48;
  }
  .DefaultSort_list>div:nth-of-type(3)>span:nth-of-type(2){
    margin-left: 0.65rem;
    color: #989898;
  }
  .DefaultSort_list>div:nth-of-type(3)>span:nth-of-type(3){
    padding: 0.1rem 0.2rem;
    border: solid 1px #FF6D00;
    color: #FF6D00;
    float: right;
    margin-right: 0.4rem;
    margin-top: -0.1rem;
  }
</style>
