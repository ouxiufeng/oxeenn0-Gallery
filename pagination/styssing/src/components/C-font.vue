<template>
  <div class="style-item item-font">
    <div class="fitst-row">
      <div class="attr-name">Font</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-font" :class="{ close: closeItem }">
      <input type="text" class="attr-value" placeholder="content..." v-model="gFontContent" />

      <!-- AREA: Font size -->
      <div class="attr-item">
        <h3 class="sub-title">Font size</h3>
        <input
          type="range"
          class="attr-valuebar"
          min="0"
          :max="maxJudgmentToFontSize()"
          step=".1"
          v-model="gFontSize"
        />
        <div class="attr-value-item">
          <input type="text" class="attr-value" step=".1" v-model="gFontSize" />
          <select v-model="gFontSizeUnit">
            <option value="px">px</option>
            <option value="rem">rem</option>
          </select>
        </div>
      </div>

      <!-- AREA: Letter spacing -->
      <div class="attr-item">
        <h3 class="sub-title">Letter spacing</h3>
        <input
          type="range"
          class="attr-valuebar"
          min="0"
          :max="maxJudgmentToLetterSpacing()"
          step=".1"
          v-model="gLetterSpacing"
        />
        <div class="attr-value-item">
          <input type="text" class="attr-value" step=".1" v-model="gLetterSpacing" />
          <select v-model="gLetterSpacingUnit">
            <option value="px">px</option>
            <option value="rem">rem</option>
          </select>
        </div>
      </div>

      <!-- AREA: Line height -->
      <div class="attr-item">
        <h3 class="sub-title">Line height</h3>
        <input
          type="range"
          class="attr-valuebar"
          min="0"
          :max="maxJudgmentLineHeight()"
          step=".1"
          v-model="gLineHeight"
        />
        <div class="attr-value-item">
          <input type="text" class="attr-value" step=".1" v-model="gLineHeight" />
          <select v-model="gLineHeightUnit">
            <option value="px">px</option>
            <option value="rem">rem</option>
          </select>
        </div>
      </div>

      <label class="switch-item lineheight-type" :class="{ open: gLineHeightTypeSwitch }">
        <input type="checkbox" v-model="gLineHeightTypeSwitch" />
      </label>

      <div class="select-group">
        <div class="select-item full" v-if="gLineHeightTypeSwitch">
          <select v-model="gLineHeightType">
            <option value="normal">normal</option>
          </select>
        </div>
      </div>

      <!-- AREA: Inline size -->
      <div class="attr-item">
        <h3 class="sub-title">Inline size</h3>
        <input
          type="range"
          class="attr-valuebar"
          min="0"
          :max="maxJudgmentInlineSize()"
          step=".1"
          v-model="gInlineSize"
        />
        <div class="attr-value-item">
          <input type="text" class="attr-value" step=".1" v-model="gInlineSize" />
          <select v-model="gInlineSizeUnit">
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>

      <label class="switch-item inlinesize-type" :class="{ open: gInlineSizeTypeSwitch }">
        <input type="checkbox" v-model="gInlineSizeTypeSwitch" />
      </label>

      <div class="select-group">
        <div class="select-item full" v-if="gInlineSizeTypeSwitch">
          <select v-model="gInlineSizeType">
            <option value="auto">auto</option>
            <option value="max-content">max-content</option>
            <option value="min-content">min-content</option>
          </select>
        </div>
      </div>

      <!-- AREA: Text align -->
      <h3 class="sub-title">Text align</h3>
      <div class="select-group">
        <div class="select-item full">
          <select v-model="gTextAlign">
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="center">center</option>
            <option value="justify">justify</option>
          </select>
        </div>
      </div>

      <!-- AREA: Word break -->
      <h3 class="sub-title">Word break</h3>
      <div class="select-group">
        <div class="select-item full">
          <select v-model="gWordBreak">
            <option value="normal">normal</option>
            <option value="break-all">break-all</option>
            <option value="keep-all">keep-all</option>
          </select>
        </div>
      </div>

      <!-- AREA: Writing mode -->
      <h3 class="sub-title">Writing mode</h3>
      <div class="select-group">
        <div class="select-item full">
          <select v-model="gWritingMode">
            <option value="horizontal-tb">horizontal-tb</option>
            <option value="vertical-rl">vertical-rl</option>
            <option value="vertical-lr">vertical-lr</option>
          </select>
        </div>
      </div>
      <!-- AREA: Color -->
      <h3 class="sub-title">Color</h3>
      <div class="textColor"></div>

      <!-- AREA: Text decoration -->
      <h3 class="sub-title">Text decoration</h3>
      <div class="select-group">
        <div class="select-item full">
          <select v-model="gTextDecorationLine">
            <option value="none">none</option>
            <option value="underline">underline</option>
            <option value="overline">overline</option>
            <option value="line-through">line-through</option>
          </select>
        </div>

        <div class="select-item full">
          <select v-model="gTextDecorationStyle">
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
    gFontContent: {
      get() {
        return this.$store.getters.gFontContent;
      },
      set(val) {
        this.$store.commit("uFontContent", val);
      }
    },
    gFontSize: {
      get() {
        return this.$store.getters.gFontSize;
      },
      set(val) {
        this.$store.commit("uFontSize", val);
      }
    },
    gFontSizeUnit: {
      get() {
        return this.$store.getters.gFontSizeUnit;
      },
      set(val) {
        this.$store.commit("uFontSizeUnit", val);
      }
    },
    gLetterSpacing: {
      get() {
        return this.$store.getters.gLetterSpacing;
      },
      set(val) {
        this.$store.commit("uLetterSpacing", val);
      }
    },
    gLetterSpacingUnit: {
      get() {
        return this.$store.getters.gLetterSpacingUnit;
      },
      set(val) {
        this.$store.commit("uLetterSpacingUnit", val);
      }
    },
    gLineHeight: {
      get() {
        return this.$store.getters.gLineHeight;
      },
      set(val) {
        this.$store.commit("uLineHeight", val);
      }
    },
    gLineHeightUnit: {
      get() {
        return this.$store.getters.gLineHeightUnit;
      },
      set(val) {
        this.$store.commit("uLineHeightUnit", val);
      }
    },
    gLineHeightType: {
      get() {
        return this.$store.getters.gLineHeightType;
      },
      set(val) {
        this.$store.commit("uLineHeightType", val);
      }
    },
    gLineHeightTypeSwitch: {
      get() {
        return this.$store.getters.gLineHeightTypeSwitch;
      },
      set(val) {
        this.$store.commit("uLineHeightTypeSwitch", val);
      }
    },
    gInlineSize: {
      get() {
        return this.$store.getters.gInlineSize;
      },
      set(val) {
        this.$store.commit("uInlineSize", val);
      }
    },
    gInlineSizeUnit: {
      get() {
        return this.$store.getters.gInlineSizeUnit;
      },
      set(val) {
        this.$store.commit("uInlineSizeUnit", val);
      }
    },
    gInlineSizeType: {
      get() {
        return this.$store.getters.gInlineSizeType;
      },
      set(val) {
        this.$store.commit("uInlineSizeType", val);
      }
    },
    gInlineSizeTypeSwitch: {
      get() {
        return this.$store.getters.gInlineSizeTypeSwitch;
      },
      set(val) {
        this.$store.commit("uInlineSizeTypeSwitch", val);
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
    gWordBreak: {
      get() {
        return this.$store.getters.gWordBreak;
      },
      set(val) {
        this.$store.commit("uWordBreak", val);
      }
    },
    gWritingMode: {
      get() {
        return this.$store.getters.gWritingMode;
      },
      set(val) {
        this.$store.commit("uWritingMode", val);
      }
    },
    gTextDecorationLine: {
      get() {
        return this.$store.getters.gTextDecorationLine;
      },
      set(val) {
        this.$store.commit("uTextDecorationLine", val);
      }
    },
    gTextDecorationStyle: {
      get() {
        return this.$store.getters.gTextDecorationStyle;
      },
      set(val) {
        this.$store.commit("uTextDecorationStyle", val);
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
    maxJudgmentInlineSize() {
      if (this.gInlineSizeUnit === "px") {
        return 500;
      } else if (this.gInlineSizeUnit === "%") {
        return 100;
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
      this.$store.getters.gTextColor,
      "uTextColor"
    );
    this.colorPicker(
      ".textDecorationColor",
      this.$store.getters.gTextDecorationColor,
      "uTextDecorationColor"
    );
  }
};
</script>