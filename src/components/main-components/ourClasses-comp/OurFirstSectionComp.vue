<template>
    <div class="sc-container top section py-5">
          <div class="title text-center">
              <h2>Our Classes</h2>
              <p>fable .....</p>
              <img src="../../../assets/images/header_divider.png" alt="">
          </div>
          <div class="container-fluid py-3">
            <div class="row text-start">
                <div class="col-6 px-2">
                    <h5>We provided four classes with nine to twenty children each aged twelve month to five years of age.</h5>
                </div>
                <div class="col-6 px-2">
                    <p class="description my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam ipsam excepturi ea magni autem minima assumenda, sapiente at ducimus cumque aut</p>
                </div>
                <div class="col-12 px-0">
                    <div class="container-box d-flex flex-wrap ">
                        <div class="box-classes row me-4">
                                <div class="class col-6 p-3">
                                    <div class="top-box text-start h-50 pb-4">
                                        <h6 class="m-0">Little Lambs</h6>
                                        <p class="small">Class name</p>
                                    </div>
                                    <div class="bottom-box h-50 d-flex align-items-end justify-content-center">
                                        <div class="px-2">
                                            <p class="small">12-24</p>
                                            <p class="small">Months olds</p>
                                        </div>
                                        <div class="right-box px-2">
                                            <p class="small">9</p>
                                            <p class="small">Class size</p>
                                        </div>                                        
                                    </div>

                                </div>
                                <div class="col-6 px-0 image-box">
                                    <img src="../../../assets/images/class_01-690x506.jpg" alt="">
                                    <button>Read More <i class="fa-solid fa-chevron-right ms-1"></i></button>
                                </div>
                        </div>
                        <div class="box-classes row">
                                <div class="class col-6 p-3">
                                    <div class="top-box text-start h-50 pb-4">
                                        <h6 class="m-0">Bouncy Bears</h6>
                                        <p class="small">Class name</p>
                                    </div>
                                    <div class="bottom-box h-50 d-flex align-items-end justify-content-center">
                                        <div class="px-3">
                                            <p class="small">2-3</p>
                                            <p class="small">Year old</p>
                                        </div>
                                        <div class="right-box px-3">
                                            <p class="small">12</p>
                                            <p class="small">Class size</p>
                                        </div>                                        
                                    </div>

                                </div>
                                <div class="col-6 px-0 image-box">
                                    <img src="../../../assets/images/class_02-690x506.jpg" alt="">
                                    <button>Read More <i class="fa-solid fa-chevron-right ms-1"></i></button>
                                </div>
                        </div>
                        <div class="box-classes row me-4">
                                <div class="class col-6 p-3">
                                    <div class="top-box text-start h-50 pb-4">
                                        <h6 class="m-0">Tenderhearts</h6>
                                        <p class="small">Class name</p>
                                    </div>
                                    <div class="bottom-box h-50 d-flex align-items-end justify-content-center">
                                        <div class="px-3">
                                            <p class="small">3-4</p>
                                            <p class="small">Year olds</p>
                                        </div>
                                        <div class="right-box px-3">
                                            <p class="small">15</p>
                                            <p class="small">Class size</p>
                                        </div>                                        
                                    </div>

                                </div>
                                <div class="col-6 px-0 image-box">
                                    <img src="../../../assets/images/class_03-690x506.jpg" alt="">
                                    <button>Read More <i class="fa-solid fa-chevron-right ms-1"></i></button>
                                </div>
                        </div>
                        <div class="box-classes row">
                                <div class="class col-6 p-3">
                                    <div class="top-box text-start h-50 pb-4">
                                        <h6 class="m-0">Shining Stars</h6>
                                        <p class="small">Class name</p>
                                    </div>
                                    <div class="bottom-box h-50 d-flex align-items-end justify-content-center">
                                        <div class="px-2">
                                            <p class="small">4-5</p>
                                            <p class="small">Year olds</p>
                                        </div>
                                        <div class="right-box px-2">
                                            <p class="small">20</p>
                                            <p class="small">Class size</p>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="col-6 px-0 image-box">
                                    <img src="../../../assets/images/class_04-690x506.jpg" alt="">
                                    <button>Read More <i class="fa-solid fa-chevron-right ms-1"></i></button>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "OurFirstSectionComp"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/vars";
@import "../../../assets/style/mixins";
@import "../../../assets/style/utils";

.section{
    p{
        color: lighten($tuatara, 50%);
    }
    h2,h5{
        color: $butterfly-bush;
    }
    h6{
        color: $sugar-cane;
    }
    }
    .box-classes{
        width: calc(100% / 2 - 20px);
        margin: 10px 0;
        .class{
            background-color: $butterfly-bush;
            .small{
                margin: 0;
                font-size: .8rem;
            }
            .right-box{
                border-left: 1px solid lighten($tuatara, 40%);
            }
        }
        .image-box{
            position: relative;
            img{
                width: 100%;
            }
            button{
                position: absolute;
                bottom: 0;
                right: 0;
                @include buttonReadMore
            }
        }
    }
</style>