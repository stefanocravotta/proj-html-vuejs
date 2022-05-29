<template>

  <div class="bottom-footer py-3">
    <div class="sc-container d-flex flex-column align-items-center">
      <div class="social d-flex py-3">
        <div 
        v-for="(item,index) in bottomData"
        :key="`iconFooter${index}`"
        class="box-social mx-1 d-flex align-items-center justify-content-center">
          <a href="#"><img :src="item.icon" alt=""></a>
        </div>
      </div>
      <div class="copyright">&copy; Fable - Children Kindergarten Boolean Theme by StefanoLab</div>
    </div>
  </div>
</template>

<script>
import {bottomData} from "../../assets/data/footer-data/FooterData"
export default {
    name: "BottomFooterComp",
    data(){
      return{
        bottomData
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.bottom-footer{
    .box-social{
      width: 40px;
      height: 40px;
      background-color: $blaze-orange;
    }
    .copyright{
      font-size: .8rem;
      color: lighten($tuatara, 40%);
    }
    a{
      cursor: pointer;
    }
}

</style>