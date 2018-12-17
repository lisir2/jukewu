<template>
  <div>
    <div class="logo">
      <img src="../../static/img/logo.png" alt="">
    </div>
    <div class="Register">
      <div>
        <img src="../../static/img/phone.png" alt="">
        <input type="text" placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="authCode">
        <img src="../../static/img/password.png" alt="">
        <input type="text" placeholder="请输入验证码" maxlength="6">
        <span>获取验证码</span>
      </div>
      <div class="authCode">
        <img src="../../static/img/password.png" alt="">
        <input type="text" placeholder="请输入新的密码" maxlength="6">
      </div>
    </div>
    <div class="btn">
      <router-link to="/Register_one"><p>确定</p></router-link>
    </div>
    <div class="protocol">
      <p>———已阅读并同意《用户服务协议》———</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "forget-the-password",
        mounted() {
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
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
    top: 0;
    bottom: 0;
    left: 0.3rem;
    margin: auto;
  }
  .Register div:nth-of-type(3) p{
    color: #ABABAB;
    margin-left: 0.4rem;
  }
  .Register input{
    outline: none;
    width: 100%;
    height: 0.8rem;
    text-indent: 3em;
    border: transparent solid 1px;
    border-bottom: 1px solid rgb(237,237,237);
  }
  .Register span{
    /*width: 1.1rem;*/
    padding: 3px 8px;
    height: 0.3rem;
    position: absolute;
    right: 0;
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
  .btn a{
    text-decoration: none;
    color: white;
  }
  .btn p{
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
    margin-top: 0.5rem;
  }
  .protocol{
    font-size: 0.2rem;
    color: #ABABAB;
    text-align: center;
    margin-top: 2rem;
  }
</style>
