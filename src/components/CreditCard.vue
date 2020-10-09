<template>
    <div>
      <div class="bank_content">
        <div class="hot_one">
          <div>
            <div>
              <img src="../../static/img/bank_img.png" alt="">
            </div>
            <div>
              <span>快捷</span>
              <span>交通银行标准卡</span>
            </div>
          </div>
        </div>
        <div class="sum">
          <div class="sum_img">
            <p>4.3-4.5%</p>
            <p>佣金</p>
          </div>
          <div class="sum_one">
            <p>4.3-4.5%</p>
            <p>费率</p>
          </div>
          <div class="sum_commission">
            <p>秒结佣金2.5%</p>
            <span><img src="../../static/img/require.png" alt="">芝麻分590</span>
          </div>
          <div class="sum_list">
            <li>快捷取现</li>
            <li>全额代还</li>
            <li>余额代还</li>
            <li>无卡支付</li>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "credit-card"
    }
</script>

<style scoped>
  .hot_one{
    font-size: 0.3rem;
    overflow: hidden;
  }
  .hot_one>img{
    width: 0.4rem;
    float: right;
    margin-right: 0.4rem;
  }
  .hot_one>div{
    height: 0.7rem;
    margin-top: 0.3rem;
    border-bottom: #F2F2F2 solid 1px;
  }
  .hot_one>div>div:nth-of-type(1){
    /*width: 0.8rem;*/
    float: left;
  }
  .hot_one>div>div:nth-of-type(1)>img{
    height: 0.4rem;
    vertical-align: middle;
    margin-left: 0.4rem;
    margin-top: 0.05rem;
  }
  .hot_one>div>div:nth-of-type(2){
    float: left;
    font-size: 0.22rem;
    line-height: 0.5rem;
  }
  .hot_one>div>div:nth-of-type(2)>span:nth-of-type(1){
    font-size: 0.2rem;
    border: solid 1px #FC8901;
    color:#FC8901 ;
    padding: 0.05rem;
    margin-left: 0.3rem;
  }
  .hot_one>div>div:nth-of-type(2)>span:nth-of-type(2){
    margin-left: 0.2rem;
    color: #989898;
  }
  .sum_list{
    width: 76%;
    padding: 0 6%;
    margin:0.1rem 0;
    display: flex;
    font-size: 0.2rem;
    line-height: 0.5rem;
    justify-content: space-between;
    color: #7F7F7F;
  }
  .sum_list li{
    font-size: 0.15rem;
    width: 21%;
    list-style: none;
    text-align: center;
    background-color: #f2f2f2;
    color:#989898;
    border-radius: 5px;
    height: 0.4rem;
    line-height: 0.4rem;
    padding: 0 0.05rem;
  }
  .sum_img{
    height: 0.9rem;
    float: left;
    margin: 0.3rem 0 0.3rem 0.4rem;
    position: relative;
    font-family: '微软雅黑';
  }
  .sum_img p:nth-of-type(1){
    font-size: 0.35rem;
    color: #FE6F03;
  }
  .sum_img p:nth-of-type(2){
    font-size: 0.2rem;
    color: #989898;
    position: absolute;
    bottom: 0;
  }
  .sum_one{
    height: 0.9rem;
    float: left;
    margin: 0.3rem 0 0.3rem 0.4rem;
    position: relative;
    font-family: '微软雅黑';
  }
  .sum_one p:nth-of-type(1){
    margin-top: 0.2rem;
    font-size: 0.25rem;
  }
  .sum_one p:nth-of-type(2){
    font-size: 0.2rem;
    color: #989898;
    position: absolute;
    bottom: 0;
  }
  .sum_commission{
    height: 1rem;
    float: right;
    margin: 0.3rem 0.4rem 0.3rem 0;
    line-height: 0.5rem;
  }
  .sum_commission p{
    color: white;
    background: -webkit-gradient(linear,left top, right top,from(#FE6F03),to(#FB9201));
    background: linear-gradient(left,#FE6F03,#FB9201);
    font-size: 0.2rem;
    line-height: 0.37rem;
    padding: 0 0.25rem;
    border-radius: 0.2rem;
    margin-top: 0.1rem;
    text-align: center;
  }
  .sum_commission span{
    font-size: 0.2rem;
    float: right;
    color: #989898;
    line-height: 0.4rem;
    margin-top: 0.1rem;
  }
  .sum_commission span img{
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
    margin-top: -0.05rem;
    margin-right: 0.1rem;
  }
</style>
