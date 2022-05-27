<template>
  <div class="whats-new">
      <div class="sc-container text-center py-3">
            <div class="title py-3">
                <h2>Meet Our Staff</h2>
                <p>fable .....</p>
                <span>icon</span>
            </div>
            <div class="row box-blog text-start">
                <div class="col-4">csc</div>
                <div class="col-4">csc</div>
                <div class="col-4">csc</div>
            </div>
            <button>Go to blog</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "WhatsNewComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.whats-new{
        @include debug;
        .box-blog{
            height: 200px;
            @include debug;

        }
}
</style>