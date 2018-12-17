<template>
    <div>
      <div class="title">
        <span></span>
        <p>贷款记录</p>
        <img src="../../static/img/MoneyIntroduce.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/Audit">审核中<span style="color: #FE6F03;">(8)</span></router-link></li>
          <li><router-link to="/HasPassed">已通过</router-link></li>
          <li><router-link to="/NotPass">未通过</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "dai-kuan-record",
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
  *{
    font-family: '微软雅黑';
  }
  .title{
    position: relative;
    margin-top: 0.3rem;
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
  .title img{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.3rem;
    margin: auto;
  }
  .nav ul{
    display: flex;
    justify-content: space-around;
    border-bottom: #FCF9FC solid 0.2rem;
  }
  .nav a{
    text-decoration: none;
    color: black;
  }
  .nav li{
    width: 33%;
    font-size: 0.3rem;
    text-align: center;
    list-style: none;
    margin: 0.3rem 0;
    margin-top: 0.5rem;
  }
  .nav li:nth-of-type(1){
    border-right: 1px solid #F8F8F8;
  }
  .nav li:nth-of-type(2){
    border-right: 1px solid #F8F8F8;
  }

</style>
