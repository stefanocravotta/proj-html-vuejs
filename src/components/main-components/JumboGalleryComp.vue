<template>
  <div class="jumbotron">
      <vue-glide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_01-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_02-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_03-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_04-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_01-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_02-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <div class="container-img">
              <div class="overlay align-items-center justify-content-center">
                <img src="../../assets/images/image_overlay.png" alt="">
              </div>
              <img src="../../assets/images/gallery_03-690x506.jpg" alt="">
            </div>
          </vue-glide-slide>
      </vue-glide>
    </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
    name : "JumboGalleryComp",
    components:{
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 320px;
    background-color: $bon-jour;
    border-top: 1px solid darken($bon-jour, 30%);
    overflow-y: hidden ;

    .container-img{
      position: relative;
      cursor: pointer;
      &:hover .overlay{
        opacity: 1;
      }
    }
    img{
        max-width: 100%;
    }
    .overlay{
      @include overlay;
      img{
        width: 30%;
      }
    }
}
</style>