<template>
  <div ref="elRef" class="fadeInLeft">
    <slot />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const elRef = ref(null)
onMounted(() => {
  if (elRef.value) {
    gsap.to(elRef.value, {
      scrollTrigger: {
        trigger: elRef.value,
        start: 'top 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      x: 0,
      delay: 0.5,
      duration: 1,
      ease: 'power2.out',
    })
  }
})
</script>
<style scoped>
.fadeInLeft {
  opacity: 0;
  transform: translate3d(-500px, 0, 0);
}
</style>
