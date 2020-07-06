<template>
  <div class="container">
    <section class="web-info">
      <h2 class="title">網站資訊</h2>
      <div class="emphasis">
        <p>
          本站為實驗作品，為
          <a class="oxeenn0Anime" href="https://oxeenn0.com">Oxeenn0</a>
          所有，將不用做任何商業用途！
        </p>
        <p>本站為純前端作品。</p>
      </div>

      <div class="sources">
        <h3 class="subTitle">🎉Framework✌️</h3>
        <div class="tools">
          <a class="tool" href="https://cli.vuejs.org/" target="_bland">Vue CLI</a>
          <div class="support">
            <span>( </span>
            <a class="tool" href="https://github.com/vuejs/vuex#readme" target="_bland">Vuex</a>
            <span> / </span>
            <a
              class="tool"
              href="https://github.com/vuejs/vuex-router-sync#readme"
              target="_bland"
            >vuex-router-sync</a>
            <span> )</span>
          </div>
        </div>

        <h3 class="subTitle">💪Library🎊</h3>
        <div class="tools">
          <a class="tool" href="https://swiperjs.com/" target="_bland">Swiper</a>
          <a class="tool" href="https://masonry.desandro.com/" target="_bland">Masonry</a>
          <a class="tool" href="https://animejs.com/" target="_bland">Anime.js</a>
          <a
            class="tool"
            href="https://github.com/shershen08/vue-masonry#readme"
            target="_bland"
          >vue-masonry</a>
          <a
            class="tool"
            href="https://github.com/xkjyeah/vue-google-maps#readme"
            target="_bland"
          >vue-google-maps</a>
          <a
            class="tool"
            href="https://github.com/surmon-china/vue-awesome-swiper"
            target="_bland"
          >vue-awesome-swiper</a>
        </div>

        <h3 class="subTitle">🖼️Source👍</h3>
        <div class="masonry-container" v-masonry transition-duration="0.3s" item-selector=".item">
          <div v-masonry-tile class="item" v-for="(item, index) in blocks" :key="index">
            <div class="img-item" :class="item.class">
              <a :href="item.url" target="_blank">
                <img :src="item.img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style src="../assets/about/styles/about.css" scoped></style>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          name: "show-windows-flower-001",
          url: "https://pxhere.com/es/photo/1541913",
          img: require("../assets/index/images/show-windows-flowers/show-windows-flower-001.jpg"),
          class: "img-size"
        },
        {
          name: "show-windows-flower-002",
          url: "https://www.pexels.com/zh-tw/photo/842862/",
          img: require("../assets/index/images/show-windows-flowers/show-windows-flower-002.jpg"),
          class: "img-size2"
        },
        {
          name: "show-windows-flower-003",
          url:
            "https://www.pexels.com/vi-vn/anh/bo-hoa-c-m-hoa-c-n-c-nh-canh-hoa-931178/",
          img: require("../assets/index/images/show-windows-flowers/show-windows-flower-003.jpg"),
          class: "img-size"
        },
        {
          name: "show-windows-material-001",
          url: "https://www.pexels.com/zh-tw/photo/4505151/",
          img: require("../assets/index/images/show-windows-material/show-windows-material-001.jpeg"),
          class: "img-size2"
        },
        {
          name: "show-windows-material-002",
          url:
            "https://pixabay.com/zh/photos/pastel-potted-plant-flowers-season-4279383/",
          img: require("../assets/index/images/show-windows-material/show-windows-material-002.jpg"),
          class: "img-size"
        },
        {
          name: "show-windows-material-003",
          url: "https://perfectplants.co.uk/blog/its-time-for-hanging-baskets",
          img: require("../assets/index/images/show-windows-material/show-windows-material-003.jpg"),
          class: "img-size2"
        },
        {
          name: "show-windows-seed-001",
          url: "https://www.pexels.com/zh-tw/photo/934011/",
          img: require("../assets/index/images/show-windows-seed/show-windows-seed-001.jpeg"),
          class: "img-size"
        },
        {
          name: "show-windows-seed-002",
          url: "https://www.pexels.com/zh-tw/photo/1172849/",
          img: require("../assets/index/images/show-windows-seed/show-windows-seed-002.jpeg"),
          class: "img-size2"
        },
        {
          name: "server-001",
          url:
            "https://www.pexels.com/nl-nl/foto/bloemen-bos-bloemen-bruiloft-bruiloft-organiseren-169193/",
          img: require("../assets/index/images/server/server-001.jpeg"),
          class: "img-size"
        },
        {
          name: "server-002",
          url: "https://pixnio.com/zh/media/zh-2278643",
          img: require("../assets/index/images/server/server-002.jpg"),
          class: "img-size2"
        },
        {
          name: "server-003",
          url: "https://sa.lovepik.com/image-501441961/farmers.html",
          img: require("../assets/index/images/server/server-003.jpg"),
          class: "img-size"
        },
        {
          name: "product-flower-001",
          url: "https://www.pexels.com/zh-tw/photo/1488310/",
          img: require("../assets/product/images/flower/product-flower-001.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-flower-002",
          url: "https://www.pexels.com/zh-tw/photo/289519/",
          img: require("../assets/product/images/flower/product-flower-002.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-flower-003",
          url: "https://www.pexels.com/zh-tw/photo/931147/",
          img: require("../assets/product/images/flower/product-flower-003.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-flower-004",
          url: "https://www.pexels.com/zh-tw/photo/226145/",
          img: require("../assets/product/images/flower/product-flower-004.jpeg"),
          class: "img-size"
        },
        {
          name: "product-flower-005",
          url: "https://www.pexels.com/zh-tw/photo/1109561/",
          img: require("../assets/product/images/flower/product-flower-005.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-flower-006",
          url: "https://www.pexels.com/zh-tw/photo/1808178/",
          img: require("../assets/product/images/flower/product-flower-006.jpeg"),
          class: "img-size"
        },
        {
          name: "product-flower-007",
          url: "https://www.pexels.com/zh-tw/photo/931155/",
          img: require("../assets/product/images/flower/product-flower-007.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-flower-008",
          url: "https://www.pexels.com/zh-tw/photo/1352808/",
          img: require("../assets/product/images/flower/product-flower-008.jpeg"),
          class: "img-size"
        },
        {
          name: "product-flower-009",
          url: "https://www.pexels.com/zh-tw/photo/595452/",
          img: require("../assets/product/images/flower/product-flower-009.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-flower-010",
          url: "https://www.pexels.com/zh-tw/photo/585410/",
          img: require("../assets/product/images/flower/product-flower-010.jpeg"),
          class: "img-size"
        },
        {
          name: "product-material-001",
          url: "https://www.pexels.com/zh-tw/photo/311458/",
          img: require("../assets/product/images/material/product-material-001.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-material-002",
          url: "https://www.pexels.com/zh-tw/photo/776656/",
          img: require("../assets/product/images/material/product-material-002.jpeg"),
          class: "img-size"
        },
        {
          name: "product-material-003",
          url: "https://www.pexels.com/zh-tw/photo/copyspace-970089/",
          img: require("../assets/product/images/material/product-material-003.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-material-004",
          url: "https://www.pexels.com/zh-tw/photo/1903965/",
          img: require("../assets/product/images/material/product-material-004.jpeg"),
          class: "img-size"
        },
        {
          name: "product-material-005",
          url: "https://www.pexels.com/zh-tw/photo/2694050/",
          img: require("../assets/product/images/material/product-material-005.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-seed-001",
          url: "https://www.pexels.com/zh-tw/photo/133472/",
          img: require("../assets/product/images/seed/product-seed-001.jpeg"),
          class: "img-size"
        },
        {
          name: "product-seed-002",
          url: "https://www.pexels.com/zh-tw/photo/36729/",
          img: require("../assets/product/images/seed/product-seed-002.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-seed-003",
          url: "https://www.pexels.com/zh-tw/photo/iphone-1366630/",
          img: require("../assets/product/images/seed/product-seed-003.jpeg"),
          class: "img-size"
        },
        {
          name: "product-seed-004",
          url: "https://www.pexels.com/zh-tw/photo/573020/",
          img: require("../assets/product/images/seed/product-seed-004.jpeg"),
          class: "img-size2"
        },
        {
          name: "product-seed-005",
          url: "https://www.pexels.com/zh-tw/photo/4466491/",
          img: require("../assets/product/images/seed/product-seed-005.jpeg"),
          class: "img-size"
        }
      ]
    };
  },
  mounted() {
    let oxeenn0AnimeText = document.querySelector(".oxeenn0Anime");
    oxeenn0AnimeText.innerHTML = oxeenn0AnimeText.textContent.replace(
      /\S/g,
      "<span class='letter' style='display: inline-block;'>$&</span>"
    );
    this.$animejs
      .timeline({ loop: true })
      .add({
        targets: ".oxeenn0Anime .letter",
        translateY: [0, -10],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * i
      })
      .add({
        targets: ".oxeenn0Anime .letter",
        translateY: [-10, 0],
        translateZ: 0,
        duration: 600,
        delay: (el, i) => 70 * i
      });
  }
};
</script>