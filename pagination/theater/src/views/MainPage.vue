<template>
  <div class="container">
    <button
      class="start-btn"
      :class="[startButtonSwitch ? 'waitting-anim' : 'start-anim']"
      @click="clickStartButton"
    ></button>
    <div class="start-line" />
    <div class="transition0-btn" v-show="transition0Status"></div>
    <div class="transition0-screen stage0" v-show="transition0Status">
      <div class="transition0-screen-mask transition0-top-screen"></div>
      <div class="transition0-screen-mask transition0-bottom-screen"></div>
    </div>
    <div class="transition0-screen stage1" v-show="transition0Status"></div>
    <div class="transition0-screen stage2" v-show="transition0Status"></div>
    <div class="transition0-screen stage3" v-show="transition0Status"></div>
    <div class="screen top-screen fold" />
    <div class="content">
      <div class="row top-row">
        <button
          class="anim-btn began"
          @mouseover="buttonHover(0)"
          @mouseout="buttonLeave(0)"
          disabled
        >
          <div class="btn-icon-container1">
            <div class="btn-icon" />
          </div>
        </button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(1)"
          @mouseout="buttonLeave(1)"
          disabled
        >
          <div class="btn-icon-container2">
            <div class="gear1">
              <div class="inner" />
              <div class="outer" />
              <div class="focus" />
              <div class="pointer pointer-rotate1" />
              <div class="pointer pointer-rotate2" />
              <div class="pointer pointer-rotate3" />
              <div class="pointer pointer-rotate4" />
              <div class="pointer pointer-rotate5" />
              <div class="pointer pointer-rotate6" />
              <div class="pointer pointer-rotate7" />
              <div class="pointer pointer-rotate8" />
            </div>
          </div>
        </button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(2)"
          @mouseout="buttonLeave(2)"
          disabled
        >C</button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(3)"
          @mouseout="buttonLeave(3)"
          disabled
        >D</button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(4)"
          @mouseout="buttonLeave(4)"
          disabled
        >E</button>
      </div>
      <div class="row bottom-row fold">
        <button
          class="anim-btn began"
          @mouseover="buttonHover(5)"
          @mouseout="buttonLeave(5)"
          disabled
        >F</button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(6)"
          @mouseout="buttonLeave(6)"
          disabled
        >G</button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(7)"
          @mouseout="buttonLeave(7)"
          disabled
        >H</button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(8)"
          @mouseout="buttonLeave(8)"
          disabled
        >I</button>
        <button
          class="anim-btn began"
          @mouseover="buttonHover(9)"
          @mouseout="buttonLeave(9)"
          disabled
        >J</button>
      </div>
    </div>
    <div class="screen bottom-screen fold" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      startButtonSwitch: true,
      transition0Status: false
    };
  },
  methods: {
    clickStartButton() {
      const removeButtonTime = 2000;
      this.startButtonSwitch = false;
      setTimeout(() => {
        const startBtn = document.querySelector(".start-btn");
        startBtn.remove();
        this.lineAnim();
      }, removeButtonTime);
    },
    lineAnim() {
      const startLine = document.querySelector(".start-line");
      const startLineTime = 500;
      const removeLineTime = 1500;
      setTimeout(() => {
        startLine.classList.add("start-anim");
        this.screenUnfold();
      }, startLineTime);

      setTimeout(() => {
        startLine.remove();
      }, removeLineTime);
    },
    screenUnfold() {
      const startScreenTime = 250;
      const screenUnfold = document.querySelectorAll(".screen");
      setTimeout(() => {
        screenUnfold[0].classList.add("unfold");
        screenUnfold[1].classList.add("unfold");
        this.displayButton();
        this.removeUnfoldAnim();
      }, startScreenTime);
    },
    removeUnfoldAnim() {
      const screenUnfold = document.querySelectorAll(".screen");
      const removeScreenUnfoldTime = 2000;
      setTimeout(() => {
        screenUnfold[0].classList.remove("fold");
        screenUnfold[1].classList.remove("fold");
        screenUnfold[0].classList.remove("unfold");
        screenUnfold[1].classList.remove("unfold");
      }, removeScreenUnfoldTime);
    },
    displayButton() {
      const animTopButton = document.querySelectorAll(".top-row .anim-btn");
      const animBottomButton = document.querySelectorAll(
        ".bottom-row .anim-btn"
      );
      const openButtonTime = 1900;
      setTimeout(() => {
        for (const item of animTopButton) {
          item.classList.add("rowtop-open");
        }
        for (const item of animBottomButton) {
          item.classList.add("rowbottom-open");
        }
        this.removeRowTopAnim();
        this.removeRowBottomAnim();
        this.displayButtonColor();
      }, openButtonTime);
    },
    displayButtonColor() {
      const startDisplayButtonColorTime = 1600;
      setTimeout(() => {
        const animTopButton = document.querySelectorAll(".top-row .anim-btn");
        const displayInterval = 100;
        let index = 0;
        let displayColorTimer = setInterval(() => {
          animTopButton[index].classList.add("displayColor");
          index += 1;
          if (index == animTopButton.length) {
            clearInterval(displayColorTimer);
            this.enableButton();
          }
        }, displayInterval);
      }, startDisplayButtonColorTime);
    },
    enableButton() {
      const enableButtonTime = 600;
      setTimeout(() => {
        const animButton = document.querySelectorAll(".anim-btn");
        for (const item of animButton) {
          item.disabled = false;
        }
      }, enableButtonTime);
    },
    removeRowTopAnim() {
      const animTopButton = document.querySelectorAll(".top-row .anim-btn");
      const removeTime = 2000;
      setTimeout(() => {
        for (const item of animTopButton) {
          item.classList.remove("began");
          item.classList.remove("rowtop-open");
          item.classList.add("rowtop");
        }
      }, removeTime);
    },
    removeRowBottomAnim() {
      const animTopButton = document.querySelectorAll(".bottom-row .anim-btn");
      const removeTime = 2500;
      setTimeout(() => {
        for (const item of animTopButton) {
          item.classList.remove("began");
          item.classList.remove("rowbottom-open");
          item.classList.add("rowbottom");
          this.gotoMenu();
        }
      }, removeTime);
    },
    buttonHover(index) {
      const animButton = document.querySelectorAll(".anim-btn");
      animButton[index].classList.add("hover-btn");
      animButton.forEach((item, loopIndex) => {
        if (index !== loopIndex) {
          item.classList.add("nohover-btn");
        }
      });
    },
    buttonLeave(index) {
      const animButton = document.querySelectorAll(".anim-btn");
      animButton[index].classList.remove("hover-btn");
      animButton.forEach((item, loopIndex) => {
        if (index !== loopIndex) {
          item.classList.remove("nohover-btn");
        }
      });
    },
    gotoMenu() {
      const gotoMenuTime = 200;
      setTimeout(() => {
        this.$router.push({ name: "Menu" }).catch(() => {});
      }, gotoMenuTime);
    }
  }
};
</script>

