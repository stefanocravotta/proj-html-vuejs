<template>
  <header>
      <div class="sc-container d-flex justify-content-between">
        <div class="logo">Logo</div>
        <nav>
            <ul class="d-flex">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
            </ul>
        </nav>
      </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComp"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";
@import "../assets/style/mixins";
@import "../assets/style/utils";

header{
    height: 80px;
    padding: 15px 0;
    @include debug;
    
}
</style>