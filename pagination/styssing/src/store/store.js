import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    targetStyle: {
      width: { val: "0", auto: true, type: "px" },
      height: { val: "0", auto: true, type: "px" },
      margin: { val1: "0", val2: "0", val3: "0", val4: "0", type: "val1" },
      padding: { val1: "0", val2: "0", val3: "0", val4: "0", type: "val1" },
      backgroundColor: { color: "#ffffff" },
      boxShadow: [],
      textShadow: [],
      border: {
        borderWidth: { val1: "1", val2: "1", val3: "1", val4: "1", type: "val1" },
        borderColor: { color1: "#000000", color2: "#000000", color3: "#000000", color4: "#000000" },
        borderStyle: { val1: "solid", val2: "solid", val3: "solid", val4: "solid" },
        borderRadius: {
          value: { val1: "0", val2: "0", val3: "0", val4: "0", type: "val1" },
          unit: { val1: "px", val2: "px", val3: "px", val4: "px" }
        },
      },
      font: {
        content: "SHOW TARGET",
        fontSize: { val: "2", unit: "rem" },
        letterSpacing: { val: "0.1", unit: "rem" },
        lineHeight: { val: "0", unit: "rem", typeSwitch: true, type: "normal" },
        inlineSize: { val: "0", unit: "px", typeSwitch: true, type: "auto" },
        textAlign: { type: "left" },
        wordBreak: { type: "normal" },
        writingMode: { type: "horizontal-tb" },
        textColor: { color: "#333333" },
        textDecoration: { type1: "none", type2: "solid", color: "#333333" }
      },
    },
    hoverStyle: {
      transition: [],
      padding: { val1: "0", val2: "0", val3: "0", val4: "0", type: "val1", isHover: false },
      backgroundColor: { color: "#ff2244", isHover: false },
      border: {
        borderWidth: { val1: "1", val2: "1", val3: "1", val4: "1", type: "val1", isHover: false },
        borderColor: { color1: "#000000", color2: "#000000", color3: "#000000", color4: "#000000" },
        borderStyle: { val1: "solid", val2: "solid", val3: "solid", val4: "solid" },
        borderRadius: {
          value: { val1: "0", val2: "0", val3: "0", val4: "0", type: "val1" },
          unit: { val1: "px", val2: "px", val3: "px", val4: "px" }
        },
      },
      font: {
        fontSize: { val: "2", unit: "rem", isHover: false },
        letterSpacing: { val: "0.1", unit: "rem", isHover: false },
        textColor: { color: "#333333", isHover: false },
        textDecoration: { type1: "none", type2: "solid", color: "#333333", isHover: false }
      },
    },
    additional: {
      marginRange: false,
      hoverStatus: false,
      hover: false,
    }
  },
  getters: {
    gStyle: (state) => {
      let str = `.button {\n`

      if (!state.targetStyle.width.auto) {
        str += `  width: ${state.targetStyle.width.val}${state.targetStyle.width.type};\n`
      }

      if (!state.targetStyle.height.auto) {
        str += `  height: ${state.targetStyle.height.val}${state.targetStyle.height.type};\n`
      }

      if (state.targetStyle.margin.type === 'val1' && state.targetStyle.margin.val1 !== "0") {
        str += `  margin: ${state.targetStyle.margin.val1}px;\n`
      } else if (state.targetStyle.margin.type === 'val2') {
        str += `  margin: ${state.targetStyle.margin.val1}px ${state.targetStyle.margin.val2}px;\n`
      } else if (state.targetStyle.margin.type === 'val3') {
        str += `  margin: ${state.targetStyle.margin.val1}px ${state.targetStyle.margin.val2}px ${state.targetStyle.margin.val3}px;\n`
      } else if (state.targetStyle.margin.type === 'val4') {
        str += `  margin: ${state.targetStyle.margin.val1}px ${state.targetStyle.margin.val2}px ${state.targetStyle.margin.val3}px ${state.targetStyle.margin.val4}px;\n`
      }

      if (state.targetStyle.padding.type === 'val1' && state.targetStyle.padding.val1 !== "0") {
        str += `  padding: ${state.targetStyle.padding.val1}px;\n`
      } else if (state.targetStyle.padding.type === 'val2') {
        str += `  padding: ${state.targetStyle.padding.val1}px ${state.targetStyle.padding.val2}px;\n`
      } else if (state.targetStyle.padding.type === 'val3') {
        str += `  padding: ${state.targetStyle.padding.val1}px ${state.targetStyle.padding.val2}px ${state.targetStyle.padding.val3}px;\n`
      } else if (state.targetStyle.padding.type === 'val4') {
        str += `  padding: ${state.targetStyle.padding.val1}px ${state.targetStyle.padding.val2}px ${state.targetStyle.padding.val3}px ${state.targetStyle.padding.val4}px;\n`
      }

      if (state.targetStyle.border.borderWidth.type === 'val1' && state.targetStyle.border.borderWidth.val1 !== "0") {
        str += `  border: ${state.targetStyle.border.borderWidth.val1}px ${state.targetStyle.border.borderStyle.val1} ${state.targetStyle.border.borderColor.color1};\n`
      } else if (state.targetStyle.border.borderWidth.type === 'val2') {
        str += `  border-width: ${state.targetStyle.border.borderWidth.val1}px ${state.targetStyle.border.borderWidth.val2}px;\n`
        str += `  border-style: ${state.targetStyle.border.borderStyle.val1} ${state.targetStyle.border.borderStyle.val2};\n`
        str += `  border-color: ${state.targetStyle.border.borderColor.color1} ${state.targetStyle.border.borderColor.color2};\n`
      } else if (state.targetStyle.border.borderWidth.type === 'val3') {
        str += `  border-width: ${state.targetStyle.border.borderWidth.val1}px ${state.targetStyle.border.borderWidth.val2}px ${state.targetStyle.border.borderWidth.val3}px;\n`
        str += `  border-style: ${state.targetStyle.border.borderStyle.val1} ${state.targetStyle.border.borderStyle.val2} ${state.targetStyle.border.borderStyle.val3};\n`
        str += `  border-color: ${state.targetStyle.border.borderColor.color1} ${state.targetStyle.border.borderColor.color2} ${state.targetStyle.border.borderColor.color3};\n`
      } else if (state.targetStyle.border.borderWidth.type === 'val4') {
        str += `  border-width: ${state.targetStyle.border.borderWidth.val1}px ${state.targetStyle.border.borderWidth.val2}px ${state.targetStyle.border.borderWidth.val3}px ${state.targetStyle.border.borderWidth.val4}px;\n`
        str += `  border-style: ${state.targetStyle.border.borderStyle.val1} ${state.targetStyle.border.borderStyle.val2} ${state.targetStyle.border.borderStyle.val3} ${state.targetStyle.border.borderStyle.val4};\n`
        str += `  border-color: ${state.targetStyle.border.borderColor.color1} ${state.targetStyle.border.borderColor.color2} ${state.targetStyle.border.borderColor.color3} ${state.targetStyle.border.borderColor.color4};\n`
      }

      if (state.targetStyle.border.borderRadius.value.type === 'val1' && state.targetStyle.border.borderRadius.value.val1 !== "0") {
        str += `  border-radius: ${state.targetStyle.border.borderRadius.value.val1}px;\n`
      } else if (state.targetStyle.border.borderRadius.value.type === 'val2') {
        str += `  border-radius: ${state.targetStyle.border.borderRadius.value.val1}px ${state.targetStyle.border.borderRadius.value.val2}px;\n`
      } else if (state.targetStyle.border.borderRadius.value.type === 'val3') {
        str += `  border-radius: ${state.targetStyle.border.borderRadius.value.val1}px ${state.targetStyle.border.borderRadius.value.val2}px ${state.targetStyle.border.borderRadius.value.val3}px ${state.targetStyle.border.borderRadius.value.val4}px;\n`
      } else if (state.targetStyle.border.borderRadius.value.type === 'val4') {
        str += `  border-radius: ${state.targetStyle.border.borderRadius.value.val1}px ${state.targetStyle.border.borderRadius.value.val2}px ${state.targetStyle.border.borderRadius.value.val3}px ;\n`
      }

      str += `  background-color: ${state.targetStyle.backgroundColor.color};\n`

      let boxShadowStr = ''
      let boxShadowNum = state.targetStyle.boxShadow.length
      state.targetStyle.boxShadow.forEach(item => {
        if (item.boxShadowType) {
          boxShadowStr += `inset `
        }
        boxShadowStr += `${item.val1}px ${item.val2}px ${item.val3}px ${item.val4}px ${item.color}`
        if (boxShadowNum > 1) {
          boxShadowStr += `, `
          boxShadowNum -= 1
        }
      });
      if (boxShadowNum !== 0) {
        str += `  box-shadow: ${boxShadowStr};\n`
      }

      let textShadowStr = ''
      let textShadowNum = state.targetStyle.textShadow.length
      state.targetStyle.textShadow.forEach(item => {
        if (item.textShadowType) {
          textShadowStr += `inset `
        }
        textShadowStr += `${item.val1}px ${item.val2}px ${item.val3}px ${item.color}`
        if (textShadowNum > 1) {
          textShadowStr += `, `
          textShadowNum -= 1
        }
      });
      if (textShadowNum !== 0) {
        str += `  text-shadow: ${textShadowStr};\n`
      }

      if (state.targetStyle.font.fontSize.val !== "0") {
        str += `  font-size: ${state.targetStyle.font.fontSize.val}${state.targetStyle.font.fontSize.unit};\n`
      }

      if (state.targetStyle.font.letterSpacing.val !== "0") {
        str += `  letter-spacing: ${state.targetStyle.font.letterSpacing.val}${state.targetStyle.font.letterSpacing.unit};\n`
      }

      if (state.targetStyle.font.lineHeight.typeSwitch) {
        str += `  line-height: ${state.targetStyle.font.lineHeight.type};\n`
      } else if (state.targetStyle.font.lineHeight.val !== "0") {
        str += `  line-height: ${state.targetStyle.font.lineHeight.val}${state.targetStyle.font.lineHeight.unit};\n`
      }

      if (state.targetStyle.font.inlineSize.typeSwitch) {
        str += `  inline-size: ${state.targetStyle.font.inlineSize.type};\n`
      } else if (state.targetStyle.font.inlineSize.val !== "0") {
        str += `  inline-size: ${state.targetStyle.font.inlineSize.val}${state.targetStyle.font.inlineSize.unit};\n`
      }

      str += `  text-align: ${state.targetStyle.font.textAlign.type};\n`
      str += `  word-break: ${state.targetStyle.font.wordBreak.type};\n`
      str += `  writing-mode: ${state.targetStyle.font.writingMode.type};\n`
      str += `  color: ${state.targetStyle.font.textColor.color};\n`

      if (state.targetStyle.font.textDecoration.type1 !== "none") {
        str += `  text-decoration: ${state.targetStyle.font.textDecoration.type1} ${state.targetStyle.font.textDecoration.type2} ${state.targetStyle.font.textDecoration.color};\n`
      }

      if(state.hoverStyle.transition.length !== 0) {
        let transitionStr = "  transition: "
        let num = state.hoverStyle.transition.length
        for (const item of state.hoverStyle.transition) {
          transitionStr += `${item.val1} ${item.val4} ${item.val2}s ${item.val3}s`
  
          if(num > 1) {
            transitionStr += ", "
          }
          num -= 1
        }

        str += transitionStr + ";\n"
      }

      str += "  display: inline-block;\n"
      str += "  cursor: pointer;\n"
      str += "}\n"

      if (state.additional.hoverStatus) {
        str += ".button:hover { \n"
        if (state.hoverStyle.padding.isHover) {
          if (state.hoverStyle.padding.type === 'val1' && state.hoverStyle.padding.val1 !== "0") {
            str += `  padding: ${state.hoverStyle.padding.val1}px;\n`
          } else if (state.hoverStyle.padding.type === 'val2') {
            str += `  padding: ${state.hoverStyle.padding.val1}px ${state.hoverStyle.padding.val2}px;\n`
          } else if (state.hoverStyle.padding.type === 'val3') {
            str += `  padding: ${state.hoverStyle.padding.val1}px ${state.hoverStyle.padding.val2}px ${state.hoverStyle.padding.val3}px;\n`
          } else if (state.hoverStyle.padding.type === 'val4') {
            str += `  padding: ${state.hoverStyle.padding.val1}px ${state.hoverStyle.padding.val2}px ${state.hoverStyle.padding.val3}px ${state.hoverStyle.padding.val4}px;\n`
          }
        }

        if (state.hoverStyle.border.borderWidth.isHover) {
          if (state.hoverStyle.border.borderWidth.type === 'val1' && state.hoverStyle.border.borderWidth.val1 !== "0") {
            str += `  border: ${state.hoverStyle.border.borderWidth.val1}px ${state.hoverStyle.border.borderStyle.val1} ${state.hoverStyle.border.borderColor.color1};\n`
          } else if (state.hoverStyle.border.borderWidth.type === 'val2') {
            str += `  border-width: ${state.hoverStyle.border.borderWidth.val1}px ${state.hoverStyle.border.borderWidth.val2}px;\n`
            str += `  border-style: ${state.hoverStyle.border.borderStyle.val1} ${state.hoverStyle.border.borderStyle.val2};\n`
            str += `  border-color: ${state.hoverStyle.border.borderColor.color1} ${state.hoverStyle.border.borderColor.color2};\n`
          } else if (state.hoverStyle.border.borderWidth.type === 'val3') {
            str += `  border-width: ${state.hoverStyle.border.borderWidth.val1}px ${state.hoverStyle.border.borderWidth.val2}px ${state.hoverStyle.border.borderWidth.val3}px;\n`
            str += `  border-style: ${state.hoverStyle.border.borderStyle.val1} ${state.hoverStyle.border.borderStyle.val2} ${state.hoverStyle.border.borderStyle.val3};\n`
            str += `  border-color: ${state.hoverStyle.border.borderColor.color1} ${state.hoverStyle.border.borderColor.color2} ${state.hoverStyle.border.borderColor.color3};\n`
          } else if (state.hoverStyle.border.borderWidth.type === 'val4') {
            str += `  border-width: ${state.hoverStyle.border.borderWidth.val1}px ${state.hoverStyle.border.borderWidth.val2}px ${state.hoverStyle.border.borderWidth.val3}px ${state.hoverStyle.border.borderWidth.val4}px;\n`
            str += `  border-style: ${state.hoverStyle.border.borderStyle.val1} ${state.hoverStyle.border.borderStyle.val2} ${state.hoverStyle.border.borderStyle.val3} ${state.hoverStyle.border.borderStyle.val4};\n`
            str += `  border-color: ${state.hoverStyle.border.borderColor.color1} ${state.hoverStyle.border.borderColor.color2} ${state.hoverStyle.border.borderColor.color3} ${state.hoverStyle.border.borderColor.color4};\n`
          }

          if (state.hoverStyle.border.borderRadius.value.type === 'val1' && state.hoverStyle.border.borderRadius.value.val1 !== "0") {
            str += `  border-radius: ${state.hoverStyle.border.borderRadius.value.val1}px;\n`
          } else if (state.hoverStyle.border.borderRadius.value.type === 'val2') {
            str += `  border-radius: ${state.hoverStyle.border.borderRadius.value.val1}px ${state.hoverStyle.border.borderRadius.value.val2}px;\n`
          } else if (state.hoverStyle.border.borderRadius.value.type === 'val3') {
            str += `  border-radius: ${state.hoverStyle.border.borderRadius.value.val1}px ${state.hoverStyle.border.borderRadius.value.val2}px ${state.hoverStyle.border.borderRadius.value.val3}px ${state.hoverStyle.border.borderRadius.value.val4}px;\n`
          } else if (state.hoverStyle.border.borderRadius.value.type === 'val4') {
            str += `  border-radius: ${state.hoverStyle.border.borderRadius.value.val1}px ${state.hoverStyle.border.borderRadius.value.val2}px ${state.hoverStyle.border.borderRadius.value.val3}px ;\n`
          }
        }

        if (state.hoverStyle.backgroundColor.isHover) {
          str += `  background-color: ${state.hoverStyle.backgroundColor.color};\n`
        }

        if (state.hoverStyle.font.fontSize.isHover) {
          str += `  font-size: ${state.hoverStyle.font.fontSize.val}${state.hoverStyle.font.fontSize.unit};\n`
        }

        if (state.hoverStyle.font.letterSpacing.isHover) {
          str += `  letter-spacing: ${state.hoverStyle.font.letterSpacing.val}${state.hoverStyle.font.letterSpacing.unit};\n`
        }

        if (state.hoverStyle.font.textColor.isHover) {
          str += `  color: ${state.hoverStyle.font.textColor.color};\n`
        }

        if (state.hoverStyle.font.textDecoration.isHover) {
          str += `  text-decoration: ${state.hoverStyle.font.textDecoration.type1} ${state.hoverStyle.font.textDecoration.type2} ${state.hoverStyle.font.textDecoration.color};\n`
        }

        str += "}\n"
      }

      return str
    },
    gWidth: (state) => {
      return state.targetStyle.width.val
    },
    gWidthAuto: (state) => {
      return state.targetStyle.width.auto
    },
    gWidthType: (state) => {
      return state.targetStyle.width.type
    },
    gHeight: (state) => {
      return state.targetStyle.height.val
    },
    gHeightAuto: (state) => {
      return state.targetStyle.height.auto
    },
    gHeightType: (state) => {
      return state.targetStyle.height.type
    },
    gMargin1: (state) => {
      return state.targetStyle.margin.val1
    },
    gMargin2: (state) => {
      return state.targetStyle.margin.val2
    },
    gMargin3: (state) => {
      return state.targetStyle.margin.val3
    },
    gMargin4: (state) => {
      return state.targetStyle.margin.val4
    },
    gPadding1: (state) => {
      return state.targetStyle.padding.val1
    },
    gPadding2: (state) => {
      return state.targetStyle.padding.val2
    },
    gPadding3: (state) => {
      return state.targetStyle.padding.val3
    },
    gPadding4: (state) => {
      return state.targetStyle.padding.val4
    },
    gBorderWidth1: (state) => {
      return state.targetStyle.border.borderWidth.val1
    },
    gBorderWidth2: (state) => {
      return state.targetStyle.border.borderWidth.val2
    },
    gBorderWidth3: (state) => {
      return state.targetStyle.border.borderWidth.val3
    },
    gBorderWidth4: (state) => {
      return state.targetStyle.border.borderWidth.val4
    },
    gBorderColor1: (state) => {
      return state.targetStyle.border.borderColor.color1
    },
    gBorderColor2: (state) => {
      return state.targetStyle.border.borderColor.color2
    },
    gBorderColor3: (state) => {
      return state.targetStyle.border.borderColor.color3
    },
    gBorderColor4: (state) => {
      return state.targetStyle.border.borderColor.color4
    },
    gBorderStyle1: (state) => {
      return state.targetStyle.border.borderStyle.val1
    },
    gBorderStyle2: (state) => {
      return state.targetStyle.border.borderStyle.val2
    },
    gBorderStyle3: (state) => {
      return state.targetStyle.border.borderStyle.val3
    },
    gBorderStyle4: (state) => {
      return state.targetStyle.border.borderStyle.val4
    },
    gBorderRadius1: (state) => {
      return state.targetStyle.border.borderRadius.value.val1
    },
    gBorderRadius2: (state) => {
      return state.targetStyle.border.borderRadius.value.val2
    },
    gBorderRadius3: (state) => {
      return state.targetStyle.border.borderRadius.value.val3
    },
    gBorderRadius4: (state) => {
      return state.targetStyle.border.borderRadius.value.val4
    },
    gBorderRadiusT1: (state) => {
      return state.targetStyle.border.borderRadius.unit.val1
    },
    gBorderRadiusT2: (state) => {
      return state.targetStyle.border.borderRadius.unit.val2
    },
    gBorderRadiusT3: (state) => {
      return state.targetStyle.border.borderRadius.unit.val3
    },
    gBorderRadiusT4: (state) => {
      return state.targetStyle.border.borderRadius.unit.val4
    },
    gBackgroundColor: (state) => {
      return state.targetStyle.backgroundColor.color
    },
    gFontContent: (state) => {
      return state.targetStyle.font.content
    },
    gFontSize: (state) => {
      return state.targetStyle.font.fontSize.val
    },
    gFontSizeUnit: (state) => {
      return state.targetStyle.font.fontSize.unit
    },
    gLetterSpacing: (state) => {
      return state.targetStyle.font.letterSpacing.val
    },
    gLetterSpacingUnit: (state) => {
      return state.targetStyle.font.letterSpacing.unit
    },
    gLineHeight: (state) => {
      return state.targetStyle.font.lineHeight.val
    },
    gLineHeightUnit: (state) => {
      return state.targetStyle.font.lineHeight.unit
    },
    gLineHeightTypeSwitch: (state) => {
      return state.targetStyle.font.lineHeight.typeSwitch
    },
    gLineHeightType: (state) => {
      return state.targetStyle.font.lineHeight.type
    },
    gInlineSize: (state) => {
      return state.targetStyle.font.inlineSize.val
    },
    gInlineSizeUnit: (state) => {
      return state.targetStyle.font.inlineSize.unit
    },
    gInlineSizeTypeSwitch: (state) => {
      return state.targetStyle.font.inlineSize.typeSwitch
    },
    gInlineSizeType: (state) => {
      return state.targetStyle.font.inlineSize.type
    },
    gTextAlign: (state) => {
      return state.targetStyle.font.textAlign.type
    },
    gWordBreak: (state) => {
      return state.targetStyle.font.wordBreak.type
    },
    gWritingMode: (state) => {
      return state.targetStyle.font.writingMode.type
    },
    gTextColor: (state) => {
      return state.targetStyle.font.textColor.color
    },
    gTextDecorationLine: (state) => {
      return state.targetStyle.font.textDecoration.type1
    },
    gTextDecorationStyle: (state) => {
      return state.targetStyle.font.textDecoration.type2
    },
    gTextDecorationColor: (state) => {
      return state.targetStyle.font.textDecoration.color
    },
    gBoxShadow: (state) => {
      return state.targetStyle.boxShadow
    },
    gBoxShadowLength: (state) => {
      return state.targetStyle.boxShadow.length
    },
    gBoxShadowStr: (state) => {
      let str = ''
      let num = state.targetStyle.boxShadow.length
      state.targetStyle.boxShadow.forEach(item => {
        if (item.boxShadowType) {
          str += `inset `
        }
        str += `${item.val1}px ${item.val2}px ${item.val3}px ${item.val4}px ${item.color}`
        if (num > 1) {
          str += `, `
          num -= 1
        }
      });
      return str
    },
    gTextShadow: (state) => {
      return state.targetStyle.textShadow
    },
    gTextShadowLength: (state) => {
      return state.targetStyle.textShadow.length
    },
    gTextShadowStr: (state) => {
      let str = ''
      let num = state.targetStyle.textShadow.length
      state.targetStyle.textShadow.forEach(item => {
        str += `${item.val1}px ${item.val2}px ${item.val3}px ${item.color}`
        if (num > 1) {
          str += `, `
          num -= 1
        }
      });
      return str
    },
    gHover: (state) => {
      return state.additional.hover
    },
    gHoverStatus: (state) => {
      return state.additional.hoverStatus
    },
    gTransition: (state) => {
      return state.hoverStyle.transition
    },
    gTransitionLength: (state) => {
      return state.hoverStyle.transition.length
    },
    gTransitionStr: (state) => {
      let str = ""
      let num = state.hoverStyle.transition.length
      for (const item of state.hoverStyle.transition) {
        str += `${item.val1} ${item.val4} ${item.val2}s ${item.val3}s`

        if(num > 1) {
          str += ", "
        }
        num -= 1
      }

      return str
    },
    gHoverPadding1: (state) => {
      if (state.hoverStyle.padding.isHover) {
        return state.hoverStyle.padding.val1
      }

      return state.targetStyle.padding.val1
    },
    gHoverPadding2: (state) => {
      if (state.hoverStyle.padding.isHover) {
        return state.hoverStyle.padding.val2
      }

      return state.targetStyle.padding.val2
    },
    gHoverPadding3: (state) => {
      if (state.hoverStyle.padding.isHover) {
        return state.hoverStyle.padding.val3
      }

      return state.targetStyle.padding.val3
    },
    gHoverPadding4: (state) => {
      if (state.hoverStyle.padding.isHover) {
        return state.hoverStyle.padding.val4
      }

      return state.targetStyle.padding.val4
    },
    gHoverPaddingIsHover: (state) => {
      return state.hoverStyle.padding.isHover
    },
    gHoverBorderWidth1: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderWidth.val1
      }

      return state.targetStyle.border.borderWidth.val1
    },
    gHoverBorderWidth2: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderWidth.val2
      }

      return state.targetStyle.border.borderWidth.val1
    },
    gHoverBorderWidth3: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderWidth.val3
      }

      return state.targetStyle.border.borderWidth.val1
    },
    gHoverBorderWidth4: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderWidth.val4
      }

      return state.targetStyle.border.borderWidth.val1
    },
    gHoverBorderColor1: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderColor.color1
      }

      return state.targetStyle.border.borderColor.color1
    },
    gHoverBorderColor2: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderColor.color2
      }

      return state.targetStyle.border.borderColor.color2
    },
    gHoverBorderColor3: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderColor.color3
      }

      return state.targetStyle.border.borderColor.color3
    },
    gHoverBorderColor4: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderColor.color4
      }

      return state.targetStyle.border.borderColor.color4
    },
    gHoverBorderStyle1: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderStyle.val1
      }

      return state.targetStyle.border.borderStyle.val1
    },
    gHoverBorderStyle2: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderStyle.val2
      }

      return state.targetStyle.border.borderStyle.val2
    },
    gHoverBorderStyle3: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderStyle.val3
      }

      return state.targetStyle.border.borderStyle.val3
    },
    gHoverBorderStyle4: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderStyle.val4
      }

      return state.targetStyle.border.borderStyle.val4
    },
    gHoverBorderRadius1: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.value.val1
      }
      return state.targetStyle.border.borderRadius.value.val1
    },
    gHoverBorderRadius2: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.value.val2
      }
      return state.targetStyle.border.borderRadius.value.val2
    },
    gHoverBorderRadius3: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.value.val3
      }
      return state.targetStyle.border.borderRadius.value.val3
    },
    gHoverBorderRadius4: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.value.val4
      }
      return state.targetStyle.border.borderRadius.value.val4
    },
    gHoverBorderRadiusT1: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.unit.val1
      }
      return state.targetStyle.border.borderRadius.unit.val1
    },
    gHoverBorderRadiusT2: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.unit.val2
      }
      return state.targetStyle.border.borderRadius.unit.val2
    },
    gHoverBorderRadiusT3: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.unit.val3
      }
      return state.targetStyle.border.borderRadius.unit.val3
    },
    gHoverBorderRadiusT4: (state) => {
      if (state.hoverStyle.border.borderWidth.isHover) {
        return state.hoverStyle.border.borderRadius.unit.val4
      }
      return state.targetStyle.border.borderRadius.unit.val4
    },
    gHoverBorderIsHover: (state) => {
      return state.hoverStyle.border.borderWidth.isHover
    },
    gHoverBackgroundColor: (state) => {
      if (state.hoverStyle.backgroundColor.isHover) {
        return state.hoverStyle.backgroundColor.color
      }

      return state.targetStyle.backgroundColor.color
    },
    gHoverBackgroundIsHover: (state) => {
      return state.hoverStyle.backgroundColor.isHover
    },
    gHoverFontSize: (state) => {
      if (state.hoverStyle.font.fontSize.isHover) {
        return state.hoverStyle.font.fontSize.val
      }
      return state.targetStyle.font.fontSize.val
    },
    gHoverFontSizeUnit: (state) => {
      if (state.hoverStyle.font.fontSize.isHover) {
        return state.hoverStyle.font.fontSize.unit
      }
      return state.targetStyle.font.fontSize.unit
    },
    gHoverFontSizeIsHover: (state) => {
      return state.hoverStyle.font.fontSize.isHover
    },
    gHoverLetterSpacing: (state) => {
      if (state.hoverStyle.font.letterSpacing.isHover) {
        return state.hoverStyle.font.letterSpacing.val
      }
      return state.targetStyle.font.letterSpacing.val
    },
    gHoverLetterSpacingUnit: (state) => {
      if (state.hoverStyle.font.letterSpacing.isHover) {
        return state.hoverStyle.font.letterSpacing.unit
      }
      return state.targetStyle.font.letterSpacing.unit
    },
    gHoverLetterSpacingIsHover: (state) => {
      return state.hoverStyle.font.letterSpacing.isHover
    },
    gHoverTextColor: (state) => {
      if (state.hoverStyle.font.textColor.isHover) {
        return state.hoverStyle.font.textColor.color
      }
      return state.targetStyle.font.textColor.color
    },
    gHoverTextColorIsHover: (state) => {
      return state.hoverStyle.font.textColor.isHover
    },
    gHoverTextDecorationLine: (state) => {
      if (state.hoverStyle.font.textDecoration.isHover) {
        return state.hoverStyle.font.textDecoration.type1
      }
      return state.targetStyle.font.textDecoration.type1
    },
    gHoverTextDecorationStyle: (state) => {
      if (state.hoverStyle.font.textDecoration.isHover) {
        return state.hoverStyle.font.textDecoration.type2
      }
      return state.targetStyle.font.textDecoration.type2
    },
    gHoverTextDecorationColor: (state) => {
      if (state.hoverStyle.font.textDecoration.isHover) {
        return state.hoverStyle.font.textDecoration.color
      }
      return state.targetStyle.font.textDecoration.color
    },
    gHoverTextDecorationIsHover: (state) => {
      return state.hoverStyle.font.textDecoration.isHover
    },



  },
  mutations: {
    uWidth(state, val) {
      if (val > 500) {
        state.hoverStyle.width.val = 500
      } else if (val < 0) {
        state.targetStyle.width.val = 0
      } else {
        state.targetStyle.width.val = val
      }
    },
    uWidthAuto(state, val) {
      state.targetStyle.width.auto = val
    },
    uWidthType(state, val) {
      if (state.targetStyle.width.val > 100 && state.targetStyle.width.type === 'px') {
        state.targetStyle.width.val = 100
      }
      state.targetStyle.width.type = val
    },
    uHeight(state, val) {
      if (state.targetStyle.height.type === 'px') {
        if (val > 500) {
          state.targetStyle.height.val = 500
        } else if (val < 0) {
          state.targetStyle.height.val = 0
        } else {
          state.targetStyle.height.val = val
        }
      } else if (state.targetStyle.height.type === '%') {
        if (val > 100) {
          state.targetStyle.height.val = 100
        } else if (val < 0) {
          state.targetStyle.height.val = 0
        } else {
          state.targetStyle.height.val = val
        }
      }

    },
    uHeightAuto(state, val) {
      state.targetStyle.height.auto = val
    },
    uHeightType(state, val) {
      if (state.targetStyle.height.val > 100 && state.targetStyle.height.type === 'px') {
        state.targetStyle.height.val = 100
      }
      state.targetStyle.height.type = val
    },
    uMargin1(state, { val, type }) {
      if (val > 100) {
        return state.targetStyle.margin.val1 = 100
      } else if (val < -100) {
        return state.targetStyle.margin.val1 = -100
      }

      if (type === 'val1') {
        state.targetStyle.margin.val1 = val
        state.targetStyle.margin.val2 = val
        state.targetStyle.margin.val3 = val
        state.targetStyle.margin.val4 = val
      } else if (type === 'val2') {
        state.targetStyle.margin.val1 = val
        state.targetStyle.margin.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.targetStyle.margin.val1 = val
      }
    },
    uMargin2(state, { val, type }) {
      if (val > 100) {
        return state.targetStyle.margin.val2 = 100
      } else if (val < -100) {
        return state.targetStyle.margin.val2 = -100
      }

      if (type === 'val2') {
        state.targetStyle.margin.val2 = val
        state.targetStyle.margin.val4 = val
      } else if (type === 'val3') {
        state.targetStyle.margin.val2 = val
        state.targetStyle.margin.val4 = val
      } else if (type === 'val4') {
        state.targetStyle.margin.val2 = val
      }

    },
    uMargin3(state, val) {
      if (val > 100) {
        return state.targetStyle.margin.val3 = 100
      } else if (val < -100) {
        return state.targetStyle.margin.val3 = -100
      }

      state.targetStyle.margin.val3 = val
    },
    uMargin4(state, val) {
      if (val > 100) {
        return state.targetStyle.margin.val4 = 100
      } else if (val < -100) {
        return state.targetStyle.margin.val4 = -100
      }

      state.targetStyle.margin.val4 = val

    },
    uMaringType(state, val) {
      state.targetStyle.margin.type = val
    },
    uMarginRange(state, val) {
      state.additional.marginRange = val
    },
    uPadding1(state, { val, type }) {
      if (val > 100) {
        return state.targetStyle.padding.val1 = 100
      } else if (val < 0) {
        return state.targetStyle.padding.val1 = 0
      }

      if (type === 'val1') {
        state.targetStyle.padding.val1 = val
        state.targetStyle.padding.val2 = val
        state.targetStyle.padding.val3 = val
        state.targetStyle.padding.val4 = val
      } else if (type === 'val2') {
        state.targetStyle.padding.val1 = val
        state.targetStyle.padding.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.targetStyle.padding.val1 = val
      }
    },
    uPadding2(state, { val, type }) {
      if (val > 100) {
        return state.targetStyle.padding.val2 = 100
      } else if (val < 0) {
        return state.targetStyle.padding.val2 = 0
      }

      if (type === 'val2') {
        state.targetStyle.padding.val2 = val
        state.targetStyle.padding.val4 = val
      } else if (type === 'val3') {
        state.targetStyle.padding.val2 = val
        state.targetStyle.padding.val4 = val
      } else if (type === 'val4') {
        state.targetStyle.padding.val2 = val
      }

    },
    uPadding3(state, val) {
      if (val > 100) {
        return state.targetStyle.padding.val3 = 100
      } else if (val < 0) {
        return state.targetStyle.padding.val3 = 0
      }

      state.targetStyle.padding.val3 = val
    },
    uPadding4(state, val) {
      if (val > 100) {
        return state.targetStyle.padding.val4 = 100
      } else if (val < 0) {
        return state.targetStyle.padding.val4 = 0
      }

      state.targetStyle.padding.val4 = val

    },
    uPaddingType(state, val) {
      state.targetStyle.padding.type = val
    },
    uBorderWidth1(state, { val, type }) {
      if (val > 100) {
        return state.targetStyle.border.borderWidth.val1 = 100
      } else if (val < 0) {
        return state.targetStyle.border.borderWidth.val1 = 0
      }

      if (type === 'val1') {
        state.targetStyle.border.borderWidth.val1 = val
        state.targetStyle.border.borderWidth.val2 = val
        state.targetStyle.border.borderWidth.val3 = val
        state.targetStyle.border.borderWidth.val4 = val
      } else if (type === 'val2') {
        state.targetStyle.border.borderWidth.val1 = val
        state.targetStyle.border.borderWidth.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.targetStyle.border.borderWidth.val1 = val
      }
    },
    uBorderWidth2(state, { val, type }) {
      if (val > 100) {
        return state.targetStyle.border.borderWidth.val2 = 100
      } else if (val < 0) {
        return state.targetStyle.border.borderWidth.val2 = 0
      }

      if (type === 'val2') {
        state.targetStyle.border.borderWidth.val2 = val
        state.targetStyle.border.borderWidth.val4 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderWidth.val2 = val
        state.targetStyle.border.borderWidth.val4 = val
      } else if (type === 'val4') {
        state.targetStyle.border.borderWidth.val2 = val
      }
    },
    uBorderWidth3(state, val) {
      if (val > 100) {
        return state.targetStyle.border.borderWidth.val3 = 100
      } else if (val < 0) {
        return state.targetStyle.border.borderWidth.val3 = 0
      }

      state.targetStyle.border.borderWidth.val3 = val
    },
    uBorderWidth4(state, val) {
      if (val > 100) {
        return state.targetStyle.border.borderWidth.val4 = 100
      } else if (val < 0) {
        return state.targetStyle.border.borderWidth.val4 = 0
      }

      state.targetStyle.border.borderWidth.val4 = val
    },
    uBorderType(state, val) {
      state.targetStyle.border.borderWidth.type = val
    },
    uBorderColor1(state, { val, type }) {
      if (type === 'val1') {
        state.targetStyle.border.borderColor.color1 = val
        state.targetStyle.border.borderColor.color2 = val
        state.targetStyle.border.borderColor.color3 = val
        state.targetStyle.border.borderColor.color4 = val
      } else if (type === 'val2') {
        state.targetStyle.border.borderColor.color1 = val
        state.targetStyle.border.borderColor.color3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.targetStyle.border.borderColor.color1 = val
      }
    },
    uBorderColor2(state, { val, type }) {
      if (type === 'val2') {
        state.targetStyle.border.borderColor.color2 = val
        state.targetStyle.border.borderColor.color4 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderColor.color2 = val
        state.targetStyle.border.borderColor.color4 = val
      } else if (type === 'val4') {
        state.targetStyle.border.borderColor.color2 = val
      }
    },
    uBorderColor3(state, { val, type }) {
      if (type === 'val3' || type === 'val4') {
        state.targetStyle.border.borderColor.color3 = val
      }
    },
    uBorderColor4(state, { val, type }) {
      if (type === 'val4') {
        state.targetStyle.border.borderColor.color4 = val
      }
    },
    uBorderStyle1(state, { val, type }) {
      if (type === 'val1') {
        state.targetStyle.border.borderStyle.val1 = val
        state.targetStyle.border.borderStyle.val2 = val
        state.targetStyle.border.borderStyle.val3 = val
        state.targetStyle.border.borderStyle.val4 = val
      } else if (type === 'val2') {
        state.targetStyle.border.borderStyle.val1 = val
        state.targetStyle.border.borderStyle.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.targetStyle.border.borderStyle.val1 = val
      }
    },
    uBorderStyle2(state, { val, type }) {
      if (type === 'val2') {
        state.targetStyle.border.borderStyle.val2 = val
        state.targetStyle.border.borderStyle.val4 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderStyle.val2 = val
        state.targetStyle.border.borderStyle.val4 = val
      } else if (type === 'val4') {
        state.targetStyle.border.borderStyle.val2 = val
      }
    },
    uBorderStyle3(state, val) {
      state.targetStyle.border.borderStyle.val3 = val
    },
    uBorderStyle4(state, val) {
      state.targetStyle.border.borderStyle.val4 = val
    },
    uBorderRadius1(state, { val, type }) {
      if (type === 'val1') {
        state.targetStyle.border.borderRadius.value.val1 = val
        state.targetStyle.border.borderRadius.value.val2 = val
        state.targetStyle.border.borderRadius.value.val3 = val
        state.targetStyle.border.borderRadius.value.val4 = val
      } else if (type === 'val2') {
        state.targetStyle.border.borderRadius.value.val1 = val
        state.targetStyle.border.borderRadius.value.val3 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderRadius.value.val1 = val
      }
    },
    uBorderRadius2(state, { val, type }) {
      if (type === 'val2') {
        state.targetStyle.border.borderRadius.value.val2 = val
        state.targetStyle.border.borderRadius.value.val4 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderRadius.value.val2 = val
      }
    },
    uBorderRadius3(state, val) {
      state.targetStyle.border.borderRadius.value.val3 = val
    },
    uBorderRadius4(state, val) {
      state.targetStyle.border.borderRadius.value.val4 = val
    },
    uBorderRadiusType(state, val) {
      state.targetStyle.border.borderRadius.value.type = val
    },
    uBorderRadiusT1(state, { val, type }) {
      if (type === 'val1') {
        state.targetStyle.border.borderRadius.unit.val1 = val
        state.targetStyle.border.borderRadius.unit.val2 = val
        state.targetStyle.border.borderRadius.unit.val3 = val
        state.targetStyle.border.borderRadius.unit.val4 = val
      } else if (type === 'val2') {
        state.targetStyle.border.borderRadius.unit.val1 = val
        state.targetStyle.border.borderRadius.unit.val3 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderRadius.unit.val1 = val
      }
    },
    uBorderRadiusT2(state, { val, type }) {
      if (type === 'val2') {
        state.targetStyle.border.borderRadius.unit.val2 = val
        state.targetStyle.border.borderRadius.unit.val4 = val
      } else if (type === 'val3') {
        state.targetStyle.border.borderRadius.unit.val2 = val
      }
    },
    uBorderRadiusT3(state, val) {
      state.targetStyle.border.borderRadius.unit.val3 = val
    },
    uBorderRadiusT4(state, val) {
      state.targetStyle.border.borderRadius.unit.val4 = val
    },
    uBackgroundColor(state, val) {
      state.targetStyle.backgroundColor.color = val
    },
    uFontContent(state, val) {
      state.targetStyle.font.content = val
    },
    uFontSize(state, val) {
      if (state.targetStyle.font.fontSize.unit === 'rem' && val > 10) {
        state.targetStyle.font.fontSize.val = 10
      } else if (state.targetStyle.font.fontSize.unit === 'px' && val > 100) {
        state.targetStyle.font.fontSize.val = 100
      } else if (val < 0) {
        state.targetStyle.font.fontSize.val = 0
      } else {
        state.targetStyle.font.fontSize.val = val
      }
    },
    uFontSizeUnit(state, val) {
      if (val === 'rem' && state.targetStyle.font.fontSize.val > 10) {
        state.targetStyle.font.fontSize.val = 10
      }
      state.targetStyle.font.fontSize.unit = val
    },
    uLetterSpacing(state, val) {
      if (state.targetStyle.font.letterSpacing.unit === 'rem' && val > 5) {
        state.targetStyle.font.letterSpacing.val = 5
      } else if (state.targetStyle.font.letterSpacing.unit === 'px' && val > 50) {
        state.targetStyle.font.letterSpacing.val = 50
      } else if (val < 0) {
        state.targetStyle.font.letterSpacing.val = 0
      } else {
        state.targetStyle.font.letterSpacing.val = val
      }
    },
    uLetterSpacingUnit(state, val) {
      if (val === 'rem' && state.targetStyle.font.letterSpacing.val > 5) {
        state.targetStyle.font.letterSpacing.val = 5
      }
      state.targetStyle.font.letterSpacing.unit = val
    },
    uLineHeight(state, val) {
      if (state.targetStyle.font.lineHeight.unit === 'rem' && val > 30) {
        state.targetStyle.font.lineHeight.val = 30
      } else if (state.targetStyle.font.lineHeight.unit === 'px' && val > 100) {
        state.targetStyle.font.lineHeight.val = 100
      } else if (val < 0) {
        state.targetStyle.font.lineHeight.val = 0
      } else {
        state.targetStyle.font.lineHeight.val = val
      }
    },
    uLineHeightUnit(state, val) {
      if (val === 'rem' && state.targetStyle.font.lineHeight.val > 30) {
        state.targetStyle.font.lineHeight.val = 30
      }
      state.targetStyle.font.lineHeight.unit = val
    },
    uLineHeightTypeSwitch(state, val) {
      state.targetStyle.font.lineHeight.typeSwitch = val
    },
    uLineHeightType(state, val) {
      state.targetStyle.font.lineHeight.type = val
    },
    uInlineSize(state, val) {
      if (state.targetStyle.font.inlineSize.unit === '%' && val > 100) {
        state.targetStyle.font.inlineSize.val = 100
      } else if (state.targetStyle.font.inlineSize.unit === 'px' && val > 500) {
        state.targetStyle.font.inlineSize.val = 500
      } else if (val < 0) {
        state.targetStyle.font.inlineSize.val = 0
      } else {
        state.targetStyle.font.inlineSize.val = val
      }
    },
    uInlineSizeUnit(state, val) {
      if (val === '%' && state.targetStyle.font.inlineSize.val > 100) {
        state.targetStyle.font.inlineSize.val = 100
      }
      state.targetStyle.font.inlineSize.unit = val
    },
    uInlineSizeTypeSwitch(state, val) {
      state.targetStyle.font.inlineSize.typeSwitch = val
    },
    uInlineSizeType(state, val) {
      state.targetStyle.font.inlineSize.type = val
    },
    uTextAlign(state, val) {
      state.targetStyle.font.textAlign.type = val
    },
    uWordBreak(state, val) {
      state.targetStyle.font.wordBreak.type = val
    },
    uWritingMode(state, val) {
      state.targetStyle.font.writingMode.type = val
    },
    uTextColor(state, val) {
      state.targetStyle.font.textColor.color = val
    },
    uTextDecorationLine: (state, val) => {
      state.targetStyle.font.textDecoration.type1 = val
    },
    uTextDecorationStyle: (state, val) => {
      state.targetStyle.font.textDecoration.type2 = val
    },
    uTextDecorationColor: (state, val) => {
      state.targetStyle.font.textDecoration.color = val
    },
    addBoxShadow: (state, val) => {
      state.targetStyle.boxShadow.push(val)
    },
    removeBoxShadow: (state, index) => {
      state.targetStyle.boxShadow.splice(index, 1)
    },
    uBoxShadow: (state, { key, val, index }) => {
      state.targetStyle.boxShadow[index][key] = val
    },
    uBoxShadowBoxShadowTrue: (state, index) => {
      state.targetStyle.boxShadow[index].boxShadowType = true
    },
    uBoxShadowBoxShadowFalse: (state, index) => {
      state.targetStyle.boxShadow[index].boxShadowType = false
    },
    addTextShadow: (state, val) => {
      state.targetStyle.textShadow.push(val)
    },
    removeTextShadow: (state, index) => {
      state.targetStyle.textShadow.splice(index, 1)
    },
    uTextShadow: (state, { key, val, index }) => {
      state.targetStyle.textShadow[index][key] = val
    },
    uHover(state, val) {
      state.additional.hover = val
    },
    uHoverStatus(state) {
      state.additional.hoverStatus = !state.additional.hoverStatus
    },
    addTransition(state, val) {
      state.hoverStyle.transition.push(val)
    },
    removeTransition(state, index) {
      state.hoverStyle.transition.splice(index, 1)
    },
    uTransition(state, {val, index, target}) {
      state.hoverStyle.transition[index][target] = val
    },
    uHoverPadding1(state, { val, type }) {
      if (val > 100) {
        return state.hoverStyle.padding.val1 = 100
      } else if (val < 0) {
        return state.hoverStyle.padding.val1 = 0
      }

      if (type === 'val1') {
        state.hoverStyle.padding.val1 = val
        state.hoverStyle.padding.val2 = val
        state.hoverStyle.padding.val3 = val
        state.hoverStyle.padding.val4 = val
      } else if (type === 'val2') {
        state.hoverStyle.padding.val1 = val
        state.hoverStyle.padding.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.hoverStyle.padding.val1 = val
      }
    },
    uHoverPadding2(state, { val, type }) {
      if (val > 100) {
        return state.hoverStyle.padding.val2 = 100
      } else if (val < 0) {
        return state.hoverStyle.padding.val2 = 0
      }

      if (type === 'val2') {
        state.hoverStyle.padding.val2 = val
        state.hoverStyle.padding.val4 = val
      } else if (type === 'val3') {
        state.hoverStyle.padding.val2 = val
        state.hoverStyle.padding.val4 = val
      } else if (type === 'val4') {
        state.hoverStyle.padding.val2 = val
      }

    },
    uHoverPadding3(state, val) {
      if (val > 100) {
        return state.hoverStyle.padding.val3 = 100
      } else if (val < 0) {
        return state.hoverStyle.padding.val3 = 0
      }

      state.hoverStyle.padding.val3 = val
    },
    uHoverPadding4(state, val) {
      if (val > 100) {
        return state.hoverStyle.padding.val4 = 100
      } else if (val < 0) {
        return state.hoverStyle.padding.val4 = 0
      }

      state.hoverStyle.padding.val4 = val

    },
    uHoverPaddingType(state, val) {
      state.hoverStyle.padding.type = val
    },
    uHoverPaddingIsHover(state, val) {
      state.hoverStyle.padding.isHover = val
    },
    uHoverBorderWidth1(state, { val, type }) {
      if (val > 100) {
        return state.hoverStyle.border.borderWidth.val1 = 100
      } else if (val < 0) {
        return state.hoverStyle.border.borderWidth.val1 = 0
      }

      if (type === 'val1') {
        state.hoverStyle.border.borderWidth.val1 = val
        state.hoverStyle.border.borderWidth.val2 = val
        state.hoverStyle.border.borderWidth.val3 = val
        state.hoverStyle.border.borderWidth.val4 = val
      } else if (type === 'val2') {
        state.hoverStyle.border.borderWidth.val1 = val
        state.hoverStyle.border.borderWidth.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.hoverStyle.border.borderWidth.val1 = val
      }
    },
    uHoverBorderWidth2(state, { val, type }) {
      if (val > 100) {
        return state.hoverStyle.border.borderWidth.val2 = 100
      } else if (val < 0) {
        return state.hoverStyle.border.borderWidth.val2 = 0
      }

      if (type === 'val2') {
        state.hoverStyle.border.borderWidth.val2 = val
        state.hoverStyle.border.borderWidth.val4 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderWidth.val2 = val
        state.hoverStyle.border.borderWidth.val4 = val
      } else if (type === 'val4') {
        state.hoverStyle.border.borderWidth.val2 = val
      }
    },
    uHoverBorderWidth3(state, val) {
      if (val > 100) {
        return state.hoverStyle.border.borderWidth.val3 = 100
      } else if (val < 0) {
        return state.hoverStyle.border.borderWidth.val3 = 0
      }

      state.hoverStyle.border.borderWidth.val3 = val
    },
    uHoverBorderWidth4(state, val) {
      if (val > 100) {
        return state.hoverStyle.border.borderWidth.val4 = 100
      } else if (val < 0) {
        return state.hoverStyle.border.borderWidth.val4 = 0
      }

      state.hoverStyle.border.borderWidth.val4 = val
    },
    uHoverBorderType(state, val) {
      state.hoverStyle.border.borderWidth.type = val
    },
    uHoverBorderColor1(state, { val, type }) {
      if (type === 'val1') {
        state.hoverStyle.border.borderColor.color1 = val
        state.hoverStyle.border.borderColor.color2 = val
        state.hoverStyle.border.borderColor.color3 = val
        state.hoverStyle.border.borderColor.color4 = val
      } else if (type === 'val2') {
        state.hoverStyle.border.borderColor.color1 = val
        state.hoverStyle.border.borderColor.color3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.hoverStyle.border.borderColor.color1 = val
      }
    },
    uHoverBorderColor2(state, { val, type }) {
      if (type === 'val2') {
        state.hoverStyle.border.borderColor.color2 = val
        state.hoverStyle.border.borderColor.color4 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderColor.color2 = val
        state.hoverStyle.border.borderColor.color4 = val
      } else if (type === 'val4') {
        state.hoverStyle.border.borderColor.color2 = val
      }
    },
    uHoverBorderColor3(state, { val, type }) {
      if (type === 'val3' || type === 'val4') {
        state.hoverStyle.border.borderColor.color3 = val
      }
    },
    uHoverBorderColor4(state, { val, type }) {
      if (type === 'val4') {
        state.hoverStyle.border.borderColor.color4 = val
      }
    },
    uHoverBorderStyle1(state, { val, type }) {
      if (type === 'val1') {
        state.hoverStyle.border.borderStyle.val1 = val
        state.hoverStyle.border.borderStyle.val2 = val
        state.hoverStyle.border.borderStyle.val3 = val
        state.hoverStyle.border.borderStyle.val4 = val
      } else if (type === 'val2') {
        state.hoverStyle.border.borderStyle.val1 = val
        state.hoverStyle.border.borderStyle.val3 = val
      } else if (type === 'val3' || type === 'val4') {
        state.hoverStyle.border.borderStyle.val1 = val
      }
    },
    uHoverBorderStyle2(state, { val, type }) {
      if (type === 'val2') {
        state.hoverStyle.border.borderStyle.val2 = val
        state.hoverStyle.border.borderStyle.val4 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderStyle.val2 = val
        state.hoverStyle.border.borderStyle.val4 = val
      } else if (type === 'val4') {
        state.hoverStyle.border.borderStyle.val2 = val
      }
    },
    uHoverBorderStyle3(state, val) {
      state.hoverStyle.border.borderStyle.val3 = val
    },
    uHoverBorderStyle4(state, val) {
      state.hoverStyle.border.borderStyle.val4 = val
    },
    uHoverBorderRadius1(state, { val, type }) {
      if (type === 'val1') {
        state.hoverStyle.border.borderRadius.value.val1 = val
        state.hoverStyle.border.borderRadius.value.val2 = val
        state.hoverStyle.border.borderRadius.value.val3 = val
        state.hoverStyle.border.borderRadius.value.val4 = val
      } else if (type === 'val2') {
        state.hoverStyle.border.borderRadius.value.val1 = val
        state.hoverStyle.border.borderRadius.value.val3 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderRadius.value.val1 = val
      }
    },
    uHoverBorderRadius2(state, { val, type }) {
      if (type === 'val2') {
        state.hoverStyle.border.borderRadius.value.val2 = val
        state.hoverStyle.border.borderRadius.value.val4 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderRadius.value.val2 = val
      }
    },
    uHoverBorderRadius3(state, val) {
      state.hoverStyle.border.borderRadius.value.val3 = val
    },
    uHoverBorderRadius4(state, val) {
      state.hoverStyle.border.borderRadius.value.val4 = val
    },
    uHoverBorderRadiusType(state, val) {
      state.hoverStyle.border.borderRadius.value.type = val
    },
    uHoverBorderRadiusT1(state, { val, type }) {
      if (type === 'val1') {
        state.hoverStyle.border.borderRadius.unit.val1 = val
        state.hoverStyle.border.borderRadius.unit.val2 = val
        state.hoverStyle.border.borderRadius.unit.val3 = val
        state.hoverStyle.border.borderRadius.unit.val4 = val
      } else if (type === 'val2') {
        state.hoverStyle.border.borderRadius.unit.val1 = val
        state.hoverStyle.border.borderRadius.unit.val3 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderRadius.unit.val1 = val
      }
    },
    uHoverBorderRadiusT2(state, { val, type }) {
      if (type === 'val2') {
        state.hoverStyle.border.borderRadius.unit.val2 = val
        state.hoverStyle.border.borderRadius.unit.val4 = val
      } else if (type === 'val3') {
        state.hoverStyle.border.borderRadius.unit.val2 = val
      }
    },
    uHoverBorderRadiusT3(state, val) {
      state.hoverStyle.border.borderRadius.unit.val3 = val
    },
    uHoverBorderRadiusT4(state, val) {
      state.hoverStyle.border.borderRadius.unit.val4 = val
    },
    uHoverBorderIsHover(state, val) {
      state.hoverStyle.border.borderWidth.isHover = val
    },
    uHoverBackgroundColor(state, val) {
      state.hoverStyle.backgroundColor.color = val
    },
    uHoverBackgroundIsHover(state, val) {
      state.hoverStyle.backgroundColor.isHover = val
    },
    uHoverFontSize(state, val) {
      if (state.hoverStyle.font.fontSize.unit === 'rem' && val > 10) {
        state.hoverStyle.font.fontSize.val = 10
      } else if (state.hoverStyle.font.fontSize.unit === 'px' && val > 100) {
        state.hoverStyle.font.fontSize.val = 100
      } else if (val < 0) {
        state.hoverStyle.font.fontSize.val = 0
      } else {
        state.hoverStyle.font.fontSize.val = val
      }
    },
    uHoverFontSizeUnit(state, val) {
      if (val === 'rem' && state.hoverStyle.font.fontSize.val > 10) {
        state.hoverStyle.font.fontSize.val = 10
      }
      state.hoverStyle.font.fontSize.unit = val
    },
    uHoverFontSizeIsHover(state, val) {
      state.hoverStyle.font.fontSize.isHover = val
    },
    uHoverLetterSpacing(state, val) {
      if (state.hoverStyle.font.letterSpacing.unit === 'rem' && val > 5) {
        state.hoverStyle.font.letterSpacing.val = 5
      } else if (state.hoverStyle.font.letterSpacing.unit === 'px' && val > 50) {
        state.hoverStyle.font.letterSpacing.val = 50
      } else if (val < 0) {
        state.hoverStyle.font.letterSpacing.val = 0
      } else {
        state.hoverStyle.font.letterSpacing.val = val
      }
    },
    uHoverLetterSpacingUnit(state, val) {
      if (val === 'rem' && state.hoverStyle.font.letterSpacing.val > 5) {
        state.hoverStyle.font.letterSpacing.val = 5
      }
      state.hoverStyle.font.letterSpacing.unit = val
    },
    uHoverLetterSpacingIsHover(state, val) {
      state.hoverStyle.font.letterSpacing.isHover = val
    },
    uHoverTextColor(state, val) {
      state.hoverStyle.font.textColor.color = val
    },
    uHoverTextColorIsHover(state, val) {
      state.hoverStyle.font.textColor.isHover = val
    },
    uHoverTextDecorationLine: (state, val) => {
      state.hoverStyle.font.textDecoration.type1 = val
    },
    uHoverTextDecorationStyle: (state, val) => {
      state.hoverStyle.font.textDecoration.type2 = val
    },
    uHoverTextDecorationColor: (state, val) => {
      state.hoverStyle.font.textDecoration.color = val
    },
    uHoverTextDecorationIsHover(state, val) {
      state.hoverStyle.font.textDecoration.isHover = val
    },

  }

})
