<template>

  <div class="top-footer">
    <div class="sc-container py-5">
      <div class="row">
          <div class="col-3">
            <h5 class="py-0 my-0">{{aboutUs.title}}</h5>
            <span class="line "></span>
            <p class="pt-3">{{aboutUs.text}}</p>
            <img :src="aboutUs.logo" :alt="aboutUs.title">

          </div>
          <div class="col-3">
            <h5 class="py-0 my-0">{{archives.title}}</h5>
            <span class="line"></span>
            <ul class="container-date py-3 px-0">
              <li
              v-for="(item,index) in archives.date"  
              :key="`date${index}`"
              class="date mb-1 d-flex align-items-center ps-2">{{item.data}}</li>
            </ul>

          </div>
          <div class="col-3">
            <h5 class="py-0 my-0">{{ourFeatures.title}}</h5>
            <span class="line"></span>
            <p class="py-3">{{ourFeatures.text}}</p>
            <ul class="check-list px-0">
              <li 
              v-for="(item,index) in ourFeatures.checkList"
              :key="`checkList${index}`">
                <p><img :src="item.img" class="me-1" :alt="ourFeatures.title">{{item.listText}}</p>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h5 class="py-0 my-0">{{recentPost.title}}</h5>
            <span class="line"></span>
            <div             
            v-for="(post,index) in recentPost.posts"
            :key="`post${index}`" 
            class="pt-3 w-100 d-flex">
              <div class="w-50">
                <img :src="post.img" :alt="post.title">
              </div>
              <div class="w-50 ps-2">
                <a class="post-title">{{post.title}}</a>
                <p><img class="me-1" :src="post.icon" :alt="post.title">{{post.date}}</p>
              </div>
            </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TopFooterComp",
    props:{
      aboutUs: Object,
      archives: Object,
      ourFeatures: Object,
      recentPost: Object
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";
@import "../../assets/style/utils";

.top-footer{
        background-image: url(../../assets/images/pattern.png);
        h5{
          color: $sugar-cane;
        }
        p{
          color: lighten($tuatara, 50%);
          font-size: .9rem;
        }
        .line{
          display: inline-block;
          width: 40px;
          border-top: 2px solid lighten($tuatara, 50%);
        }
        img{
          max-width: 100%;
          cursor: pointer;
        }
        .date{
          width: 85%;
          height: 40px;
          border: 1px solid lighten($tuatara, 50%);
          color: lighten($tuatara, 50%);
          font-size: .9rem;
          font-weight: bold;
          cursor: pointer;
          &:hover{
          border: 2px solid $sugar-cane;
          color: $sugar-cane;
          }
        }
        .post-title{
          color: $sugar-cane;
          text-decoration: none;
          cursor: pointer;
          &:hover{
          text-decoration: underline;
          }
        }
}

</style>