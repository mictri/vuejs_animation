<template>
  <main>
    <FadeInLeft>
      <h1 class="text-center text-red-400 text-5xl font-bold">Home</h1>
    </FadeInLeft>
    <FadeInRight>
        <swiper
        :modules="modules"
        :slider-per-view="3"
        :space-between="50" 
        :autoplay="{ delay: 3500, disableOnInteraction: false }"
        :loop="true"
        :pagination="{ clickable: true }" 
        :navigation="true"
        class="mySwiper01"
        >
          <swiper-slide><p><img src="https://dummyimage.com/600x400/000/fff" alt=""></p></swiper-slide>
          <swiper-slide><p><img src="https://dummyimage.com/600x400/0011ff/fff" alt=""></p></swiper-slide>
          <swiper-slide><p><img src="https://dummyimage.com/600x400/99b000/fff" alt=""></p></swiper-slide>
        </swiper>
    </FadeInRight>




    <FadeInLeft>
    <p ref="paraTwo" class="thumbnail-image">
      <img src="https://picsum.photos/200/300" alt="alt" />
    </p>
    </FadeInLeft>
    <FadeInRight>
    <p ref="paraThree">
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p>
    </FadeInRight>

    <FadeInLeft>
        <swiper
        :modules="modules"
        :effect="'fade'"
        :fade-effect="{ crossFade: true }"
        :slider-per-view="3"
        :space-between="50" 
        :autoplay="{ delay: 3500, disableOnInteraction: false }"
        :loop="true"
        :pagination="{ clickable: true }" 
         class="mySwiper02"
        >
          <swiper-slide><p><img src="https://dummyimage.com/600x400/000/fff" alt=""></p></swiper-slide>
          <swiper-slide><p><img src="https://dummyimage.com/600x400/0011ff/fff" alt=""></p></swiper-slide>
          <swiper-slide><p><img src="https://dummyimage.com/600x400/99b000/fff" alt=""></p></swiper-slide>
        </swiper>
    </FadeInLeft>


    <FadeInLeft>
      <section ref="paraFour" class="title-wrap">Trang chủ</section>
    </FadeInLeft>
    <FadeInRight>
      <div class="about-section">
      <p class="fade-element">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque harum iusto voluptates
        repudiandae nihil unde libero illo quas voluptatum vitae, sint, aut, laborum perspiciatis
        laudantium tenetur veniam esse ipsam repellat. Totam soluta exercitationem, quas quos
        laboriosam officia, mollitia recusandae similique a fuga dolor dolorem sint, porro
        aspernatur aliquid laborum tempora maiores placeat quibusdam! Sint cupiditate doloribus
        reprehenderit natus incidunt magnam! Iusto, optio assumenda veniam accusantium, ad velit hic
        amet nulla natus vel accusamus atque magni qui quisquam illo dolorem quidem tempora eveniet
        temporibus, alias ipsa repellat delectus veritatis? Eos, perferendis?
      </p>
      <p class="about-image">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="alt" />
      </p>
      <p class="about-image">
        <img src="https://picsum.photos/200/300?grayscale" alt="alt" />
      </p>
    </div>
    </FadeInRight>
    <FadeInLeft>
    <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :centeredSlides="true"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper3"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</FadeInLeft>
    <FadeInLeft>
    <p>
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p>
    </FadeInLeft>
<FadeInRight>    
    <p>
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p></FadeInRight>

    <FadeInLeft>
      <p>
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p></FadeInLeft>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import FadeInLeft from '@/components/transitions/fadeInLeft.vue'
import FadeInRight from '@/components/transitions/fadeInRight.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const modules = [Autoplay, Navigation, Pagination, EffectFade];



// import { ref, onMounted, onBeforeMount } from 'vue'
// import gsap from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin)

// const title = ref(null)
// const paraOne = ref(null)
// const paraTwo = ref(null)
// const paraThree = ref(null)
// const paraFour = ref(null)

// onMounted(() => {
//   console.log(paraTwo.value)
//   const tl = gsap.timeline({ delay: 1, paused: true })
//   tl.from(title.value, { x: '-200', autoAlpha: 0, duration: 1 })
//   tl.from(paraOne.value, { x: '+200', autoAlpha: 0, duration: 1 })
//   tl.from(paraTwo.value, { x: '-200', autoAlpha: 0, duration: 1 })
//   tl.from(paraThree.value, { x: '+200', autoAlpha: 0, duration: 1 })
//   tl.from(paraFour.value, { x: '-200', autoAlpha: 0, duration: 1 })
//   tl.play()
// })

// import { ref, onMounted } from 'vue'
// import gsap from 'gsap'

// const fadeEl = ref(null)
// const content = ref(null)

// onMounted(() => {
//   gsap.from(fadeEl.value, {
//     delay: 0.5,
//     duration: 1,
//     y: '+100',
//     autoAlpha: 0,
//     ease: 'back.out(1.7)',
//   })
// })

// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// let loopTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
// loopTl.to('.hero-image', { y: '-1rem', duration: 1, ease: 'power1.inOut' })

// let loadTl = gsap.timeline()
// loadTl.from('.title-wrap', { opacity: 0, y: '6rem', duration: 1 })
// loadTl.from('.thumbnail-image', { scale: 0, stagger: { amount: 0.5, from: 'random' }, duration: 1 })
// loadTl.from('.hero-image', { opacity: 0, scale: 0.8, duration: 1 })
// loadTl.from('.about-image', { opacity: 0, scale: 0.8, duration: 0.15, stagger: { each: 0.4 } })

// $('.about-section').each(function () {
//   let scrollTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: $(this),
//       start: 'top top',
//       end: 'bottom 50%',
//       markers: true,
//       //play pase resume reset restart complete reverse none
//       toggleActions: 'play pause resume reverse',
//     },
//   })
//   scrollTl.from($(this).find('.about-image'), {
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.15,
//     stagger: { each: 0.4 },
//   })
// })
</script>

