<template>
  <div id="mistion" class="border-ras">
    <div class="mistion__in">
      <div class="wrap">
        <FadeInUp>
          <div class="inside">
            <div class="col-txt">
              <h2 class="ttl-style">
                <span class="fnt-helvetica">MISSTION</span><em>新着情報</em>
              </h2>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita deleniti
                magnam quae iure sunt, natus provident temporibus adipisci aut in inventore eveniet
                esse, nesciunt, laboriosam asperiores itaque maxime quidem. Ea assumenda labore sunt
                corrupti minima
              </p>
            </div>
            <!--gsap photo-->
            <div class="gr-photo">
              <p class="photo-default">
                <img
                  src="@/assets/images/index/mistion_img.jpg"
                  width="647"
                  height="434"
                  alt="photo"
                />
              </p>
              <div class="photo-item photo-item2">
                <p>
                  <img
                    src="@/assets/images/index/mistion_img.jpg"
                    width="647"
                    height="434"
                    alt="photo"
                  />
                </p>
              </div>
              <div class="photo-item photo-item3">
                <p>
                  <img
                    src="@/assets/images/index/mistion_img.jpg"
                    width="647"
                    height="434"
                    alt="photo"
                  />
                </p>
              </div>
              <div class="photo-item photo-item4">
                <p>
                  <img
                    src="@/assets/images/index/mistion_img.jpg"
                    width="647"
                    height="434"
                    alt="photo"
                  />
                </p>
              </div>
              <div class="photo-item photo-item5">
                <p>
                  <img
                    src="@/assets/images/index/mistion_img.jpg"
                    width="647"
                    height="434"
                    alt="photo"
                  />
                </p>
              </div>
              <div class="photo-item photo-item6">
                <p>
                  <img
                    src="@/assets/images/index/mistion_img.jpg"
                    width="647"
                    height="434"
                    alt="photo"
                  />
                </p>
              </div>
              <div class="photo-item photo-item7">
                <p>
                  <img
                    src="@/assets/images/index/mistion_img.jpg"
                    width="647"
                    height="434"
                    alt="photo"
                  />
                </p>
              </div>
            </div>
            <!--//gsap photo-->
          </div>
        </FadeInUp>
        <FadeInUp>
          <!--gsap number-->
          <div class="gr-numbers">
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
          <router-link to="/" class="btn-global">View More</router-link>
        </FadeInUp>
      </div>
    </div>
  </div>
</template>

<script setup>
import FadeInUp from '@/components/transitions/fadeInUp.vue'
</script>
