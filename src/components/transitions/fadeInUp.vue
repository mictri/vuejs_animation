<template>
  <div ref="elRef" class="fadeInUp">
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
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      delay: 0.5,
      duration: 1,
      ease: 'power2.out',
    })

    ScrollTrigger.refresh() // đảm bảo mọi thứ khớp vị trí
  }
})
</script>
<style scoped>
.fadeInUp {
  opacity: 0;
  transform: translateY(50px);
}
</style>
