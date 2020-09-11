<template>
  <div class="container">
    <div class="transition0-btn" v-show="transition0Status"></div>
    <div class="transition0-screen stage0" v-show="transition0Status">
      <div class="transition0-screen-mask transition0-top-screen"></div>
      <div class="transition0-screen-mask transition0-bottom-screen"></div>
    </div>
    <div class="transition0-screen stage1" v-show="transition0Status"></div>
    <div class="transition0-screen stage2" v-show="transition0Status"></div>
    <div class="transition0-screen stage3" v-show="transition0Status"></div>

    <div class="transition1-screen" />
    <div class="transition1-gear">
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
      <div class="gear2">
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
      <div class="gear3">
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

    <div class="transition2-screen"></div>

    <div class="screen top-screen" />
    <div class="content">
      <div class="row top-row">
        <button
          class="anim-btn rowtop"
          @mouseover="buttonHover(0)"
          @mouseout="buttonLeave(0)"
          @click="linkto('Transition0')"
        >
          <div class="btn-icon-container1">
            <div class="btn-icon" />
          </div>
        </button>
        <button
          class="anim-btn rowtop"
          @mouseover="buttonHover(1)"
          @mouseout="buttonLeave(1)"
          @click="linkto('Transition1')"
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
          class="anim-btn rowtop"
          @mouseover="buttonHover(2)"
          @mouseout="buttonLeave(2)"
          @click="linkto('Transition2')"
        >R</button>
        <button class="anim-btn rowtop undone" @mouseover="buttonHover(3)" @mouseout="buttonLeave(3)">D</button>
        <button class="anim-btn rowtop undone" @mouseover="buttonHover(4)" @mouseout="buttonLeave(4)">E</button>
      </div>
      <div class="row bottom-row fold">
        <button class="anim-btn rowbottom undone" @mouseover="buttonHover(5)" @mouseout="buttonLeave(5)">F</button>
        <button class="anim-btn rowbottom undone" @mouseover="buttonHover(6)" @mouseout="buttonLeave(6)">G</button>
        <button class="anim-btn rowbottom undone" @mouseover="buttonHover(7)" @mouseout="buttonLeave(7)">H</button>
        <button class="anim-btn rowbottom undone" @mouseover="buttonHover(8)" @mouseout="buttonLeave(8)">I</button>
        <button class="anim-btn rowbottom undone" @mouseover="buttonHover(9)" @mouseout="buttonLeave(9)">J</button>
      </div>
    </div>
    <div class="screen bottom-screen" />
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
    linkto(transitionName) {
      if (transitionName === "Transition0") {
        const screen = document.querySelectorAll(".screen");
        const animButton = document.querySelectorAll(".anim-btn");
        const startTransition0Time = 2000;
        screen[0].classList.add("transition0-screen-unFold");
        screen[1].classList.add("transition0-screen-unFold");
        for (const item of animButton) {
          item.classList.add("transition0-button");
          item.disabled = true;
        }

        setTimeout(() => {
          this.transition0Status = true;
          this.routerPush(transitionName);
        }, startTransition0Time);
      } else if (transitionName === "Transition1") {
        const screen = document.querySelectorAll(".screen");
        const animButton = document.querySelectorAll(".anim-btn");
        const row = document.querySelectorAll(".row");
        const transition1Screen = document.querySelector(".transition1-screen");
        const transition1Gear = document.querySelector(".transition1-gear");
        const gear = document.querySelector(".gear1");
        const gear3 = document.querySelector(".gear3");
        let gearRotateDegree = 0;
        let gearRotateDegree3 = 0;
        const rotateTime = 1000;
        const reboundTime = 200;

        const removeScreenTime = 1000;

        for (const item of row) {
          item.classList.add("transition1-row");
        }
        for (const item of animButton) {
          item.classList.add("transition1-button");
          item.disabled = true;
        }
        transition1Screen.classList.add("open");
        transition1Gear.classList.add("open");

        setTimeout(() => {
          this.routerPush(transitionName);
        }, 2500);

        setInterval(() => {
          gearRotateDegree += 45;
          gear.style.transform = `rotateZ(${gearRotateDegree}deg)`;
        }, rotateTime);

        setInterval(() => {
          gearRotateDegree3 += 50;
          gear3.style.transform = `rotateZ(${gearRotateDegree3}deg)`;
          setTimeout(() => {
            gearRotateDegree3 -= 5;
            gear3.style.transform = `rotateZ(${gearRotateDegree3}deg)`;
          }, reboundTime);
        }, rotateTime);

        setTimeout(() => {
          for (const item of screen) {
            item.remove();
          }
        }, removeScreenTime);
      } else if (transitionName === "Transition2") {
        const animButton = document.querySelectorAll(".anim-btn");
        const container = document.querySelector(".container");
        const transition2Screen = document.querySelector(".transition2-screen");
        const toprow = document.querySelector(".top-row");
        const bottomrow = document.querySelector(".bottom-row");
        const screen = document.querySelectorAll(".screen");
        const removeTransition2ScreenTime = 4000;

        for (const item of animButton) {
          item.disabled = true;
        }

        container.classList.add("transition2-container");
        transition2Screen.classList.add("open");
        toprow.classList.add("transition2-toprow");
        bottomrow.classList.add("transition2-bottomrow");
        screen[0].classList.add("transition2-scale");
        screen[1].classList.add("transition2-scale");

        setTimeout(() => {
          transition2Screen.classList.remove("open");
          container.classList.remove("transition2-container");
          toprow.classList.remove("transition2-toprow");
          bottomrow.classList.remove("transition2-bottomrow");
          screen[0].classList.remove("transition2-scale");
          screen[1].classList.remove("transition2-scale");
          for (const item of animButton) {
            item.disabled = false;
            if (item.classList.contains("hover-btn")) {
              item.classList.remove("hover-btn");
            }
            if (item.classList.contains("nohover-btn")) {
              item.classList.remove("nohover-btn");
            }
          }
        }, removeTransition2ScreenTime);
      }
    },
    routerPush(transitionName) {
      const routerPushTime = 2650;
      setTimeout(() => {
        this.$router.push({ name: transitionName });
      }, routerPushTime);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;

  &.transition2-container {
    animation: transition2ContaninerAnim 5s ease 0s 1 normal both;

    @keyframes transition2ContaninerAnim {
      20% {
        transform: rotateZ(75deg);
      }
      40% {
        transform: rotateZ(90deg);
      }
      60% {
        transform: rotateZ(90deg);
      }
      80% {
        transform: rotateZ(0deg);
      }
    }
  }
}

