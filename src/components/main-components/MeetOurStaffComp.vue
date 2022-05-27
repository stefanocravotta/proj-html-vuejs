<template>
  <div class="meet-staff">
      <div class="sc-container">
          Meet staff
      </div>
  </div>
</template>

<script>
export default {
    name: "MeetOurStaffComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.meet-staff{
        height: 400px;
        @include debug;
}
</style>