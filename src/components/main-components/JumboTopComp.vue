<template>
  <div class="jumbotron d-flex flex-column">
      <div class="sc-container d-flex justify-content-between align-items-end">
            <div class="text">
                <h3>{{JumboTopData[counter].title}}</h3>
            </div>
            <div 
            class="d-flex w-75 justify-content-between align-items-end">
                <div class="toy">
                    <img :src="JumboTopData[counter].toy" alt="slider/3">
                </div>
                <div class="child">
                    <img :src="JumboTopData[counter].child" alt="slider/3">
                </div>
            </div>

      </div>
      <div class="slider-choise d-flex justify-content-center align-items-center">
            <button @click="nextCounter" class="next me-3"><img src="../../assets/images/slider_previous.png" alt=""></button>
            <span @click="counter=0" :class="{active : isActive(0)}" class="rectangular mx-1"></span>
            <span @click="counter=1" :class="{active : isActive(1)}" class="rectangular mx-1"></span>
            <span @click="counter=2" :class="{active : isActive(2)}" class="rectangular mx-1"></span>
            <button @click="prevCounter" class="prev ms-3"><img src="../../assets/images/slider_next.png" alt=""></button>
      </div>
    </div>
</template>

<script>
import JumboTopData from '@/assets/data/main-data/JumboTopData'
export default {
    name : "JumboTopComp",
    data(){
        return{
            JumboTopData,
            counter: 0
        }
    },
    methods: {
        nextCounter(){
            this.counter++
            if(this.counter > this.JumboTopData.length - 1){
                this.counter = 0;
            }
        },
        prevCounter(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.JumboTopData.length - 1
            }
        },
        isActive(number){
            return this.counter === number
        },
    },
    mounted(){
        setInterval( () => {
            this.nextCounter();
        }, 3000)
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 500px;
    background-image: url(../../assets/images/slider_slide3_background.png);
    background-position-y: bottom;
    background-size: contain;
    padding-top: 80px;
    position: relative;
    &:hover button{
        opacity: 1;
    }
    .child{
        position: absolute;
        top: 10%;
        right: 10%;
        z-index: 1;
    }
    .toy{
        z-index: 3;
    }
    .slider-choise{
        z-index: 999;
    }

    .sc-container{
        height: 90%;
        img{
            width: 80%;
        }
        .text{
            align-self: flex-start;
            color: $cameo;
        }
    }
    .rectangular{
            display: inline-block;
            height: 10px;
            width: 35px;
            border: 2px solid $blaze-orange;
            cursor: pointer;
            &.active{
                margin-bottom: 15px;
            }
            &:hover{
            border: 2px solid $east-bay;
            }
        }
    button{
        position: absolute;
        top: 50%;
        padding: 5px;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all .7s;
        &.next{
        left: 15px;
        }
        &.prev{       
        right: 15px;
        }
        &:hover{
            background-color: $blaze-orange;
        }
        img{
            max-width: 30px;
        }
        }
    }
</style>