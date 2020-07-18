<template>
  <div class="style-item item-background-color">
    <div class="fitst-row">
      <div class="attr-name">Background color</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>
    <div class="body-area to-hover-backgroung-color" :class="{ close: closeItem }">

      <label class="switch-item ishover" :class="{ open: gHoverBackgroundIsHover }">
        <input type="checkbox" v-model="gHoverBackgroundIsHover" />
      </label>

      <div class="backgroungColor"></div>
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
    gHoverBackgroundIsHover: {
      get() {
        return this.$store.getters.gHoverBackgroundIsHover;
      },
      set(val) {
        this.$store.commit("uHoverBackgroundIsHover", val);
      }
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    }
  },
  mounted() {
    const backgroungColor = Pickr.create({
      el: ".backgroungColor",
      theme: "monolith",
      comparison: false,
      default: this.$store.getters.gHoverBackgroundColor,

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

    backgroungColor.on("change", color => {
      let str = "#";
      for (const item of color.toHEXA()) {
        str += item;
      }
      this.$store.commit("uHoverBackgroundColor", str);
    });
  }
};
</script>