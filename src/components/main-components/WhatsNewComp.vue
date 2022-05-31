<template>
  <div class="whats-new">
      <div class="sc-container text-center py-5">
            <div class="title py-3">
                <h2>What's New</h2>
                <p>Keep up todate with the latest news</p>
                <img src="../../assets/images/header_divider.png" alt="">
            </div>
            <div class="row box-blog text-start py-3">
                <div class="col-4">
                    <p>October 03, 2014</p>
                    <div class="blog-img">
                        <div class="container-img">
                            <div class="overlay align-items-center justify-content-center">
                                <img src="../../assets/images/image_overlay.png" alt="">
                            </div>
                            <img src="../../assets/images/blog_09-1024x614.jpg" alt="">
                        </div>
                        <span class="number d-flex align-items-center justify-content-center">42</span>
                    </div>                   
                    <h5 class="py-2">Drawing .. . </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum? <span class="lighten">[...]</span></p>
                    <div class="bottom d-flex">
                        <p class="me-2">
                            <img class="me-2" src="../../assets/images/author.png" alt=""> Anna Brown</p>
                        <p>
                            <img class="mx-2" src="../../assets/images/category.png" alt=""> Events, Fun</p>
                    </div>
                </div>
                <div class="col-4">
                    <p>October 03, 2014</p>
                    <div class="blog-img">
                        <div class="container-img">
                            <div class="overlay align-items-center justify-content-center">
                                <img src="../../assets/images/image_overlay.png" alt="">
                            </div>
                            <img src="../../assets/images/blog_10-1024x614.jpg" alt="">
                        </div>
                        <span class="number d-flex align-items-center justify-content-center">19</span>
                    </div>                   
                    <h5 class="py-2">Fall Parents Meeting Day </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum? <span class="lighten">[...]</span></p>
                    <div class="bottom d-flex">
                        <p class="me-2">
                            <img class="me-2" src="../../assets/images/author.png" alt=""> Anna Brown</p>
                        <p>
                            <img class="mx-2" src="../../assets/images/category.png" alt=""> Dance </p>
                    </div>
                </div>
                <div class="col-4">
                    <p>September 20, 2014</p>
                    <div class="blog-img">
                        <div class="container-img">
                            <div class="overlay align-items-center justify-content-center">
                                <img src="../../assets/images/image_overlay.png" alt="">
                            </div>
                            <img src="../../assets/images/blog_08-1024x614.jpg" alt="">
                        </div>
                        <span class="number d-flex align-items-center justify-content-center">22</span>
                    </div>                   
                    <h5 class="py-2">Birthday in Kindergarten </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum? <span class="lighten">[...]</span></p>
                    <div class="bottom d-flex">
                        <p class="me-2">
                            <img class="me-2" src="../../assets/images/author.png" alt=""> Anna Brown</p>
                        <p>
                            <img class="mx-2" src="../../assets/images/category.png" alt=""> Games</p>
                    </div>
                </div>
            </div>
            <button>Go to blog <i class="fa-solid fa-chevron-right ms-1"></i></button>
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
         h2,h5{
            color: $butterfly-bush;
        }
        p{
            color: lighten($tuatara, 30%);
        }
        .box-blog{
            .blog-img{
                position: relative;
                 img{
                width: 100%;
                }
            }
            .container-img{
                position: relative;
                cursor: pointer;
                &:hover .overlay{
                    opacity: 1;
                }
                .overlay{
                    @include overlay;
                    img{
                        width: 30%;
                    }
                }
            }
            .number{
                position: absolute;
                right: 0;
                bottom: 0;
                width: 30px;
                height: 30px;
                color: $sugar-cane;
                background-color: $blaze-orange;
            }
            .lighten{
                color: lighten($tuatara, 60%);
            }
            .bottom{
                border-top: 1px solid lighten($tuatara, 60%);
            }
        }
        button{
            @include buttonSecondary
        }
}
</style>