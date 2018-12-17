<template>
    <div>
      <div class="head_content">
        <div class="head_one">
          <img src="../../static/img/location.png" alt="">
          <span>杭州</span>
          <router-link to="/Service"><img src="../../static/img/service.png" alt=""></router-link>
          <!--<router-link to="/MessageCenter"><img src="../../static/img/message.png" alt=""></router-link>-->
        </div>
      </div>
      <div class="message">
        <img src="../../static/img/message1.png" alt="" >
        <span>加入官方群，开启消息推送</span>
        <span>></span>
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/Member">
              <img src="../../static/img/member.png" alt="">
              <p>发展会员</p>
            </router-link>
          </li>
          <li>
            <router-link to="/MyTeam">
              <img src="../../static/img/team.png" alt="">
              <p>我的团队</p>
            </router-link>
          </li>
          <li>
            <router-link to="/PromotionOfRecord">
              <img src="../../static/img/record.png" alt="">
              <p>推广记录</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="show">
        <div class="show_content">
          <div>
            <!--<span>实时收入展示</span>-->
            <!--<span>查看更多 ></span>-->
          </div>
          <div class="user_message">
            <img src="../../static/img/headPortrait1.png" alt="" >
            <span>ID:54544212 刚刚邀请了3位用户，</span>
            <span>收入<span style="color: #F23F48;">2938</span>元</span>
          </div>
          <div class="user_message">
            <img src="../../static/img/headPortrait2.png" alt="" >
            <span>ID:54544212 刚刚邀请了3位用户，</span>
            <span>收入<span style="color: #F23F48;">2938</span>元</span>
          </div>
          <div class="user_message">
            <img src="../../static/img/headPortrait3.png" alt="" >
            <span>ID:54544212 刚刚邀请了3位用户，</span>
            <span>收入<span style="color: #F23F48;">2938</span>元</span>
          </div>
          <div class="user_message">
            <img src="../../static/img/headPortrait4.png" alt="" >
            <span>ID:54544212 刚刚邀请了3位用户，</span>
            <span>收入<span style="color: #F23F48;">2938</span>元</span>
          </div>
          <div class="user_message">
            <img src="../../static/img/headPortrait5.png" alt="" >
            <span>ID:54544212 刚刚邀请了3位用户，</span>
            <span>收入<span style="color: #F23F48;">2938</span>元</span>
          </div>
        </div>
      </div>
      <div class="hot">
        <span>热门贷款</span>
        <img src="../../static/img/capacity.png" alt="">
      </div>
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
        <div class="more">
          <p>更多热门贷款 ></p>
        </div>
      </div>
      <div class="recommend_content">
        <div class="hot">
          <span>信用卡推荐</span>
          <img src="../../static/img/capacity.png" alt="">
        </div>
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
          <div class="more" style="border-top:solid 1px #F2F2F2 ;margin-top: 0.2rem;">
            <p>更多信用卡推荐 ></p>
          </div>
        </div>
      </div>
      <div>
        <img src="../../static/img/banner1.png" alt="" style="width: 100%;">
      </div>
      <div style="height: 1rem;"></div>
    </div>
</template>

<script>
    export default {
        name: "home-page"
    }
</script>

