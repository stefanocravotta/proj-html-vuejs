<template>
  <div class="jumbotron">
      Jumbotron Statistics
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