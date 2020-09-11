<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    checkDevice() {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return alert("此應用不建議在行動裝置上執行!");
      }
    }
  },
  mounted() {
    this.checkDevice();
  }
};
</script>

<style lang="scss">
* {
  user-select: none;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

button:disabled {
  background-color: #efefef;
  cursor: default;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
