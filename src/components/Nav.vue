<template>
    <div>
      <router-view></router-view>
        <div class="page_nav">
          <ul>
            <li>
              <router-link to="/HomePage">
                <img src="../../static/img/homepage1.png" alt=""><br>
                <span>首页</span>
              </router-link>
            </li>
            <li><router-link to="/Recommend">
              <img src="../../static/img/wallet.png" alt=""><br>
              <span>推荐</span>
            </router-link></li>
            <li><router-link to="/MyCenter">
              <img src="../../static/img/MyCenter.png" alt=""><br>
              <span>个人中心</span>
            </router-link></li>
          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.page_nav li a').bind('click',function(){
            for (var i = 0;i < $('.page_nav li').length;i++){
              $('.page_nav li').eq(0).find('img').attr('src','../../static/img/homepage1.png');
              $('.page_nav li').eq(1).find('img').attr('src','../../static/img/wallet.png');
              $('.page_nav li').eq(2).find('img').attr('src','../../static/img/MyCenter.png');
              if($(this)[0] == $('.page_nav li a').eq(0)[0]){
                $(this).find('img').attr('src','../../static/img/homepage.png')
              }else if($(this)[0] == $('.page_nav li a').eq(1)[0]){
                $(this).find('img').attr('src','../../static/img/wallet1.png')
              }else{
                $(this).find('img').attr('src','../../static/img/MyCenter1.png')
              }
            }
          })
          //判断路由
          if(this.$route.path == '/HomePage'){
            $('.page_nav li').eq(0).find('img').attr('src','../../static/img/homepage.png');
          }else if(this.$route.path == '/DefaultSort'){
            $('.page_nav li').eq(1).find('img').attr('src','../../static/img/wallet1.png');
          }else{
            $('.page_nav li').eq(2).find('img').attr('src','../../static/img/MyCenter1.png');
          }
        }
    }
</script>

<style scoped>
  .page_nav{
    height: 0.7rem;
    width: 100%;
    font-size: 0.3rem;
    padding: 0.12rem 0;
    border-top: solid 1px #F2F2F2;
    position: fixed;
    bottom: 0;
    background-color: white;
  }
  .page_nav>ul{
    font-size: 0.3rem;
    width: 100%;
    display: flex;
    list-style: none;
  }
  .page_nav>ul>li{
    font-size: 0.2rem;
    width: 33%;
    text-align: center;
  }
  .page_nav img{
    width: 0.4rem;
    height: 0.4rem;
  }
  .page_nav>ul>li>a{
    text-decoration: none;
    color: #989898;
  }
</style>
