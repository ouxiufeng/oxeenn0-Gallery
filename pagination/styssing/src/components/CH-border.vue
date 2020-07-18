<template>
  <div class="style-item item-border">
    <div class="fitst-row">
      <div class="attr-name">Border</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-hover-border" :class="{ close: closeItem }">
      <label class="switch-item ishover" :class="{ open: gHoverBorderIsHover }">
        <input type="checkbox" v-model="gHoverBorderIsHover" />
      </label>

      <!-- AREA: Border shorthand -->
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

      <!-- AREA: Border width -->
      <h3 class="sub-title">Border width</h3>
      <div class="atrr-item" v-if="shorthand1">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderWidth1" />
        <input type="text" class="attr-value" step=".1" v-model="gHoverBorderWidth1" />
      </div>
      <div class="atrr-item" v-if="shorthand2">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderWidth2" />
        <input type="text" class="attr-value" step=".1" v-model="gHoverBorderWidth2" />
      </div>
      <div class="atrr-item" v-if="shorthand3">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderWidth3" />
        <input type="text" class="attr-value" step=".1" v-model="gHoverBorderWidth3" />
      </div>
      <div class="atrr-item" v-if="shorthand4">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderWidth4" />
        <input type="text" class="attr-value" step=".1" v-model="gHoverBorderWidth4" />
      </div>

      <!-- AREA: Border style  -->
      <h3 class="sub-title">Border style</h3>
      <div class="select-group">
        <div class="select-item full" v-if="shorthand1">
          <select v-model="gHoverBorderStyle1">
            <option value="solid">solid</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="none">none</option>
          </select>
        </div>
        <div class="select-item full" v-if="shorthand2">
          <select v-model="gHoverBorderStyle2">
            <option value="solid">solid</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="none">none</option>
          </select>
        </div>
        <div class="select-item full" v-if="shorthand3">
          <select v-model="gHoverBorderStyle3">
            <option value="solid">solid</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="none">none</option>
          </select>
        </div>
        <div class="select-item full" v-if="shorthand4">
          <select v-model="gHoverBorderStyle4">
            <option value="solid">solid</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="none">none</option>
          </select>
        </div>
      </div>
      <!-- AREA: Border color  -->
      <h3 class="sub-title">Border color</h3>
      <div class="color-group">
        <div class="color-item" :class="{open: shorthand1}">
          <div class="borderColor1"></div>
        </div>
        <div class="color-item" :class="{open: shorthand2}">
          <div class="borderColor2"></div>
        </div>
        <div class="color-item" :class="{open: shorthand3}">
          <div class="borderColor3"></div>
        </div>
        <div class="color-item" :class="{open: shorthand4}">
          <div class="borderColor4"></div>
        </div>
      </div>

      <!-- AREA: Border radius  -->
      <h3 class="sub-title">Border radius</h3>
      <div class="border-radius-group">
        <div class="select-group">
          <div class="select-item full">
            <select
              class="shorthand"
              v-model="borderRadiusType"
              @click="radiusFocus(borderRadiusType)"
            >
              <option value="val1">val1</option>
              <option value="val2">val2</option>
              <option value="val3">val3</option>
            </select>
          </div>
        </div>

        <div class="attr-item" v-if="borderRadius1">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderRadius1" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gHoverBorderRadius1" />
            <select v-model="gHoverBorderRadiusT1">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        <div class="attr-item" v-if="borderRadius2">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderRadius2" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gHoverBorderRadius2" />
            <select v-model="gHoverBorderRadiusT2">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        <div class="attr-item" v-if="borderRadius3">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderRadius3" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gHoverBorderRadius3" />
            <select v-model="gHoverBorderRadiusT3">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        <div class="attr-item" v-if="borderRadius3">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gHoverBorderRadius4" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gHoverBorderRadius4" />
            <select v-model="gHoverBorderRadiusT4">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@simonwep/pickr/dist/themes/monolith.min.css";
import Pickr from "@simonwep/pickr";

