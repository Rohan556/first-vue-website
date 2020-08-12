<template>
   <div>
    <md-card id="info1" v-scroll-reveal.reset>
      <md-card-header>
        <div class="md-title"><h2>Package Tours</h2></div>
      </md-card-header>
      <hr />
      <md-card-content>
        <p>Contact for package tours to Tirupati, Dharmastala, Shirdi, Mysore, Ooty, Kodaikonal, Thekady, Munnar, Goa, Hyderabad, Mudurai, Rameshwaram, Kanyakumari, & Group Trips, Customized Trips, School Group Trips</p>
      </md-card-content>
    </md-card>
    <md-card id="info2" v-scroll-reveal.reset="{delay:1000}">
      <md-card-header>
        <div class="md-title"><h2>Contact for booking</h2></div>
      </md-card-header>
      <hr />
      <md-card-content>
        <img :src="require('../assets/book1.png')" />
        <img :src="require('../assets/book2.png')" />
        <img :src="require('../assets/book3.jpg')" />
      </md-card-content>
      <hr />
       <md-card-header>
        <div class="md-title"><h2>Buses, Train and Flights</h2></div>
      </md-card-header>
      <hr />
      <md-card-content class="ico">
        <img id="img1" :src="require('../assets/bus.png')" />
        <img id="img2" :src="require('../assets/train.jpg')" />
        <img id="img3" :src="require('../assets/flight.jpg')" />
      </md-card-content>
    </md-card>
   </div>
</template>

<style scoped>
  .md-card {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }


    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .md-button-group {
      display: flex;
    }
      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }

      p{
        align-items: justify;
      }

      #info1{
        padding: 1% 4% 1% 4%;
        margin: 5% 0 0 5%;
      }

      #info1:hover{
        transform: scale(1.1);
      }

      #info2{
        width: 61%;
        padding: 1% 4% 1% 4%;
        margin: 5% 0 0 5%;
      }

      #info2:hover{
        transform: scale(1.1);
      }

      img{
        margin-left: 2.4%;
        height: 200px;
        width: 200px;
      }

      #img1{
        height: 200px;
        width:250px;
      }

      #img2{
        margin-left: 3%;
        height: 200px;
        width:250px;
      }

      #img2{

        height: 200px;
        width:200px;
      }
</style>
