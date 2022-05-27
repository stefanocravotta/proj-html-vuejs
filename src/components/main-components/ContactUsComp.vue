<template>
  <div class="contact-us">
      <div class="sc-container text-center py-3">
            <div class="title py-3">
                <h2>Contact us</h2>
                <p>fable .....</p>
                <span>icon</span>
            </div>
            <div class="row">
                <div class="col-3">csac</div>
                <div class="col-3">cscs</div>
                <div class="col-3">acsc</div>
                <div class="col-3">ac</div>
            </div>
            <div class="row py-3">
                <div class="col-6">
                    <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com">
                    <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com">
                    <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="col-6">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <button>Send message</button>            
      </div>
  </div>
</template>

<script>
export default {
    name: "ContactUsComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.contact-us{
        @include debug;
}
</style>