<template>
  <div class="view-gallery">
      <div class="sc-container h-100 d-flex justify-content-between align-items-center">
          <h2>See Our K...sa.f?</h2>
          <button>view gallery</button>
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
        @include debug;
}
</style>