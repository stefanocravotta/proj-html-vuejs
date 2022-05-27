<template>
  <div class="view-gallery">
      <div class="sc-container">
          View gallery
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