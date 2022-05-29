<template>
  <header>
      <div class="sc-container h-100 d-flex justify-content-between align-items-center">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <nav class="h-100">
            <ul class="d-flex h-100">
                <li 
                v-for="(item,index) in this.navData"
                :key="`nav${index}`"
                :class="item.isActive ? 'active' : '' "
                 class="p-3 h-100">
                    <a 
                    @click="toggleActive(item)"
                    class="d-flex flex-column align-items-center" 
                    href="#">
                        <img class="mb-2" :src="!item.isActive ? item.icon : item.activeIcon" :alt="item.name">
                        <span :class="item.isActive ? 'sugar-cane' : '' ">{{item.name}}</span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
  </header>
</template>

<script>


export default {
    name: "HeaderComp",

    props:{
        navData: Array
    },
    methods: {
        toggleActive(item){
        item.isActive = !item.isActive
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
    .sugar-cane{
        color: $sugar-cane;
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