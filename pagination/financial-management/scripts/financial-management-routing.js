let hashName = document.getElementsByClassName("router")
let workstation = document.querySelector(".workstation")
let workstationStatistics = document.querySelector(".workstation-statistics")
let workstationAbout = document.querySelector(".workstation-about")

window.addEventListener("load", function() {
  window.location.hash = "#/list"
})

window.addEventListener("hashchange", function () {
  reset()
  let currentHash = window.location.hash
  // console.log(window.location.hash)
  if (hashName[0].getAttribute("href") == currentHash) {
    workstation.classList.add("start")
  } else if (hashName[1].getAttribute("href") == currentHash) {
    workstationStatistics.classList.add("start")
  } else if (hashName[2].getAttribute("href") == currentHash){
    workstationAbout.classList.add("start")
  }else {
    window.location.hash = "#/list"
  }
})

function reset() {
  workstation.classList.remove("start")
  workstationStatistics.classList.remove("start")
  workstationAbout.classList.remove("start")
}