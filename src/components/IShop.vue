<template>
    <div>
      <div class="title_content">
        <div class="title">
          <router-link to="/DefaultSort"><span></span></router-link>
          <p>我的店铺</p>
          <span>
            <router-link to="/AmendShop">
               <img src="../../static/img/changePassword.png" alt="">
            </router-link>
          </span>
        </div>
        <div class="title_one">
          <img src="../../static/img/headPortrait0.png" alt="">
          <p>店铺名称：8020聚客屋店</p>
          <p>店铺宣传语：请填写您的宣传语</p>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/DaiKuan">
            <img src="../../static/img/label.png" alt=""><span>网贷推荐</span>
          </router-link></li>
          <li><router-link to="/CreditCard">
            <img src="../../static/img/bank1.png" alt=""><span>信用卡服务</span>
          </router-link></li>
          <li><router-link to="/LiCai">
            <img src="../../static/img/income.png" alt=""><span>理财介绍</span>
          </router-link></li>
        </ul>
        <div class="border">
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div class="sort">
          <ul>
            <li>默认排序<span bol="true"></span></li>
            <li>最新上架<span bol="true"></span></li>
            <li>最热门<span bol="true"></span></li>
            <li>佣金最高<span bol="true"></span></li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "i-shop",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.nav>ul>li').click(function(){
            for(var index in $('.border li')){
              $('.border li').eq(index).css('border','transparent solid 1px')
              if($(this)[0] == $('.nav>ul>li').eq(index)[0]){
                $('.border li').eq(index).css('border','#FE6F03  solid 1px')
              }
            }
          })
          $('.sort li').click(function(){
            for(var i = 0;i < $('.sort li').length;i++){
              $('.sort li').eq(i).css('color','black')
            }
            $(this).css('color','#FE6F03')

            if($(this).children('span')[0].getAttribute('bol') == 'true'){
              $(this).children('span')[0].setAttribute('bol','false')
              $(this).children('span').css('transform','rotate(180deg)');
            }else{
              $(this).children('span')[0].setAttribute('bol','true');
              $(this).children('span').css('transform','rotate(0deg)');
            }
          })

          //判断路由
          if(this.$route.path == '/DaiKuan'){
            $('.border li').eq(0).css('border','#FE6F03 solid 1px')
          }else if(this.$route.path == '/CreditCard'){
            $('.border li').eq(1).css('border','#FE6F03 solid 1px')
          }else{
            $('.border li').eq(2).css('border','#FE6F03 solid 1px')
          }
        }
    }
</script>

<style scoped>
  .title{
    position: relative;
    margin-top: 0.3rem;
    font-family: '微软雅黑';
    color: white;
  }
  .title_content{
    overflow: hidden;
    height: 3.8rem;
    background: url("../../static/img/bgc1.png") no-repeat;
    background-size: 105%;
    position: relative;
    z-index: 2;
  }
  .title img{
    width: 0.3rem;
    position: absolute;
    right: 0.5rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .title>a{
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
    left: 0.4rem;
    margin: auto;
    color: white;
  }
  .title p{
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }
  .border{
    display: flex;
    justify-content:space-around ;
  }
  .border li{
    width: 15%;
    border: solid 1px transparent;
    list-style: none;
    height: 0;
  }
  .title_one img{
    width: 1.2rem;
    display: block;
    margin:0.2rem auto 0;
  }
  .title_one p{
    font-size: 0.25rem;
    text-align: center;
    color: #FFFFFF;
  }
  .title_one p:nth-of-type(1){
    margin-top: 0.3rem;
  }
  .title_one p:nth-of-type(2){
    font-size: 0.15rem;
    line-height: 0.4rem;
    color: #F2F2F2;
  }
  .nav>ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .nav>ul>li{
    width: 33%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.28rem;
    list-style: none;
    margin-top: 0.3rem;
    position: relative;
  }
  .nav img{
    width: 0.3rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .nav li:nth-of-type(1) img{
    left: 0.14rem;
  }
  .nav li:nth-of-type(3) img{
    left: 0.14rem;
  }
  .nav a{
    text-decoration: none;
    color: black;
  }
  .sort{
    margin-top: -0.3rem;
    position: relative;
    z-index: 20;
  }
  .sort>ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
  }
  .sort>ul>li{
    width: 25%;
    list-style: none;
    font-size: 0.25rem;
    text-align: center;
  }
  .sort span:nth-of-type(1){
    color: #FE6F03;
  }
  .sort{
    border-bottom: 0.2rem solid #FCF9FC;
  }
</style>
