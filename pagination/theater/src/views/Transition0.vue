<template>
  <div class="container">
    <div class="screen top-screen" />
    <button class="goback" @click="goback">
      <div class="back-icon">
        <div class="back-icon-1"></div>
        <div class="back-icon-2"></div>
        <div class="back-icon-3"></div>
      </div>
    </button>
    <div class="raindrop-container rainddrop-1">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-2">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-3">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-4">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-5">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-6">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-7">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-8">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-9">
      <div class="raindrop"></div>
    </div>
    <div class="raindrop-container rainddrop-10">
      <div class="raindrop"></div>
    </div>

    <div class="content">
      <div class="row top-row">
        <button class="anim-btn began" disabled>
          <div class="btn-icon-container1">
            <div class="btn-icon" />
          </div>
        </button>
        <button class="anim-btn began" disabled>
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
        <button class="anim-btn began" disabled>C</button>
        <button class="anim-btn began" disabled>D</button>
        <button class="anim-btn began" disabled>E</button>
      </div>
      <div class="row bottom-row fold">
        <button class="anim-btn began" disabled>F</button>
        <button class="anim-btn began" disabled>G</button>
        <button class="anim-btn began" disabled>H</button>
        <button class="anim-btn began" disabled>I</button>
        <button class="anim-btn began" disabled>J</button>
      </div>
    </div>

    <div class="screen bottom-screen" />
  </div>
</template>

<script>
export default {
  methods: {
    initButton() {
      const displayButtonTime = 100;
      setTimeout(() => {
        const goback = document.querySelector(".goback");
        goback.classList.add("open");
      }, displayButtonTime);
    },
    goback() {
      const goback = document.querySelector(".goback");
      const screen = document.querySelectorAll(".screen");
      goback.disabled = true;
      screen[0].classList.add("screen-fold");
      screen[1].classList.add("screen-fold");
      goback.classList.remove("open");
      goback.classList.add("close");
      this.gobackTransition();
    },
    gobackTransition() {
      const screen = document.querySelectorAll(".screen");
      const raindropContainer = document.querySelectorAll(
        ".raindrop-container"
      );
      const transitionTime = 2000;
      setTimeout(() => {
        for (const item of raindropContainer) {
          item.remove();
        }
        screen[0].classList.add("goback-transition");
        screen[1].classList.add("goback-transition");
        this.displayButton();
      }, transitionTime);
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
          }
        }, displayInterval);
      }, startDisplayButtonColorTime);
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
    gotoMenu() {
      const gotoMenuTime = 200;
      setTimeout(() => {
        this.$router.push({ name: "Menu" }).catch(() => {});
      }, gotoMenuTime);
    }
  },

  mounted() {
    this.initButton();
  }
};
</script>

<style lang="scss" scoped>
.raindrop-container {
  position: absolute;
  top: 14vh;
  width: 10px;
  height: 10px;

  &.rainddrop-1 {
    left: 45%;
    animation: raindropPosAnim 1s ease 0s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0s infinite normal none;
    }
  }
  &.rainddrop-2 {
    left: 8%;
    animation: raindropPosAnim 1s ease 0.2s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.2s infinite normal none;
    }
  }
  &.rainddrop-3 {
    left: 57%;
    animation: raindropPosAnim 1s ease 0.3s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.3s infinite normal none;
    }
  }
  &.rainddrop-4 {
    left: 93%;
    animation: raindropPosAnim 1s ease 0.4s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.4s infinite normal none;
    }
  }
  &.rainddrop-5 {
    left: 51%;
    animation: raindropPosAnim 1s ease 0.5s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.5s infinite normal none;
    }
  }
  &.rainddrop-6 {
    left: 58%;
    animation: raindropPosAnim 1s ease 0.6s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.6s infinite normal none;
    }
  }
  &.rainddrop-7 {
    left: 27%;
    animation: raindropPosAnim 1s ease 0.7s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.7s infinite normal none;
    }
  }
  &.rainddrop-8 {
    left: 91%;
    animation: raindropPosAnim 1s ease 0.8s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.8s infinite normal none;
    }
  }
  &.rainddrop-9 {
    left: 95%;
    animation: raindropPosAnim 1s ease 0.9s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 0.9s infinite normal none;
    }
  }
  &.rainddrop-10 {
    left: 31%;
    animation: raindropPosAnim 1s ease 1s infinite normal none;
    .raindrop {
      animation: raindropShape2Anim 1s ease 1s infinite normal none;
    }
  }

  @keyframes raindropPosAnim {
    40% {
      top: 14vh;
    }
    50% {
      top: 15vh;
    }
    100% {
      top: 85vh;
    }
  }

  @keyframes raindropShape2Anim {
    30% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0.2);
    }
  }

  .raindrop {
    width: 100%;
    height: 100%;
    transform: scaleX(1);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #111;
      transform: rotateZ(-45deg);
      animation: raindropShapeAnim 1s ease 0s infinite normal none;

      @keyframes raindropShapeAnim {
        70% {
          border-radius: 50%;
        }
        100% {
          border-radius: 50% 0 50% 50%;
        }
      }
    }
  }
}

