<template>
  <div class="container-fluid top section">
        <div class="sc-container">
                <div class="title text-center">
                    <h2>Welcome to Fable</h2>
                    <p>Fable daycare, preschool, and kindergarten</p>
                    <img src="../../../assets/images/header_divider.png" alt="">
                </div>
                <div class="container-fluid py-4 px-0">
                    <div class="row text-center justify-content-between">
                        <div class="col-3 d-flex flex-column align-items-center">
                            <div class="icon-box d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/schoolbag_alt.png" alt="">
                            </div>
                            <h5 class="py-3">Morbi Etos</h5>
                            <p>Praesent interdum est gravida vehicula est node ,aecenas loareet morbi a dosis luctus novum est praesent.</p>
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center">
                            <div class="icon-box secondary d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/stroller_alt.png" alt="">
                            </div>
                            <h5 class="py-3">Congue Gravida</h5>
                            <p>Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.</p>
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center">
                            <div class="icon-box d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/globe_alt.png" alt="">
                            </div>
                            <h5 class="py-3">Maecenas Node</h5>
                            <p>Praesent interdum est gravida vehicula est node ,aecenas loareet morbi a dosis luctus novum est praesent.</p>
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center">
                            <div class="icon-box secondary d-flex align-items-center justify-content-center">
                                <img src="../../../assets/images/bell_alt.png" alt="">
                            </div>
                            <h5 class="py-3">Praesent Morbi</h5>
                            <p>Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est..</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FirstSectionComp"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/vars";
@import "../../../assets/style/mixins";
@import "../../../assets/style/utils";

.section{
    padding: 20px 0;
    &.top{
        background-color: $sugar-cane;
        p{
            color: lighten($tuatara, 40%);
        }
        h2,h5{
            color: $butterfly-bush;
        }
        .icon-box{
            width: 150px;
            height: 150px;
            background-color: $blaze-orange;
            border-radius: 50%;
            &.secondary{
            background-color: $butterfly-bush;
            }
        }                                                
    }
}
</style>