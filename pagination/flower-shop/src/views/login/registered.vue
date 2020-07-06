<template>
  <div class="container">
    <section class="registered">
      <h2 class="title">會員註冊</h2>
      <div class="tips" :class="{'close': tips}">
        <div class="icon"></div>
        <div class="cancel" @click="cancleTips()"></div>
        <p class="text">提醒您，註冊的資料將在關閉或重新整理網站時自動刪除。</p>
      </div>
      <form class="registered-form" autocomplete="off" @submit.prevent="registered">
        <label class="label-item" for="account">帳號</label>
        <input
          type="text"
          class="input-item"
          id="account"
          v-model="account"
          required
          v-focus
        />

        <label class="label-item" for="password">密碼</label>
        <input type="password" class="input-item" id="password" v-model="password" required />

        <label class="label-item" for="password-again">確認密碼</label>
        <input
          type="password"
          class="input-item"
          id="password-again"
          v-model="passwordAgain"
          required
        />

        <label class="label-item" for="email">信箱</label>
        <input type="email" class="input-item" id="email" v-model="email" required />

        <label class="label-item" for="username">使用者名稱</label>
        <input
          type="text"
          class="input-item"
          id="username"
          v-model="username"
          required
        />

        <button class="submit">提交</button>
      </form>
    </section>
  </div>
</template>

<style src="../../assets/login/styles/login.css" scoped></style>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      passwordAgain: "",
      email: "",
      username: "",
      tips: false
    };
  },
  methods: {
    registered() {

      if (this.password !== this.passwordAgain) {
        alert("密碼不一致!");
        this.password = "";
        this.passwordAgain = "";
        return;
      }

      let newMemberData = {
        id: this.$store.getters.getId,
        account: this.account,
        password: this.password,
        email: this.email,
        username: this.username
      };

      for (const item of this.$store.getters.getMemberData) {
        if (item.account === this.account) {
          alert("使用者帳號已註冊!");
          this.account = "";
          return;
        }

        if (item.email === this.email) {
          alert("此信箱已註冊!");
          this.email = "";
          return;
        }
      }

      this.$store.commit("setMemberData", newMemberData);
      alert("註冊成功!");
      this.$router.push({ name: "index" });
    },
    cancleTips() {
      this.tips = true;
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