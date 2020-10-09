<template>
    <div>
      <div class="title_content">
        <div class="title">
          <span @click="Return"></span>
          <p>我的团队</p>
          <span>
            <img src="../../static/img/date.png" alt="">
          </span>
        </div>
        <div class="earnings">
          <p>总收益</p>
          <p>$67766.69</p>
        </div>
      </div>
      <div class="bgc">
        <div class="tema">
          <ul>
            <li>
              <p>直接发展团队</p>
              <p>15位</p>
              <p>佣金奖励</p>
              <p>￥200.00</p>
            </li>
            <li>
              <p>直接发展团队</p>
              <p>15位</p>
              <p>佣金奖励</p>
              <p>￥200.00</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="MyTeam">
        <p> <img src="../../static/img/MyTeam.png" alt=""></p>
        <span>王小明</span>
        <span>累计收益<span>$1024.00</span></span>
        <span>2018/11/22</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-team",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.tema li').bind('click',function () {
            $('.tema li').each(function (index) {
              $('.tema li').eq(index).css({
                'backgroundColor':'white',
              })
            })
            $(this).css('backgroundColor','rgb(255,242,230)')


          })
        },
        methods:{
          Return:function(){
            history.back()
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
    height: 4rem;
    background: url("../../static/img/teamImg.png") no-repeat;
    background-size: 100%;
    position: relative;
    z-index: 2;
  }
  .title img{
    position: absolute;
    right: 0.5rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .title span:nth-of-type(1){
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
  .tema{
    position: relative;
    z-index: 100;
  }
  .tema ul{
    height: 2.5rem;
    width: 90%;
    margin:-0.8rem auto 0;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 10px 1px #F2F2F2;
    font-size: 0.3rem;
    text-align: center;
  }
  .tema li{
    height: 2.5rem;
    width: 50%;
    font-size: 0.3rem;
    list-style: none;
    padding: 0.3rem 0;
  }
  .tema li p:nth-of-type(1),.tema li p:nth-of-type(3){
    color: #666666;
    font-size: 0.24rem;
  }
  .tema li p:nth-of-type(2){
    line-height: 0.7rem;
    font-size: 0.35rem;
    margin-bottom: 0.1rem;
  }
  .tema li p:nth-of-type(4){
    color: #F23F48;
    font-size: 0.35rem;
    line-height: 0.7rem;
  }
  .tema li:nth-of-type(1){
    background-color: rgb(255,242,230);
  }
  .tema li:nth-of-type(2){
    background-color: white;
  }
  .earnings{
    font-size: 0.3rem;
    text-align: center;
  }
  .earnings>p:nth-of-type(1){
     margin-top: 0.7rem;
     color: #FFFFFF;
   }
  .earnings>p:nth-of-type(2){
    font-size: 0.6rem;
    margin-top: 0.3rem;
    color: #FFFFFF;
  }
  .MyTeam{
    font-size: 0.24rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-around;
    border-top: solid 0.2rem #F4F5FA;
  }
  .MyTeam span{
    height: 1rem;
    line-height: 1rem;
  }
  .MyTeam p{
    width: 0.5rem;
    position: relative;
  }
  .bgc{
    background-color:#F4F5FA;
  }
  .MyTeam span span{
    color:#F23F48;
  }
  .MyTeam img{
    vertical-align: middle;
    position: absolute;
    top: 0;
    bottom: 0;
    margin:auto;
  }
</style>
