<template>
  <footer>
      <TopFooterComp :aboutUs="aboutUs" :archives="archives" :ourFeatures="ourFeatures" :recentPost="recentPost" />
      <BottomFooterComp />
  </footer>
</template>

<script>
import TopFooterComp from './footer-comp/TopFooterComp.vue';
import BottomFooterComp from './footer-comp/BottomFooterComp.vue';
import {aboutUs,archives,ourFeatures,recentPost} from "../assets/data/footer-data/topFooterData"
export default {
    name: "FooterComp",
    components: { TopFooterComp, BottomFooterComp },
    data(){
      return{
      aboutUs,
      archives,
      ourFeatures,
      recentPost
      }
    }
}
</script>

<style lang="scss" scoped>

</style>