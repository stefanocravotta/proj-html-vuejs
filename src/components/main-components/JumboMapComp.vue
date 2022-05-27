<template>
  <div class="jumbotron">
      Jumbotron Map
    </div>
</template>

<script>
export default {
    name : "JumboMapComp"
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