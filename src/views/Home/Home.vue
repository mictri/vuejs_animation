<template>
    <HomeKey />
    <HomeServices />
    <HomeNews />
    <HomeMission />
    <HomeSustainability />
    <HomeBanner />
</template>
<script>
import '@/assets/css/index.css'
import HomeKey from './HomeKey.vue'
import HomeMission from './HomeMission.vue'
import HomeNews from './HomeNews.vue'
import HomeServices from './HomeService.vue'
import HomeSustainability from './HomeSustainability.vue'
import HomeBanner from './HomeBanner.vue'
export default {
    components: { HomeKey, HomeMission, HomeNews, HomeServices, HomeSustainability, HomeBanner }
}
</script>