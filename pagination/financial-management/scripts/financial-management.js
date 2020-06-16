let typegroup = document.getElementsByClassName("main-type-group");
let typelist = document.getElementsByClassName("main-type-list");
let sontypelist = document.getElementsByClassName("son-type-list");
let methodlist = document.getElementsByClassName("main-method-list");
let newCardMask = document.getElementsByClassName("new-card-mask");

window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("mask").remove()
  }, 1000)
})

/** 原資料 */
let baseData = []

/** 類別資料 */
let typeData = []

/** 方法資料 */
let methodData = []

let vm = new Vue({
  el: "#container",
  data: {
    baseSource: baseData,
    typeSource: typeData,
    nowTypeSource: [],
    soutypeSource: [],
    methodSource: methodData,
    addButtonSwitch: false,
    typelistSwitch: false,
    typelistScrollSwitch: false,
    sontypelistSwitch: false,
    sontypelistScrollSwitch: false,
    methodlistSwitch: false,
    methodlistScrollSwitch: false,
    openMaskSwitch: false,
    newDate: "",
    nowDate: "",
    newTime: "",
    selectItem: "",
    selectSonItem: "",
    selectMethod: "",
    newTitle: "",
    newPrice: 0,
    priceIsNotNumber: false,
    newContent: "",
    newChangeStatus: false,
    readOddData: false,
    temporaryStoragedata: [],
    temporaryStorageId: Number,
    maxid: 0,
    totalIncome: 0,
    totalExpenditure: 0,
    selectDateSwitch: false,
    filterMainPrice: 0,
    filterMainIncomePrice: 0,
    filterType: [],
    filterPrice: [],
    filterTypeIncome: [],
    filterPriceIncome: [],
    settingCardButton: false,
    selectType: false,
    nowTypeId: NaN,
    nowTypesonIndex: NaN,
    nowMethodId: NaN

  },
  methods: {
    /** 判斷開啟所有選單時是否開啟滾動條 */
    typelistjudgment: function () {
      if (this.typelistSwitch) {
        if (typelist.length >= 5) {
          this.typelistScrollSwitch = true
        } else {
          this.typelistScrollSwitch = false
        }
      } else if (this.sontypelistSwitch) {
        if (sontypelist.length >= 5) {
          this.sontypelistScrollSwitch = true
        } else {
          this.sontypelistScrollSwitch = false
        }
      } else if (this.methodlistSwitch) {
        if (methodlist.length >= 5) {
          this.methodlistScrollSwitch = true
        } else {
          this.methodlistScrollSwitch = false
        }
      }

    },
    onMaintype: function () {
      this.typelistSwitch = !this.typelistSwitch
    },
    onSonType: function () {
      this.sontypelistSwitch = !this.sontypelistSwitch
    },
    onMethod: function () {
      this.methodlistSwitch = !this.methodlistSwitch
    },
    /** 選取其中一個選單時禁止點擊其他選單 */
    openMask: function () {
      this.openMaskSwitch = !this.openMaskSwitch
      if (this.openMaskSwitch) {
        newCardMask[0].style.display = "block"
      } else {
        newCardMask[0].style.display = "none"
      }
    },
    /** 限制縮圖狀態的金額顯示長度 */
    substringjudgment: function (item) {
      if (item.length > 5) {
        return item.substring(0, 5) + "-"
      } else {
        return item
      }
    },
    /** 新增資料及更新舊資料 */
    saveData: function () {
      if (this.newPrice == "" || this.newPrice < 0) {
        this.newPrice = 0
      }

      if (this.readOddData == false) {
        let newData = { id: this.maxidUpdate(), date: this.newDate, time: this.newTime, title: this.newTitle, mainType: this.selectItem, sonType: this.selectSonItem, method: this.selectMethod, price: parseInt(this.newPrice), content: this.newContent, changeStatus: this.newChangeStatus, invisible: false }
        this.baseSource.push(newData)
      } else {
        this.temporaryStoragedata = { id: this.temporaryStorageId, date: this.newDate, time: this.newTime, title: this.newTitle, mainType: this.selectItem, sonType: this.selectSonItem, method: this.selectMethod, price: parseInt(this.newPrice), content: this.newContent, changeStatus: this.newChangeStatus, invisible: false }
        this.baseSource[this.saveUpdata()] = this.temporaryStoragedata
        this.readOddData = false
      }
      this.filterDate()
      localStorage.setItem("baseData", JSON.stringify(this.baseSource))
      this.totalPriceUpdate()
      this.clearTemporaryStorageData()

    },
    /**
     * 讀取舊資料
     * @param {*} item 當前的原資料
     */
    openOddData: function (item) {
      this.temporaryStorageId = item.id
      this.newDate = item.date
      this.newTime = item.time
      this.newTitle = item.title
      this.selectItem = item.mainType
      this.selectSonItem = item.sonType
      this.selectMethod = item.method
      this.newPrice = item.price
      this.newContent = item.content
      this.newChangeStatus = item.changeStatus
      this.addButtonSwitch = !this.addButtonSwitch
      this.readOddData = true
    },
    /** 刪除資料 */
    deleteData: function () {
      let arrid = []
      this.baseSource.forEach(item => {
        arrid.push(item.id)
      });
      let currentidAddress = arrid.indexOf(this.temporaryStorageId)
      this.baseSource.splice(currentidAddress, 1)
      localStorage.setItem("baseData", JSON.stringify(this.baseSource))
      this.totalPriceUpdate()
      this.clearTemporaryStorageData()
    },
    /** 更新當前選取的資料 */
    saveUpdata: function () {
      let arrid = []
      this.baseSource.forEach(item => {
        arrid.push(item.id)
      });
      return arrid.indexOf(this.temporaryStorageId)
    },
    /** 判斷資料是否開啟或關閉 */
    toggleAddButtonSwitch: function () {
      this.addButtonSwitch = !this.addButtonSwitch
    },
    /** 初始化資料 */
    clearTemporaryStorageData: function () {
      this.newDate = ""
      this.newTime = ""
      this.newTitle = ""
      this.selectItem = ""
      this.selectSonItem = ""
      this.selectMethod = ""
      this.newPrice = 0
      this.newContent = ""
      this.newChangeStatus = false
      this.temporaryStoragedata = []
      this.temporaryStorageId = Number
      this.soutypeSource = []
    },
    /** 獲取當前最大 ID */
    findMaxId: function () {
      if (this.baseSource.length != 0) {
        let arrid = []
        this.baseSource.forEach(item => {
          arrid.push(item.id)
        });
        this.maxid = Math.max.apply(null, arrid)
      }
    },
    /** 新增資料時更新時間到當下 */
    newAddDatetime: function () {
      let currentDate = new Date()
      let dateYear = currentDate.getFullYear()
      let dateMonth = currentDate.getMonth()
      let dateDay = currentDate.getDate()
      let dateHouse = currentDate.getHours()
      let dateMinutes = currentDate.getMinutes()

      let formatMoney = dateMonth + 1
      let moneyStr = ""
      let dayStr = ""
      let houseStr = ""
      let minutesStr = ""

      if (formatMoney < 10) {
        moneyStr = "0" + formatMoney
      } else {
        moneyStr = formatMoney
      }

      if (dateDay < 10) {
        dayStr = "0" + dateDay
      } else {
        dayStr = dateDay
      }

      if (dateMinutes < 10) {
        minutesStr = "0" + dateMinutes
      } else {
        minutesStr = dateMinutes
      }

      if (dateHouse < 10) {
        houseStr = "0" + dateHouse
      } else {
        houseStr = dateHouse
      }

      this.newDate = dateYear + "-" + moneyStr + "-" + dayStr
      this.newTime = houseStr + ":" + minutesStr
    },
    /** 新增資料時新資料的 ID 為當前最大 ID + 1 */
    maxidUpdate: function () {
      this.maxid += 1
      return this.maxid
    },
    /** 更新總收入及支出 */
    totalPriceUpdate: function () {
      this.totalIncome = 0
      this.totalExpenditure = 0
      let income = this.baseSource.filter(item => item.changeStatus == false)
      let expenditure = this.baseSource.filter(item => item.changeStatus == true)
      income.forEach(item => {
        this.totalIncome += parseInt(item.price)
      });

      expenditure.forEach(item => {
        this.totalExpenditure += parseInt(item.price)
      })
    },
    /** 載入網站或過濾時獲取當前日期 */
    getNowDate: function () {
      let newDate = new Date()
      let nowYear = newDate.getFullYear()
      let nowMonth = newDate.getMonth()
      let nowMonthFormat = nowMonth + 1
      if (!this.selectDateSwitch) {
        if (nowMonthFormat < 10) {
          nowMonthFormat = "0" + nowMonthFormat
        }

        this.nowDate = nowYear + "-" + nowMonthFormat
      } else {
        this.nowDate = nowYear.toString()
      }
      this.filterDate()
    },
    /** 獲取下個月 */
    getNextMonth: function () {
      let nowDate = this.nowDate.split("-")
      let nowYear = parseInt(nowDate[0])
      let nowMonth = parseInt(nowDate[1])

      if (!this.selectDateSwitch) {
        if (nowMonth < 12) {
          nowMonth++
        } else {
          nowMonth = 1
          nowYear++
        }

        if (nowMonth < 10) {
          nowMonth = "0" + nowMonth
        }

        this.nowDate = nowYear + "-" + nowMonth;

      } else {
        nowYear++
        this.nowDate = nowYear.toString()
      }
      this.filterDate()
    },
    /** 獲取上個月 */
    getLastMonth: function () {
      let nowDate = this.nowDate.split("-")
      let nowYear = parseInt(nowDate[0])
      let nowMonth = parseInt(nowDate[1])

      if (!this.selectDateSwitch) {
        if (nowMonth > 1) {
          nowMonth--
        } else {
          nowMonth = 12
          nowYear--
        }

        if (nowMonth < 10) {
          nowMonth = "0" + nowMonth
        }

        this.nowDate = nowYear + "-" + nowMonth;
      } else {
        nowYear--
        this.nowDate = nowYear.toString()
      }
      this.filterDate()
    },
    /** 資料過濾為指定日期 */
    filterDate: function () {
      let currentDate
      if (this.selectDateSwitch) {
        currentDate = this.baseSource.filter(item => item.date.substring(0, 4) != this.nowDate)
      } else {
        currentDate = this.baseSource.filter(item => item.date.substring(0, 7) != this.nowDate)
      }
      let filterArr = []

      this.baseSource.forEach(item => {
        item.invisible = false
      })

      currentDate.forEach(item => {
        filterArr.push(item.id)
      })

      filterArr.forEach(index => {
        this.baseSource.filter(item => item.id == index)[0].invisible = true
      })
    },
    /** 切換日期顯示狀態 */
    changeDate: function () {
      this.selectDateSwitch = !this.selectDateSwitch
      this.getNowDate()
    },
    /** 獲取子類別 */
    getSonType: function (son, id) {
      this.nowTypeSource = son
      this.nowTypeId = id
    },
    /** 新增類別 */
    addType: function () {
      let arrid = []
      let maxid = NaN
      this.typeSource.forEach(item => {
        arrid.push(item.id)
      });
      maxid = Math.max.apply(null, arrid)

      this.typeSource.push({ id: maxid + 1, main: "Null", son: ["Null"] })
    },
    /** 新增子類別 */
    addsonType: function () {
      this.nowTypeSource.push("Null")
    },
    /** 刪除類別 */
    removeType: function () {
      let currentId = this.typeSource.findIndex(item => item.id == this.nowTypeId)
      this.typeSource.splice(currentId, 1)
      this.nowTypeSource = []
    },
    /** 獲取子類別位置 */
    getsonType: function (index) {
      this.nowTypesonIndex = index
    },
    /** 刪除子類別 */
    removesonType: function () {
      this.nowTypeSource.splice(this.nowTypesonIndex, 1)
      this.nowTypesonIndex = NaN
    },
    /** 新增方法 */
    addMethod: function () {
      let arrid = []
      let maxid = NaN
      this.methodSource.forEach(item => {
        arrid.push(item.id)
      });
      maxid = Math.max.apply(null, arrid)

      this.methodSource.push({ id: maxid + 1, meth: "Null" })
    },
    /** 獲取方法位置 */
    getMethodId: function (index) {
      this.nowMethodId = index
    },
    /** 刪除方法 */
    removeMethod: function () {
      this.methodSource.splice(this.nowMethodId, 1)
    },
    /** 更新儲存裝置資料 */
    clearList: function () {
      localStorage.setItem("typeData", JSON.stringify(typeData))
      localStorage.setItem("methodData", JSON.stringify(methodData))
      this.nowTypeSource = []
      this.settingCardButton = false
      this.selectType = false
    },
    /** 獲取儲存裝置資料 */
    getStorage: function () {
      if (localStorage.getItem("baseData") != null) {
        baseData = JSON.parse(localStorage.getItem("baseData"))
        this.baseSource = baseData
      }
      if (localStorage.getItem("typeData") != null) {
        typeData = JSON.parse(localStorage.getItem("typeData"))
        this.typeSource = typeData
      } else {
        typeData = [
          { id: 1, main: "食物", son: ["早餐", "中餐", "晚餐"] },
          { id: 2, main: "繳費", son: ["手機費", "保險費", "健保費", "水電費"] },
          { id: 3, main: "衛生", son: ["化妝品", "個人形象", "洗漱", "雜項"] },
          { id: 4, main: "學習", son: ["課程", "書籍", "雜費"] },
          { id: 5, main: "娛樂", son: ["遊戲", "小說", "動畫", "戶外活動"] },
          { id: 6, main: "薪資", son: [] },
          { id: 7, main: "小費", son: [] },
          { id: 8, main: "利息", son: [] }
        ]
        localStorage.setItem("typeData", JSON.stringify(typeData))
        this.typeSource = typeData
      }
      if (localStorage.getItem("methodData") != null) {
        methodData = JSON.parse(localStorage.getItem("methodData"))
        this.methodSource = methodData
      } else {
        methodData = [
          { id: 1, meth: "現金" },
          { id: 2, meth: "帳戶" },
          { id: 3, meth: "信用卡" }
        ]
        localStorage.setItem("methodData", JSON.stringify(methodData))
        this.methodSource = methodData
      }

    }


  },
  mounted() {
    this.getStorage()
    this.findMaxId()
    this.totalPriceUpdate()
    this.getNowDate()
  }

})

