<template>
  <div class="whats-new">
      <div class="sc-container">
          What's new
      </div>
  </div>
</template>

<script>
export default {
    name: "WhatsNewComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.whats-new{
        height: 400px;
        @include debug;
}
</style>