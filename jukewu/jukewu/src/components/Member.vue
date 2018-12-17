<template>
    <div>
      <div class="title">
        <span @click="Return"></span>
        <p>发展会员</p>
      </div>
      <div class="member">
        <img src="../../static/img/member1.png" alt="">
      </div>
      <p class="Text">
        用户通过申请注册成为代理，通过分享邀请好友成为代理获得奖励，同时被邀请好友邀请好友注册，被邀请好友和您同时获得奖励。
      </p>
      <div class="share">
        <ul>
          <li>海报式推广</li>
          <li>链接式推广</li>
        </ul>
      </div>
      <div class="poster">
        <div class="share_poster">
          <p>分享海报</p>
          <img src="../../static/img/close1.png" alt="">
        </div>
        <ul>
          <li>
            <img src="../../static/img/poster1.png" alt="">
          </li>
          <li>
            <img src="../../static/img/poster2.png" alt="">
          </li>
          <li>
            <img src="../../static/img/poster3.png" alt="">
          </li>
          <li>
            <img src="../../static/img/poster4.png" alt="">
          </li>
        </ul>
      </div>
      <div class="max_poster">
        <img src="../../static/img/return.png" alt="">
      </div>
      <div class="share_link">
        <div class="share_link1">
          <img src="../../static/img/link1.png" alt="">
          <img src="../../static/img/close2.png" alt="">
        </div>
        <div class="share_link2">
          <img src="../../static/img/QRCode1.png" alt="">
          <p>请扫描二维码进行添加</p>
          <div>
            <img src="../../static/img/copy.png" alt="">
            <img src="../../static/img/yaoqing.png" alt="">
            <p>https://new.qq.com/ch/photo/</p>
          </div>
        </div>
      </div>
      <div class="shade"></div>
    </div>
</template>

<script>
    export default {
        name: "member",
        mounted() {
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.shade').css({
            'width':$(window).width(),
            'height':$(window).height(),
          })
          //海报分享
          $('.share li').eq(0).click(function () {
            $('.shade').css('display','block')
            $('.poster').css('display','block')
          })
          $('.share_poster img').bind('click',function () {
            $('.shade').css('display','none')
            $('.poster').css('display','none')
          })
          $('.poster li').click(function (){
            $('.max_poster img').click(function () {
              $('.max_poster').css('display','none')
              $('.shade').css('display','none')
            })
            $('.max_poster').css('display','block')
            if($('.poster li').eq(0)[0] == $(this)[0]){
              var path = $(this).find('img')[0].getAttribute('src')
              $('.max_poster').css({
                'background':'url(../../static/img/poster1_4.png) no-repeat 0 0.5rem',
                'backgroundSize':'100%'
              })
              $('.poster').css('display','none');
            }
            if($('.poster li').eq(1)[0] == $(this)[0]){
              var path = $(this).find('img')[0].getAttribute('src')
              $('.max_poster').css({
                'background':'url(../../static/img/poster1_3.png) no-repeat 0 0.5rem',
                'backgroundSize':'100%'
              })
              $('.poster').css('display','none');
            }
            if($('.poster li').eq(2)[0] == $(this)[0]){
              var path = $(this).find('img')[0].getAttribute('src')
              $('.max_poster').css({
                'background':'url(../../static/img/poster1_2.png) no-repeat 0 0.5rem',
                'backgroundSize':'100%'
              })
              $('.poster').css('display','none');
            }
            if($('.poster li').eq(3)[0] == $(this)[0]){
              var path = $(this).find('img')[0].getAttribute('src')
              $('.max_poster').css({
                'background':'url(../../static/img/poster1_1.png) no-repeat 0 0.5rem',
                'backgroundSize':'100%'
              })
              $('.poster').css('display','none');
            }
          })
          //链接分享
          $('.share li').eq(1).click(function () {
            $('.shade').css('display','block')
            $('.share_link').css('display','block')
          })
          $('.share_link1 img').eq(1).bind('click',function () {
            $('.share_link').css('display','none')
            $('.shade').css('display','none')
          })
        },
        methods:{
          Return:function () {
            history.back();
          }
        }
    }
</script>

<style scoped>
  .title{
    position: relative;
    margin-top: 0.3rem;
    font-family: '微软雅黑';
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
  .member img{
    margin-top: 0.5rem;
    width: 100%;
  }
  .Text{
    padding: 0.5rem;
    font-size: 0.22rem;
    color: #686B79;
    line-height: 0.3rem;
  }
  .share ul{
    width: 80%;
    margin: auto;
    height: 0.6rem;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .share li{
    width: 1.7rem;
    height: 0.6rem;
    text-align: center;
    font-size: 0.25rem;
    line-height: 0.6rem;
    background: linear-gradient(left,#FE6F03,#FB9201);
    color: white;
    border-radius: 5px;
  }
  .poster{
    width: 80%;
    height: 7rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgb(230,230,230);
    padding: 0.2rem 0;
    z-index: 2;
    display: none;
  }
  .max_poster{
    width: 80%;
    height: 9rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 3;
    display: none;
  }
  .share_link{
    width: 75%;
    height: 6.3rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    padding: 0.2rem 0;
    z-index: 2;
    border-radius: 10px;
    display: none;
  }
  .share_link1 img:nth-of-type(1){
    width: 40%;
    display: block;
    margin: auto;
  }
  .share_link1 img:nth-of-type(2){
    width: 0.3rem;
    position: absolute;
    top: 0;
    right: 0.3rem;
  }
  .share_link2 div img{
    width: 40%;
    margin-left:0.16rem;
  }
  .share_link2>img:nth-of-type(1){
    width: 40%;
    display: block;
    margin:0.3rem auto 0;
  }
  .share_link2>p{
    text-align: center;
    font-size: 0.22rem;
    color: #FFA700;
    margin-top: 0.2rem;
  }
  .share_link2 div p{
    font-size: 0.23rem;
    color: black;
    text-align: left;
    padding-left: 0.3rem;
  }
  .share_link div:nth-of-type(1){
    position: relative;
  }
  .poster>img{
    float: right;
    margin-right: 0.3rem;
    height: 0.5rem;
  }
  .poster ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 0.3rem;
  }
  .poster li{
    width: 40%;
    list-style: none;
  }
  .poster li:nth-of-type(1),.poster li:nth-of-type(3){
    padding-left: 0.15rem;
  }
  .poster li:nth-of-type(2),.poster li:nth-of-type(4){
    padding-right: 0.15rem;
  }
  .poster li img{
    width: 100%;
    vertical-align: bottom;
    margin-bottom: 0.2rem;
  }
  .share_poster{
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.5rem;
    position: relative;
  }
  .share_poster>img{
    height: 0.4rem;
    position: absolute;
    right: 0.2rem;
    bottom: 0;
    top: 0;
    margin: auto;
  }
  .shade{
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  .max_poster>img{
    height: 0.4rem;
    float: right;
  }
</style>
