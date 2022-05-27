<template>

  <div class="bottom-footer py-3">
    <div class="sc-container d-flex flex-column align-items-center">
      <div class="social d-flex">
        <div class="box-social">scs</div>
        <div class="box-social">scs</div>
        <div class="box-social">scs</div>
        <div class="box-social">scs</div>
      </div>
      <div class="copyright">copy</div>
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
        @include debug;
}

</style>