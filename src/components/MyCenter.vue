<template>
    <div>
      <div class="user_message">
        <p>
          <span>13888888888，您好</span>
          <router-link to="/ZhiFubao"><img src="../../static/img/zhifubao.png" alt=""></router-link>
          <router-link to="/SET">
            <img src="../../static/img/set.png" alt="">
          </router-link>
        </p>
        <div class="user_frame">
          <div class="user_content">
            <div>
              <img src="../../static/img/touxiang.png" alt="">
            </div>
            <div class="user_name">
              <img src="../../static/img/huangguan.png" alt="">
              <span>推广牛人</span>
              <p>聚客屋 <span>ID:1254321</span></p>
            </div>
          </div>
          <div class="user_money">
            <ul>
              <li>
                <div>
                  <span>您推广产生的累计佣金（元）</span>
                  <p>0.00</p>
                </div>
              </li>
              <li>
                <div>
                  <span>可提现收入（元）</span>
                  <router-link to="/Earnings"><img src="../../static/img/gengduo.png" alt=""></router-link>
                  <p class="deposit">0.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="user_details">
        <b>聚客屋发放总佣金（元）</b><span>39605327.65</span>
      </div>
      <div class="list">
        <ul>
          <li>
            <div>
              <p>我的团队</p>
              <p>直接代理：<span>0人</span></p>
              <p>间接代理：<span>0人</span></p>
            </div>
            <div>
              <img src="../../static/img/center1.png" alt="">
            </div>
          </li>
          <li>
            <div>
              <p>我的团队</p>
              <p>直接代理：<span>0人</span></p>
              <p>间接代理：<span>0人</span></p>
            </div>
            <div>
              <img src="../../static/img/center2.png" alt="">
            </div>
          </li>
          <li>
            <div>
              <p>我的团队</p>
              <p>直接代理：<span>0人</span></p>
              <p>间接代理：<span>0人</span></p>
            </div>
            <div>
              <img src="../../static/img/center3.png" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="help">
        <ul>
          <router-link to="/Course">
            <li>
              <img src="../../static/img/caozuo.png" alt="">
              <p>操作教程</p>
            </li>
          </router-link>
          <router-link to="/Service">
            <li>
              <img src="../../static/img/kefu.png" alt="">
              <p>客服中心</p>
            </li>
          </router-link>
          <router-link to="/IShop">
            <li>
              <img src="../../static/img/dianpu.png" alt="">
              <p>我的店铺</p>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-center"
    }
</script>

<style scoped>
  .user_frame{
    width: 100%;
    height:2.4rem;
    margin-top: 0.2rem;
    padding-bottom: 0.4rem;
    border-bottom: solid 1px #f2f2f2;
  }
  .user_message{
    width: 100%;
    height: 3.5rem;
    font-size: 0.3rem;
    padding-top: 0.4rem;
  }
  .user_message>p{
    margin: 0 0.3rem;
  }
  .user_message>p>a img{
    height: 0.4rem;
    vertical-align: middle;
    margin-top: -0.05rem;
    float:right;
  }
  .user_message>p>img{
    vertical-align: middle;
    height: 0.3rem;
    margin-top: -0.1rem;
    margin-left: 0.2rem;
  }
  .user_message>p>a{
    text-decoration: none;
    color: #666666;
  }
  .user_content{
    float: left;
    margin:0.2rem 0 0 0.35rem;
  }
  .user_content>div:nth-of-type(1){
    width: 1.2rem;
    height: 1.2rem;
  }
  .user_name{
    float: left;
    font-size: 0.3rem;
    line-height: 0.5rem;
  }
  .user_name>p:nth-of-type(1){
    color: #3A3A3A;
    line-height: 0.5rem;
    font-family: '微软雅黑';
  }
  .user_name>p:nth-of-type(1)>span{
    color: #8F7D6D;
    font-size: 0.25rem;
  }
  .user_name>span{
    font-size: 0.2rem;
    color: #EACA87;
    border-radius: 2px;
    border: solid 1px #EACA87;
    padding: 0.02rem 0.04rem;
  }
  .user_name>img{
    height: 0.3rem;
    vertical-align: middle;
  }
  .user_content>div:nth-of-type(1)>img{
    width: 1.2rem;
    border-radius: 50%;
  }
  .user_details{
    font-size: 0.25rem;
    padding: 0.2rem 0.3rem;
  }
  .user_details>span{
    color: #FDC806;
    float: right;
    font-family: '微软雅黑';
  }
  .user_money>ul{
    float: right;
    font-size: 0.3rem;
    margin-top: 0.2rem;
    overflow: hidden;
    margin-right: 0.3rem;
  }
  .user_money li{
    height: 1rem;
    list-style: none;
  }
  .user_money img{
    height: 0.3rem;
    vertical-align: middle;
    margin-top: -0.1rem;
  }
  .user_money li:nth-of-type(2) img{
    height:0.3rem;
  }
  .user_money div{
    height: 1.3rem;
    font-size: 0.25rem;
    float: left;
    position: relative;
  }
  .user_money div span{
    font-size: 0.24rem;
    color: #989898;
  }
  .user_money div:nth-of-type(2){
    padding-top: 0.1rem;
  }
  .user_money p{
    font-size: 0.3rem;
    font-family: '微软雅黑';
    color: #666666;
    margin-top: 0.2rem;
  }
  .user_details:nth-last-child(1){
    border-bottom: solid 0.2rem #FCF9FC;
  }
  .help>ul{
    display: flex;
    justify-content: space-around;
    padding: 0.3rem 0;
    border-top: solid 0.2rem #FCF9FC;
    border-bottom: solid 0.4rem #FCF9FC;
  }
  .help img{
    width: 0.7rem;
    height: 0.7rem;
    display: block;
    margin: auto;
  }
  .help a{
    width: 33%;
    text-align: center;
    font-size: 0.3rem;
    list-style: none;
    text-decoration: none;
    color: black;
  }
  .help p{
    margin-top: 0.2rem;
    color: #333333;
  }
  .list ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.25rem 0.3rem 0.25rem;
  }
  .list li{
    width: 40%;
    font-size: 0.24rem;
    list-style: none;
    margin: 0.15rem 0 0 0;
    background-color: rgb(255,248,242);
    padding: 0.2rem;
    position: relative;
    border-radius: 5px;
  }
  .list div{
    height: 100%;
    float: left;
    line-height: 0.35rem;
  }
  .list div p:nth-of-type(n+2){
    color: #989898;
    font-size: 0.22rem;
  }
  .list div p:nth-of-type(n+2) span{
    color: #FE6F03;
  }
  .list img{
    width: 0.6rem;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-left: 0.2rem;
  }
</style>
