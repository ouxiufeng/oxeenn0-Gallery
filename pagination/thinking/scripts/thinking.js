let mainTitle = document.querySelector(".main-title")
let bottomCircle = document.getElementById("bottom-circle")
let bottomTrigger = document.getElementById("bottom-trigger")
let subTitle = document.getElementById("sub-title")
let content = document.querySelectorAll(".content")
let writingWalle = document.getElementById("writing-walle")
let text = document.getElementsByClassName("text")

let scroll = new LocomotiveScroll({
  el: document.getElementById("container"),
  smooth: true,
  inertia: 0.5,
  getSpeed: true,
  scrollbarClass: "c-scrollbar_thumb",
})

scroll.destroy()
scroll.init()

window.addEventListener("load", function () {

  if (bottomTrigger.classList.contains("is-inview")) {
    bottomTrigger.classList.remove("is-inview")
  }
  setTimeout(() => {
    window.document.documentElement.scrollTop = 0
  }, 0)
  scroll.update()
  typingAnime()
  textTraverse()
  textPos()
})


// 判定點觸發
scroll.on("call", func => {
  setTimeout(() => {
    if (mainTitle.classList.contains("is-inview")) {
      titleAnime(".main-title")
    }
    if (subTitle.classList.contains("is-inview")) {
      subTitle.classList.add("open")
      content[0].classList.add("open")
      content[1].classList.add("open")
      content[2].classList.add("open")
      titleAnime("#sub-title")
      contnetAnime(".content")
    } else if (!subTitle.classList.contains("is-inview")) {
      subTitle.classList.remove("open")
      content[0].classList.remove("open")
      content[1].classList.remove("open")
      content[2].classList.remove("open")
    }

    if (bottomTrigger.classList.contains("is-inview")) {
      bottomTrigger.classList.add("open")
      bottomCircle.classList.add("open")
      writingWalle.classList.add("open")
      contnetAnime(".text")
    } else if (!bottomTrigger.classList.contains("is-inview")) {
      bottomTrigger.classList.remove("open")
      bottomCircle.classList.remove("open")
      writingWalle.classList.remove("open")
    }
  }, 0)
})

function textPos() {
  let x = 15
  let y = 35
  let counter = 0
  for (const item of text) {
    if(counter < 4){
      item.style.left = `${x}%`
      item.style.top = `${y}%`
      x += 20
      y += 3
      counter ++
    }else {
      if(counter == 4){
        x = 19
        y = 56
      }
      item.style.left = `${x}%`
      item.style.top = `${y}%`
      x += 20
      y += 3
      counter ++
    }
  }
}

function textTraverse() {
  for (const item of text) {
    item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
  }
}

mainTitle.innerHTML = mainTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
subTitle.innerHTML = subTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
content[0].innerHTML = content[0].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
content[1].innerHTML = content[1].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
content[2].innerHTML = content[2].textContent.replace(/\S/g, "<span class='letter'>$&</span>");

/** 標題動畫 */
function titleAnime(target) {
  anime.timeline({ loop: false })
    .add({
      targets: `${target} .letter`,
      translateX: 0,
      translateY: [20, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 300 + 30 * i
    })
}

/** 內容動畫 */
function contnetAnime(target) {
  anime.timeline({ loop: false })
    .add({
      targets: `${target} .letter`,
      translateX: [20, 0],
      translateY: 0,
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 600 + 30 * i
    })
}


let typing = document.getElementById("typing")
let cursor = document.getElementById("cursor")
let str1 = "想".split("")
let str2 = "點子".split("")
let str3 = "方法".split("")
let str4 = "創意".split("")
let strConnection = false
let flicker = false
let loopStr = 0
setInterval(() => {
  flicker = !flicker
  flicker ? cursor.classList.add("flicker") : cursor.classList.remove("flicker")
}, 1000)

/** 打字機動畫特效(打印字串) */
function typingAnime(index = 0) {
  if (index < str1.length && !strConnection) {
    typing.textContent += str1[index]
    setTimeout(typingAnime, 500, ++index)
  } else if (index == str1.length && !strConnection) {
    strConnection = true
    index = 0
  }

  if (index < str2.length && strConnection && loopStr == 0) {
    typing.textContent += str2[index]
    setTimeout(typingAnime, 200, ++index)
  } else if (typing.textContent.length == (str1.length + str2.length)  && loopStr == 0) {
    strConnection = false
    setTimeout(cancellation, 1000)
  }

  if (index < str3.length && strConnection && loopStr == 1) {
    typing.textContent += str3[index]
    setTimeout(typingAnime, 150, ++index)
  } else if (typing.textContent.length == (str1.length + str3.length) && loopStr == 1) {
    strConnection = false
    setTimeout(cancellation, 1000)
  }

  if (index < str4.length && strConnection && loopStr == 2) {
    typing.textContent += str4[index]
    setTimeout(typingAnime, 150, ++index)
  } else if (typing.textContent.length == (str1.length + str4.length) && loopStr == 2) {
    strConnection = false
    setTimeout(cancellation, 1000)
  }


}

/** 打字機動畫特效(清理字串) */
function cancellation() {
  if (typing.textContent.length != 0) {
    let strS = typing.textContent.split("")
    strS.pop()
    strS = strS.join("")
    typing.textContent = strS
    setTimeout(cancellation, 150)
  } else {

    switch (loopStr) {
      case 0:
        loopStr = 1
        break;

      case 1:
        loopStr = 2
        break;

      default:
        loopStr = 0
        break;
    }

    setTimeout(typingAnime, 1000)
  }
}
