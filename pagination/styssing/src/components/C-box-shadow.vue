<template>
  <div class="style-item item-box-shadow">
    <div class="fitst-row">
      <div class="attr-name">Box shadow</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>
    <div class="body-area to-box-shadow" :class="{ close: closeItem }">
      <button
        class="add-item"
        @click="addBoxShadowItem(), colorPicker(gBoxShadowLength)"
        :class="{ disable: boxShadowIsDisable}"
        :disabled="boxShadowIsDisable"
      ></button>

      <div class="box-shadow-item" v-for="(item, index) in gBoxShadow" :key="index">
        <div class="fitst-row">
          <div class="sub-title box-shadow-subtitle">{{ index + 1 }}</div>
          <button class="remove-btn" @click="removeBoxShadow(index)"></button>
        </div>
        <div class="box-shadow-type-btn-grouop">
          <button
            class="box-shadow-type-btn"
            :class="{ focus: !item.boxShadowType }"
            @click="uBoxShadowBoxShadowFalse(index)"
          >Outset</button>
          <button
            class="box-shadow-type-btn"
            :class="{ focus: item.boxShadowType }"
            @click="uBoxShadowBoxShadowTrue(index)"
          >Inset</button>
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
            @input="uBoxShadow(index, 'input1')"
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
            @input="uBoxShadow(index, 'input2')"
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
            @input="uBoxShadow(index, 'input3')"
          />
          <p>{{ item.val3 }}</p>
        </div>
        <div class="attr-item">
          <input
            type="range"
            class="attr-valuebar"
            id="val4"
            min="-20"
            max="20"
            step="1"
            ref="input4"
            :value="item.val4"
            @input="uBoxShadow(index, 'input4')"
          />
          <p>{{ item.val4 }}</p>
        </div>
        <div class="boxShadowColor"></div>
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
      boxShadowIsDisable: false
    };
  },
  computed: {
    gBoxShadow() {
      return this.$store.getters.gBoxShadow;
    },
    gBoxShadowLength() {
      return this.$store.getters.gBoxShadowLength;
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    addBoxShadowItem() {
      let val = {
        val1: "0",
        val2: "0",
        val3: "0",
        val4: "0",
        color: "#000000",
        boxShadowType: false
      };
      this.$store.commit("addBoxShadow", val);
    },
    uBoxShadow(index, refsName) {
      let key = this.$refs[refsName][index].id;
      let val = this.$refs[refsName][index].value;

      this.$store.commit("uBoxShadow", { key, val, index });
    },
    removeBoxShadow(index) {
      this.$store.commit("removeBoxShadow", index);
    },
    uBoxShadowBoxShadowTrue(index) {
      this.$store.commit("uBoxShadowBoxShadowTrue", index);
    },
    uBoxShadowBoxShadowFalse(index) {
      this.$store.commit("uBoxShadowBoxShadowFalse", index);
    },
    colorPicker(index) {
      let boxShadow = this.$store.getters.gBoxShadow;

      setTimeout(() => {
        const textColor = Pickr.create({
          el: ".boxShadowColor",
          theme: "monolith",
          comparison: false,
          default: boxShadow[index - 1].color,

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
          this.$store.commit("uBoxShadow", {
            key: "color",
            val: hexa,
            index: index - 1
          });
        });
      }, 10);
    }
  },
  watch: {
    gBoxShadowLength(length) {
      if (length >= 4) {
        this.boxShadowIsDisable = true;
      } else {
        this.boxShadowIsDisable = false;
      }
    }
  }
};
</script>