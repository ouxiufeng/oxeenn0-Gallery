let imgItem = document.getElementsByTagName("img")
let imgGroup = document.querySelector(".img-group")
let pages = []
let loading = false

window.onload = function () {
  this.setTimeout(() => {
    window.document.documentElement.scrollTop = 0
  }, 0)
}


window.addEventListener("scroll", function () {
    let currentY = document.documentElement.scrollTop || document.body.scrollTop
    if (currentY >= (document.documentElement.scrollHeight - document.documentElement.clientHeight - 800)) {
      if (!loading) {
        loading = true
        pages.push(1)
        this.setTimeout(() => {
          getImgSrc()
        }, 0)

      }
      // console.log("page: " + pages.length)
    }
  
})



function getImgSrc() {
  let counter = 0
  // let loadCounter = 0

  if(loading){
    setTimeout(() => {
      loading = false
    }, 500)
  }

  for (let i = (imgItem.length - 10); i < imgItem.length; i++) {
    if (counter == 0 || counter == 9) {
      imgItem[i].setAttribute("src", `https://picsum.photos/600/600?random=${i}`)
    } else {
      imgItem[i].setAttribute("src", `https://picsum.photos/300/300?random=${i}`)
    }

    // imgItem[i].onload = function () {
    //   loadCounter++
    //   // console.log('load: ' + loadCounter)
    //   if (loadCounter == 10) {
    //     loading = false
    //     loadCounter = 0
    //     // console.log('加載完畢！')
    //   }
    // }
    counter++
    if (counter == 10) {
      counter = 0
    }
    // console.log("img: " + i)
  }
}

let vm = new Vue({
  el: "#container",
  data: {
    page: pages
  }
})