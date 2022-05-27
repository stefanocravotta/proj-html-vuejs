<template>
  <div class="our-classes">
        <div class="sc-container top section py-3">
          <div class="title text-center">
              <h2>Our Classes</h2>
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
      <div class="sc-container bottom section">
          <div class="container-fluid py-3">
              <div class="row">
                  <div class="col-6">
                      <h4>We have . . . . . .</h4>
                      <p>Presfasfgadgsadgh </p>
                      <div class="check">icon <span>descr</span></div>
                      <div class="check">icon <span>descr</span></div>
                      <div class="check">icon <span>descr</span></div>
                  </div>
                  <div class="slider col-6">
                      <div class="row text-center">
                          <div class="col-6 py-2">O</div>
                          <div class="col-6 py-2">O</div>
                          <div class="col-6 py-2">O</div>
                          <div class="col-6 py-2">O</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "OurClassesComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.our-classes{
        @include debug;
        .section{
        @include debug;
        }
        .box-classes{
        @include debug;
        height: 80px;
        margin: 10px 0;
        }
}
</style>