<template>
  <div class="view-gallery">
      <div class="sc-container h-100 d-flex justify-content-between align-items-center">
          <h2>See Our Kindergarten Photo Gallery!</h2>
          <button>view gallery <i class="fa-solid fa-chevron-right mx-1"></i></button>
      </div>
  </div>
</template>

<script>
export default {
    name: "ViewGalleryComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.view-gallery{
        height: 100px;
        background-image: url(../../assets/images/pattern.png);
        color: $sugar-cane;
        button{
            @include buttonPrimary
        }
}
</style>