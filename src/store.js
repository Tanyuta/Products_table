import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: localStorage.getItem('products') || [],
  },
  getters : {
    getProducts: state => state.products,
  },
  mutations: {
    addProduct(state, newElement){      
      state.products = getters.
      state.products.push(newElement);
      localStorage.setItem('products', state.products)
    },
    updateProduct(state, id){      
      state.products = localStorage.getItem('products') || []
      state.products.push(newElement);
      localStorage.setItem('products', state.products)
    },
    deleteProduct(state, id){
      state.products = localStorage.getItem('products') || []
      if (state.products === []) return
      state.products = state.products.filter(el => {
        el.id !== id
      })
      localStorage.setItem('products', state.products)
    },
  },
  actions: {}
})
