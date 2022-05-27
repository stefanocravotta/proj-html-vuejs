<template>
  <div class="learn-more">
      <div class="sc-container h-100 d-flex justify-content-between align-items-center">
          <h3>How to Enroll Your Child to a Class?</h3>
          <button>Learn more <span class="ms-1 "><i class="fa-solid fa-chevron-right"></i></span></button>
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
        background-image: url(../../assets/images/pattern.png);
        color: $sugar-cane;
        button{
            @include buttonPrimary
        }
}
</style>