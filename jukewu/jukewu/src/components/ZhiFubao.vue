<template>
    <div>
      <div class="title">
        <span></span>
        <p>支付宝认证</p>
      </div>
      <div class="hint">
        <p>必须是本人名下支付宝</p>
      </div>
      <div class="userName">
        <span>姓&nbsp&nbsp&nbsp名：</span><input type="text" placeholder="请输入真实姓名">
      </div>
      <div class="accountNumber">
        <span>支付宝账号：</span><input type="text" placeholder="请输入身份证号">
      </div>
      <div class="btn">
        <p>确定</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "zhi-fubao",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
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
  .hint{
    font-size: 0.22rem;
  }
  .hint p{
    line-height: 0.7rem;
    background-color: #FCF9FC;
    padding-left: 0.4rem;
    margin-top: 0.3rem;
  }
  .userName,.accountNumber{
    padding-left: 0.4rem;
    margin-top: 0.2rem;
    font-size: 0.23rem;
    height: 0.6rem;
    color: #FE6F03;
    border-bottom: solid 1px #F0F0F0;
    line-height: 0.6rem;
  }
  .accountNumber>input,.userName>input{
    height: 0.6rem;
    border: 0;
    font-size: 0.23rem;
    outline: none;
  }
  .btn{
    margin-top: 0.5rem;
  }
  .btn>p{
    width: 90%;
    height: 0.7rem;
    background-color: #FE6F03;
    text-align: center;
    line-height: 0.7rem;
    color: white;
    display: block;
    margin: auto;
    font-size:0.3rem;
  }
</style>
