<template>
  <div class="style-item item-background-color">
    <div class="fitst-row">
      <div class="attr-name">Background color</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>
    <div class="body-area to-backgroung-color" :class="{ close: closeItem }">
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
      default: this.$store.getters.gBackgroundColor,

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
      this.$store.commit("uBackgroundColor", str);
    });
  }
};
</script>