export default {
  data() {
    return {
      closeItem: false,
      shorthandType: "val1",
      shorthand1: true,
      shorthand2: false,
      shorthand3: false,
      shorthand4: false,
      borderRadiusType: "val1",
      borderRadius1: true,
      borderRadius2: false,
      borderRadius3: false
    };
  },
  computed: {
    gHoverBorderIsHover: {
      get() {
        return this.$store.getters.gHoverBorderIsHover;
      },
      set(val) {
        this.$store.commit("uHoverBorderIsHover", val);
      }
    },
    gHoverBorderWidth1: {
      get() {
        return this.$store.getters.gHoverBorderWidth1;
      },
      set(val) {
        this.$store.commit("uHoverBorderWidth1", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gHoverBorderWidth2: {
      get() {
        return this.$store.getters.gHoverBorderWidth2;
      },
      set(val) {
        this.$store.commit("uHoverBorderWidth2", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gHoverBorderWidth3: {
      get() {
        return this.$store.getters.gHoverBorderWidth3;
      },
      set(val) {
        this.$store.commit("uHoverBorderWidth3", val);
      }
    },
    gHoverBorderWidth4: {
      get() {
        return this.$store.getters.gHoverBorderWidth4;
      },
      set(val) {
        this.$store.commit("uHoverBorderWidth4", val);
      }
    },
    gHoverBorderStyle1: {
      get() {
        return this.$store.getters.gHoverBorderStyle1;
      },
      set(val) {
        this.$store.commit("uHoverBorderStyle1", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gHoverBorderStyle2: {
      get() {
        return this.$store.getters.gHoverBorderStyle2;
      },
      set(val) {
        this.$store.commit("uHoverBorderStyle2", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gHoverBorderStyle3: {
      get() {
        return this.$store.getters.gHoverBorderStyle3;
      },
      set(val) {
        this.$store.commit("uHoverBorderStyle3", val);
      }
    },
    gHoverBorderStyle4: {
      get() {
        return this.$store.getters.gHoverBorderStyle4;
      },
      set(val) {
        this.$store.commit("uHoverBorderStyle4", val);
      }
    },
    gHoverBorderRadius1: {
      get() {
        return this.$store.getters.gHoverBorderRadius1;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadius1", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gHoverBorderRadius2: {
      get() {
        return this.$store.getters.gHoverBorderRadius2;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadius2", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gHoverBorderRadius3: {
      get() {
        return this.$store.getters.gHoverBorderRadius3;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadius3", val);
      }
    },
    gHoverBorderRadius4: {
      get() {
        return this.$store.getters.gHoverBorderRadius4;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadius4", val);
      }
    },
    gHoverBorderRadiusT1: {
      get() {
        return this.$store.getters.gHoverBorderRadiusT1;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadiusT1", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gHoverBorderRadiusT2: {
      get() {
        return this.$store.getters.gHoverBorderRadiusT2;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadiusT2", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gHoverBorderRadiusT3: {
      get() {
        return this.$store.getters.gHoverBorderRadiusT3;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadiusT3", val);
      }
    },
    gHoverBorderRadiusT4: {
      get() {
        return this.$store.getters.gHoverBorderRadiusT4;
      },
      set(val) {
        this.$store.commit("uHoverBorderRadiusT4", val);
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
    },
    radiusFocus(val) {
      this.borderRadius1 = false;
      this.borderRadius2 = false;
      this.borderRadius3 = false;
      switch (val) {
        case "val1":
          this.borderRadius1 = true;
          break;
        case "val2":
          this.borderRadius1 = true;
          this.borderRadius2 = true;
          break;
        case "val3":
          this.borderRadius1 = true;
          this.borderRadius2 = true;
          this.borderRadius3 = true;
          break;
      }
    },
    colorPicker(target, gFunc, sFunc) {
      const borderColor = Pickr.create({
        el: target,
        theme: "monolith",
        comparison: false,
        default: gFunc,

        components: {
          preview: true,
          opacity: true,
          hue: true,

          interaction: {
            hex: true,
            rgba: true,
            input: true
          }
        }
      });

      borderColor.on("change", color => {
        let hexa = "#";
        for (const item of color.toHEXA()) {
          hexa += item;
        }
        this.$store.commit(sFunc, { val: hexa, type: this.shorthandType });
      });
    }
  },
  mounted() {
    this.colorPicker(
      ".borderColor1",
      this.$store.getters.gHoverBorderColor1,
      "uHoverBorderColor1"
    );
    this.colorPicker(
      ".borderColor2",
      this.$store.getters.gHoverBorderColor2,
      "uHoverBorderColor2"
    );
    this.colorPicker(
      ".borderColor3",
      this.$store.getters.gHoverBorderColor3,
      "uHoverBorderColor3"
    );
    this.colorPicker(
      ".borderColor4",
      this.$store.getters.gHoverBorderColor4,
      "uHoverBorderColor4"
    );
  },
  watch: {
    shorthandType(val) {
      this.$store.commit("uHoverBorderType", val);
    },
    borderRadiusType(val) {
      this.$store.commit("uHoverBorderRadiusType", val);
    }
  }
};
</script>