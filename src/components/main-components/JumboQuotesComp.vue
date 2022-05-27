<template>
  <div class="jumbotron">
      Jumbotron Quotes
    </div>
</template>

<script>
export default {
    name : "JumboQuotesComp"
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