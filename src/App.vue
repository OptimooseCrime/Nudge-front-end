<template>
  <div id="app">
    <b-button-group class='links'>

          </b-button-group> <br>
    <Header/>
    <div class='routers'> 
      <router-link to='TheDash' class='find'  tag='button'>Dashboard</router-link>
      <router-link to='Rules' class='find' tag='button'>Rules</router-link>
      <router-link to='Wallet' class='find' tag='button'>Wallet</router-link>
    </div>
    <transition name="fade" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
    <router-view/>
    <b-col class="b-container">
    </b-col>
   
    </transition>

   
    <Footer/>
    </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import Rules from './components/Rules'
import TheDash from './components/TheDash'
import Wallet from './components/Wallet'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




export default {
  name: 'App',
  components:{
    Header,
    TheDash,
    Rules,
    Wallet,
    Footer,
  },
  data(){
    return{

    }
  },
  methods:{
    
  },
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  html{
    width: inherit;
    font-family: 'Raleway', sans-serif;
  }
  #app{
    font-family: 'Raleway', sans-serif;
    width: inherit;
    text-align: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-size: cover;
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    min-width: 100%;
    min-height: 100%;
  }

  #Footer{
    background-color: #6f42c1;
  }

 /* .page{
   position:fixed;
   width:inherit;
   
 } */

 .router-anim-enter-active{
   animation: coming 0s;
   /* animation-delay: .5s; */
   opacity: 0;
 }

 .router-anim-leave-active{
   animation: going 0s;
 }

 @keyframes going{
   from{
     transform: translateX(0);
   }
   to { 
    transform: translateX(-50px);
    opacity: 0;
   }
 }

  @keyframes coming{
   from{
     transform: translateX(-50px);
     opacity: 0;
   }
   to { 
    transform: translateX(0);
    opacity: 1;
   }
 }
.routers{
  padding: 15px;
}
body {
  font-family: 'Raleway', sans-serif;
}
.textstuff{
  font-family: 'Raleway', sans-serif;
  padding: 15px;
  text-shadow: 0 1px black;

}
.find{
  border-radius: 10px;
  background-color: #6f42c1;
  color: white;
  font-family: 'Raleway', sans-serif;
}
.links{
  border-radius: 10px;
  background-color: #6f42c1;
  color: white;
  font-family: 'Raleway', sans-serif;
}


</style>
