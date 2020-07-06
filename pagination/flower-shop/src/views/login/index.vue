<template>
  <div class="container">
    <section class="login">
      <h2 class="title">會員登入</h2>
      <form class="login-form" @submit.prevent="login">
        <label class="label-item">
          帳號
          <span>(guest)</span>
        </label>
        <input class="input-item" type="text" v-model="account" spellcheck="false" required v-focus />
        <label class="label-item">
          密碼
          <span>(123456)</span>
        </label>
        <input class="input-item" type="password" v-model="password" spellcheck="false" required />
        <button type="submit">登入</button>
      </form>
      <div class="goto-registered">
        <button class="registered-btn">
          <router-link class="goto-registered-link" to="/login/registered">我沒有帳號</router-link>
        </button>
      </div>
    </section>
  </div>
</template>

<style src="../../assets/login/styles/login.css" scoped></style>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    login() {
      let memberData = this.$store.getters.getMemberData;
      for (const item of memberData) {
        if (item.account === this.account && item.password === this.password) {
          this.$router.replace({ name: "index" });
          this.$store.commit("login");
          return;
        }
      }

      alert("帳號或密碼錯誤!");
      this.account = "";
      this.password = "";
      return;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
