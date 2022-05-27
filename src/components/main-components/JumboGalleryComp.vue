<template>
  <div class="jumbotron">
      Jumbotron Gallery
    </div>
</template>

<script>
export default {
    name : "JumboGalleryComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 400px;
    @include debug;
}
</style>