<template>

  <div class="top-footer">
    <div class="sc-container py-3">
      <div class="row">
          <div class="col-3">asc</div>
          <div class="col-3">sfdasf</div>
          <div class="col-3">saf</div>
          <div class="col-3">fa</div>
      </div>
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