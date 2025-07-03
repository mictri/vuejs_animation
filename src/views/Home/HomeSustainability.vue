<template>
  <div id="sustainability">
    <div class="sustainability__in">
      <div class="wrap">
        <FadeInUp>
          <div class="inside">
            <div class="col-txt">
              <h2 class="ttl-style">
                <span class="fnt-helvetica">SUSTAINABILITY</span><em>サステナビリティ</em>
              </h2>
              <h3>Lorem ipsum dolor</h3>
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita deleniti
                magnam quae iure sunt, natus provident temporibus adipisci aut in inventore eveniet
                esse, nesciunt, laboriosam asperiores itaque maxime quidem.
              </p>
            </div>
            <div class="col-slider global-slide">
              <!--gsap photo-->
              <div class="su-photo">
                <p class="photo-default">
                  <img
                    src="@/assets/images/index/sustainability_img.jpg"
                    width="650"
                    height="645"
                    alt="photo"
                  />
                </p>
                <div class="photo-item photo-item2">
                  <p>
                    <img
                      src="@/assets/images/index/mistion_img.jpg"
                      width="650"
                      height="645"
                      alt="photo"
                    />
                  </p>
                </div>
                <div class="photo-item photo-item3">
                  <p>
                    <img
                      src="@/assets/images/index/mistion_img.jpg"
                      width="650"
                      height="645"
                      alt="photo"
                    />
                  </p>
                </div>
                <div class="photo-item photo-item4">
                  <p>
                    <img
                      src="@/assets/images/index/mistion_img.jpg"
                      width="650"
                      height="645"
                      alt="photo"
                    />
                  </p>
                </div>
                <div class="photo-item photo-item5">
                  <p>
                    <img
                      src="@/assets/images/index/mistion_img.jpg"
                      width="650"
                      height="645"
                      alt="photo"
                    />
                  </p>
                </div>
                <div class="photo-item photo-item6">
                  <p>
                    <img
                      src="@/assets/images/index/mistion_img.jpg"
                      width="650"
                      height="645"
                      alt="photo"
                    />
                  </p>
                </div>
                <div class="photo-item photo-item7">
                  <p>
                    <img
                      src="@/assets/images/index/mistion_img.jpg"
                      width="650"
                      height="645"
                      alt="photo"
                    />
                  </p>
                </div>
              </div>
              <!--//gsap photo-->
            </div>
          </div>
        </FadeInUp>
        <FadeInUp>
          <!--gsap number-->
          <div class="su-numbers">
            <p class="number-default">
              <span class="number-first">01</span><span class="number-target">06</span>
            </p>
            <p class="number-item number01">
              <span class="number-first">01</span><span class="number-target">06</span>
            </p>
            <p class="number-item number02">
              <span class="number-first">02</span><span class="number-target">06</span>
            </p>
            <p class="number-item number03">
              <span class="number-first">03</span><span class="number-target">06</span>
            </p>
            <p class="number-item number04">
              <span class="number-first">04</span><span class="number-target">06</span>
            </p>
            <p class="number-item number05">
              <span class="number-first">05</span><span class="number-target">06</span>
            </p>
            <p class="number-item number06">
              <span class="number-first">06</span><span class="number-target">06</span>
            </p>
            <p class="number-item number07">
              <span class="number-first">07</span><span class="number-target">06</span>
            </p>
          </div>
          <!--end gsap number-->
        </FadeInUp>
        <FadeInUp class="btn-viewmore">
          <router-link to="/sustainability" class="btn-global">View More</router-link>
        </FadeInUp>
      </div>
    </div>
  </div>
</template>

<script setup>
import FadeInUp from '@/components/transitions/fadeInUp.vue'
</script>
