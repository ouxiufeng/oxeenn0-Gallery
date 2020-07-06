import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const filter = {
  all(productData) {
    return productData
  },
  flowers(productData) {
    return productData.filter(item => {
      return item.type === 'flower'
    })
  },
  seed(productData) {
    return productData.filter(item => {
      return item.type === 'seed'
    })
  },
  material(productData) {
    return productData.filter(item => {
      return item.type === 'material'
    })
  }
}

export default new Vuex.Store({
  state: {
    productData: [
      { "id": 1, "type": "flower", "name": "花束A", "price": 500, "img": require(`@/assets/product/images/flower/product-flower-001.jpeg`), "imgAlt": "花束A" },
      { "id": 2, "type": "flower", "name": "花束B", "price": 600, "img": require(`@/assets/product/images/flower/product-flower-002.jpeg`), "imgAlt": "花束B" },
      { "id": 3, "type": "flower", "name": "花束C", "price": 650, "img": require(`@/assets/product/images/flower/product-flower-003.jpeg`), "imgAlt": "花束C" },
      { "id": 4, "type": "flower", "name": "花束D", "price": 700, "img": require(`@/assets/product/images/flower/product-flower-004.jpeg`), "imgAlt": "花束D" },
      { "id": 5, "type": "flower", "name": "花束E", "price": 700, "img": require(`@/assets/product/images/flower/product-flower-005.jpeg`), "imgAlt": "花束E" },
      { "id": 6, "type": "flower", "name": "花束F", "price": 700, "img": require(`@/assets/product/images/flower/product-flower-006.jpeg`), "imgAlt": "花束F" },
      { "id": 7, "type": "flower", "name": "花束G", "price": 800, "img": require(`@/assets/product/images/flower/product-flower-007.jpeg`), "imgAlt": "花束G" },
      { "id": 8, "type": "flower", "name": "花束H", "price": 800, "img": require(`@/assets/product/images/flower/product-flower-008.jpeg`), "imgAlt": "花束H" },
      { "id": 9, "type": "flower", "name": "花束I", "price": 800, "img": require(`@/assets/product/images/flower/product-flower-009.jpeg`), "imgAlt": "花束I" },
      { "id": 10, "type": "flower", "name": "花束J", "price": 800, "img": require(`@/assets/product/images/flower/product-flower-010.jpeg`), "imgAlt": "花束J" },
      { "id": 11, "type": "seed", "name": "種子A", "price": 250, "img": require(`@/assets/product/images/seed/product-seed-001.jpeg`), "imgAlt": "種子A" },
      { "id": 12, "type": "seed", "name": "種子B", "price": 250, "img": require(`@/assets/product/images/seed/product-seed-002.jpeg`), "imgAlt": "種子B" },
      { "id": 13, "type": "seed", "name": "種子C", "price": 300, "img": require(`@/assets/product/images/seed/product-seed-003.jpeg`), "imgAlt": "種子C" },
      { "id": 14, "type": "seed", "name": "種子D", "price": 350, "img": require(`@/assets/product/images/seed/product-seed-004.jpeg`), "imgAlt": "種子D" },
      { "id": 15, "type": "seed", "name": "種子E", "price": 400, "img": require(`@/assets/product/images/seed/product-seed-005.jpeg`), "imgAlt": "種子E" },
      { "id": 16, "type": "material", "name": "花盆A", "price": 350, "img": require(`@/assets/product/images/material/product-material-001.jpeg`), "imgAlt": "花盆A" },
      { "id": 17, "type": "material", "name": "花盆B", "price": 350, "img": require(`@/assets/product/images/material/product-material-002.jpeg`), "imgAlt": "花盆B" },
      { "id": 18, "type": "material", "name": "花盆C", "price": 400, "img": require(`@/assets/product/images/material/product-material-003.jpeg`), "imgAlt": "花盆C" },
      { "id": 19, "type": "material", "name": "花盆D", "price": 450, "img": require(`@/assets/product/images/material/product-material-004.jpeg`), "imgAlt": "花盆D" },
      { "id": 20, "type": "material", "name": "花盆E", "price": 450, "img": require(`@/assets/product/images/material/product-material-005.jpeg`), "imgAlt": "花盆E" },
      { "id": 21, "type": "material", "name": "工具A", "price": 500, "img": require(`@/assets/product/images/material/product-material-006.jpeg`), "imgAlt": "工具A" },
    ],
    shopcartData: [],
    signStatus:false,
    memberData: [
      {"id": 0, "account": "guest", "password": "123456", "email": "oxeenn0@oxeenn0.com", "username": "oxeenn0"}
    ],
    id: 0
  },
  getters: {
    getData(state) {
      return filter[state.route.name](state.productData)
    },
    getShopCartData(state) {
      return state.shopcartData
    },
    getCartShopAmount(state) {
      return state.shopcartData.length
    },
    getSignStatus(state) {
      return state.signStatus
    },
    getMemberData(state){
      return state.memberData
    },
    getId(state) {
      return state.id
    }
  },
  mutations: {
    setShopCartData(state, { data, num }) {
      let update = false
      if(state.shopcartData.length != 0) {
        for (const item of state.shopcartData) {
          if(item.id === data.id) {
            item.num = num
            item.price = data.price * num
            update = true
          }
        }
      }
      if(!update) {
        state.shopcartData.push({"id": data.id, "name": data.name, "price": data.price * num, "num": num})
      }
      alert(`您的商品 【${ data.name }】 數量: ${ num } 已放入購物車!`)
    },
    clearShopCartData(state) {
      state.shopcartData = []
    },
    login(state) {
      state.signStatus = true
    },
    logout(state) {
      state.signStatus = false
    },
    setMemberData(state, data) {
      data.id += 1
      state.id = data.id
      state.memberData.push(data)
    },
  },
  actions: {
  },
  modules: {
  }
})
