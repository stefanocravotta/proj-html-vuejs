<template>
  <div class="jumbotron">
      <vue-glide>
          <vue-glide-slide class="m-0">
            <img src="../../assets/images/gallery_01-690x506.jpg" alt="">
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <img src="../../assets/images/gallery_02-690x506.jpg" alt="">
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <img src="../../assets/images/gallery_03-690x506.jpg" alt="">
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <img src="../../assets/images/gallery_04-690x506.jpg" alt="">
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <img src="../../assets/images/gallery_01-690x506.jpg" alt="">
          </vue-glide-slide>
          <vue-glide-slide class="m-0">
            <img src="../../assets/images/gallery_02-690x506.jpg" alt="">
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

    img{
        max-width: 100%;
    }
}
</style>