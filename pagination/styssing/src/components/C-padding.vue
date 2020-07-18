<template>
  <div class="style-item item-padding">
    <div class="fitst-row">
      <div class="attr-name">Padding</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-padding" :class="{ close: closeItem }">
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
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sPadding1" />
        <input type="text" class="attr-value" step=".1" v-model="sPadding1" />
      </div>
      <div class="atrr-item" v-if="shorthand2">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sPadding2" />
        <input type="text" class="attr-value" step=".1" v-model="sPadding2" />
      </div>
      <div class="atrr-item" v-if="shorthand3">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sPadding3" />
        <input type="text" class="attr-value" step=".1" v-model="sPadding3" />
      </div>
      <div class="atrr-item" v-if="shorthand4">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="sPadding4" />
        <input type="text" class="attr-value" step=".1" v-model="sPadding4" />
      </div>
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
    sPadding1: {
      get() {
        return this.$store.getters.gPadding1;
      },
      set(val) {
        this.$store.commit("uPadding1", { val: val, type: this.shorthandType });
      }
    },
    sPadding2: {
      get() {
        return this.$store.getters.gPadding2;
      },
      set(val) {
        this.$store.commit("uPadding2", { val: val, type: this.shorthandType });
      }
    },
    sPadding3: {
      get() {
        return this.$store.getters.gPadding3;
      },
      set(val) {
        this.$store.commit("uPadding3", val);
      }
    },
    sPadding4: {
      get() {
        return this.$store.getters.gPadding4;
      },
      set(val) {
        this.$store.commit("uPadding4", val);
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
      this.$store.commit("uPaddingType", val);
    }
  }
};
</script>