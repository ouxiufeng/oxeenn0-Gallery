<template>
  <div class="style-item item-width">
    <div class="fitst-row">
      <div class="attr-name">width</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-width-height" :class="{ close: closeItem }">
      <input type="range" class="attr-valuebar" min="0" :max="maxJudgment()" v-model="gWidth" />
      <div class="attr-value-item">
        <input type="text" class="attr-value" step=".1" v-model="gWidth" />
        <select v-model="gWidthType">
          <option value="px">px</option>
          <option value="%">%</option>
        </select>
      </div>

      <label class="switch-item widthauto" :class="{ open: gWidthAuto }">
        <input type="checkbox" v-model="gWidthAuto" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeItem: false
    };
  },
  computed: {
    gWidth: {
      get() {
        return this.$store.getters.gWidth;
      },
      set(val) {
        this.$store.commit("uWidth", val);
      }
    },
    gWidthAuto: {
      get() {
        return this.$store.getters.gWidthAuto;
      },
      set(val) {
        this.$store.commit("uWidthAuto", val);
      }
    },
    gWidthType: {
      get() {
        return this.$store.getters.gWidthType;
      },
      set(val) {
        this.$store.commit("uWidthType", val);
      }
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    maxJudgment() {
      if (this.gWidthType === "px") {
        return 500;
      } else if (this.gWidthType === "%") {
        return 100;
      }
    }
  }
};
</script>