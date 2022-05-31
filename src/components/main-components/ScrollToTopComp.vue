<template>
  <div @click="scrollToTop" class="bottom-fixed">
      <img  src="../../assets/images/go_to_top.png" alt="">
  </div>
</template>

<script>
export default {
    name: "ScrollToTopComp",
    methods:{
        scrollToTop(){
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.bottom-fixed{
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: $east-bay-opacity;
    cursor: pointer;
    &:hover{
    background-color: $east-bay;

    }
}
</style>