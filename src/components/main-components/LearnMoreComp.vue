<template>
  <div class="learn-more">
      <div class="sc-container">
          Learn more
      </div>
  </div>
</template>

<script>
export default {
    name: "LearnMoreComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.learn-more{
        height: 100px;
        @include debug;
}
</style>