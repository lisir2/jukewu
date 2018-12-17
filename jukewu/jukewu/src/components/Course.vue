<template>
    <div>
      <div class="bgc">
        <div class="title">
          <span @click="Return"></span>
          <p> </p>
        </div>
        <div class="bgc1">
          <div class="share">
            <ul>
              <li>海报式推广</li>
              <li>链接式推广</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "course",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
        },
        methods:{
          Return:function () {
            history.back()
          }
        }
    }
</script>

<style scoped>
  .bgc{
    background: url("../../static/img/bgc2.png") no-repeat;
    background-size: 100%;
    height: 38.6rem;
    overflow: hidden;
    position: relative;
  }
  .title{
    position: relative;
    margin-top: 0.6rem;
    font-family: '微软雅黑';
    color: white;
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
    left: 0.4rem;
    margin: auto;
  }
  .title p{
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }
  .bgc1{
    width: 80%;
    height: 2.5rem;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    margin: auto;
  }
  .share ul{
    width: 100%;
    margin:0.8rem auto 0.5rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .share li{
    width: 1.7rem;
    height: 0.6rem;
    text-align: center;
    font-size: 0.25rem;
    line-height: 0.6rem;
    background: linear-gradient(left,#FE6F03,#FB9201);
    color: white;
    border-radius: 5px;
  }
</style>
