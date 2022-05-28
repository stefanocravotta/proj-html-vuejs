<template>
  <div class="contact-us">
      <div class="sc-container text-center py-5">
            <div class="title py-4">
                <h2>Contact us</h2>
                <p>Our postal address and contact details</p>
                <img src="../../assets/images/header_divider.png" alt="">
            </div>
            <div class="row">
                <div class="contact col-3 d-flex flex-column align-items-center">
                    <img src="../../assets/images/envelope (1).png" alt="">
                    <h5 class="py-3">Postal Address</h5>
                    <p>Fable Care Center <br>
                     85 Fentiman Ave <br>
                      Ottawa, ON k1S 0T7</p>
                </div>
                <div class="contact col-3 d-flex flex-column align-items-center">
                    <img src="../../assets/images/mobile.png" alt="">
                    <h5 class="py-3">Phone & E-mail</h5>
                    <p>Phone: 1-800-64-38 <br>
                        Fax: 1-800-64-39 <br>
                        <a href="#">office@fable.com</a></p>
                </div>
                <div class="contact col-3 d-flex flex-column align-items-center">
                    <img src="../../assets/images/clock.png" alt="">
                    <h5 class="py-3">Business Hours</h5>
                    <p>Monday - Friday <br>
                        8.00 am - 5.00 pm <br>
                        Weekend Closed</p>
                </div>
                <div class="contact col-3 d-flex flex-column align-items-center">
                    <img src="../../assets/images/document (1).png" alt="">
                    <h5 class="py-3">Sessions</h5>
                    <p>Mornings, 8 am - 12 pm <br>
                        Afternoons 1 pm - 5 pm <br>
                        Full Day, 8 am - 5 pm</p>
                </div>
            </div>
            <div class="row py-3">
                <div class="col-6">
                    <input type="text" class="form-control mb-3" placeholder="Your Name *">
                    <input type="email" class="form-control mb-3" placeholder="Your E-mail *">
                    <input type="text" class="form-control" placeholder="Subject">
                </div>
                <div class="col-6">
                    <textarea class="form-control" placeholder="Your Message *" id="exampleFormControlTextarea1" rows="5"></textarea>
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
        p{
            color: lighten($tuatara, 40%);
        }
        h2,h5,a{
            color: $butterfly-bush;
        }
        .contact{
            img{
                max-width: 15%;
            }
        }
        button{
            @include buttonSecondary
        }
}
</style>