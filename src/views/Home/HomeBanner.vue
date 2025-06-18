<template>

    <div id="banner-group">
        <div class="wrap d-flex">
            <div class="item">
                <p class="border-ras"><img src="@/assets/images/index/bnr_img1.jpg" width="462" height="248" alt="会社情報"/></p>
                <p class="bnr-link"><router-link to="/company"><span class="fnt-helvetica">COMPANY</span><small>会社情報</small></router-link></p>
            </div>
            <div class="item">
                <p class="border-ras"><img src="@/assets/images/index/bnr_img2.jpg" width="462" height="248" alt="拠点一覧"/></p>
                <p class="bnr-link"><router-link to="/location"><span class="fnt-helvetica">LOCATIONS</span><small>拠点一覧</small></router-link></p>
            </div>
            <div class="item">
                <p class="border-ras"><img src="@/assets/images/index/bnr_img3.jpg" width="462" height="248" alt="採用情報"/></p>
                <p class="bnr-link"><router-link to="/recruit"><span class="fnt-helvetica">RECRUIT</span><small>採用情報</small></router-link></p>
            </div>
        </div>
    </div>


</template>
