<template>
  <div class="container">
    <section class="product-block">
      <h2 class="title">商品</h2>
      <div class="show-window">
        <div class="left-panel">
          <div class="flowers-area">
            <swiper :options="swiperOptionsFlowers" class="swiper-no-swiping" ref="mySwiper">
              <swiper-slide>
                <div class="flowers-img img1"></div>
              </swiper-slide>

              <swiper-slide>
                <div class="flowers-img img2"></div>
              </swiper-slide>

              <swiper-slide>
                <div class="flowers-img img3"></div>
              </swiper-slide>
            </swiper>
            <div class="mask">
              <router-link class="showindows-goto" to="/product/flowers">
                <h4>花品</h4>
                <div class="line"></div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="right-panel">
          <div class="panel-area">
            <div class="panel-block">
              <swiper :options="swiperOptionsSeeds" class="swiper-no-swiping" ref="mySwiper">
                <swiper-slide>
                  <div class="img seed-img1"></div>
                </swiper-slide>

                <swiper-slide>
                  <div class="img seed-img2"></div>
                </swiper-slide>
              </swiper>

              <div
                class="mask"
                @mouseenter="displaySwitchSeed = true"
                @mouseout="displaySwitchSeed = false"
              >
                <router-link class="showindows-goto" to="/product/seed">
                  <!-- <h4>種子</h4>
                  <div class="line"></div>-->
                </router-link>
              </div>
            </div>
            <div class="panel-block">
              <div class="text text-seed" :class="{'open': displaySwitchSeed, 'isMobile': device}">
                <h4>種子</h4>
              </div>
            </div>
          </div>
          <div class="panel-area">
            <div class="panel-block">
              <div class="text text-material" :class="{'open': displaySwitchMaterial, 'isMobile': device}">
                <h4>材料工具</h4>
              </div>
            </div>
            <div class="panel-block">
              <swiper :options="swiperOptionsMaterial" class="swiper-no-swiping" ref="mySwiper">
                <swiper-slide>
                  <div class="img material-img1"></div>
                </swiper-slide>

                <swiper-slide>
                  <div class="img material-img2"></div>
                </swiper-slide>

                <swiper-slide>
                  <div class="img material-img3"></div>
                </swiper-slide>
              </swiper>

              <div
                class="mask"
                @mouseenter="displaySwitchMaterial = true"
                @mouseout="displaySwitchMaterial = false"
              >
                <router-link class="showindows-goto" to="/product/material">
                  <!-- <h4>工具</h4>
                  <div class="line"></div>-->
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="introduction-block">
      <h2 class="title">介紹</h2>
      <div class="introduction">
        <p class="content">本花店於 1996 年開店至今，並於 2020 年 6 月為開展網路形象成立網站，致力於服務更多的客戶......</p>
        <div class="button-group">
          <div class="btn">
            <router-link class="introduction-goto" to="/introduction">了解更多</router-link>
            <div class="hover-block blue"></div>
          </div>
          <div class="btn">
            <router-link class="introduction-goto" to="/service">商家位置</router-link>
            <div class="hover-block red"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="service-block">
      <h2 class="title">服務</h2>
      <div class="service">
        <div class="show-service">
          <div class="service-item img1">
            <h4>婚禮佈置</h4>
          </div>
          <div class="service-item img2">
            <h4>園藝咨詢</h4>
          </div>
          <div class="service-item img3">
            <h4>農耕專家</h4>
          </div>
        </div>
        <div class="btn-area">
          <div class="line left-line" :class="{ 'open': displaySwitchLine }"></div>
          <div class="btn" @mouseover="displaySwitchLine = true" @mouseout="displaySwitchLine = false">
            <router-link class="goto-service" to="/service">
              <p>前往</p>
            </router-link>
          </div>
          <div class="line right-line" :class="{ 'open': displaySwitchLine }"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style src="../assets/index/styles/index.css" scoped></style>

<script>
export default {
  data() {
    return {
      displaySwitchSeed: false,
      displaySwitchMaterial: false,
      displaySwitchLine: false,
      swiperOptionsFlowers: {
        spaceBetween: 0,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          reverseDirection: true
        }
      },

      swiperOptionsSeeds: {
        direction: "vertical",
        spaceBetween: 0,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3100,
          reverseDirection: true
        }
      },

      swiperOptionsMaterial: {
        spaceBetween: 0,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3200
        }
      }
    }
  },
  props: {
    device: {
      type: Boolean,
      required: true
    }
  }
};
</script>
