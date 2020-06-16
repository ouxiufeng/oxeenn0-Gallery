
window.addEventListener("hashchange", function () {
  if (window.location.hash == "#/commoditylist") {
    cubeShopIntroduction.style.display = "none"
    moreCube.style.display = "none"
    commoditylist.style.display = "block"
    checkout.classList.remove("open")
    about.classList.remove("open")
    window.document.documentElement.scrollTop = window.document.body.clientHeight - commoditylist.offsetTop
    startCommodityAnime()
    shoppingCart.style.display = "block"
  } else if (window.location.hash == "#/commoditylist/checkout") {
    checkout.classList.add("open")
    about.classList.remove("open")
    moreCube.style.display = "none"
    commoditylist.style.display = "none"
    shoppingCart.style.display = "none"
    cubeShopIntroduction.style.display = "none"
  } else if (window.location.hash.length == 0) {
    cubeShopIntroduction.style.display = "flex"
    moreCube.style.display = "flex"
    commoditylist.style.display = "none"
    shoppingCart.style.display = "none"
    checkout.classList.remove("open")
    about.classList.remove("open")
  } else if (window.location.hash == "#/about"){
    checkout.classList.remove("open")
    about.classList.add("open")
    moreCube.style.display = "none"
    commoditylist.style.display = "none"
    shoppingCart.style.display = "none"
    cubeShopIntroduction.style.display = "none"
    window.document.documentElement.scrollTop = window.document.body.clientHeight - about.offsetTop
  }


})