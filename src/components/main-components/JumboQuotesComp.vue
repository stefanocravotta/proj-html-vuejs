<template>
  <div class="jumbotron">
      <div class="sc-container d-flex align-items-center justify-content-center flex-column h-100">
            <div class="py-2 icon d-flex align-items-center justify-content-center">
                <img src="../../assets/images/quote_alt.png" alt="">
            </div>
            <h3 class="py-2 text-center">
                Fable Kindergarten is a great place for my daughter to start her
                schooling experience. It's welcoming and safe and my daughter
                loves being there.
            </h3>
            <span class="py-2 line"></span>
            <h5 class="py-2">Joe R.Hamblen</h5>
            <div class="slider-choise h-25 d-flex justify-content-center align-items-center">
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular active mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
                <span class="rectangular mx-1"></span>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "JumboQuotesComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 400px;
    background-image: url(../../assets/images/parallax_02.jpg);
    background-size: cover;
    background-position: center;
    color: $sugar-cane;
    img{
        width: 100%;
    }
    .icon{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid $sugar-cane;
        img{
            max-width: 50%;
        }
    }
    .line{
        display: inline-block;
        width: 30px;
        border-bottom: 1px solid $sugar-cane;
    }
    .rectangular{
        display: inline-block;
        height: 8px;
        width: 30px;
        border: 2px solid $sugar-cane;
        cursor: pointer;
        &.active{
            margin-bottom: 15px;
        }
    }
    
}
</style>