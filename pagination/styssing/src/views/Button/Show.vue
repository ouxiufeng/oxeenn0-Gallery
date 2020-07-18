<template>
  <div
    class="show-target"
    :style="[
    sWidthAuto ? {} : { width: sWidth + sWidthType },
    sHeightAuto ? {} : { height: sHeight + sHeightType },
    { margin: `${ sMargin1 }px ${ sMargin2 }px ${ sMargin3 }px ${ sMargin4 }px` },
    { padding: gHover ? `${ gHoverPadding1 }px ${ gHoverPadding2 }px ${ gHoverPadding3 }px ${ gHoverPadding4 }px` : `${ sPadding1 }px ${ sPadding2 }px ${ sPadding3 }px ${ sPadding4 }px` },
    { borderWidth: gHover ? `${ gHoverBorderWidth1 }px ${ gHoverBorderWidth2 }px ${ gHoverBorderWidth3 }px ${ gHoverBorderWidth4 }px` : `${ sBorderWidth1 }px ${ sBorderWidth2 }px ${ sBorderWidth3 }px ${ sBorderWidth4 }px` },
    { borderColor: gHover ? `${ gHoverBorderColor1 } ${ gHoverBorderColor2 } ${ gHoverBorderColor3 } ${ gHoverBorderColor4 }` : `${ sBorderColor1 } ${ sBorderColor2 } ${ sBorderColor3 } ${ sBorderColor4 }` },
    { borderStyle: gHover ? `${ gHoverBorderStyle1 } ${ gHoverBorderStyle2 } ${ gHoverBorderStyle3 } ${ gHoverBorderStyle4 }` : `${ sBorderStyle1 } ${ sBorderStyle2 } ${ sBorderStyle3 } ${ sBorderStyle4 }` },
    { borderRadius: gHover ? `${ gHoverBorderRadius1 }${ gHoverBorderRadiusT1 } ${ gHoverBorderRadius2 }${ gHoverBorderRadiusT2 } ${ gHoverBorderRadius3 }${ gHoverBorderRadiusT3 } ${ gHoverBorderRadius4 }${ gHoverBorderRadiusT4 }` : `${ sBorderRadius1 }${ sBorderRadiusT1 } ${ sBorderRadius2 }${ sBorderRadiusT2 } ${ sBorderRadius3 }${ sBorderRadiusT3 } ${ sBorderRadius4 }${ sBorderRadiusT4 }` },
    { backgroundColor: gHover ? gHoverBackgroundColor : sBackgroundColor },
    { fontSize: gHover ? `${ gHoverFontSize }${ gHoverFontSizeUnit }` : `${ sFontSize }${ sFontSizeUnit }` },
    { letterSpacing: gHover ? `${ gHoverLetterSpacing }${ gHoverLetterSpacingUnit }` : `${ sLetterSpacing }${ sLetterSpacingUnit }` },
    { lineHeight: sLineHeightTypeSwitch ? sLineHeightType : sLineHeight + sLineHeightUnit },
    { inlineSize: sInlineSizeTypeSwitch ? sInlineSizeType : sInlineSize + sInlineSizeUnit },
    { textAlign: sTextAlign },
    { wordBreak: sWordBreak },
    { writingMode: sWritingMode },
    { color: gHover ? gHoverTextColor : sTextColor },
    { textDecoration: gHover ? `${gHoverTextDecorationLine} ${gHoverTextDecorationStyle} ${gHoverTextDecorationColor}` : `${sTextDecorationLine} ${sTextDecorationStyle} ${sTextDecorationColor}`},
    { boxShadow: sBoxShadowStr },
    { textShadow: sTextShadowStr },
    { transition: gHover ? gTransitionStr : {}}
    ]"
    @mouseover="isHover()"
    @mouseleave="notHover()"
  >
    {{ sFontContent }}
    <div
      class="support-line"
      v-if="sMarginRange"
      :style="[{ width: realWidth + 'px' }, { height: realHeight + 'px' }, {top: (-sMargin1-sBorderWidth1) + 'px'}, { left: (-sMargin4-sBorderWidth4) + 'px'}]"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      realWidth: "100%",
      realHeight: "100%"
    };
  },
  computed: {
    ...mapGetters({
      sWidth: "gWidth",
      sWidthAuto: "gWidthAuto",
      sWidthType: "gWidthType",
      sHeight: "gHeight",
      sHeightAuto: "gHeightAuto",
      sHeightType: "gHeightType",
      sMargin1: "gMargin1",
      sMargin2: "gMargin2",
      sMargin3: "gMargin3",
      sMargin4: "gMargin4",
      sPadding1: "gPadding1",
      sPadding2: "gPadding2",
      sPadding3: "gPadding3",
      sPadding4: "gPadding4",
      sBorderWidth1: "gBorderWidth1",
      sBorderWidth2: "gBorderWidth2",
      sBorderWidth3: "gBorderWidth3",
      sBorderWidth4: "gBorderWidth4",
      sBorderColor1: "gBorderColor1",
      sBorderColor2: "gBorderColor2",
      sBorderColor3: "gBorderColor3",
      sBorderColor4: "gBorderColor4",
      sBorderStyle1: "gBorderStyle1",
      sBorderStyle2: "gBorderStyle2",
      sBorderStyle3: "gBorderStyle3",
      sBorderStyle4: "gBorderStyle4",
      sBorderRadius1: "gBorderRadius1",
      sBorderRadius2: "gBorderRadius2",
      sBorderRadius3: "gBorderRadius3",
      sBorderRadius4: "gBorderRadius4",
      sBorderRadiusT1: "gBorderRadiusT1",
      sBorderRadiusT2: "gBorderRadiusT2",
      sBorderRadiusT3: "gBorderRadiusT3",
      sBorderRadiusT4: "gBorderRadiusT4",
      sBackgroundColor: "gBackgroundColor",
      sFontContent: "gFontContent",
      sFontSize: "gFontSize",
      sFontSizeUnit: "gFontSizeUnit",
      sLetterSpacing: "gLetterSpacing",
      sLetterSpacingUnit: "gLetterSpacingUnit",
      sLineHeight: "gLineHeight",
      sLineHeightUnit: "gLineHeightUnit",
      sLineHeightTypeSwitch: "gLineHeightTypeSwitch",
      sLineHeightType: "gLineHeightType",
      sInlineSize: "gInlineSize",
      sInlineSizeUnit: "gInlineSizeUnit",
      sInlineSizeTypeSwitch: "gInlineSizeTypeSwitch",
      sInlineSizeType: "gInlineSizeType",
      sTextAlign: "gTextAlign",
      sWordBreak: "gWordBreak",
      sWritingMode: "gWritingMode",
      sTextColor: "gTextColor",
      sTextDecorationLine: "gTextDecorationLine",
      sTextDecorationStyle: "gTextDecorationStyle",
      sTextDecorationColor: "gTextDecorationColor",
      sBoxShadowStr: "gBoxShadowStr",
      sTextShadowStr: "gTextShadowStr",
      gHover: "gHover",
      gTransitionStr: "gTransitionStr",
      gHoverStatus: "gHoverStatus",
      gHoverPadding1: "gHoverPadding1",
      gHoverPadding2: "gHoverPadding2",
      gHoverPadding3: "gHoverPadding3",
      gHoverPadding4: "gHoverPadding4",
      gHoverBorderWidth1: "gHoverBorderWidth1",
      gHoverBorderWidth2: "gHoverBorderWidth2",
      gHoverBorderWidth3: "gHoverBorderWidth3",
      gHoverBorderWidth4: "gHoverBorderWidth4",
      gHoverBorderColor1: "gHoverBorderColor1",
      gHoverBorderColor2: "gHoverBorderColor2",
      gHoverBorderColor3: "gHoverBorderColor3",
      gHoverBorderColor4: "gHoverBorderColor4",
      gHoverBorderStyle1: "gHoverBorderStyle1",
      gHoverBorderStyle2: "gHoverBorderStyle2",
      gHoverBorderStyle3: "gHoverBorderStyle3",
      gHoverBorderStyle4: "gHoverBorderStyle4",
      gHoverBorderRadius1: "gHoverBorderRadius1",
      gHoverBorderRadius2: "gHoverBorderRadius2",
      gHoverBorderRadius3: "gHoverBorderRadius3",
      gHoverBorderRadius4: "gHoverBorderRadius4",
      gHoverBorderRadiusT1: "gHoverBorderRadiusT1",
      gHoverBorderRadiusT2: "gHoverBorderRadiusT2",
      gHoverBorderRadiusT3: "gHoverBorderRadiusT3",
      gHoverBorderRadiusT4: "gHoverBorderRadiusT4",
      gHoverBackgroundColor: "gHoverBackgroundColor",
      gHoverFontSize: "gHoverFontSize",
      gHoverFontSizeUnit: "gHoverFontSizeUnit",
      gHoverLetterSpacing: "gHoverLetterSpacing",
      gHoverLetterSpacingUnit: "gHoverLetterSpacingUnit", 
      gHoverTextColor: "gHoverTextColor",
      gHoverTextDecorationLine: "gHoverTextDecorationLine",
      gHoverTextDecorationStyle: "gHoverTextDecorationStyle",
      gHoverTextDecorationColor: "gHoverTextDecorationColor"
    }),
    sMarginRange() {
      return this.$store.state.additional.marginRange;
    }
  },
  methods: {
    marginRange() {
      if (!this.sMarginRange) return;
      setTimeout(() => {
        let showTarget = document.querySelector(".show-target");
        this.realWidth =
          parseInt(window.getComputedStyle(showTarget, null).width) +
          parseInt(window.getComputedStyle(showTarget, null).marginLeft) +
          parseInt(window.getComputedStyle(showTarget, null).marginRight);

        this.realHeight =
          parseInt(window.getComputedStyle(showTarget, null).height) +
          parseInt(window.getComputedStyle(showTarget, null).marginTop) +
          parseInt(window.getComputedStyle(showTarget, null).marginBottom);
      }, 10);
    },
    isHover() {
      if (!this.gHoverStatus) return;
      this.$store.commit("uHover", true);
    },
    notHover() {
      if (!this.gHoverStatus) return;
      this.$store.commit("uHover", false);
    }
  },
  watch: {
    sMarginRange() {
      this.marginRange();
    },
    sWidth() {
      this.marginRange();
    },
    sWidthAuto() {
      this.marginRange();
    },
    sHeight() {
      this.marginRange();
    },
    sHeightAuto() {
      this.marginRange();
    },
    sMargin1() {
      this.marginRange();
    },
    sMargin2() {
      this.marginRange();
    },
    sMargin3() {
      this.marginRange();
    },
    sMargin4() {
      this.marginRange();
    },
    sPadding1() {
      this.marginRange();
    },
    sPadding2() {
      this.marginRange();
    },
    sPadding3() {
      this.marginRange();
    },
    sPadding4() {
      this.marginRange();
    },
    sBorderWidth1() {
      this.marginRange();
    },
    sBorderWidth2() {
      this.marginRange();
    },
    sBorderWidth3() {
      this.marginRange();
    },
    sBorderWidth4() {
      this.marginRange();
    }
  }
};
</script>