<style lang="scss" scoped>
.start-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 999;

  &:hover {
    animation: startButtonAnim 2s linear 0s 1 normal both;
  }

  &.waitting-anim {
    animation: waittingButtonAnim 5s linear 0s infinite normal none;
  }

  &.start-anim {
    animation: startButtonAnim 2s linear 0s 1 normal both;
  }
}

.start-line {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background-color: #fff;
  z-index: 998;
  box-shadow: 0px 0px 5px 0 #fff;
  opacity: 0;

  &.start-anim {
    animation: lineAnim 1s linear 0s 1 normal both;
  }
}

.content {
  padding-top: 20vh;

  .row {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .anim-btn {
      position: relative;
      width: 75px;
      height: 75px;
      transform: translateY(0);
      opacity: 1;
      margin: 0 5%;
      border: 1px solid transparent;
      transition: all 0.2s 0s ease;
      padding: 0;

      .btn-icon-container1 {
        position: relative;
        width: 100%;
        height: 100%;
        transform: scale(0.8, 1.1);
        .btn-icon {
          width: 100%;
          height: 100%;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotateZ(-45deg);
            width: 30%;
            height: 30%;
            border-radius: 50% 0 50% 50%;
            background-color: #555;
          }
        }
      }

      .btn-icon-container2 {
        position: relative;
        width: 100%;
        height: 100%;
        .gear1 {
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
          width: 40%;
          height: 40%;

          border: 3px solid #555;
          border-radius: 50%;
          transition: all 0.2s 0s ease;

          .inner {
            transform-origin: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            border: 2px solid #555;
            border-radius: 50%;
          }

          .outer {
            transform-origin: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 109%;
            height: 109%;
            border: 1px solid #555;
            border-radius: 50%;
          }

          .focus {
            transform-origin: center;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            border: 2px solid #555;
            border-radius: 50%;
          }

          .pointer {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 2px;
            background: #555;
            border-radius: 0 50% 50% 0;
            transform-origin: left;

            &.pointer-rotate2 {
              transform: rotateZ(45deg);
            }
            &.pointer-rotate3 {
              transform: rotateZ(90deg);
            }
            &.pointer-rotate4 {
              transform: rotateZ(135deg);
            }
            &.pointer-rotate5 {
              transform: rotateZ(180deg);
            }
            &.pointer-rotate6 {
              transform: rotateZ(225deg);
            }
            &.pointer-rotate7 {
              transform: rotateZ(270deg);
            }
            &.pointer-rotate8 {
              transform: rotateZ(315deg);
            }
          }
        }
      }

      &.rowtop {
        border-radius: 5px 20px;
      }

      &.rowbottom {
        border-radius: 20px 5px;
      }

      &.transition0-button {
        transition: all 0.5s 0s ease;
        opacity: 0;
        width: 50px;
        height: 50px;
        background: #fafafa;
      }

      &.hover-btn {
        transition: all 0.2s 0s ease;
        border: 1px solid #ccc;
      }

      &.nohover-btn {
        filter: blur(2px);
      }

      &.began {
        transform: translateY(-30vh);
        opacity: 0;
        margin: 0;
        color: transparent;
      }

      &.displayColor {
        color: #333;
      }

      &.rowtop-open {
        animation: openTopRowButtonAnim 2s ease 0s 1 normal both;
      }

      &.rowbottom-open {
        animation: openBottomRowButtonAnim 2s ease 0.5s 1 normal both;
      }
    }
  }

  .bottom-row {
    .anim-btn {
      color: #333;
    }
  }
}

