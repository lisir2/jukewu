<template>
    <div>
      <div class="title">
        <span></span>
        <p>申请代理</p>
      </div>
      <div class="Ranking">
        <ul>
          <li><router-link to="/MonthRanking">月收益排行</router-link> <span></span></li>
          <li><router-link to="/DayRank">日收益排行</router-link> <span></span></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "apply-for",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          $('.Ranking li').click(function(){
            for(var index in $('.Ranking li')){
              $('.Ranking li').eq(index).children('span').css('display','none')
            }
            $(this).children('span').css('display','block')
          })
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
  .Ranking>ul{
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #E4E4E4;
  }
  .Ranking li{
    width: 50%;
    text-align: center;
    font-size: 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    list-style: none;
    margin-top: 0.5rem;
    position: relative;
  }
  .Ranking li:nth-of-type(2) span{
    display: none;
  }
  .Ranking li span{
    width: 0.6rem;
    height: 2px;
    background-color: #FF6800;
    position: absolute;
    bottom:-2px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .Ranking a{
    text-decoration: none;
    color: black;
  }
</style>
