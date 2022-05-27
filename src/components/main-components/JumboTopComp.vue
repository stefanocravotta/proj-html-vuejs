<template>
  <div class="jumbotron">
      Jumbotron
    </div>
</template>

<script>
export default {
    name : "JumboTopComp"
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