<template>
    <div>
      <div>
        <div class="hot_list">
          <img src="../../static/img/close.png" alt="">
          <div>
            <div>
              <img src="../../static/img/bank.png" alt="">
            </div>
            <div>
              <span>盈盈有钱</span><br>
              <span><span style="color: #FE6F03;">36521</span> 人申请</span>
            </div>
          </div>
        </div>
        <div class="num">
          <div class="num_one">
            <span>1000-5000</span>
            <span>秒结佣金2.5%</span>
          </div>
          <div class="num_two">
            <span>额度范围(元）</span>
            <span><img src="../../static/img/require.png" alt="">芝麻分590</span>
          </div>
          <div class="num_three">
            <li>秒结</li>
            <li>审核通过后</li>
            <li>预估通过率：56%</li>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "dai-kuan"
    }
</script>

<style scoped>
  .hot_list{
    font-size: 0.3rem;
    overflow: hidden;
    border-bottom: #F2F2F2 solid 1px;
    padding-bottom: 0.1rem;
  }
  .hot_list>img{
    width: 0.4rem;
    float: right;
    margin-right: 0.4rem;
  }
  .hot_list>div{
    height: 0.7rem;
    margin-top: 0.3rem;
  }
  .hot_list>div>div:nth-of-type(1){
    /*width: 0.8rem;*/
    float: left;
  }
  .hot_list>div>div:nth-of-type(1)>img{
    height: 0.4rem;
    vertical-align: middle;
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
  .hot_list>div>div:nth-of-type(2){
    float: left;
    font-size: 0.22rem;
    line-height: 0.4rem;
  }
  .hot_list>div>div:nth-of-type(2)>span:nth-of-type(1){
    font-size: 0.25rem;
    margin-left: 0.3rem;
  }
  .hot_list>div>div:nth-of-type(2)>span:nth-of-type(2){
    margin-left: 0.2rem;
    color: #989898;
  }
  .num{
    width: 100%;
    font-size: 0.3rem;
    border-bottom: solid #FCF9FC 2px;
    padding-bottom: 0.2rem;
  }
  .num_one{
    margin-top: 0.05rem;
  }
  .num_one>span:nth-of-type(1){
    color: #F23F48;
    margin-left: 0.4rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
  }
  .num_one>span:nth-of-type(2){
    color: white;
    background: linear-gradient(left,#FE6F03,#FB9201);
    margin-right: 0.4rem;
    font-size: 0.2rem;
    float: right;
    line-height: 0.37rem;
    padding: 0 0.25rem;
    border-radius: 0.2rem;
    margin-top: 0.1rem;
    text-align: center;
  }
  .num_two>span:nth-of-type(1){
    font-size: 0.2rem;
    margin-left: 0.4rem;
    color: #989898;
    line-height: 0.4rem;
  }
  .num_two>span:nth-of-type(2){
    font-size: 0.2rem;
    float: right;
    margin-right: 0.4rem;
    color: #989898;
    line-height: 0.4rem;
  }
  .num_two>span:nth-of-type(2)>img{
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
    margin-right: 0.1rem;
    margin-top: -0.05rem;
  }
  .num_three{
    width: 88%;
    padding: 0 6%;
    margin:0.1rem auto;
    display: flex;
    font-size: 0.2rem;
    line-height: 0.5rem;
    justify-content: space-between;
    color: #7F7F7F;
    background-color: #F2F2F2;
  }
</style>
