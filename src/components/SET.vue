<template>
    <div class="body">
      <div class="title">
        <span @click="Return"></span>
        <p>设置</p>
      </div>
      <div class="message_content">
        <div class="message">
          <span>消息通知</span>
          <span><span></span></span>
        </div>
        <div class="message">
          <span>清除缓存</span>
          <span style="background-color: white;width: 1rem;">17.54M</span>
        </div>
      </div>
      <div class="message_content" style="border-top: 0;">
        <div class="message">
          <span>当前版本</span>
          <span style="background-color: white">1.01</span>
        </div>
        <div class="message" style="padding-right:0.2rem;">
          <span>关于我们</span>
          <span class="triangle"></span>
        </div>
      </div>
      <div class="btn">退出登录</div>
    </div>
</template>

<script>
    export default {
        name: "s-e-t",
        data(){
          return{
            bol:true,
          }
        },
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.message span').eq(1).click(function () {
            this.bol = !this.bol;
            if(!this.bol){
              $(this).children('span').css({
                'float':'right',
              })
            }else{
              $(this).children('span').css({
                'float':'left',
              })
            }

          })
        },
        methods:{
          Return:function(){
            history.back();
          }
        }
    }
</script>

<style scoped>
  .body{
    width: 100%;
    height: 11.3rem;
    background-color: rgb(252,249,252);
  }
  .title{
    position: relative;
    padding: 0.3rem 0;
    font-family: '微软雅黑';
    border-bottom: #E0E0E0 solid 1px;
    background-color: white;
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
  .message_content{
    border-top: solid #F5F5F5 0.2rem;
    border-bottom: solid #F5F5F5 0.2rem;
  }
  .message{
    font-size: 0.3rem;
    padding: 0.3rem 0 0.3rem 0.3rem;
    background-color: white;
  }
  .message>span:nth-of-type(2){
    display: inline-block;
    width: 0.8rem;
    height: 0.4rem;
    background-color: #FF9000;
    border-radius: 0.2rem;
    vertical-align: middle;
    float: right;
    margin-right: 0.3rem;
    text-align: right;
  }
  .message>span:nth-of-type(2)>span{
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    background-color: white;
    border-radius: 50%;
  }
  .message_content>div{
    border-bottom: solid 1px #F5F5F5;
  }
  .triangle{
    border-radius: 0!important;
    width: 0.2rem!important;
    height: 0.2rem!important;
    border: solid 1px!important;
    transform: rotate(-135deg);
    background-color: white!important;
    border-top: 0!important;
    border-right: 0!important;
    margin-bottom: 0.3rem;
  }
  .btn{
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    background-color: white;
  }
</style>
