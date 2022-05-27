<template>
  <div class="jumbotron">
      <div class="sc-container d-flex align-items-center justify-content-center flex-column h-100">
            <div class="py-2">icon</div>
            <h3 class="py-2">Content</h3>
            <span class="py-2">linea</span>
            <h5 class="py-2">aurhtor</h5>
      </div>
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