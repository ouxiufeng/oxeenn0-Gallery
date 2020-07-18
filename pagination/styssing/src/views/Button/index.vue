<template>
  <div class="control-style">
    <Cwidth />
    <Cheight />
    <Cmargin />
    <Cpadding />
    <Cborder />
    <CbackgroungColor />
    <CboxShadow />
    <CtextShadow />
    <Cfont />
    <Chover />
  </div>
</template>

<script>
import Cwidth from "@/components/C-width.vue";
import Cheight from "@/components/C-height.vue";
import Cmargin from "@/components/C-margin.vue";
import Cpadding from "@/components/C-padding.vue";
import CbackgroungColor from "@/components/C-background-color.vue";
import CboxShadow from "@/components/C-box-shadow.vue";
import CtextShadow from "@/components/C-text-shadow.vue";
import Cborder from "@/components/C-border.vue";
import Cfont from "@/components/C-font.vue";
import Chover from "@/components/C-hover.vue";

export default {
  components: {
    Cwidth,
    Cheight,
    Cmargin,
    Cpadding,
    CbackgroungColor,
    CboxShadow,
    CtextShadow,
    Cborder,
    Cfont,
    Chover
  }
};
</script>