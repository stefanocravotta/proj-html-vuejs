<template>
  <div class="learn-more">
      <div class="sc-container h-100 d-flex justify-content-between align-items-center">
          <h2>How to Enroll Your Child to a Class?</h2>
          <button>LEARN MORE</button>
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