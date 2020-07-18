<template>
  <div class="style-item item-margin">
    <div class="fitst-row">
      <div class="attr-name">Margin</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-margin" :class="{ close: closeItem }">
      <div class="select-group">
        <div class="select-item full">
          <select class="shorthand" v-model="shorthandType" @click="focus(shorthandType)">
            <option value="val1">val1</option>
            <option value="val2">val2</option>
            <option value="val3">val3</option>
            <option value="val4">val4</option>
          </select>
        </div>
      </div>

      <div class="atrr-item" v-if="shorthand1">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sMargin1" />
        <input type="text" class="attr-value" step=".1" v-model="sMargin1" />
      </div>
      <div class="atrr-item" v-if="shorthand2">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sMargin2" />
        <input type="text" class="attr-value" step=".1" v-model="sMargin2" />
      </div>
      <div class="atrr-item" v-if="shorthand3">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sMargin3" />
        <input type="text" class="attr-value" step=".1" v-model="sMargin3" />
      </div>
      <div class="atrr-item" v-if="shorthand4">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sMargin4" />
        <input type="text" class="attr-value" step=".1" v-model="sMargin4" />
      </div>

      <label class="switch-item margin-range" :class="{ open: sMarginRange }">
        <input type="checkbox" v-model="sMarginRange" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeItem: false,
      shorthandType: "val1",
      shorthand1: true,
      shorthand2: false,
      shorthand3: false,
      shorthand4: false
    };
  },
  computed: {
    sMargin1: {
      get() {
        return this.$store.getters.gMargin1;
      },
      set(val) {
        this.$store.commit("uMargin1", { val: val, type: this.shorthandType });
      }
    },
    sMargin2: {
      get() {
        return this.$store.getters.gMargin2;
      },
      set(val) {
        this.$store.commit("uMargin2", { val: val, type: this.shorthandType });
      }
    },
    sMargin3: {
      get() {
        return this.$store.getters.gMargin3;
      },
      set(val) {
        this.$store.commit("uMargin3", val);
      }
    },
    sMargin4: {
      get() {
        return this.$store.getters.gMargin4;
      },
      set(val) {
        this.$store.commit("uMargin4", val);
      }
    },
    sMarginRange: {
      get() {
        return this.$store.state.additional.marginRange;
      },
      set(val) {
        this.$store.commit("uMarginRange", val);
      }
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    focus(val) {
      this.shorthand1 = false;
      this.shorthand2 = false;
      this.shorthand3 = false;
      this.shorthand4 = false;
      switch (val) {
        case "val1":
          this.shorthand1 = true;
          break;
        case "val2":
          this.shorthand1 = true;
          this.shorthand2 = true;
          break;
        case "val3":
          this.shorthand1 = true;
          this.shorthand2 = true;
          this.shorthand3 = true;
          break;
        case "val4":
          this.shorthand1 = true;
          this.shorthand2 = true;
          this.shorthand3 = true;
          this.shorthand4 = true;
          break;
      }
    }
  },
  watch: {
    shorthandType(val) {
      this.$store.commit("uMaringType", val);
    }
  }
};
</script>