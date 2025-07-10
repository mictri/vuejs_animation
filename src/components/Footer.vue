<template>
  <footer id="footer">
    <div class="wrap">
      <div class="ft-top">
        <p class="logo">
          <img src="@/assets/images/logo.webp" alt="logo" width="275" height="45" />
        </p>
        <nav class="nav-ft">
          <router-link to="/" class="for-sp"><span>トップページ</span></router-link>
          <router-link to="/"><span>Home</span></router-link>
          <router-link to="about">About</router-link>
          <router-link to="animations">Animations</router-link>
          <router-link to="scene">Scene</router-link>
        </nav>
      </div>
      <div class="ft-bottom">
        <ul>
          <li>限界を突破し、未来を創る。</li>
          <li class="ft-tit fnt-helvetica">BEYOND LIMITS. <br />CREATE THE FUTURE</li>
        </ul>
        <address>Copyright &copy; 2025 NIPPON RIKUSO All Rights Reserved.</address>
      </div>
    </div>
  </footer>
</template>
<script>
import '@/assets/css/footer.css'
</script>
