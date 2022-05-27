<template>
  <footer>
      <TopFooterComp />
      <BottomFooterComp />
  </footer>
</template>

<script>
import TopFooterComp from './footer-comp/TopFooterComp.vue';
import BottomFooterComp from './footer-comp/BottomFooterComp.vue';
export default {
    name: "FooterComp",
    components: { TopFooterComp, BottomFooterComp }
}
</script>

<style lang="scss" scoped>

</style>