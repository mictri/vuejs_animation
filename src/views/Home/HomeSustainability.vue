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
                  <img :src="photoItems[0].src" :alt="photoItems[0].alt" />
                </p>

                <div
                  v-for="(item, index) in photoItems.slice(1)"
                  :key="index"
                  class="photo-item"
                  :class="{ actives: activePhotos.includes(index + 1) }"
                >
                  <img :src="item.src" :alt="item.alt" />
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

            <div
              v-for="(num, index) in numberItems"
              :key="index"
              class="number-item"
              :class="{ 'actives-n': activeNums.includes(index) }"
            >
              <span class="number-first"
                >{{ index + 1 <= 6 ? '0' + (index + 1) : index + 1 }}
              </span>
              <span class="number-target">{{ num }}</span>
            </div>
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

<script>
import FadeInUp from '@/components/transitions/fadeInUp.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: 'GsapScrollComponent',
  components: {
    FadeInUp,
  },
  setup() {
    const photoItems = ref([
      { src: '/src/assets/images/index/sustainability_img.jpg', alt: 'Ảnh 1' },
      { src: '/src/assets/images/index/sustainability_img01.jpg', alt: 'Ảnh 2' },
      { src: '/src/assets/images/index/sustainability_img02.jpg', alt: 'Ảnh 3' },
      { src: '/src/assets/images/index/sustainability_img03.jpg', alt: 'Ảnh 4' },
      { src: '/src/assets/images/index/sustainability_img04.jpg', alt: 'Ảnh 5' },
      { src: '/src/assets/images/index/sustainability_img05.jpg', alt: 'Ảnh 5' },
      { src: '/src/assets/images/index/sustainability_img06.jpg', alt: 'Ảnh 6' },
    ])

    const numberItems = ref(['01', '02', '03', '04', '05', '06'])

    const activePhotos = ref([])
    const activeNums = ref([])

    const removeAllActive = () => {
      activePhotos.value = []
      activeNums.value = []
    }

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)

      const timelineHeader = gsap.timeline({
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#sustainability',
          start: 'top top',
          end: `+=${window.innerWidth >= 768 ? window.innerHeight * 2.5 : window.innerHeight * 3.9}`,
          pin: '#sustainability',
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const currentTab = Math.ceil(self.progress * photoItems.value.length) || 1
            removeAllActive()
            for (let i = 1; i <= 6; i++) {
              if (currentTab - i >= 0) {
                activePhotos.value.push(currentTab - i)
                activeNums.value.push(currentTab - i)
              }
            }
          },
        },
      })

      window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        ScrollTrigger.refresh()
      })

      ScrollTrigger.refresh()
    })

    return {
      photoItems,
      numberItems,
      activePhotos,
      activeNums,
    }
  },
}
</script>
