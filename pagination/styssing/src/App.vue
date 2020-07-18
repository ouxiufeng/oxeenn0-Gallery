<template>
  <div id="app">
    <section class="control-panel">
      <div class="title">Styssing</div>
      <router-view></router-view>
    </section>
    <section class="right-area">
      <section class="type-panel">
        <div class="type-group">
          <router-link class="type-item" to="/button">BUTTON</router-link>
        </div>
      </section>
      <section class="right-bottom-block">
        <section class="show-panel">
          <router-view name="show"></router-view>
        </section>
        <section class="setting-panel">
          <button class="code-btn" @click="codePanelSwitch = true"></button>
          <button class="about-btn" @click="aboutPanelSwitch = true"></button>
        </section>
      </section>

      <section class="code-panel" :class="{ open: codePanelSwitch }">
        <textarea readonly class="show-code" :value=showCode></textarea>
        <button class="fold-btn" @click="codePanelSwitch = false"></button>
      </section>

      <section class="about-panel" :class="{ open: aboutPanelSwitch }">
        <h3 class="author">Author</h3>
        <h3 class="author-name"><a href="https://oxeenn0.com" target="_blank">Oxeenn0</a></h3>
        <h3 class="version">Version</h3>
        <h3 class="version-name">Beta 1.0.0</h3>
        <button class="fold-btn" @click="aboutPanelSwitch = false"></button>
      </section>
    </section>
  </div>
</template>

<style src="@\assets\main\main.css"></style>

<script>
export default {
  data() {
    return {
      codePanelSwitch: false,
      aboutPanelSwitch: false,
      showCode: this.$store.getters.gStyle
    };
  },
  computed: {
    gStyle() {
      return this.$store.getters.gStyle;
    }
  },
  watch: {
    gStyle(str) {
      this.showCode = str;
    }
  }
};
</script>

