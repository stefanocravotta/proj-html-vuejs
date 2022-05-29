<template>
  <div class="container-fluid bottom section py-4">
          <div class="sc-container">
              <div class="row">
                  <div class="col-6">
                      <div class="top d-flex">
                            <div class="choise active">Overview</div>
                            <div class="choise">Our Mission</div>
                      </div>
                      <h5 class="py-4">Our philosophy is learning through play as we offer a stimulating environment for children.</h5>
                      <div class="row">
                          <div class="col-2">
                              <span class="icon d-flex align-items-center justify-content-center">
                                  <img src="../../../assets/images/clock_alt.png" alt="">
                              </span>
                          </div>
                          <div class="col-10">
                                <h6>Full Day Sessions</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi voluptatem, obcaecati </p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-2">
                              <span class="icon d-flex align-items-center justify-content-center">
                                  <img src="../../../assets/images/diagram_alt.png" alt="">
                              </span>
                          </div>
                          <div class="col-10">
                                <h6>Varied Classes</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi voluptatem, obcaecati </p>
                          </div>
                      </div>
                  </div>
                  <div class="slider col-6">
                      <div class="container-fluid">
                          <div class="row">
                                <div class="col-12 pb-3 large-slide">
                                  <img class="central" :src="WelcomeToFableData[counter].image" alt="">
                                  <img class="icon-slider prev" @click="prevThumbs" src="../../../assets/images/slider_previous.png" alt="">
                                  <img class="icon-slider next" @click="nextThumbs" src="../../../assets/images/slider_next.png" alt="">
                                </div>
                                <div 
                                v-for="(slide,index) in WelcomeToFableData"
                                :key="`welcomeSlides${index}`"
                                @click="thisThumb(index)"
                                class="col-4 small-slide py-1">
                                    <img :src="slide.image" alt="">
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
import WelcomeToFableData from '@/assets/data/main-data/WelcomeToFableData'

export default {
    name: "SecondSectionComp",
        data(){
        return{
            WelcomeToFableData,
            counter: 0
        }
    },
    methods: {
        thisThumb(index){
            this.counter = index;
        },
        nextThumbs(){
            this.counter++;
            if(this.counter > this.WelcomeToFableData.length - 1){
                this.counter = 0;
            }
        },
        prevThumbs(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.WelcomeToFableData.length - 1
            }
        },
    },
    mounted(){
        setInterval( () => {
            this.nextThumbs();
        }, 3000)
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/vars";
@import "../../../assets/style/mixins";
@import "../../../assets/style/utils";

.bottom{
        background-color: $bon-jour;
        .choise{
            width: 90px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            margin-right: 20px;
            color: lighten($tuatara, 40);
            border-bottom: 1px solid lighten($tuatara, 60);
            &.active{
            background-color: $blaze-orange;
            color: white;
            border-bottom: none
            }
        }
        h5,h6{
            color: $butterfly-bush;
        }
        p{
            color: lighten($tuatara, 40);

        }
        .icon{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: $blaze-orange;
            img{
                width: 40%;
            }
        }
        .slider {
            .large-slide{
                position: relative;
                .central{
                    width: 100%;
                }
                 .icon-slider{
                display: inline-block;
                width: 30px;
                background-color: $blaze-orange;
                position: absolute;
                cursor: pointer;
                    &.prev{
                        left: 12px;
                        bottom: 50%;
                    }
                    &.next{
                        right: 12px;
                        bottom: 50%;
                    }
                }
            }
            .small-slide{
                &.active{
                    border-bottom: 1px solid $blaze-orange;
                }
                img{
                width: 100%;
                cursor: pointer ;       
                }
            }
        }
}
</style>