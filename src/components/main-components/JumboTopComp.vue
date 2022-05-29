<template>
  <div class="jumbotron d-flex flex-column">
      <div class="sc-container d-flex justify-content-between align-items-end">
            <div class="text">
                <h3>Learning & fun</h3>
            </div>
            <div>
                <img class="center-toy" src="../../assets/images/slider_slide3_img2.png" alt="slider/3">
            </div>
            <div>
                <img src="../../assets/images/slider_slide3_img3.png" alt="slider/3">
            </div>
      </div>
      <div class="slider-choise h-25 d-flex justify-content-center align-items-center">
          <span class="rectangular mx-1"></span>
          <span class="rectangular mx-1"></span>
          <span class="rectangular mx-1"></span>
      </div>
    </div>
</template>

<script>
export default {
    name : "JumboTopComp"
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
            height: 8px;
            width: 30px;
            border: 2px solid $blaze-orange;
            cursor: pointer;
        }
    }
</style>