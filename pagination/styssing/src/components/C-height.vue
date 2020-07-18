<template>
  <div class="style-item item-height">
    <div class="fitst-row">
      <div class="attr-name">height</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-width-height" :class="{ close: closeItem }">
      <input type="range" class="attr-valuebar" min="0" :max="maxJudgment()" v-model="gHeight" />
      <div class="attr-value-item">
        <input type="text" class="attr-value" step=".1" v-model="gHeight" />
        <select v-model="gHeightType">
          <option value="px">px</option>
          <option value="%">%</option>
        </select>
      </div>

      <label class="switch-item heightauto" :class="{ open: gHeightAuto }">
        <input type="checkbox" v-model="gHeightAuto" />
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
    gHeight: {
      get() {
        return this.$store.getters.gHeight;
      },
      set(val) {
        this.$store.commit("uHeight", val);
      }
    },
    gHeightAuto: {
      get() {
        return this.$store.getters.gHeightAuto;
      },
      set(val) {
        this.$store.commit("uHeightAuto", val);
      }
    },
    gHeightType: {
      get() {
        return this.$store.getters.gHeightType;
      },
      set(val) {
        this.$store.commit("uHeightType", val);
      }
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    maxJudgment() {
      if (this.gHeightType === "px") {
        return 500;
      } else if (this.gHeightType === "%") {
        return 100;
      }
    }
  }
};
</script>