<template>
  <div class="jumbotron">
      <div class="sc-container d-flex align-items-center justify-content-center h-100">
            <div class="row w-100">
              <div class="col-3">O</div>
              <div class="col-3">O</div>
              <div class="col-3">O</div>
              <div class="col-3">O</div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "JumboStatisticsComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 400px;
    @include debug;
}
</style>