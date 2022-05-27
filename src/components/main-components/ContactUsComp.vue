<template>
  <div class="contact-us">
      <div class="sc-container">
          Contact us
      </div>
  </div>
</template>

<script>
export default {
    name: "ContactUsComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.contact-us{
        height: 400px;
        @include debug;
}
</style>