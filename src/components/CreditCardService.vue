<template>
    <div>
      <div class="bank">
        <p>热门银行</p>
        <div class="bank_list">
          <ul>
            <router-link to="/BankCardDetails">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
            <router-link to="">
              <li>
                <img src="../../static/img/MoneyIntroduce.png" alt="">
                <p>交通银行</p>
              </li>
            </router-link>
          </ul>
        </div>
        <div class="more">
          <span>展开更多</span><span></span>
        </div>
      </div>
      <div class="sort">
          <ul>
            <li><router-link to="/ServeSort">默认排序</router-link></li>
            <li><router-link to="/ServePutaway">最新上架</router-link></li>
            <li><router-link to="/ServeHot">最热门</router-link></li>
            <li><router-link to="/ServeRate">费率最低</router-link></li>
          </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "credit-card-service",
        data(){
          return{
            bol:true,
          }
        },
        mounted(){
          $('.more').click(function(){
            $('.bank_list').css({
              'transition':'all 0.5s linear',
            })
            this.bol = !this.bol;
            if(this.bol){
              $('.bank_list').css({
                'height':'4.5rem',
              })
              $(this).children('span').eq(1).css({
                'transform':'rotate(225deg)',
                'verticalAlign':'middle',
              })
            }else{
              $('.bank_list').css({
                'height':'3rem',
              })
              $(this).children('span').eq(1).css({
                'transform':'rotate(45deg)',
                'verticalAlign':'top',
              })
            }
          })

          $('.sort li').click(function () {
            for(var i = 0;i < $('.sort li').length;i++){
              $('.sort li a').eq(i).css('color','black')
            }
            $(this).children('a').css('color','#FF6D00')
          })
        }
    }
</script>

<style scoped>
  .bank{
    font-size: 0.3rem;
    border-top: solid rgb(252,249,252) 0.2rem;
  }
  .bank>p{
    padding: 0 0.3rem;
    margin-top: 0.3rem;
  }
  .bank_list{
    height: 3rem;
    background-color: white;
    margin-top: 0.2rem;
    border-top: solid 1px rgb(226,226,226);
    overflow: hidden;
  }
  .more{
    text-align: center;
    color: #989898;
    font-size: 0.23rem;
    padding: 0.3rem 0;
    border-bottom: 0.2rem solid #FCF9FC;
  }
  .more>span:nth-of-type(2){
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    transform: rotate(45deg);
    border: solid 1px;
    border-top: 0;
    border-left: 0;
    margin-left: 0.1rem;
    vertical-align: top;
    margin-top: 0.02rem;
  }
  .bank_list ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
  }
  .bank_list a{
    width: 25%;
    margin: 0.2rem 0 0 0;
    text-decoration: none;
    color: black;
  }
  .bank_list img{
    width: 0.8rem;
    height: 0.8rem;
    display: block;
    margin: auto;
  }
  .bank_list p{
    font-size: 0.2rem;
    text-align: center;
    margin-top: 0.2rem;
  }
  .sort{
    font-size: 0.25rem;
  }
  .sort>ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: 0.2rem;
  }
  .sort>ul>li{
    width: 25%;
    text-align: center;
    line-height: 0.6rem;
    border-bottom: 1px solid #C3C3C3;
  }
  .sort a{
    text-decoration: none;
    color: black;
  }
</style>
