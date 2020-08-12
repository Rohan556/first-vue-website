<template>
  <div>
    <div id="upper-part">
      <img class="heading" :src="icsr" alt="Icon" />
      <h1 class="heading" id="heading1"><b>GR NILA TOURS AND TRAVELS</b></h1>
    </div>
  </div>
</template>

<script>
import AboutUs from './AboutUs'
import icon from '../assets/icon.png'
export default {
  data:function(){
    return {
      icsr: icon
    }
  },
  components:{
    AboutUs
  }
}
</script>

<style scoped>
  #upper-part{
    height: 86px;
    background-color: #33BBFF
  }
  #header{
    height: 1000px;
    width: 100%;
    background-image: url('../assets/img1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .heading{
    float: left;
  }

  #heading1{
    color: #ffffff;
    margin-left: 2%;
    margin-top: 1.25%;
  }
</style>
