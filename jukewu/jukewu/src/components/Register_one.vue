<template>
  <div>
    <div class="logo">
      <img src="../../static/img/logo.png" alt="">
    </div>
    <div class="Register">
      <div>
        <img src="../../static/img/phone.png" alt=""><input type="text" placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="authCode">
        <img src="../../static/img/password.png" alt="">
        <input type="password" placeholder="请输入密码" maxlength="15">
        <span><img src="../../static/img/hide.png" alt=""></span>
      </div>
    </div>
    <div class="btn">
      <p><router-link to="/Nav">登录</router-link></p>
    </div>
    <div class="forgetThePassword">
      <p>
        <router-link to="/Register">账号注册></router-link>
        <router-link to="/ForgetThePassword">忘记密码></router-link>
      </p>
    </div>
    <div class="protocol">
      <p>———已阅读并同意《用户服务协议》———</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register_one",
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

          $('.authCode img').eq(1).bind('click',function () {
              this.bol = !this.bol;
              if(!this.bol){
                $('.authCode input').attr('type','password')
              }else {
                $('.authCode input').attr('type','text')
              }
          })
        }
    }
</script>

<style scoped>
  .logo>img{
    display: block;
    margin:1.5rem auto 1rem;
  }
  .Register{
    font-size: 0.2rem;
    margin-top: 0.5rem;
  }
  .Register div{
    width: 80%;
    height: 0.8rem;
    margin:0.2rem auto;
    position: relative;
  }
  .Register img{
    position: absolute;
    left: 0.2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .Register input{
    outline: none;
    font-size: 0.25rem;
    width: 100%;
    height: 0.8rem;
    text-indent: 0.6rem;
    border: transparent solid 1px;
    border-bottom: 1px solid rgb(237,237,237);
  }
  .Register span{
    height: 0.3rem;
    position: absolute;
    right: 0.8rem;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 0.3rem;
    background: linear-gradient(left,#FE6F03,#FB9201);
    font-size: 0.1rem;
    color: white;
    border-radius: 2px;
    text-align: center;
  }
  .btn{
    margin-top: 0.8rem;
  }
  .btn a{
    text-decoration: none;
    color: white;
  }
  .btn>p{
    width: 80%;
    height: 0.6rem;
    line-height: 0.6rem;
    color: white;
    display: block;
    margin: auto;
    font-size: 0.3rem;
    text-align: center;
    border-radius: 0.6rem;
    background: linear-gradient(left,#FE6F03,#FB9201);
  }
  .protocol{
    font-size: 0.2rem;
    color: #ABABAB;
    text-align: center;
    margin-top: 2rem;
  }
  .forgetThePassword{
    font-size: 0.25rem;
    position: relative;
    margin-top: 0.2rem;
  }
  .forgetThePassword p{
    text-align: center;
  }
  .forgetThePassword a{
    text-decoration: none;
    color: #FE6F03;
  }
</style>