<style scoped>
  .message{
    width: 90%;
    height: 0.6rem;
    margin:-0.1rem auto 0;
    border-radius: 0.3rem;
    box-shadow: 1px 1px 10px 1px #F2F2F2;
    font-size: 0.18rem;
    line-height: 0.6rem;
    color: #333333;
    position: relative;
    z-index: 1;
    background-color: white;
  }
  .message>img{
    width: 0.27rem;
    height: 0.27rem;
    vertical-align: middle;
    margin-left: 0.2rem;
    margin-top: -0.03rem;
  }
  .message span:nth-of-type(2){
    color: #989898;
    float: right;
    font-size: 0.25rem;
    margin-right: 0.3rem;
  }
  .nav{
    padding: 0.3rem 0;
    border-bottom: 0.2rem solid #FCF9FC;
  }
  .nav>ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .nav img{
    width: 1rem;
    height: 1rem;
  }
  .nav li{
    width: 33%;
    text-align: center;
    font-size: 0.26rem;
    line-height: 0.3rem;
    color: #1A1A1A;
  }
  .nav a{
    text-decoration: none;
    color: black;
  }
  .show{
    background-color: #FCF9FC;
    padding-bottom: 0.2rem;
  }
  .show_content{
    width: 90%;
    margin: auto;
    background-color: white;
    border-radius: 0 0 0.3rem 0.3rem;
  }
  .show_content>div:nth-of-type(1){
    border-radius: 0.2rem 0.2rem 0 0px;
    height: 0.6rem;
    /*background-color: red;*/
    font-size: 0.23rem;
    background: url("../../static/img/more.png") no-repeat;
    background-size: 100%;
    line-height: 0.6rem;
    color: white;
    padding: 0 0.2rem;
  }
  .show_content>div:nth-of-type(1)>span:nth-of-type(2){
    float: right;
  }
  .user_message{
    height: 0.7rem;
    font-size: 0.18rem;
    line-height: 0.7rem;
    color: #333333;
    padding: 0 0.1rem;
    display: flex;
    justify-content: space-around;
  }
  .user_message>img{
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.2rem;
  }
  .user_message>span{
    font-size: 0.21rem ;
  }
  .hot{
    font-size: 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: #C3C3C3 solid 1px;
  }
  .hot>img{
    height: 0.3rem;
    vertical-align: middle;
    margin-top: -0.08rem;
  }
  .hot>span{
    margin-left: 0.4rem;
    font-family: '微软雅黑';
  }
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
  .sum{
    width: 100%;
    font-size: 0.3rem;
    border-bottom: solid #FCF9FC 0.2rem;
    padding-bottom: 0.2rem;
  }
  .sum_one{
    margin-top: 0.05rem;
  }
  .sum_one>span:nth-of-type(1){
    color: #F23F48;
    margin-left: 0.4rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
  }
  .sum_one>span:nth-of-type(2){
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
  .sum_two>span:nth-of-type(1){
    font-size: 0.2rem;
    margin-left: 0.4rem;
    color: #989898;
    line-height: 0.4rem;
  }
  .sum_two>span:nth-of-type(2){
    font-size: 0.2rem;
    float: right;
    margin-right: 0.4rem;
    color: #989898;
    line-height: 0.4rem;
  }
  .sum_two>span:nth-of-type(2)>img{
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
    margin-right: 0.1rem;
    margin-top: -0.05rem;
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
  .more{
    font-size: 0.23rem;
    line-height: 0.7rem;
    text-align: center;
    color: #989898;
    border-bottom: solid 0.2rem #FCF9FC;
  }
  .recommend>div:nth-of-type(1){
    width: 27%;
    float: left;
    padding: 0.2rem;
  }
  .recommend>div:nth-of-type(1)>img{
    width: 1.7rem;
    height: 1rem;
  }
  .recommend_two>div:nth-of-type(1)>img{
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
    margin-top: -0.1rem;
  }
  .recommend_two>div:nth-of-type(2){
    font-size: 0.2rem;
    color: #989898;
    line-height: 0.5rem;
  }
  .recommend_two>div:nth-of-type(3){
    font-size: 0.2rem;
  }
  .recommend_three>span:nth-of-type(1),.recommend_three>span:nth-of-type(2){
    color: #FF8429;
    border: solid 1px #FF8429;
    padding: 0.02rem 0.08rem;
  }
  .recommend_three>span:nth-of-type(3){
    color: #666666;
  }
  .head_content{
    height: 2.5rem;
    overflow: hidden;
    background:url("../../static/img/banner_homePage.png") no-repeat 100%;
    background-size: 100%;
    position: relative;
  }
  .head_one{
    font-size: 0.25rem;
    padding: 0 0.3rem;
    margin-top: 0.4rem;
    color: white;
    font-family: '微软雅黑';
  }
  .head_one>img:nth-of-type(1){
    height: 0.27rem;
    vertical-align: middle;
    margin-top:-0.05rem;
  }
  /*.head_one img:nth-of-type(n+2){*/
    /*vertical-align: middle;*/
    /*width: 0.5rem;*/
  /*}*/
  .head_one a:nth-of-type(2){
    float: right;
    margin-right: 0.1rem;
    margin-top:-0.08rem;
  }
  .head_one a:nth-of-type(1){
    float: right;
    margin-right: 0.2rem;
    width: 0.47rem;
  }
  .head>p{
    margin-left: 0.8rem;
    font-size: 0.3rem;
    line-height: 0.8rem;
  }
</style>
