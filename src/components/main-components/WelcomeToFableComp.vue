<template>
  <div class="welcome">

    <FirstSectionComp />

    <SecondSectionComp />
    
  </div>
</template>

<script>
import FirstSectionComp from './welcomeToFable-comp/FirstSectionComp.vue';
import SecondSectionComp from './welcomeToFable-comp/SecondSectionComp.vue';
export default {
    name: "WelcomeToFableComp",
    components: { FirstSectionComp, SecondSectionComp }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.welcome{

}
</style>