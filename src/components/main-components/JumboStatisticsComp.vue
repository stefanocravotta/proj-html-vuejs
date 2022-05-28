<template>
  <div class="jumbotron">

      <div class="container-fluid overlay h-100">
          <div class="sc-container d-flex align-items-center justify-content-center h-75">
                <div class="row w-100">
                    <div class="sc-col col-3 text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>507</span>
                        </div>
                        <h5 class="py-3">Our Pupils</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus </p>
                    </div>
                    <div class="sc-col col-3 text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>235</span>
                        </div>
                        <h5 class="py-3">Teaching Hours</h5>
                        <p>Quisquam vel tempora quas amet placeat?</p>
                    </div>
                    <div class="sc-col col-3 text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>100%</span>
                        </div>
                        <h5 class="py-3">Satisfied Parents</h5>
                        <p>Consectetur adipisicing elit. Natus quisquam vel tempora quas amet placeat?</p>
                    </div>
                    <div class="sc-col col-3 text-center">
                        <div class="box-number d-flex align-items-center justify-content-center">
                            <span>1050</span>
                        </div>
                        <h5 class="py-3">Meals Per Year</h5>
                        <p>Adipisicing elit. Natus quisquam vel tempora quas </p>
                    </div>
                </div>
            </div>
            <div class="slider-choise h-25 d-flex justify-content-center align-items-center">
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "JumboStatisticsComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 500px;
    background-image: url(../../assets/images/parallax_01.jpg);
    background-size: cover;
    background-position: center;
    color: $sugar-cane;
    .overlay{
        background-color: rgba(0,0,0,.2);
    }
    .sc-col{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        .box-number{
            width: 150px;
            height: 150px;
            border: 1px solid $sugar-cane;
            border-radius: 50%;
            font-size: 2rem;
        }
    }
    .rectangular{
            display: inline-block;
            height: 8px;
            width: 30px;
            border: 2px solid $sugar-cane;
            cursor: pointer;
        }
    
    
}
</style>