<template>
  <div id="app">
    <HeaderComp :navData="navData" />
    <MainComp />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
import navData from './assets/data/navData';


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data(){
    return{
      navData
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/vars";
@import "./assets/style/global";
@import "./assets/style/utils";
@import "./assets/style/mixins";
</style>
