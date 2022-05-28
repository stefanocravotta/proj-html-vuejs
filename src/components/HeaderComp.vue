<template>
  <header>
      <div class="sc-container h-100 d-flex justify-content-between align-items-center">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <nav class="h-100">
            <ul class="d-flex h-100">
                <li 
                v-for="(item,index) in navData"
                :key="`nav${index}`"
                 class="p-3 h-100">
                    <a class="d-flex flex-column align-items-center" href="#">
                        <img class="mb-2" :src="item.icon" alt="">
                        <span>{{item.name}}</span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
  </header>
</template>

<script>
import navData from '@/assets/data/navData';

export default {
    name: "HeaderComp",

    data(){
        return{
            navData
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";
@import "../assets/style/mixins";
@import "../assets/style/utils";

header{
    height: 90px;
    .logo{
        img{
            max-width: 110px;
        }
    }
    .active{
        background-color: $blaze-orange;
    }
    a {
        span{
            color: $east-bay;
        }
        img{
            width: 25px;
        }
        
    }
    
}
</style>