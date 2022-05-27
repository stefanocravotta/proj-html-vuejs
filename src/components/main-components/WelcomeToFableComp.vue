<template>
  <div class="welcome">
      <div class="sc-container">
          Welcome to fable
      </div>
  </div>
</template>

<script>
export default {
    name: "WelcomeToFableComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.welcome{
        height: 400px;
        @include debug;
}
</style>