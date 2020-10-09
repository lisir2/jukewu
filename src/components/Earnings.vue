<template>
    <div>
      <div class="title">
        <p><router-link to="/MyCenter"><span></span></router-link>我的收益</p>
        <div class="Earnings">
          <div class="Earnings_content">
            <span>我的总收益</span>
            <span>可提现收益</span>
            <span>提现</span>
          </div>
          <div class="money">
            <span>36.25</span>
            <span>36.25</span>
          </div>
          <div class="hint">
            <p>提示：仅可提现可提现收益</p>
          </div>
        </div>
      </div>
      <div>
        <div class="record">
          <ul>
            <li>提现收益</li>
            <li>提现记录</li>
          </ul>
        </div>
        <div class="earnings_one">
          <table>
            <tr>
              <td>金额</td>
              <td>申请时间</td>
              <td>状态</td>
            </tr>
            <tr>
              <td>0.88%</td>
              <td>2018.11.28</td>
              <td>已提现</td>
            </tr>
          </table>
        </div>
        <div class="record_content">
          提现记录
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "earnings",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.record li').click(function(){
            for(var i = 0;i < $('.record li').length;i++){
              $('.record li').eq(i).css('color','black');
              $(this).css('color','#FD7C0E');
              if($('.record li').eq(0)[0] == $(this)[0]){
                $('.earnings_one').css('display','block')
                $('.record_content').css('display','none')
              }else{
                $('.earnings_one').css('display','none')
                $('.record_content').css('display','block')
              }
            }
          })
        }
    }
</script>

<style scoped>
  .title{
    position: relative;
    padding: 0.5rem 0 0.5rem 0;
    font-family: '微软雅黑';
    background: linear-gradient(top,#FE6F03,#FB9201);
    color: white;
  }
  .title a{
    color: white;
  }
  .title>p span{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    transform-origin:center center;
    transform: rotate(135deg);
    border: solid 1px;
    border-top: 0;
    border-left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.4rem;
    margin: auto;
  }
  .title>p{
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
    position: relative;
  }
  .Earnings{
    font-size: 0.25rem;
    color: #FFFFFF;
  }
  .Earnings>div:nth-of-type(1){
    margin-top: 1rem;
    padding: 0 0.3rem;
  }
  .Earnings_content>span:nth-of-type(1){
    display: inline-block;
    margin-left: 1rem;
  }
  .Earnings_content>span:nth-of-type(2){
    display: inline-block;
    margin-left: 1rem;
  }
  .Earnings_content>span:nth-of-type(3){
    display: inline-block;
    font-size: 0.2rem;
    padding: 2px 6px;
    border: solid 1px white;
    border-radius: 6rem;
    margin-left: 0.3rem;
  }
  .money{
    font-size: 0.4rem;
    padding: 0 0.3rem;
    margin-top: 0.2rem;
  }
  .money>span:nth-of-type(1){
    display: inline-block;
    margin-left: 1.1rem;
  }
  .money>span:nth-of-type(2){
    display: inline-block;
    margin-left: 1.4rem;
  }
  .hint{
    font-size: 0.2rem;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
    opacity: 0.6;
    margin-bottom: 0.2rem;
  }
  .record{
    border-radius: 20px 20px 20px 20px;
    margin-top: -20px;
    position: relative;
    z-index: 1;
    background-color: white;
    border-bottom: 0.2rem solid #FCF9FC;
  }
  .record>ul{
    width: 100%;
    list-style: none;
    text-align: center;
    display: flex;
  }
  .record>ul>li{
    width: 50%;
    font-size: 0.3rem;
    margin: 0.3rem 0;
    box-sizing: border-box;
  }
  .record>ul>li:nth-of-type(1){
    border-right: solid 2px #F8F8F8;
    color:#FD7C0E;
  }
  .record>ul>li:nth-of-type(2){
    border-left: solid 2px #F8F8F8;
  }
  .record_content{
    display: none;
    font-size: 0.3rem;
  }
  .earnings_one{
    font-size: 0.3rem;
  }
  .earnings_one table,.earnings_one tr{
    display: block;
    width: 100%;
  }
  .earnings_one td{

  }
</style>
