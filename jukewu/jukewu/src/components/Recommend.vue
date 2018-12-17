<template>
    <div>
      <div class="nav_list">
        <ul class="nav">
          <li><router-link to="/wangdaiRecommend">网贷推荐</router-link></li>
          <li><router-link to="/CreditCardService">信用卡服务</router-link></li>
          <li><router-link to="/MoneyIntroduce">理财介绍</router-link></li>
        </ul>
        <div class="shop">
          <router-link to="/IShop">
            <img src="../../static/img/shop.png" alt="">
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "recommend",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.nav li').click(function(){
            for (var i = 0; i < $('.nav li').length; i++) {
              $('.nav li a').eq(i).css({
                'color': 'black',
                'borderBottom':'white solid 1.5px'
              })
            }
            $(this).children('a').css({
              'color':'rgb(255,109,0)',
              'borderBottom':'rgb(255,109,0) solid 1.5px'
            })
          })
          //判断路由
          if(this.$route.path == '/DefaultSort'){
            $('.nav li a').eq(0).css({
              'color':'rgb(255,109,0)',
              'borderBottom':'rgb(255,109,0) solid 1.5px'
            })
          }else if(this.$route.path == '/ServeSort'){
            $('.nav li a').eq(1).css({
              'color':'rgb(255,109,0)',
              'borderBottom':'rgb(255,109,0) solid 1.5px'
            })
          }else if(this.$route.path == '/MoneyIntroduce'){
            $('.nav li a').eq(2).css({
              'color':'rgb(255,109,0)',
              'borderBottom':'rgb(255,109,0) solid 1.5px'
            })
          }

        },
        watch:{
          $route(to,from){
            // console.log(to,from);
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
  .nav_list{
    position: relative;
  }
  .nav{
    width: 65%;
    margin:0.5rem auto 0.3rem;
    list-style: none;
    display: flex;
    font-size: 0.24rem;
  }
  .nav>li{
    width: 33%;
    text-align: center;
    height: 0.5rem;
    /*border: solid rgb(255,109,0) 2px;*/
  }
  .nav>li:nth-of-type(1),.nav>li:nth-of-type(2){
    border-right: 0;
  }
  .nav a{
    text-decoration: none;
    line-height: 0.5rem;
    padding: 0.1rem 0;
    font-family: '微软雅黑';
    color: black;
  }
  .shop{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.3rem;
  }
  .shop img{
    width: 0.6rem;
    vertical-align: top;
    margin-top: -0.1rem;
  }
</style>
