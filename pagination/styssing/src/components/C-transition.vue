<template>
  <div class="style-item item-transition">
    <div class="fitst-row">
      <div class="attr-name">Transition</div>
      <div class="fold" :class="{ close: closeItem }" @click="changeFold()"></div>
    </div>

    <div class="body-area to-transition" :class="{ close: closeItem }">
      <button
        class="add-item"
        @click="addBoxShadowItem()"
        :class="{ disable: transitionIsDisable}"
        :disabled="transitionIsDisable"
      ></button>

      <div class="box-shadow-item" v-for="(item, index) in gTransition" :key="index">
        <div class="fitst-row">
          <div class="sub-title box-shadow-subtitle">{{ index + 1 }}</div>
          <button class="remove-btn" @click="removeTransition(index)"></button>
        </div>

        <div class="select-group">
          <div class="select-item full">
            <select
              :value="item.val1"
              id="val1"
              @input="changeTarget(index, 'select1')"
              ref="select1"
            >
              <option value="all">all</option>
              <option value="padding">padding</option>
              <option value="border-width">border-width</option>
              <option value="border-color">border-color</option>
              <option value="border-radius">border-radius</option>
              <option value="background-color">background-color</option>
              <option value="font-size">font-size</option>
              <option value="letter-spacing">letter-spacing</option>
              <option value="color">color</option>
              <option value="text-decoration">text-decoration</option>
            </select>
          </div>

          <div class="select-item full">
            <select
              :value="item.val4"
              id="val4"
              @input="changeTarget(index, 'select2')"
              ref="select2"
            >
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
              <option value="step-start">step-start</option>
              <option value="step-end">step-end</option>
            </select>
          </div>
        </div>

        <h3 class="sub-title">Duration</h3>
        <div class="attr-item">
          <input
            type="range"
            class="attr-valuebar"
            id="val2"
            min="0"
            max="10"
            step=".1"
            ref="duration"
            :value="item.val2"
            @input="changeTarget(index, 'duration')"
          />
          <p>{{ item.val2 }}</p>
        </div>

        <h3 class="sub-title">Delay</h3>
        <div class="attr-item">
          <input
            type="range"
            class="attr-valuebar"
            id="val3"
            min="0"
            max="10"
            step=".1"
            ref="delay"
            :value="item.val3"
            @input="changeTarget(index, 'delay')"
          />
          <p>{{ item.val3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeItem: false,
      transitionIsDisable: false
    };
  },
  computed: {
    gTransition() {
      return this.$store.getters.gTransition;
    },
    gTransitionLength() {
      return this.$store.getters.gTransitionLength;
    }
  },
  methods: {
    changeFold() {
      this.closeItem = !this.closeItem;
    },
    addBoxShadowItem() {
      let val = {
        val1: "all",
        val2: "0",
        val3: "0",
        val4: "ease"
      };
      this.$store.commit("addTransition", val);
    },
    removeTransition(index) {
      this.$store.commit("removeTransition", index);
    },
    changeTarget(index, refsName) {
      let val = this.$refs[refsName][index].value;
      let id = this.$refs[refsName][index].id;
      this.$store.commit("uTransition", { val, index, target: id });
    }
  },
  watch: {
    gTransitionLength(length) {
      if (length >= 10) {
        this.transitionIsDisable = true;
      } else {
        this.transitionIsDisable = false;
      }
    }
  }
};
</script>