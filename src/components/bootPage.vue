<template>
    <div class="bootPage">
      <a href="###">
        <img src="../../static/img/bootPage.png" alt="">
      </a>
    </div>
</template>

<script>
    export default {
        name: "boot-page",
        mounted(){
          var time = setTimeout(()=>{
            this.$router.push('/Register_one')
          },2000)
        }
    }
</script>

<style scoped>
  .bootPage img{
    width: 100%;
    height: 100%;
    vertical-align: bottom;
  }
</style>
