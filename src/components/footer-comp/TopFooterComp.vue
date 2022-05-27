<template>

  <div class="top-footer">
    <div class="sc-container">
      top footer
    </div>
  </div>
</template>

<script>
export default {
    name: "TopFooterComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.top-footer{
        height: 400px;
        @include debug;
}

</style>