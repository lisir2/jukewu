<template>
    <div id="body">
      <div class="title_bgc">
        <div class="title">
          <span @click="Return"></span>
          <p>申请代理</p>
        </div>
      </div>
      <div class="Promotion">
        <ul>
          <li><router-link to="/wangDai">网贷</router-link></li>
          <li><router-link to="/CreditCardOne">信用卡服务</router-link></li>
          <li><router-link to="/CardApplication">信用卡申请</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "promotion-of-record",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.Promotion a').click(function () {
            for (var i = 0;i < $('.Promotion li').length;i++){
              $('.Promotion a').eq(i).css('borderBottom','#FF6800 solid 0px')
            }
            $(this).css('borderBottom','#FF6800 solid 2px')
          })

          if(this.$route.path == '/wangDai'){
            for (var i = 0;i < $('.Promotion li').length;i++){
              $('.Promotion a').eq(i).css('borderBottom','#FF6800 solid 0px')
            }
            $('.Promotion a').eq(0).css('borderBottom','#FF6800 solid 2px')
          }else if(this.$route.path == '/CreditCardOne'){
            for (var i = 0;i < $('.Promotion li').length;i++){
              $('.Promotion a').eq(i).css('borderBottom','#FF6800 solid 0px')
            }
            $('.Promotion a').eq(1).css('borderBottom','#FF6800 solid 2px')
          }else {
            for (var i = 0;i < $('.Promotion li').length;i++){
              $('.Promotion a').eq(i).css('borderBottom','#FF6800 solid 0px')
            }
            $('.Promotion a').eq(2).css('borderBottom','#FF6800 solid 2px')
          }
        },
        methods:{
          Return:function () {
            this.$router.push('/HomePage')
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
  .title span{
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
    left: 0.3rem;
    margin: auto;
  }
  .title p{
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }
  .title_bgc{
    overflow: hidden;
    height: 3rem;
    background: url("../../static/img/banner2.png") no-repeat;
    background-size: 100%;
  }
  .Promotion ul{
    display: flex;
    justify-content: space-around;
    /*border-bottom: solid 2px #E4E4E4;*/
  }
  .Promotion li{
    width: 33%;
    list-style: none;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.8rem;
  }
  .Promotion a{
    text-decoration: none;
    color: black;
    padding: 0.2rem 0;
  }
</style>
