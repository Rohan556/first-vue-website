<template>
  <div id="caro">
    <center>
      <Carousel :perPage="1">
          <Slide id="slide1" v-scroll-reveal>
                <h1>Welcome to our travels official website</h1>
            <h3 id="swiper" v-scroll-reveal="{delay:1000}">To know more please scroll down</h3>
          </Slide>
      </Carousel>
    </center>
  </div>
</template>

<script>

import {Carousel,Slide} from 'vue-carousel';
export default {
  components:{
    Carousel,
    Slide
  },
}
</script>

<style scoped>

  #caro{
    background-color: #fefdc7;
    opacity:0.9;
    height: 500px;
  }

  #swiper{
    margin-top: 10%;
  }
  h1{
    color: #CC0000;
    font-size: 60px;
  }

  #slide1{
    margin-top: 15%;
    color: wheat;
    font-family: 'Lemonada', cursive;
    font-family: 'Recursive', sans-serif;
  }
</style>
