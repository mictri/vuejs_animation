<template>
  <div id="key-box">
    <div id="keyvisual">
      <div ref="bgRef" class="key-slider"></div>
    </div>
    <!-- /#keyvisual -->
    <p class="key-txt">
      <small>限界を突破し、未来を創る。</small
      ><span class="fnt-helvetica">BEYOND LIMITS. <br />CREATE THE FUTURE</span>
    </p>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const bgRef = ref(null)
let posX = 0
let animationFrame

const scrollSpeed = 1
const imgWidth = 2500 // chiều rộng ảnh, có thể điều chỉnh

const animateScroll = () => {
  posX -= scrollSpeed
  if (Math.abs(posX) >= imgWidth) posX = 0
  if (bgRef.value) {
    bgRef.value.style.backgroundPosition = `${posX}px 0px`
  }
  animationFrame = requestAnimationFrame(animateScroll)
}

onMounted(() => {
  animationFrame = requestAnimationFrame(animateScroll)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>
