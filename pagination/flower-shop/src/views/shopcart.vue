<template>
  <div class="container">
    <section class="shopcart">
      <h2 class="title">購物清單</h2>
      <table class="product-table">
        <tr class="t-head">
          <th class="columns-name">名稱</th>
          <th class="columns-name">數量</th>
          <th class="columns-name">價格</th>
        </tr>
        <tr class="t-body" v-for="(item, index) in productData" :key="index">
          <td class="columns-value">{{ item.name }}</td>
          <td class="columns-value">{{ item.num }}</td>
          <td class="columns-value">{{ item.price }}</td>
        </tr>
      </table>
      <div class="btn-group">
        <button class="shopcart-btn" @click="buyCheck()">確認</button>
        <button class="shopcart-btn" @click="clearShopCart()">清除購物車</button>
      </div>
    </section>
  </div>
</template>

<style src="../assets/shopcart/styles/shopcart.css" scoped></style>

<script>
export default {
  data() {
    return {
      productData: this.$store.getters.getShopCartData
    };
  },
  methods: {
    clearShopCart() {
      this.$store.commit("clearShopCartData");
    },
    buyCheck() {
      if (!this.productData.length) {
        return alert("您目前沒有商品。");
      }
      if (!this.$store.getters.getSignStatus) {
        alert("請先登錄會員。");
        return this.$router.push({ name: "login" });
      }

      alert("訂購完成!");
      this.$store.commit("clearShopCartData");
      this.$router.replace({ name: "index" });
    }
  },
  computed: {
    listenerShopCartData() {
      return this.$store.getters.getShopCartData;
    }
  },
  watch: {
    listenerShopCartData(data) {
      this.productData = data;
    }
  }
};
</script>