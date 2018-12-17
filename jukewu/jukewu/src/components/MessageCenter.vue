<template>
    <div>
      <div class="title">
        <span @click="Return"></span>
        <p>通知中心</p>
      </div>
      <div class="m_content">
        <div class="message">
          <div>
            <img src="../../static/img/message2.png" alt="">
            <span>系统通知</span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="content">
          <p>这对情侣设计师把金属和玻璃玩出了温柔的诗意</p>
          <p>6月28日</p>
        </div>
      </div>
      <div class="m_content">
        <div class="message">
          <div>
            <img src="../../static/img/message3.png" alt="">
            <span>系统通知</span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="content">
          <p>这对情侣设计师把金属和玻璃玩出了温柔的诗意</p>
          <p>6月28日</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "message-center",
        mounted() {
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
        },
        methods:{
          Return:function(){
            history.back()
          }
        }
    }
</script>

<style scoped>
  .title{
    position: relative;
    padding: 0.3rem 0;
    font-family: '微软雅黑';
    background-color: white;
    border-bottom: #DEDEDE solid 1px;
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
  .message{
    padding: 0.2rem 0.3rem 0.2rem 0;
    border-bottom: #DEDEDE solid 1px;
    font-size: 0.3rem;
    margin-left: 0.8rem;
  }
  .message div{
    position: relative;
  }
  .message div img{
    width: 0.4rem;
    vertical-align: middle;
    margin-left: -0.5rem;
  }
  .message div span{
    font-size: 0.25rem;
    color: #333333;
  }
  .message div span:nth-last-of-type(1){
    display: block;
    width: 0.08rem;
    height: 0.08rem;
    background-color: #FC4657;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.2rem;
    margin: auto;
  }
  .message div span:nth-last-of-type(2){
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    border:solid 1px #CCCCCC;
    transform: rotate(45deg);
    border-bottom: 0;
    border-left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .content{
    font-size: 0.23rem;
    padding: 0.15rem 0.4rem;
    color: #989898;
    line-height: 0.35rem;
    border-bottom: solid 1px #EAEAEA;
    margin-left: 0.3rem;
  }
  .m_content:nth-last-of-type(1)>.content{
    border-bottom: solid 0.2rem #f2f2f2;
    padding-left:0.7rem;
    margin-left: 0;
  }
</style>
