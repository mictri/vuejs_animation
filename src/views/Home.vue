<template>
  <main>
    <h1 ref="title" class="text-center text-red-400">Home</h1>
    <p ref="paraOne" class="hero-image">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam voluptas quod!
      Asperiores accusamus iste consequuntur cumque rerum corrupti, error commodi minima, eveniet,
      aperiam sit magnam voluptate reprehenderit inventore praesentium? Aut necessitatibus
      cupiditate exercitationem numquam, corporis quis magni molestias explicabo quibusdam
      laudantium asperiores nostrum, saepe voluptatum esse impedit reiciendis eum consequatur quidem
      totam. In velit vero labore recusandae eum? Iste. Quisquam corporis itaque, voluptatum iusto
      similique voluptatibus iure provident fugiat alias. Sapiente, provident? Sapiente excepturi
      fuga, doloribus voluptates eaque porro voluptas illum, in omnis natus maxime quae non aliquam
      vero? Exercitationem repellat nobis dolores facere ipsa. Iure unde nesciunt voluptatum dolore
      quia at veritatis odio alias nobis praesentium cupiditate iste, eum quo quas dolorum cum nisi
      perspiciatis rem placeat? Qui!
    </p>
    <p ref="paraTwo" class="thumbnail-image">
      <img src="https://picsum.photos/200/300" alt="alt" />
    </p>
    <p ref="paraThree">
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p>
    <section ref="paraFour" class="title-wrap">Trang chủ</section>
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
    <p>
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p>
    <p>
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p>
    <p>
      <img src="https://picsum.photos/id/237/200/300" alt="alt" />
    </p>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const title = ref(null)
const paraOne = ref(null)
const paraTwo = ref(null)
const paraThree = ref(null)
const paraFour = ref(null)

onMounted(() => {
  console.log(paraTwo.value)
  const tl = gsap.timeline({ delay: 1, paused: true })
  tl.from(title.value, { x: '-200', autoAlpha: 0, duration: 1 })
  tl.from(paraOne.value, { x: '+200', autoAlpha: 0, duration: 1 })
  tl.from(paraTwo.value, { x: '-200', autoAlpha: 0, duration: 1 })
  tl.from(paraThree.value, { x: '+200', autoAlpha: 0, duration: 1 })
  tl.from(paraFour.value, { x: '-200', autoAlpha: 0, duration: 1 })
  tl.play()
})

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
