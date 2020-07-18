<template>
  <div class="style-item item-border">
    <div class="fitst-row">
      <div class="attr-name">Border</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-border" :class="{ close: closeItem }">
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
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderWidth1" />
        <input type="text" class="attr-value" step=".1" v-model="gBorderWidth1" />
      </div>
      <div class="atrr-item" v-if="shorthand2">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderWidth2" />
        <input type="text" class="attr-value" step=".1" v-model="gBorderWidth2" />
      </div>
      <div class="atrr-item" v-if="shorthand3">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderWidth3" />
        <input type="text" class="attr-value" step=".1" v-model="gBorderWidth3" />
      </div>
      <div class="atrr-item" v-if="shorthand4">
        <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderWidth4" />
        <input type="text" class="attr-value" step=".1" v-model="gBorderWidth4" />
      </div>

      <!-- AREA: Border style  -->
      <h3 class="sub-title">Border style</h3>
      <div class="select-group">
        <div class="select-item full" v-if="shorthand1">
          <select v-model="gBorderStyle1">
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
          <select v-model="gBorderStyle2">
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
          <select v-model="gBorderStyle3">
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
          <select v-model="gBorderStyle4">
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
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderRadius1" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gBorderRadius1" />
            <select v-model="gBorderRadiusT1">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        <div class="attr-item" v-if="borderRadius2">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderRadius2" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gBorderRadius2" />
            <select v-model="gBorderRadiusT2">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        <div class="attr-item" v-if="borderRadius3">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderRadius3" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gBorderRadius3" />
            <select v-model="gBorderRadiusT3">
              <option value="px">px</option>
              <option value="%">%</option>
            </select>
          </div>
        </div>
        <div class="attr-item" v-if="borderRadius3">
          <input type="range" class="attr-valuebar" min="0" max="100" v-model="gBorderRadius4" />
          <div class="attr-value-item">
            <input type="text" class="attr-value" step=".1" v-model="gBorderRadius4" />
            <select v-model="gBorderRadiusT4">
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
    gBorderWidth1: {
      get() {
        return this.$store.getters.gBorderWidth1;
      },
      set(val) {
        this.$store.commit("uBorderWidth1", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gBorderWidth2: {
      get() {
        return this.$store.getters.gBorderWidth2;
      },
      set(val) {
        this.$store.commit("uBorderWidth2", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gBorderWidth3: {
      get() {
        return this.$store.getters.gBorderWidth3;
      },
      set(val) {
        this.$store.commit("uBorderWidth3", val);
      }
    },
    gBorderWidth4: {
      get() {
        return this.$store.getters.gBorderWidth4;
      },
      set(val) {
        this.$store.commit("uBorderWidth4", val);
      }
    },
    gBorderStyle1: {
      get() {
        return this.$store.getters.gBorderStyle1;
      },
      set(val) {
        this.$store.commit("uBorderStyle1", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gBorderStyle2: {
      get() {
        return this.$store.getters.gBorderStyle2;
      },
      set(val) {
        this.$store.commit("uBorderStyle2", {
          val: val,
          type: this.shorthandType
        });
      }
    },
    gBorderStyle3: {
      get() {
        return this.$store.getters.gBorderStyle3;
      },
      set(val) {
        this.$store.commit("uBorderStyle3", val);
      }
    },
    gBorderStyle4: {
      get() {
        return this.$store.getters.gBorderStyle4;
      },
      set(val) {
        this.$store.commit("uBorderStyle4", val);
      }
    },
    gBorderRadius1: {
      get() {
        return this.$store.getters.gBorderRadius1;
      },
      set(val) {
        this.$store.commit("uBorderRadius1", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gBorderRadius2: {
      get() {
        return this.$store.getters.gBorderRadius2;
      },
      set(val) {
        this.$store.commit("uBorderRadius2", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gBorderRadius3: {
      get() {
        return this.$store.getters.gBorderRadius3;
      },
      set(val) {
        this.$store.commit("uBorderRadius3", val);
      }
    },
    gBorderRadius4: {
      get() {
        return this.$store.getters.gBorderRadius4;
      },
      set(val) {
        this.$store.commit("uBorderRadius4", val);
      }
    },
    gBorderRadiusT1: {
      get() {
        return this.$store.getters.gBorderRadiusT1;
      },
      set(val) {
        this.$store.commit("uBorderRadiusT1", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gBorderRadiusT2: {
      get() {
        return this.$store.getters.gBorderRadiusT2;
      },
      set(val) {
        this.$store.commit("uBorderRadiusT2", {
          val: val,
          type: this.borderRadiusType
        });
      }
    },
    gBorderRadiusT3: {
      get() {
        return this.$store.getters.gBorderRadiusT3;
      },
      set(val) {
        this.$store.commit("uBorderRadiusT3", val);
      }
    },
    gBorderRadiusT4: {
      get() {
        return this.$store.getters.gBorderRadiusT4;
      },
      set(val) {
        this.$store.commit("uBorderRadiusT4", val);
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
      this.$store.getters.gBorderColor1,
      "uBorderColor1"
    );
    this.colorPicker(
      ".borderColor2",
      this.$store.getters.gBorderColor2,
      "uBorderColor2"
    );
    this.colorPicker(
      ".borderColor3",
      this.$store.getters.gBorderColor3,
      "uBorderColor3"
    );
    this.colorPicker(
      ".borderColor4",
      this.$store.getters.gBorderColor4,
      "uBorderColor4"
    );
  },
  watch: {
    shorthandType(val) {
      this.$store.commit("uBorderType", val);
    },
    borderRadiusType(val){
      this.$store.commit("uBorderRadiusType", val);
    }
  }
};
</script>