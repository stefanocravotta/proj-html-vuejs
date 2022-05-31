<template>
  <div class="jumbotron theme-position-fixed">
      <div class="container-fluid overlay h-100">
          <div class="sc-container d-flex align-items-center justify-content-center h-75">
                <vue-glide class="pt-3">
                    <vue-glide-slide class="sc-col text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>507</span>
                        </div>
                        <h5 class="py-3">Our Pupils</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus </p>
                    </vue-glide-slide>
                    <vue-glide-slide class="sc-col text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>235</span>
                        </div>
                        <h5 class="py-3">Teaching Hours</h5>
                        <p>Quisquam vel tempora quas amet placeat?</p>
                    </vue-glide-slide>
                    <vue-glide-slide class="sc-col text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>100%</span>
                        </div>
                        <h5 class="py-3">Satisfied Parents</h5>
                        <p>Consectetur adipisicing elit. Natus quisquam vel tempora quas amet placeat?</p>
                    </vue-glide-slide>
                    <vue-glide-slide class="sc-col text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>1050</span>
                        </div>
                        <h5 class="py-3">Meals Per Year</h5>
                        <p>Adipisicing elit. Natus quisquam vel tempora quas </p>
                    </vue-glide-slide>
                    <vue-glide-slide class="sc-col text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>$15</span>
                        </div>
                        <h5 class="py-3">Morning Session</h5>
                        <p>Adipisicing elit. Natus quisquam vel tempora quas </p>
                    </vue-glide-slide>
                    <vue-glide-slide class="sc-col text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>$25</span>
                        </div>
                        <h5 class="py-3">Full Day Care</h5>
                        <p>Adipisicing elit. Natus quisquam vel tempora quas </p>
                    </vue-glide-slide>
                    <template slot="control">
                            <span class="rectangular one me-2" data-glide-dir="=0"></span>
                            <span class="rectangular two me-2" data-glide-dir= "=1" ></span>
                            <span class="rectangular three me-2" data-glide-dir= "=2"></span>
                            <span class="rectangular four me-2" data-glide-dir= "=3"></span>
                            <span class="rectangular five me-2" data-glide-dir= "=4"></span>                  
                    </template>
                </vue-glide>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "JumboStatisticsComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 500px;
    background-image: url(../../assets/images/parallax_01.jpg);
    background-position: center;
    color: $sugar-cane;
    position: relative;
    &.theme-position-fixed{
        background-attachment: fixed;
        background-size: cover;
    }
    .overlay{
        background-color: rgba(0,0,0,.2);
    }
    .sc-col{
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        .box-number{
            width: 150px;
            height: 150px;
            border: 1px solid $sugar-cane;
            border-radius: 50%;
            font-size: 2rem;
        }
    }
    .rectangular{
            display: inline-block;
            height: 8px;
            width: 30px;
            border: 2px solid $sugar-cane;
            cursor: pointer;
            position: absolute;
            &.one{
                bottom: -25px;
                left: 40%;
            }
            &.two{
                bottom: -25px;
                left: 45%;
            }
            &.three{
                bottom: -25px;
                left: 50%;
            }
            &.four{
                bottom: -25px;
                left: 55%;
            }
            &.five{
                bottom: -25px;
                left: 60%;
            }
        }   
}
</style>