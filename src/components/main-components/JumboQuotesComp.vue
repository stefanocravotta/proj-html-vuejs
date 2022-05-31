<template>
  <div class="jumbotron theme-position-fixed">
      <div class="sc-container d-flex align-items-center justify-content-center flex-column h-100">
            <div class="d-flex align-items-center justify-content-center flex-column py-3">
                <div class="py-2 icon d-flex align-items-center justify-content-center">
                    <img src="../../assets/images/quote_alt.png" alt="">
                </div>
                <h3 class="py-3 text-center">
                {{JumboQuotesData[counter].text}}
                </h3>
                <span class="line"></span>
                <h5 class="py-3">{{JumboQuotesData[counter].author}}</h5>
            </div>
            <div class="slider-choise h-25 d-flex justify-content-center align-items-center">
                <span @click="counter=0" :class="{active : isActive(0)}" class="rectangular mx-1"></span>
                <span @click="counter=1" :class="{active : isActive(1)}" class="rectangular mx-1"></span>
                <span @click="counter=2" :class="{active : isActive(2)}" class="rectangular mx-1"></span>
                <span @click="counter=3" :class="{active : isActive(3)}" class="rectangular mx-1"></span>
                <span @click="counter=4" :class="{active : isActive(4)}" class="rectangular mx-1"></span>
                <span @click="counter=5" :class="{active : isActive(5)}" class="rectangular mx-1"></span>
            </div>
      </div>
    </div>
</template>

<script>
import JumboQuotesData from '@/assets/data/main-data/JumboQuotesData';

export default {
    name : "JumboQuotesComp",
    data(){
        return{
            JumboQuotesData,
            counter: 0,
        }
    },
    methods: {
        nextCounter(){
            this.counter++
            if(this.counter > this.JumboQuotesData.length - 1){
                this.counter = 0;
            }
        },
        prevCounter(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.JumboQuotesData.length - 1
            }
        },
        isActive(number){
            return this.counter === number
        },
    },
    mounted(){
        setInterval( () => {
            this.nextCounter();
        }, 5000)
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 400px;
    background-image: url(../../assets/images/parallax_02.jpg);
    background-size: cover;
    background-position: center;
    color: $sugar-cane;
    &.theme-position-fixed{
        background-attachment: fixed;
    }
    img{
        width: 100%;
    }
    .icon{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid $sugar-cane;
        img{
            max-width: 50%;
        }
    }
    .line{
        display: inline-block;
        width: 50px;
        border-bottom: 1px solid $sugar-cane;
    }
    .rectangular{
        display: inline-block;
        height: 10px;
        width: 40px;
        border: 2px solid $sugar-cane;
        cursor: pointer;
        &.active{
            margin-bottom: 15px;
        }
        &:hover{
        border: 2px solid $bon-jour-dark;
        }
    }
    
}
</style>