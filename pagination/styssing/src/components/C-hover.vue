<template>
  <div class="style-item item-hover">
    <div class="fitst-row hover-row">
      <div class="attr-name">Hover</div>
      <div class="fold" :class="{ close: !gHoverStatus }" @click="changeHover()"></div>
    </div>



    <div class="body-area to-hover" :class="{ close: !gHoverStatus }">
      <Ctransition />
      <CHpadding />
      <CHborder />
      <CHbackgroungColor />
      <CHfont />

    </div>
  </div>


</template>

<script>
import CHbackgroungColor from "@/components/CH-background-color.vue";
import CHpadding from "@/components/CH-padding.vue";
import CHborder from "@/components/CH-border.vue";
import CHfont from "@/components/CH-font.vue";
import Ctransition from "@/components/C-transition.vue";

export default {
  components: {
    Ctransition,
    CHpadding,
    CHborder,
    CHbackgroungColor,
    CHfont,
  },
  computed: {
    gHoverStatus() {
      return this.$store.getters.gHoverStatus;
    }
  },
  methods: {
    changeHover() {
      this.$store.commit("uHoverStatus");
    }
  }
};
</script>