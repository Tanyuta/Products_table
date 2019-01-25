import Vue from 'vue'
import Router from 'vue-router'
import ProductsTable from './views/ProductsTable.vue'
import CreateProduct from './views/CreateProduct.vue'
import UpdateProduct from './views/UpdateProduct.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ProductsTable',
      component: ProductsTable
    },
    {
      path: '/create',
      name: 'CreateProduct',
      component: CreateProduct
    },
    {
      path: '/update/:id',
      name: 'UpdateProduct',
      component: UpdateProduct
    }
  ]
})
