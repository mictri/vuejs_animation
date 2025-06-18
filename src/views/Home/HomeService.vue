<template>
  <div id="service">
    <div class="wrap">
      <FadeInUp>
        <div class="inner-top d-flex">
          <h2 class="ttl-style"><span class="fnt-helvetica">SERVICE</span><em>事業内容</em></h2>
          <p class="txt">
            「迅速・安全・確実に」をモットーに、総合物流企業として時代のニーズに応える多様な物流システムをご用意。一貫した物流サービスによりお客様の輸送コスト削減をお手伝いします。
          </p>
        </div>
      </FadeInUp>
    </div>
    <FadeInUp>
      <div class="service-slider">
        <button class="slick-prev slick-arrow">Previous</button>
        <button class="slick-next slick-arrow">Next</button>
        <swiper
          ref="swiperInstance"
          :modules="modules"
          :spaceBetween="30"
          :loop="true"
          :navigation="{ prevEl: '.slick-prev', nextEl: '.slick-next' }"
          :slidesPerView="2"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1199': {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            '1399': {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }"
          class="mySwiper"
        >
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img2.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img3.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img4.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img5.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img2.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img3.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img4.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
          <swiper-slide>
            <p class="slide-img">
              <img
                src="@/assets/images/index/service_img5.jpg"
                width="300"
                height="300"
                alt="保管"
                class="border-ras"
              />
            </p>
            <p class="btn-link">
              <router-link to="/service/#storage" tabindex="-1">保管</router-link>
            </p>
          </swiper-slide>
        </swiper>
      </div>
    </FadeInUp>
    <FadeInUp>
      <p class="btn-viewmore">
        <router-link to="/service" class="btn-global">View More</router-link>
      </p>
    </FadeInUp>
  </div>
</template>

<script setup>
import FadeInUp from '@/components/transitions/fadeInUp.vue'
// Import Swiper Vue.js components
import { ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
// Import module cần thiết
import { Navigation } from 'swiper/modules'

const modules = [Navigation]
const swiperInstance = ref(null)

onMounted(() => {
  if (swiperInstance.value?.swiper) {
    swiperInstance.value.swiper.navigation.init()
    swiperInstance.value.swiper.navigation.update()
  }
})
</script>
