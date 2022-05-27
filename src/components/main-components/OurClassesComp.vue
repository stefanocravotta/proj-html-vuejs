<template>
  <div class="our-classes">
      <div class="sc-container">
          Our Classes
      </div>
  </div>
</template>

<script>
export default {
    name: "OurClassesComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.our-classes{
        height: 400px;
        @include debug;
}
</style>