.screen {
  background-color: #111;
  position: absolute;
  width: 100%;
  height: 15vh;
  z-index: 995;

  &.transition0-screen-unFold {
    animation: transition0ScreenUnfold 1s ease 0s 1 normal both;
  }

  &.fold {
    height: 50vh;
  }

  &.unfold {
    animation: screenUnfoldAnim 2s ease 0s 1 normal both;
  }

  &.top-screen {
    top: 0;
  }
  &.bottom-screen {
    bottom: 0;
  }
}

.transition0-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 999;
}

.transition0-screen {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -100vh;

  &.stage0 {
    background-color: #fff;
    z-index: 996;
    animation: transition0Stage 2s ease 0.6s 1 normal both;

    .transition0-screen-mask {
      position: absolute;
      width: 100%;
      height: 15vh;
      background-color: #111;
    }
    .transition0-top-screen {
      top: 0;
    }
    .transition0-bottom-screen {
      height: 15vh;
      bottom: 0;
    }
  }
  &.stage1 {
    background-color: #111;
    z-index: 995;
    animation: transition1Stage 2s ease 0.4s 1 normal both;
  }
  &.stage2 {
    background-color: #ccc;
    z-index: 994;
    animation: transition2Stage 2s ease 0.2s 1 normal both;
  }
  &.stage3 {
    background-color: #111;
    z-index: 993;
    animation: transition3Stage 2s ease 0s 1 normal both;
  }

  @keyframes transition0Stage {
    100% {
      top: 0;
    }
  }
  @keyframes transition1Stage {
    100% {
      top: 0;
    }
  }
  @keyframes transition2Stage {
    100% {
      top: 0;
    }
  }
  @keyframes transition3Stage {
    100% {
      top: 0;
    }
  }
}

@keyframes transition0ScreenUnfold {
  100% {
    height: 0;
  }
}

@keyframes openTopRowButtonAnim {
  50% {
    transform: translateY(0);
    margin: 0;
  }
  80% {
    margin: 0 5.5%;
    opacity: 0.8;
    border-radius: 0;
  }
  100% {
    margin: 0 5%;
    transform: translateY(0);
    opacity: 1;
    border-radius: 5px 20px;
  }
}

@keyframes openBottomRowButtonAnim {
  0% {
    transform: translateY(0);
    margin: 0;
  }
  70% {
    margin: 0 5.5%;
    opacity: 0;
  }
  90% {
    opacity: 1;
    border-radius: 0;
  }
  100% {
    margin: 0 5%;
    transform: translateY(0);
    opacity: 1;
    border-radius: 20px 5px;
  }
}

@keyframes screenUnfoldAnim {
  20% {
    height: 45vh;
  }
  80% {
    height: 14vh;
  }
  100% {
    height: 15vh;
  }
}

@keyframes waittingButtonAnim {
  0% {
    opacity: 0.8;
    filter: blur(2px);
    box-shadow: 0px 0px 50px 0 #fff;
  }
  50% {
    opacity: 0.7;
    filter: blur(1px);
  }
  100% {
    opacity: 0.8;
    filter: blur(2px);
    box-shadow: 0px 0px 50px 0 #fff;
  }
}

@keyframes startButtonAnim {
  0% {
    opacity: 0.8;
    filter: blur(1px);
    box-shadow: 0px 0px 50px 0 #fff;
  }
  90% {
    opacity: 1;
    filter: blur(2px);
    box-shadow: 0px 0px 60px 10px #fff;
  }
  100% {
    opacity: 0;
  }
}

@keyframes lineAnim {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>