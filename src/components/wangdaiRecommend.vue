<template>
    <div>
      <div class="RecommendLogo">
        <img src="../../static/img/Recommend.png"/>
      </div>
      <div class="Recommend_list">
        <ul>
          <li><router-link to="/DefaultSort">默认排序</router-link></li>
          <li><router-link to="/TopShelf">最新上架</router-link></li>
          <li><router-link to="/Hottest">最热门</router-link></li>
          <li><router-link to="/Commission">佣金最高</router-link></li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wangdai-recommend",
        mounted(){
          $('.Recommend_list li').click(function () {
            for(var i = 0;i < $('.Recommend_list li').length;i++){
              $('.Recommend_list li a').eq(i).css({
                'color':'black'
              })
            }
            $(this).children('a').css({
              'color':'rgb(255,109,0)',
            })
          })
        }
    }
</script>

<style scoped>
  .RecommendLogo img{
    width: 100%;
    vertical-align: middle;
  }
  .Recommend_list ul{
    display: flex;
    list-style: none;
    font-size: 0.25rem;
    border-bottom: solid 1px #C3C3C3;
  }
  .Recommend_list li:nth-of-type(1)>a{
    color: rgb(255,109,0);
  }
  .Recommend_list li{
    width: 25%;
    text-align: center;
    line-height: 0.8rem;
  }
  .Recommend_list a{
    text-decoration: none;
    color: #333333;
  }
</style>
