let startEnd = false
let moreCubeSwitch = false
let cubeShopIntroductionSwitch = false

let slideFunction = setTimeout(() => {
  window.document.documentElement.style.overflow = "auto"
  document.getElementById("mask").remove()
  sign.classList.add("open-sign")
  startEnd = true
}, 4000)



window.addEventListener("load", function () {
  setTimeout(() => {
    window.document.documentElement.scrollTop = 0
    window.document.body.scrollTop = 0
  }, 0)
  setTimeout(() => {
    startMenuAnime()
  }, 3000)
  window.document.documentElement.style.overflow = "hidden"
  window.location.hash = "#"
  maskTitle.classList.add("close")
})


let menuStatusChange = false

window.addEventListener("scroll", function () {
  let currentScrollY = window.document.documentElement.scrollTop || window.document.body.scrollTop
  let screenHeightCheck = window.screen.height / 2

  let currentCubeShopIntroAlignCenter = screenHeightCheck - (cubeShopIntroduction.offsetHeight / 2)
  let currentCubeShopIntroDistance = window.document.body.clientHeight - (moreCube.offsetHeight + cubeShopIntroduction.offsetHeight) - currentCubeShopIntroAlignCenter
  let currentCubeShopIntroGap = currentCubeShopIntroDistance - currentScrollY

  // let currentMoreCubeDistance = window.document.body.clientHeight - (currentScrollY + (moreCube.offsetTop - cubeShopIntroduction.offsetHeight))
  let currentMoreCubeAlignCenter = screenHeightCheck - (moreCube.offsetHeight / 2)
  let currentMoreCubeDistance = window.document.body.clientHeight - moreCube.offsetHeight - currentMoreCubeAlignCenter
  let currentMoreCubeGap = currentMoreCubeDistance - currentScrollY


  if (startEnd) {
    if (currentScrollY != 0 && !menuStatusChange) {
      closeMenu()
      menuStatusChange = true
    } else if (currentScrollY == 0 && menuStatusChange) {
      openMenu()
      menuStatusChange = false
    }
  }



  if (currentCubeShopIntroGap < 500 && !cubeShopIntroductionSwitch) {
    cubeShopIntroductionSwitch = true
    cubeShopIntroduction.classList.add("open")
    // console.log("open")
    introductionTitleAnime()
  } else if (currentCubeShopIntroGap >= 500 && cubeShopIntroductionSwitch) {
    cubeShopIntroductionSwitch = false
    cubeShopIntroduction.classList.remove("open")
    // console.log("close")
  }

  if (currentMoreCubeGap < 500 && !moreCubeSwitch) {
    moreCubeSwitch = true
    // console.log("watch!")
    moreCube.classList.add("open")
    mainContentAnime()
  } else if (currentMoreCubeGap >= 500 && moreCubeSwitch) {
    moreCubeSwitch = false
    moreCube.classList.remove("open")
  }

})
/** 取消菜單 */
function closeMenu() {
  menu.classList.remove("open-menu")
  logo.classList.remove("open-menu-move-logo")
  sign.classList.remove("open-sign")
  menu.classList.add("close-menu")
  logo.classList.add("close-menu-move-logo")
  logoBorder.classList.add("close-logo-border")
  logo.style.cursor = "pointer"
  for (const item of listItem) {
    item.classList.add("close-menu-text")
  }
  header.classList.add("close")
}
/** 開啟菜單 */
function openMenu() {
  menu.classList.remove("close-menu")
  logoBorder.classList.remove("close-logo-border")
  logo.classList.remove("close-menu-move-logo")
  header.classList.remove("close")
  logo.classList.add("open-menu-move-logo")
  menu.classList.add("open-menu")
  sign.classList.add("open-sign")
  logo.style.cursor = "unset"
  anime.timeline()
  .add({
    targets: '.list-item .letter',
    translateX: [-40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1000 + 30 * i
    });

  for (const item of listItem) {
    item.classList.remove("close-menu-text")
  }
}

/** 回到頁首 */
logo.addEventListener("click", function () {
  if (logo.classList.contains("close-menu-move-logo")) {
    window.document.documentElement.scrollTop = 0
    window.document.body.scrollTop = 0
    openMenu()
  }
})

//特效
for (const item of listItem) {
  item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
}

let mainContent = document.querySelector(".main-content")
mainContent.innerHTML = mainContent.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
let gotoCommoditylist = document.querySelector(".goto-commoditylist")
gotoCommoditylist.innerHTML = gotoCommoditylist.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

let introTitle = document.querySelector(".introduction-title")
introTitle.innerHTML = introTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
let introContent = document.querySelector(".introduction-content")
introContent.innerHTML = introContent.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

let buySuccess = document.getElementById("buy-success")
buySuccess.innerHTML = buySuccess.textContent.replace(/\S/g, "<span class='letter'>$&</span>")


let commodity = document.querySelector(".commodity")

function startMenuAnime() {
  anime.timeline()
    .add({
      targets: '.list-item .letter',
      translateX: [-40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 0 + 30 * i
    });
}

function mainContentAnime() {
  anime.timeline()
    .add({
      targets: '.main-content .letter',
      translateX: [-40, 0],
      translateY: [-10, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    });
  anime.timeline()
    .add({
      targets: '.goto-commoditylist .letter',
      translateX: [-40, 0],
      translateY: [-10, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 600 + 30 * i
    });
}

function introductionTitleAnime() {
  anime.timeline()
    .add({
      targets: '.introduction-title .letter',
      translateY: [-40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 300 + 30 * i
    });
  anime.timeline()
    .add({
      targets: '.introduction-content .letter',
      translateY: [-40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 500 + 30 * i
    });
}

function startCommodityAnime() {
  anime.timeline()
    .add({
      targets: '.commodity',
      scale: [1.05, 1],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 800,
      delay: (el, i) => 300 + 30 * i,
    });
}

function buySuccessAnime() {
  anime.timeline()
    .add({
      targets: '#buy-success .letter',
      translateX: [-40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 600 + 30 * i
    }).add({
      targets: '#buy-success .letter',
      translateX: [0, 80],
      translateZ: 0,
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 200 + 30 * i
    });
}

//特效

//three.js

showCube()
setTimeout(() => {
  creatCube(0, 0x333333)
  creatCube(1, 0xff2244)
  creatCube(2, 0xff4422)
  creatCube(3, 0x0D3B66)
  creatCube(4, 0xEE964B)
  creatCube(5, 0xAFCBFF)
}, 0)

function showCube() {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false);
  document.getElementById("left-panel").appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(5, 5, 5);
  let material = new THREE.MeshPhongMaterial({ color: 0x555555, side: THREE.DoubleSide });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  let spotLightForwardLeft = new THREE.SpotLight(0xffffff, 0.75)
  spotLightForwardLeft.position.set(-20, 0, 20);
  scene.add(spotLightForwardLeft)

  let spotLightForwardRight = new THREE.SpotLight(0xffffff, 0.75)
  spotLightForwardRight.position.set(20, 0, 20);
  scene.add(spotLightForwardRight)

  let spotLightTopRight = new THREE.SpotLight(0xffffff, 0.5)
  spotLightTopRight.position.set(20, 20, 0);
  scene.add(spotLightTopRight)

  let spotLightTopLeft = new THREE.SpotLight(0xffffff, 0.5)
  spotLightTopLeft.position.set(-20, 20, 0);
  scene.add(spotLightTopLeft)

  camera.position.z = 20;
  camera.position.y = 10;
  camera.rotation.x = -0.45;
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;


    renderer.render(scene, camera);
  }
  animate();

}

function creatCube(id, cubeColor) {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false);
  let newCube = document.querySelectorAll(".commodity-show");
  newCube[id].appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(12, 8, 12);
  let material = new THREE.MeshPhongMaterial({ color: cubeColor, side: THREE.DoubleSide });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  let spotLightForwardLeft = new THREE.SpotLight(0xffffff, 0.75)
  spotLightForwardLeft.position.set(-20, 0, 20);
  scene.add(spotLightForwardLeft)

  let spotLightForwardRight = new THREE.SpotLight(0xffffff, 0.75)
  spotLightForwardRight.position.set(20, 0, 20);
  scene.add(spotLightForwardRight)

  let spotLightTopRight = new THREE.SpotLight(0xffffff, 0.5)
  spotLightTopRight.position.set(20, 20, 0);
  scene.add(spotLightTopRight)

  let spotLightTopLeft = new THREE.SpotLight(0xffffff, 0.5)
  spotLightTopLeft.position.set(-20, 20, 0);
  scene.add(spotLightTopLeft)

  camera.position.z = 20;
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();

}

let cubeData = [
  {"id": 1, "name": "Cube C128-A", "price": 500, "num": 0},
  {"id": 2, "name": "Cube C128-B", "price": 350, "num": 0},
  {"id": 3, "name": "Cube C128-C", "price": 200, "num": 0},
  {"id": 4, "name": "Cube C128-D", "price": 500, "num": 0},
  {"id": 5, "name": "Cube C128-E", "price": 350, "num": 0},
  {"id": 6, "name": "Cube C128-F", "price": 200, "num": 0}
]
let currentShoppingCartItems = []

let buyAnime = document.querySelector("#shopping-cart .material-icons")
let buyCounter = document.getElementById("buy-counter")
let currentBuyCounter = parseInt(buyCounter.innerHTML)

commodityBuy.forEach((item, index) => {
  item.addEventListener("click", function() {
    cubeData[index].num += 1
    currentShoppingCartItems.push(cubeData[index])
    currentBuyCounter ++
    buyCounter.innerHTML = currentBuyCounter
    buyAnime.classList.add("buy-anime")
    setTimeout(() => {
      buyAnime.classList.remove("buy-anime")
    }, 300)
  })
});

let currentTotalPrice = 0

shoppingCart.addEventListener("click", function() {
  let filterCurrentShoppingCartItems = new Set(currentShoppingCartItems)
  filterCurrentShoppingCartItems = Array.from(filterCurrentShoppingCartItems)
  checkoutItemGroup.innerHTML = ""
  currentTotalPrice = 0
  for (const item of filterCurrentShoppingCartItems) {
    currentTotalPrice += item.price * item.num
    checkoutItemGroup.innerHTML +=
    `
    <div class="item">
      <div class="item-name">${item.name}</div>
      <div class="item-price">$${item.price}</div>
      <div class="item-num">${item.num}</div>
    </div>
    ` 
  }

  totalPrice.textContent = currentTotalPrice
})

clearBtn.addEventListener("click", function() {
  clearShoppingCard()
})

undoBtn.addEventListener("click", function() {
  window.location.hash = "#/commoditylist"
})

buyBtn.addEventListener("click", function() {
  checkout.classList.remove("open")
  checkout.classList.add("buy-done")
  buySuccess.classList.add("open")
  buySuccessAnime()

  setTimeout(() => {
    buySuccess.classList.remove("open")
    checkout.classList.remove("buy-done")
    window.location.hash = "#/commoditylist"
    clearShoppingCard()
  }, 2500)
})

function clearShoppingCard() {
  checkoutItemGroup.innerHTML = ""
  currentShoppingCartItems = []

  currentBuyCounter = 0
  buyCounter.innerHTML = currentBuyCounter

  totalPrice.textContent = 0
  currentTotalPrice = 0

  cubeData = [
    {"id": 1, "name": "Cube C128-A", "price": 500, "num": 0},
    {"id": 2, "name": "Cube C128-B", "price": 350, "num": 0},
    {"id": 3, "name": "Cube C128-C", "price": 200, "num": 0},
    {"id": 4, "name": "Cube C128-D", "price": 500, "num": 0},
    {"id": 5, "name": "Cube C128-E", "price": 350, "num": 0},
    {"id": 6, "name": "Cube C128-F", "price": 200, "num": 0}
  ]
}

aboutUndoButton.addEventListener("click", function() {
  window.location.hash = "#"
})