let statisticsButton = document.getElementsByClassName("list-item");
let statisticsForwardFilterButton = document.getElementById("filterForwardButton")
let statisticsBackwardFilterButton = document.getElementById("filterBackwardButton")
let statisticsChangeDateFilterButton = document.getElementById("filterChangeDateButton")
let typeArr = []
let typeArrIncome = []
let statisticsview = null

statisticsButton[1].addEventListener("click", function () {
  filterStatistics()
})

statisticsForwardFilterButton.addEventListener("click", function () {
  filterStatistics()
})

statisticsBackwardFilterButton.addEventListener("click", function () {
  filterStatistics()
})

statisticsChangeDateFilterButton.addEventListener("click", function () {
  filterStatistics()
})

/**
 * 刪除舊圖表並重新過濾後繪製
 */
function filterStatistics() {
  clearFilterValue()

  //存在舊圖表則刪除
  if (statisticsview != null) {
    statisticsview.destroy()
    statisticsviewIncome.destroy()
  }

  //獲取過濾後的資料
  let selectDateSource = vm.baseSource.filter(item => item.invisible == false && item.changeStatus)
  let selectIncomeDateSource = vm.baseSource.filter(item => item.invisible == false && !item.changeStatus)

  //獲取收入及支出的主要類型數組
  let typeset = new Set([])
  selectDateSource.forEach(item => {
    typeset.add(item.mainType)
  })
  typeArr = Array.from(typeset)

  let typesetIncome = new Set([])
  selectIncomeDateSource.forEach(item => {
    typesetIncome.add(item.mainType)
  })
  typeArrIncome = Array.from(typesetIncome)

  /**
   * 獲取收入及支出過濾後的物件
   */
  let filterSource = []
  typeArr.forEach(arr => {
    filterSource.push(selectDateSource.filter(item => item.mainType == arr))
  })

  let filterSourceIncome = []
  typeArrIncome.forEach(arr => {
    filterSourceIncome.push(selectIncomeDateSource.filter(item => item.mainType == arr))
  })

  /**
   * 獲取收入及支出過濾後的價錢 
   */
  let filterPrice = []
  filterSource.forEach(items => {
    let currentPrice = 0
    items.forEach(item => {
      currentPrice += item.price
    })
    filterPrice.push(currentPrice)
  })

  let filterPriceIncome = []
  filterSourceIncome.forEach(items => {
    let currentPriceIncome = 0
    items.forEach(item => {
      currentPriceIncome += item.price
    })
    filterPriceIncome.push(currentPriceIncome)
  })

  /**
  * 獲取收入及支出的個別總額
  */
  filterPrice.forEach(item => {
    vm.filterMainPrice += item
  })

  filterPriceIncome.forEach(item => {
    vm.filterMainIncomePrice += item
  })

  //回傳過濾後收入及支出的結果
  vm.filterType = typeArr
  vm.filterPrice = filterPrice

  vm.filterTypeIncome = typeArrIncome
  vm.filterPriceIncome = filterPriceIncome

  //獲取繪製圖像元素
  let ctx = document.getElementById('statisticsView').getContext('2d');
  let ctxIncome = document.getElementById('statisticsViewIncome').getContext('2d');

  /**
  * 繪製支出圖表
  */
  statisticsview = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: typeArr,
      datasets: [{
        data: filterPrice,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(88, 77, 61, 0.7)',
          'rgba(104, 197, 219, 0.7)',
          'rgba(154, 113, 151, 0.7)',
          'rgba(60, 21, 24, 0.7)',
          'rgba(213, 137, 54, 0.7)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(88, 77, 61, 1)',
          'rgba(104, 197, 219, 1)',
          'rgba(154, 113, 151, 1)',
          'rgba(60, 21, 24, 1)',
          'rgba(213, 137, 54, 1)'

        ],
        borderWidth: 1,
      }]
    }
  });

  /**
  * 繪製收入圖表
  */
  statisticsviewIncome = new Chart(ctxIncome, {
    type: 'pie',
    data: {
      labels: typeArrIncome,
      datasets: [{
        data: filterPriceIncome,
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(88, 77, 61, 0.7)',
          'rgba(104, 197, 219, 0.7)',
          'rgba(154, 113, 151, 0.7)',
          'rgba(60, 21, 24, 0.7)',
          'rgba(213, 137, 54, 0.7)'

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(88, 77, 61, 1)',
          'rgba(104, 197, 219, 1)',
          'rgba(154, 113, 151, 1)',
          'rgba(60, 21, 24, 1)',
          'rgba(213, 137, 54, 1)'

        ],
        borderWidth: 1,
      }]
    }
  });

}

/**
 * 初始化過濾後資料
 */
function clearFilterValue() {
  vm.filterMainPrice = 0
  vm.filterMainIncomePrice = 0
  vm.filterPrice = 0
  vm.filterPriceIncome = 0
  vm.filterType = 0
  filterTypeIncome = 0
}

