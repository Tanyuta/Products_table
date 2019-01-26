import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || [],
  },
  getters: {
    GET_PRODUCTS: state => state.products,
    GET_CURRENT_PRODUCT: (state, id) => {
      state.products.forEach(element => {
        if (element.id === id) {
          return element
        }
    })
    }
  },
  mutations: {
    ADD_PRODUCT: (state, payload) => {
      const newProduct = {
        'id':  state.products.length ? (state.products[state.products.length - 1].id + 1) : 1, 
        'name': payload.name, 
        'description': payload.description
      }   
      state.products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    UPDATE_PRODUCT(state, {id, payload}){  
      // let currentProduct = this.getters.GET_CURRENT_PRODUCT(state, id)
      // currentProduct.name = payload.name
      // currentProduct.description = payload.description
      // state.products.forEach(element => {
      //     if (element.id === id) {
      //       element.name = payload.name
      //       element.description = payload.description
      //     }
      // })
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    DELETE_PRODUCT(state, id) {
      if (state.products === []) return
      state.products = state.products.filter(el => {
          return el.id !== id
      })
      localStorage.setItem('products', JSON.stringify(state.products))
    },
  },
  actions: {}
})
