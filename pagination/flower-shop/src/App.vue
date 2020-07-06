<template>
  <div id="app">
    <button class="menu-switch" @click="openHeader()"></button>
    <header class="header" :class="{'open': headerSwitch}">
      <div class="logo">
        <router-link to="/" class="link-main">
          <h1>Floshop</h1>
        </router-link>
      </div>
      <div class="menu">
        <div class="menu-panel left-panel">
          <div class="menu-item">
            <div class="sub-menu row-3">
              <router-link to="/product/all" class="link-menu">
                <h3>商品</h3>
              </router-link>
              <router-link to="/product/flowers" class="link-menu-sub">
                <h4>花品</h4>
              </router-link>
              <router-link to="/product/seed" class="link-menu-sub">
                <h4>種子</h4>
              </router-link>
              <router-link to="/product/material" class="link-menu-sub">
                <h4>材料</h4>
              </router-link>
            </div>
          </div>
          <div class="menu-item">
            <div class="sub-menu nohover">
              <router-link to="/introduction" class="link-menu">
                <h3>介紹</h3>
              </router-link>
            </div>
          </div>
          <div class="menu-item">
            <div class="sub-menu nohover">
              <router-link to="/service" class="link-menu">
                <h3>服務</h3>
              </router-link>
            </div>
          </div>
        </div>
        <div class="menu-panel right-panel">
          <div class="menu-item">
            <div class="sub-menu row-1">
              <router-link to="/about" class="link-menu">
                <h3>關於</h3>
              </router-link>
              <a href="https://oxeenn0.com" target="_blank" class="link-menu-sub">
                <h4>Oxeenn0</h4>
              </a>
            </div>
          </div>
          <div class="menu-item">
            <div class="sub-menu nohover">
              <router-link to="/login" class="link-menu" v-if="!getMemberStatus">
                <h3>登入</h3>
              </router-link>
              <div class="link-menu logout" @click="logout()" v-else>
                <h3>登出</h3>
              </div>
            </div>
          </div>
          <div class="menu-item">
            <div class="sub-menu nohover">
              <router-link to="/shopcart" class="link-menu">
                <h3>購物車</h3>
                <div class="exist">{{ shoppingCartItemNum }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container-mask" :class="{'open': headerSwitch}" @click="closeHeader()"></div>
    <router-view :device="isMobile" />

    <div class="footer-border"></div>
    <footer class="footer">
      <div class="main-row">
        <div class="link-group">
          <div class="link-row">
            <router-link class="link-tag" to="/">
              首頁
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </router-link>
            <router-link class="link-tag" to="/product/all">
              商品
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </router-link>
            <router-link class="link-tag" to="/introduction">
              介紹
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </router-link>
          </div>
          <div class="link-row">
            <router-link class="link-tag" to="/service">
              服務
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </router-link>
            <router-link class="link-tag" to="/about">
              關於
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </router-link>
            <router-link class="link-tag" to="/login" v-if="!getMemberStatus">
              登入
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </router-link>
            <div class="link-tag logout" @click="logout()" v-else>
              登出
              <div class="line bottom-line"></div>
              <div class="line right-line"></div>
              <div class="line top-line"></div>
              <div class="line left-line"></div>
            </div>
          </div>
        </div>
        <div class="share" @mouseover="shareHover = true" @mouseout="shareHover = false">
          <img
            class="fb-icon"
            v-show="!shareHover"
            src=".\assets\public\images\Icon_Facebook.svg"
            alt="share to facebook"
          />
          <img
            class="fb-icon"
            @click="shareClick = true; authorMessageClose()"
            v-show="shareHover"
            src=".\assets\public\images\Icon_Facebook_hover.svg"
            alt="share to facebook"
          />
          <div class="author-message" v-show="shareClick">這個作者太懶了，沒有做這個功能！</div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2020 Oxeenn0. All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<style src="./assets/main/styles/main.css"></style>
<style src="./assets/default/styles/default.css"></style>

<script>
export default {
  data() {
    return {
      shareHover: false,
      shareClick: false,
      wait: false,
      headerSwitch: false,
      shoppingCartItemNum: this.$store.getters.getCartShopAmount,
      isMobile: false
    };
  },
  methods: {
    authorMessageClose() {
      if (!this.wait) {
        this.wait = true;
        setTimeout(() => {
          this.shareClick = false;
          this.wait = false;
        }, 2000);
      }
    },
    logout() {
      this.$store.commit("logout");
      if (this.$route.path === "/") {
        return window.scrollTo(0, 0);
      }
      this.$router.push({ name: "index" });
    },
    openHeader() {
      this.headerSwitch = true;
    },
    closeHeader() {
      this.headerSwitch = false;
    },
    deviceJudgment() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  computed: {
    getCartShopAmount() {
      return this.$store.getters.getCartShopAmount;
    },
    getMemberStatus() {
      return this.$store.getters.getSignStatus;
    }
  },
  watch: {
    getCartShopAmount(val) {
      this.shoppingCartItemNum = val;
    }
  },
  mounted() {
    if (this.deviceJudgment()) {
      this.isMobile = true;
    }
  }
};
</script>