.content {
  padding-top: 20vh;

  .row {
    position: relative;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &.transition1-row {
      transition: all 0.2s 0s linear;
      margin-right: 15%;
    }

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

      &.transition1-button {
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

    .undone {
      animation: undoneAnim .2s linear .3s 1 normal both;
      @keyframes undoneAnim {
        40% {
          transform: rotateZ(15deg);
        }
        80% {
          transform: rotateZ(-15deg);
        }
        100% {
          transform: rotateZ(0deg);
        }

      }
      &::before {
        content: "";
        position: absolute;
        opacity: 0;
        top: -50%;
        left: -50%;
        transform: translate(-50%, -50%) rotateZ(45deg);
        border-radius: 50%;
        width: 200%;
        height: 10px;
        background-color: #555;
        animation: undoneAnimLeft .1s ease .3s 1 normal both;
        @keyframes undoneAnimLeft {
          100% {
            opacity: 1;
            top: 50%;
            left: 50%;
          }
        }
      }
      &::after {
        content: "";
        position: absolute;
        opacity: 0;
        top: -50%;
        right: -50%;
        transform: translate(50%, -50%) rotateZ(-45deg);
        border-radius: 50%;
        width: 200%;
        height: 10px;
        background-color: #555;
        animation: undoneAnimRight .1s ease .4s 1 normal both;
        @keyframes undoneAnimRight {
          100% {
            opacity: 1;
            top: 50%;
            right: 50%;
          }
        }
      }
    }
  }

  .top-row {
    &.transition2-toprow {
      animation: transition2ToprowAnim 4s ease 0s 1 normal both;
    }
  }
  .bottom-row {
    &.transition2-bottomrow {
      animation: transition2ToprowAnim 4s ease 0s 1 normal both;
    }
  }

  @keyframes transition2ToprowAnim {
    25% {
      opacity: 0;
      filter: blur(3px);
      transform: translateX(-100%);
    }
    50% {
      opacity: 0;
      transform: translateX(100%);
    }
    75% {
      opacity: 1;
      transform: translateX(0);
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

  &.transition2-scale {
    transform: scaleX(1.5);
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

.transition1-screen {
  position: absolute;
  top: 0;
  right: -200%;
  width: 200%;
  height: 100vh;
  background-color: #111;
  z-index: 999;
  transition: all 5s 0s ease;

  &.open {
    right: 200%;
  }
}

.transition1-gear {
  position: absolute;
  top: 0;
  right: -200%;
  width: 100%;
  height: 100vh;
  background-color: #111;
  transition: all 5s 0s ease;

  &.open {
    right: 85%;
  }

  .gear1 {
    position: absolute;
    top: -13%;
    right: -13%;
    width: 20vw;
    height: 20vw;
    border: 10px solid #111;
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
      border: 5px solid #111;
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
      border: 2px solid #111;
      border-radius: 50%;
    }

    .focus {
      transform-origin: center;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      border: 5px solid #111;
      border-radius: 50%;
    }

    .pointer {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 5px;
      background: #111;
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
  .gear2 {
    position: absolute;
    bottom: 8%;
    right: -5%;
    width: 10vw;
    height: 10vw;
    border: 10px solid #111;
    border-radius: 50%;

    .inner {
      transform-origin: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      border: 5px solid #111;
      border-radius: 50%;
    }

    .outer {
      transform-origin: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 113%;
      height: 120%;
      border: 2px solid #111;
      border-radius: 50%;
    }

    .focus {
      transform-origin: center;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      border: 5px solid #111;
      border-radius: 50%;
    }

    .pointer {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 5px;
      background: #111;
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
  .gear3 {
    position: absolute;
    top: 25%;
    right: -100%;
    transform: translate(-50%, -50%);
    width: 25vw;
    height: 25vw;
    border: 10px solid #111;
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
      border: 5px solid #111;
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
      border: 2px solid #111;
      border-radius: 50%;
    }

    .focus {
      transform-origin: center;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      border: 5px solid #111;
      border-radius: 50%;
    }

    .pointer {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 5px;
      background: #111;
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

.transition2-screen {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2c3e50;
  width: 200%;
  height: 300vh;
  transition: opacity 0.5s 0s ease;

  &.open {
    opacity: 1;
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
</style>