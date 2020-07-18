<template>
  <div class="style-item item-font">
    <div class="fitst-row">
      <div class="attr-name">Font</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-font" :class="{ close: closeItem }">
      <!-- AREA: Font size -->

      <div class="attr-item">
        <h3 class="sub-title">Font size</h3>
        <label class="switch-item ishover" :class="{ open: gHoverFontSizeIsHover }">
          <input type="checkbox" v-model="gHoverFontSizeIsHover" />
        </label>
        <input
          type="range"
          class="attr-valuebar"
          min="0"
          :max="maxJudgmentToFontSize()"
          step=".1"
          v-model="gHoverFontSize"
        />
        <div class="attr-value-item">
          <input type="text" class="attr-value" step=".1" v-model="gHoverFontSize" />
          <select v-model="gHoverFontSizeUnit">
            <option value="px">px</option>
            <option value="rem">rem</option>
          </select>
        </div>
      </div>

      <!-- AREA: Letter spacing -->
      <div class="attr-item">
        <h3 class="sub-title">Letter spacing</h3>
        <label class="switch-item ishover" :class="{ open: gHoverLetterSpacingIsHover }">
          <input type="checkbox" v-model="gHoverLetterSpacingIsHover" />
        </label>
        <input
          type="range"
          class="attr-valuebar"
          min="0"
          :max="maxJudgmentToLetterSpacing()"
          step=".1"
          v-model="gHoverLetterSpacing"
        />
        <div class="attr-value-item">
          <input type="text" class="attr-value" step=".1" v-model="gHoverLetterSpacing" />
          <select v-model="gHoverLetterSpacingUnit">
            <option value="px">px</option>
            <option value="rem">rem</option>
          </select>
        </div>
      </div>

      <!-- AREA: Color -->
      <h3 class="sub-title">Color</h3>
      <label class="switch-item ishover" :class="{ open: gHoverTextColorIsHover }">
        <input type="checkbox" v-model="gHoverTextColorIsHover" />
      </label>
      <div class="textColor"></div>

      <!-- AREA: Text decoration -->
      <h3 class="sub-title">Text decoration</h3>
      <label class="switch-item ishover" :class="{ open: gHoverTextDecorationIsHover }">
        <input type="checkbox" v-model="gHoverTextDecorationIsHover" />
      </label>
      <div class="select-group">
        <div class="select-item full">
          <select v-model="gHoverTextDecorationLine">
            <option value="none">none</option>
            <option value="underline">underline</option>
            <option value="overline">overline</option>
            <option value="line-through">line-through</option>
          </select>
        </div>

        <div class="select-item full">
          <select v-model="gHoverTextDecorationStyle">
            <option value="solid">solid</option>
            <option value="double">double</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="wavy">wavy</option>
          </select>
        </div>
      </div>

      <div class="textDecorationColor"></div>
    </div>
  </div>
</template>

<script>
import "@simonwep/pickr/dist/themes/monolith.min.css";
import Pickr from "@simonwep/pickr";

export default {
  data() {
    return {
      closeItem: false
    };
  },
  computed: {
    gHoverFontSizeIsHover: {
      get() {
        return this.$store.getters.gHoverFontSizeIsHover;
      },
      set(val) {
        this.$store.commit("uHoverFontSizeIsHover", val);
      }
    },
    gHoverLetterSpacingIsHover: {
      get() {
        return this.$store.getters.gHoverLetterSpacingIsHover;
      },
      set(val) {
        this.$store.commit("uHoverLetterSpacingIsHover", val);
      }
    },
    gHoverTextColorIsHover: {
      get() {
        return this.$store.getters.gHoverTextColorIsHover;
      },
      set(val) {
        this.$store.commit("uHoverTextColorIsHover", val);
      }
    },
    gHoverTextDecorationIsHover: {
      get() {
        return this.$store.getters.gHoverTextDecorationIsHover;
      },
      set(val) {
        this.$store.commit("uHoverTextDecorationIsHover", val);
      }
    },
    gHoverFontSize: {
      get() {
        return this.$store.getters.gHoverFontSize;
      },
      set(val) {
        this.$store.commit("uHoverFontSize", val);
      }
    },
    gHoverFontSizeUnit: {
      get() {
        return this.$store.getters.gHoverFontSizeUnit;
      },
      set(val) {
        this.$store.commit("uHoverFontSizeUnit", val);
      }
    },
    gHoverLetterSpacing: {
      get() {
        return this.$store.getters.gHoverLetterSpacing;
      },
      set(val) {
        this.$store.commit("uHoverLetterSpacing", val);
      }
    },
    gHoverLetterSpacingUnit: {
      get() {
        return this.$store.getters.gHoverLetterSpacingUnit;
      },
      set(val) {
        this.$store.commit("uHoverLetterSpacingUnit", val);
      }
    },
    gTextAlign: {
      get() {
        return this.$store.getters.gTextAlign;
      },
      set(val) {
        this.$store.commit("uTextAlign", val);
      }
    },
    gHoverTextDecorationLine: {
      get() {
        return this.$store.getters.gHoverTextDecorationLine;
      },
      set(val) {
        this.$store.commit("uHoverTextDecorationLine", val);
      }
    },
    gHoverTextDecorationStyle: {
      get() {
        return this.$store.getters.gHoverTextDecorationStyle;
      },
      set(val) {
        this.$store.commit("uHoverTextDecorationStyle", val);
      }
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    maxJudgmentToFontSize() {
      if (this.gFontSizeUnit === "px") {
        return 100;
      } else if (this.gFontSizeUnit === "rem") {
        return 10;
      }
    },
    maxJudgmentToLetterSpacing() {
      if (this.gLetterSpacingUnit === "px") {
        return 50;
      } else if (this.gLetterSpacingUnit === "rem") {
        return 5;
      }
    },
    maxJudgmentLineHeight() {
      if (this.gLineHeightUnit === "px") {
        return 100;
      } else if (this.gLineHeightUnit === "rem") {
        return 30;
      }
    },
    colorPicker(target, gFunc, sFunc) {
      const textColor = Pickr.create({
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

      textColor.on("change", color => {
        let hexa = "#";
        for (const item of color.toHEXA()) {
          hexa += item;
        }
        this.$store.commit(sFunc, hexa);
      });
    }
  },
  mounted() {
    this.colorPicker(
      ".textColor",
      this.$store.getters.gHoverTextColor,
      "uHoverTextColor"
    );
    this.colorPicker(
      ".textDecorationColor",
      this.$store.getters.gHoverTextDecorationColor,
      "uHoverTextDecorationColor"
    );
  }
};
</script>