<template>

  <div class="bottom-footer">
    <div class="sc-container">
      bottom footer
    </div>
  </div>
</template>

<script>
export default {
    name: "BottomFooterComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.bottom-footer{
        height: 100px;
        @include debug;
}

</style>