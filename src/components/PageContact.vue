<template>
  <div class="contact-bottom">
    <!-- /.contact-bottom -->
    <FadeInUp class="wrap">
      <h2 class="ttl-style"><span class="fnt-helvetica">CONTACT</span><em>お問い合わせ</em></h2>
      <p class="txt">
        お客様のお悩みを無料相談でお聞かせください。<br />最適なプランニングをご提案します。
      </p>
      <p class="btn-link">
        <router-link to="contact" class="btn-contact">お問い合わせ・ご相談</router-link>
      </p>
    </FadeInUp>
  </div>
</template>

<script setup>
import FadeInUp from './transitions/fadeInUp.vue'
</script>
