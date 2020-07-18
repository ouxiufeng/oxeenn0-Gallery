<template>
  <div class="style-item item-text-shadow">
    <div class="fitst-row">
      <div class="attr-name">Text shadow</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-text-shadow" :class="{ close: closeItem }">
      <button
        class="add-item"
        @click="addTextShadowItem(), colorPicker(gTextShadowLength)"
        :class="{ disable: textShadowIsDisable}"
        :disabled="textShadowIsDisable"
      ></button>

      <div class="box-shadow-item" v-for="(item, index) in gTextShadow" :key="index">
        <div class="fitst-row">
          <div class="sub-title box-shadow-subtitle">{{ index + 1 }}</div>
          <button class="remove-btn" @click="removeTextShadow(index)"></button>
        </div>
        <div class="attr-item">
          <input
            type="range"
            class="attr-valuebar"
            id="val1"
            min="-20"
            max="20"
            step="1"
            ref="input1"
            :value="item.val1"
            @input="uTextShadow(index, 'input1')"
          />
          <p>{{ item.val1 }}</p>
        </div>
        <div class="attr-item">
          <input
            type="range"
            class="attr-valuebar"
            id="val2"
            min="-20"
            max="20"
            step="1"
            ref="input2"
            :value="item.val2"
            @input="uTextShadow(index, 'input2')"
          />
          <p>{{ item.val2 }}</p>
        </div>
        <div class="attr-item">
          <input
            type="range"
            class="attr-valuebar"
            id="val3"
            min="0"
            max="20"
            step="1"
            ref="input3"
            :value="item.val3"
            @input="uTextShadow(index, 'input3')"
          />
          <p>{{ item.val3 }}</p>
        </div>
        <div class="textShadowColor"></div>
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
      textShadowIsDisable: false
    };
  },
  computed: {
    gTextShadow() {
      return this.$store.getters.gTextShadow;
    },
    gTextShadowLength() {
      return this.$store.getters.gTextShadowLength;
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    addTextShadowItem() {
      let val = {
        val1: "0",
        val2: "0",
        val3: "0",
        color: "#000000"
      };
      this.$store.commit("addTextShadow", val);
    },
    uTextShadow(index, refsName) {
      let key = this.$refs[refsName][index].id;
      let val = this.$refs[refsName][index].value;

      this.$store.commit("uTextShadow", { key, val, index });
    },
    removeTextShadow(index) {
      this.$store.commit("removeTextShadow", index);
    },
    colorPicker(index) {
      let textShadow = this.$store.getters.gTextShadow;

      setTimeout(() => {
        const textColor = Pickr.create({
          el: ".textShadowColor",
          theme: "monolith",
          comparison: false,
          default: textShadow[index - 1].color,

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
          this.$store.commit("uTextShadow", {
            key: "color",
            val: hexa,
            index: index - 1
          });
        });
      }, 10);
    }
  },
  watch: {
    gTextShadowLength(length) {
      if (length >= 4) {
        this.textShadowIsDisable = true;
      } else {
        this.textShadowIsDisable = false;
      }
    }
  }
};
</script>