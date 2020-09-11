<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
