<template>
    <div>
      <div class="audit">
        <div>
          <img src="../../static/img/MoneyIntroduce.png" alt="">
          <span>盈盈有钱</span>
          <span>订单编号：131313131313</span>
        </div>
        <div class="user_message">
          <div>
            <ul style="color: #989898;">
              <li>姓名</li>
              <li>手机号</li>
              <li>订单日期</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>徐小姐</li>
              <li>18888888888</li>
              <li>2018/11/22</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "audit",
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
  .audit>div:nth-of-type(1){
    height: 1rem;
    padding: 0 0.3rem;
    border-bottom: #F2F2F2 solid 1px;
  }
  .audit>div:nth-of-type(1)>img{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: top;
    line-height: 1rem;
    margin-top: 0.35rem;
  }
  .audit>div:nth-of-type(1)>span{
    display: inline-block;
    font-size: 0.3rem;
    vertical-align: top;
    line-height: 1rem;
  }
  .audit>div:nth-of-type(1)>span:nth-of-type(1){
    margin-left: -0.2rem;
    font-family: '微软雅黑';
  }
  .audit>div:nth-of-type(1)>span:nth-of-type(2){
    font-size: 0.23rem;
    float: right;
    color: #989898;
  }
  .user_message{
    padding: 0.2rem 0;
    border-bottom: solid 0.2rem #FCF9FC;
  }
  .user_message ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .user_message li{
    width: 33%;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.5rem;
    list-style: none;
  }
</style>
