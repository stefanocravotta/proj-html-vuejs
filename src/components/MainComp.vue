<template>
  <main>
      <JumboTopComp />
      <LearnMoreComp />
      <WelcomeToFableComp />
      <JumboStatisticsComp />
      <OurClassesComp />
      <JumboGalleryComp />
      <ViewGalleryComp />
      <MeetOurStaffComp />
      <JumboQuotesComp />
      <WhatsNewComp />
      <JumboMapComp />
      <ContactUsComp />
      <ScrollToTopComp />
  </main>
</template>

<script>
import JumboTopComp from './main-components/JumboTopComp.vue';
import LearnMoreComp from './main-components/LearnMoreComp.vue';
import WelcomeToFableComp from './main-components/WelcomeToFableComp.vue';
import JumboStatisticsComp from './main-components/JumboStatisticsComp.vue';
import OurClassesComp from './main-components/OurClassesComp.vue';
import JumboGalleryComp from './main-components/JumboGalleryComp.vue';
import ViewGalleryComp from './main-components/ViewGalleryComp.vue';
import MeetOurStaffComp from './main-components/MeetOurStaffComp.vue';
import JumboQuotesComp from './main-components/JumboQuotesComp.vue';
import WhatsNewComp from './main-components/WhatsNewComp.vue';
import JumboMapComp from './main-components/JumboMapComp.vue';
import ContactUsComp from './main-components/ContactUsComp.vue';
import ScrollToTopComp from './main-components/ScrollToTopComp.vue';

export default {
    name: "MainComp",
    components: { JumboTopComp, LearnMoreComp, WelcomeToFableComp, JumboStatisticsComp, OurClassesComp, JumboGalleryComp, ViewGalleryComp, MeetOurStaffComp, JumboQuotesComp, WhatsNewComp, JumboMapComp, ContactUsComp, ScrollToTopComp }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";


</style>