.goback {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: #efefef;
  border-radius: 5px;
  z-index: 999;
  transition: opacity 0.2s 0s ease;
  padding: 0;

  .back-icon {
    position: relative;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    border: 5px double #555;
    margin: auto;
    transition: all 0.2s 0s ease;
    animation: routateBackIcon 10s linear 0s infinite normal none;

    .back-icon-1 {
      position: absolute;
      right: 3%;
      bottom: 10%;
      width: 40%;
      height: 40%;
      border-width: 1px 2px 3px 0;
      border-color: #555;
      border-style: solid;
      border-radius: 50%;
      margin: auto;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        border-radius: 50%;
        border: 1px solid #555;
        transform: translate(-50%, -50%);
      }
    }
    .back-icon-2 {
      position: absolute;
      left: 3%;
      bottom: 10%;
      width: 40%;
      height: 40%;
      border-width: 1px 0px 3px 2px;
      border-color: #555;
      border-style: solid;
      border-radius: 50%;
      margin: auto;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        border-radius: 50%;
        border: 1px solid #555;
        transform: translate(-50%, -50%);
      }
    }
    .back-icon-3 {
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translate(-50%, -50%);
      width: 40%;
      height: 40%;
      border-width: 2px 2px 0 2px;
      border-color: #555;
      border-style: solid;
      border-radius: 50%;
      margin: auto;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        border-radius: 50%;
        border: 1px solid #555;
        transform: translate(-50%, -50%);
      }
    }

    @keyframes routateBackIcon {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
  }

  &.open {
    opacity: 1;
    animation: gobackInitAnim 0.2s ease 0s 1 normal none;
  }

  &.close {
    opacity: 0;
    animation: gobackClickAnim 0.2s ease 0s 1 normal none;
  }

  @keyframes gobackInitAnim {
    0% {
      filter: blur(5px);
      left: 40%;
    }
    25% {
      left: 60%;
    }
    50% {
      left: 45%;
    }
    75% {
      left: 55%;
    }
    100% {
      filter: blur(5px);
      left: 50%;
    }
  }
  @keyframes gobackClickAnim {
    0% {
      filter: blur(5px);
      left: 40%;
    }
    25% {
      left: 60%;
    }
    50% {
      left: 45%;
    }
    75% {
      left: 55%;
    }
    100% {
      filter: blur(5px);
      left: 50%;
    }
  }
}

.content {
  margin-top: 20vh;

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
  transition: height 0.5s 0s ease;

  &.screen-fold {
    height: 50vh;
  }

  &.goback-transition {
    animation: screenUnfoldAnim 2s ease 0s 1 normal both;
  }

  &.top-screen {
    top: 0;
  }
  &.bottom-screen {
    bottom: 0;
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
}
</style>