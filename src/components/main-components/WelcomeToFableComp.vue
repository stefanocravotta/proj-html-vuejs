<template>
  <div class="welcome">
      <div class="sc-container top section">
          <div class="title text-center">
              <h2>Welcome to Fable</h2>
              <p>fable .....</p>
              <span>icon</span>
          </div>
          <div class="container-fluid">
            <div class="row text-center">
                <div class="col-3 px-2">O</div>
                <div class="col-3 px-2">O</div>
                <div class="col-3 px-2">O</div>
                <div class="col-3 px-2">O</div>
            </div>
          </div>
      </div>
      <div class="sc-container bottom section">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-6">ciao</div>
                  <div class="slider col-6">ciao</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "WelcomeToFableComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.welcome{
        height: 400px; //da togliere
        @include debug;
        .section{
            height: 50%; //da togliere
            padding: 20px 0;
        @include debug;
        }
}
</style>