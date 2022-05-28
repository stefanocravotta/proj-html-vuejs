<template>
<div class="container-fluid bottom">
          <div class="sc-container py-5">
              <div class="row">
                  <div class="col-6 p-0">
                      <h4>We have been educating children for over fifteen years. Our goal is to create a place that engages each child</h4>
                      <p  class="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique error vitae quaerat nobis in. Nulla est voluptatum reiciendis. Quisquam sequi atque, aliquid veritatis corrupti ipsa.</p>
                      <div class="check">
                          <img src="../../../assets/images/style_1.png" alt="">
                           <span class="ms-3">Similique error vitae quaerat nobis in.</span>
                        </div>
                      <div class="check">
                          <img src="../../../assets/images/style_1.png" alt="">
                           <span class="ms-3">Nulla est voluptatum reiciendis. Quisquam .</span>
                        </div>
                      <div class="check">
                          <img src="../../../assets/images/style_1.png" alt="">
                           <span class="ms-3">dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                      <div class="check">
                          <img src="../../../assets/images/style_1.png" alt="">
                           <span class="ms-3">voluptatum reiciendis. Quisquam sequi atque</span>
                        </div>
                      <div class="check">
                          <img src="../../../assets/images/style_1.png" alt="">
                           <span class="ms-3">Similique error vitae quaerat nobis in.</span>
                        </div>
                      <div class="check">
                          <img src="../../../assets/images/style_1.png" alt="">
                           <span class="ms-3">Similique error vitae quaerat nobis in.</span>
                        </div>
                  </div>
                  <div class="col-6">
                      <div class="row text-center d-flex align-items-center justify-content-center flex-wrap">
                        <div class="box d-flex flex-column align-items-center justify-content-center">
                            <div class="icon my-2 d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/toy.png" alt="">
                            </div>
                            <h5>Learning & Fun</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="box d-flex flex-column align-items-center justify-content-center">
                            <div class="icon my-2 d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/meal.png" alt="">
                            </div>
                            <h5>Healty Meals</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="box d-flex flex-column align-items-center justify-content-center">
                            <div class="icon my-2 d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/school.png" alt="">
                            </div>
                            <h5>Friendly Place</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="box d-flex flex-column align-items-center justify-content-center">
                            <div class="icon my-2 d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/shield.png" alt="">
                            </div>
                            <h5>Children Safety</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "OurSecondSectionComp"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/vars";
@import "../../../assets/style/mixins";
@import "../../../assets/style/utils";

.bottom{
        background-color: $bon-jour;

    h4,h5{
        color: $butterfly-bush;
    }
    p{
        color: lighten($tuatara, 30%);
    }
    .check{
        margin: 5px 0;
        color: lighten($tuatara, 30%);
    }
    .box{
        width: calc(100% / 2 - 20px);
        .icon{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: $sugar-cane;
        }
    }
}

</style>