<template>
  <div id="news" class="border-ras">
    <div class="box">
      <FadeInUp>
        <div class="col-txt">
          <h2 class="ttl-style"><span class="fnt-helvetica">NEWS</span><em>事業内容</em></h2>
          <p class="txt">
            日本陸送からのお知らせをお届けします。当社の最新情報や、サービス内容について随時更新してまいりますので、楽しみにお待ちください。
          </p>
        </div>
      </FadeInUp>
      <FadeInUp>
        <div class="news-detail">
          <div class="item d-flex">
            <p class="news-img">
              <img src="@/assets/images/index/news_img1.jpg" width="150" height="100" alt="photo" />
            </p>
            <dl>
              <dt class="news-date">2025年1月28日</dt>
              <dd class="news-title">創立65周年を迎えるにあたり、ユニフォームを刷新</dd>
            </dl>
            <p class="btn-more">
              <router-link to="/news_detail"
                ><img src="@/assets/images/arrow_red.png" width="25" height="25" alt="icon arrow"
              /></router-link>
            </p>
          </div>
          <div class="item d-flex">
            <p class="news-img">
              <img src="@/assets/images/index/news_img2.jpg" width="150" height="100" alt="photo" />
            </p>
            <dl>
              <dt class="news-date">2025年1月28日</dt>
              <dd class="news-title">
                ベストプラクティス企業に選定していただき、三重労働局長様方と意見交換を行いました。
              </dd>
            </dl>
            <p class="btn-more">
              <router-link to="/news_detail"
                ><img src="@/assets/images/arrow_red.png" width="25" height="25" alt="icon arrow"
              /></router-link>
            </p>
          </div>
          <div class="item d-flex">
            <p class="news-img">
              <img src="@/assets/images/index/news_img3.jpg" width="150" height="100" alt="photo" />
            </p>
            <dl>
              <dt class="news-date">2025年1月28日</dt>
              <dd class="news-title">「NLJ-Plus+」に加入させていただきました。</dd>
            </dl>
            <p class="btn-more">
              <router-link to="/news_detail"
                ><img src="@/assets/images/arrow_red.png" width="25" height="25" alt="icon arrow"
              /></router-link>
            </p>
          </div>
          <div class="item d-flex">
            <p class="news-img">
              <img src="@/assets/images/index/news_img4.jpg" width="150" height="100" alt="photo" />
            </p>
            <dl>
              <dt class="news-date">2025年1月28日</dt>
              <dd class="news-title">「NLJ-Plus+」に加入させていただきました。</dd>
            </dl>
            <p class="btn-more">
              <router-link to="/news_detail"
                ><img src="@/assets/images/arrow_red.png" width="25" height="25" alt="icon arrow"
              /></router-link>
            </p>
          </div>
        </div>
      </FadeInUp>
      <FadeInUp class="btn-viewmore">
        <p>
          <router-link to="/news" class="btn-global">View More</router-link>
        </p>
      </FadeInUp>
    </div>
  </div>
</template>
<script setup>
import FadeInUp from '@/components/transitions/fadeInUp.vue'
</script>
