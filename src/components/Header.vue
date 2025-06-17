<template>
  <header>
    <div class="sidebar">
      <p class="logo">
        <router-link to="/">
          <picture>
            <source media="(max-width:768px)" srcset="@/assets/images/logo_sp.png" />
            <img src="@/assets/images/logo.png" width="350" height="70" alt="logo" />
          </picture>
        </router-link>
      </p>
      <div
        class="hamburger hamburger--vortex-r for-sp"
        :class="{ 'is-active': isActive }"
        @click="toggleMenu"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>

    <div id="navbar">
      <nav>
        <router-link to="/" class="for-sp"><span>トップページ</span></router-link>
        <router-link to="/company"><span>会社情報</span></router-link>
        <router-link to="/service"><span>事業紹介</span></router-link>
        <router-link to="/location"><span>拠点一覧</span></router-link>
        <router-link to="/sustainability"><span>サスティナビリティ</span></router-link>
        <router-link to="/recruit"><span>採用情報</span></router-link>
      </nav>

      <div class="box-tel">
        <ul class="for-sp">
          <li class="contact-tit">お問い合わせはこちら</li>
          <li class="contact-tel fnt-helvetica">
            <a href="tel:0593781181" class="phone">
              <i
                ><img src="@/assets/images/icon_tel.png" width="28" height="28" alt="icon tel"
              /></i>
              059-378-1181
            </a>
          </li>
          <li class="contact-time">受付時間 8:00 – 17:00 (土・日・祝日は除く)</li>
        </ul>
        <p class="btn-link">
          <router-link to="/contact" class="btn-contact">お問い合わせ</router-link>
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import '@/assets/css/header.css'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const isActive = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  const mobile = window.matchMedia('(max-width: 767px)').matches
  isMobile.value = mobile

  // Nếu không phải mobile, reset trạng thái
  if (!mobile) {
    isActive.value = false
    document.body.classList.remove('nav--opened')
  }
}

const toggleMenu = () => {
  if (isMobile.value) {
    isActive.value = !isActive.value
  }
}

watch(isActive, (val) => {
  if (isMobile.value) {
    document.body.classList.toggle('nav--opened', val)
  }
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
