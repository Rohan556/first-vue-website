<template>
<div id="app">
  <Header />
  <Slider />
  <About />
  <Footer />
</div>
</template>
<script>
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Slider from './componenets/Slider'
import About from './componenets/AboutUs'
export default {
  data(){
    return{

    }
  },
  components:{
    Header,
    Footer,
    Slider,
    About
  }
}
</script>
