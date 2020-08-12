<template>
  <footer>
    <center>
      <h1 v-scroll-reveal.reset>Want to Contact Us?</h1>
    </center>
    <center>
      <md-card>
        <md-card-media>
          <div class="viscard" v-scroll-reveal.reset="{delay:250}">
            <img :src="require('../assets/visiting_card.png')" />
          </div>
        </md-card-media>
        <md-card-content>
          <p id="cont">For more information and queries please contact to the above mentioned phone number or visit our office.</p>
        </md-card-content>
      </md-card>
    </center>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer{
    background-color: #CC0000;
    height: 450px;
    margin-top: 100px;
  }

  h1{
    color: white;
    position: relative;
    padding-top: 30px;
  }

  img{
    height: 250px;
    width: 36%;
  }

  .viscard{
    padding-top: 30px;
  }

  .md-card {
    width: fit-content;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  #cont{
    color: white;
    font-size: 25px;
    padding-top: 30px;
  }
</style>
