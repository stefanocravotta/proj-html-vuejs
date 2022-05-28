<template>
  <div class="our-classes">

      <OurFirstSectionComp />

      <OurSecondSectionComp />
      
  </div>
</template>

<script>
import OurFirstSectionComp from './ourClasses-comp/OurFirstSectionComp.vue';
import OurSecondSectionComp from './ourClasses-comp/OurSecondSectionComp.vue';
export default {
    name: "OurClassesComp",
    components: { OurFirstSectionComp, OurSecondSectionComp }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.our-classes{
    background-color: $sugar-cane;

}
</style>