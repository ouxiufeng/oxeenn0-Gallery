<template>
  <div class="container">
    <section class="product">
      <h2 class="title">商品</h2>
      <div class="panel-main">
        <div class="panel-left">
          <div class="product-menu">
            <h3 class="list-title">品項</h3>
            <ul class="list-group">
              <router-link class="nav" to="/product/all">
                <li
                  class="list-item"
                  :class="{'hover-status': isHover}"
                  @mouseover="menuHoverTrue()"
                  @mouseout="menuHoverFalse()"
                >
                  <h4 class="list-text" :class="{'focus': currentRoute === 'all'}">所有</h4>
                </li>
              </router-link>

              <router-link class="nav" to="/product/flowers">
                <li
                  class="list-item"
                  :class="{'hover-status': isHover}"
                  @mouseover="menuHoverTrue()"
                  @mouseout="menuHoverFalse()"
                >
                  <h4 class="list-text" :class="{'focus': currentRoute === 'flowers'}">花品</h4>
                </li>
              </router-link>

              <router-link class="nav" to="/product/seed">
                <li
                  class="list-item"
                  :class="{'hover-status': isHover}"
                  @mouseover="menuHoverTrue()"
                  @mouseout="menuHoverFalse()"
                >
                  <h4 class="list-text" :class="{'focus': currentRoute === 'seed'}">種子</h4>
                </li>
              </router-link>

              <router-link class="nav" to="/product/material">
                <li
                  class="list-item"
                  :class="{'hover-status': isHover}"
                  @mouseover="menuHoverTrue()"
                  @mouseout="menuHoverFalse()"
                >
                  <h4 class="list-text" :class="{'focus': currentRoute === 'material'}">材料</h4>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="panel-right">
          <div class="panel-top">
            <div class="search-bar">
              <input
                type="text"
                v-model.trim="searchTarget"
                @keyup.enter="search()"
                placeholder="按下 Enter 搜尋"
              />
            </div>
            <div class="filter">
              <div class="filter-item" @click="sortPrice(), focusTrue(), sortProduct()">
                <div
                  class="filter-bgc"
                  :class="{'ascend': sequencePrice, 'not-focus': !focusSwitch}"
                ></div>
                <div class="arrow top-arrow">↑</div>
                <div class="text">按金額排序</div>
                <div class="arrow bottom-arrow">↓</div>
              </div>
              <div class="filter-item" @click="sortName(), focusFalse(), sortProduct()">
                <div class="filter-bgc" :class="{'ascend': sequenceName, 'not-focus': focusSwitch}"></div>
                <div class="arrow top-arrow">↑</div>
                <div class="text">按名稱排序</div>
                <div class="arrow bottom-arrow">↓</div>
              </div>
            </div>
          </div>
          <div class="panel-middle">
            <div class="product-show">
              <div class="product-item" v-for="(item, index) in groupProductData" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="img">
                  <img :src="item.img" :alt="item.imgAlt" />
                </div>
                <div class="bottom">
                  <div class="price">${{item.price}}</div>
                  <div class="add-shopcart">
                    <input class="buy-number" type="number" value="1" min="1" max="20" />
                    <button class="shopcart-btn" @click="pushShoppingCart(item, index)">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="panel-bottom">
            <div class="pagination">
              <div
                class="page-item"
                v-for="(item, index) in pagination"
                :key="index"
                @click="group(index)"
              >
                <span>{{ index + 1 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style src="../../assets/product/styles/product.css" scoped></style>

<script>
export default {
  data() {
    return {
      productData: [],
      groupProductData: [],
      searchTarget: "",
      sequenceName: false,
      sequencePrice: false,
      focusSwitch: false,
      isHover: false,
      pagination: 1,
      currentRoute: this.$route.name
    };
  },
  computed: {},
  methods: {
    sortName() {
      this.sequenceName = !this.sequenceName;
    },
    sortPrice() {
      this.sequencePrice = !this.sequencePrice;
    },
    focusTrue() {
      if (!this.focusSwitch) {
        this.sequenceName = false;
        this.focusSwitch = true;
      }
    },
    focusFalse() {
      if (this.focusSwitch) {
        this.sequencePrice = false;
        this.focusSwitch = false;
      }
    },
    menuHoverTrue() {
      this.isHover = true;
    },
    menuHoverFalse() {
      this.isHover = false;
    },
    getData() {
      this.productData = this.$store.getters.getData;
      this.paginationInit();
      this.sortProduct();
    },
    sortProduct() {
      if (this.focusSwitch) {
        if (!this.sequencePrice) {
          this.productData.sort((a, b) => {
            return a.price - b.price;
          });
        } else if (this.sequencePrice) {
          this.productData.sort((a, b) => {
            return b.price - a.price;
          });
        }
      } else if (!this.focusSwitch) {
        if (!this.sequenceName) {
          this.productData.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        } else if (this.sequenceName) {
          this.productData.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        }
      }
      this.groupingInit();
    },
    paginationInit() {
      this.pagination = Math.ceil(this.productData.length / 9);
    },
    groupingInit() {
      this.groupProductData = this.productData.slice(0, 9);
    },
    group(index) {
      index += 1;
      this.groupProductData = this.productData.slice(
        (index - 1) * 9,
        index * 9
      );
      window.scrollTo(0, 0)
    },
    search() {
      this.searchTarget = this.searchTarget.toUpperCase();
      this.productData = this.searchFilter();
      this.paginationInit();
      this.sortProduct();
    },
    searchFilter() {
      return this.productData.filter(searchResult =>
        searchResult.name.match(this.searchTarget)
      );
    },
    pushShoppingCart(item, index) {
      let buyNumber = document.querySelectorAll(".buy-number");
      let num = buyNumber[index].value;

      if (num % 1 !== 0 || num < 1) {
        return alert("輸入格式不正確!");
      }

      num = parseInt(num, 10);

      this.$store.commit("setShopCartData", { data: item, num: num });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route(from) {
      this.getData();
      this.currentRoute = from.name;
    },
    searchTarget: function(target) {
      if (target.length === 0) {
        this.getData();
        this.paginationInit();
        this.sortProduct();
      }
    }
  }
};
</script>