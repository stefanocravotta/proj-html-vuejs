<template>
  <div class="meet-staff">
        <div class="sc-container top section py-3">
          <div class="title text-center py-3">
              <h2>Meet Our Staff</h2>
              <p>fable .....</p>
              <span>icon</span>
          </div>
          <div class="container-fluid">
            <div class="row text-center">
                <div class="col-6 px-2">
                    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cupiditate!</div>
                    <div class="container-box">
                        <div class="box-classes"></div>
                        <div class="box-classes"></div>
                    </div>
                </div>
                <div class="col-6 px-2">
                    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cupiditate!</div>
                    <div class="container-box">
                        <div class="box-classes"></div>
                        <div class="box-classes"></div>
                    </div>
                </div>
                
            </div>
          </div>
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
        padding: 15px 0;
        @include debug;
        .box-classes{
            @include debug;
            height: 200px;
            margin: 10px 0;
        }
}
</style>