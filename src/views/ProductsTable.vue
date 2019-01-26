<template>
  <div>
     <v-data-table
      :headers="headers"
      :items="products"
      class="text-xs-left"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">
          <router-link :to="'/update/'+ props.item.id ">
            <v-btn color="warning">Update</v-btn>
          </router-link>   
          <v-btn color="info" @click="submitDeleteProduct(props.item.id)">Delete</v-btn>
        </td>
        <!-- {{ props}} -->
      </template>
    </v-data-table>
    <router-link to="/create">
      <v-btn color="success">Create</v-btn>
    </router-link>
    
    <Modal v-if="showModal" @close="showModal = false" @deleteProduct="deleteProduct"/>
  </div>
</template>

<script>
import Modal from '../components/Modal'
  export default {
    name: 'ProductsTable',
    components: {
      Modal
    },
    data: () => ({
      showModal: false,
      currentId: 0,
      // products: [],
      // search: '',
      // page: 1,
      //   pagination: {
      //     rowsPerPage: 1,
      //     totalItems: 10
      //   },
      //   selected: [],
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          { text: 'Name', value: 'name', sortable: false },
          { text: 'Description', value: 'description', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        // products: [
        //   {
        //     id: 1,
        //     name: 'Phone',
        //     description: 'KFJbskjdbksdgbkajdgba af sfaf',
        //   },
        //   {
        //     id: 2,
        //     name: 'Phone2',
        //     description: 'af sfaf',
        //   },
        //   {
        //     id: 3,
        //     name: 'Phone3',
        //     description: 'af sfaf',
        //   },
        // ]    
    }),
    // created() {
    //   thos.products = this.
    // },
     computed: {
      products() {
        return this.$store.getters.GET_PRODUCTS
      },
      // pages () {
      //   if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) {
      //     return 0
      //   }
      //   return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      // }
    },
    methods: {
      submitDeleteProduct(id) {
        this.currentId = id
        this.showModal = true
      },
      
      deleteProduct() {
        console.log(this.currentId);
        
        this.$store.commit('DELETE_PRODUCT', this.currentId)
        this.showModal = false
      }
    }
  }
</script>

<style scope lang="scss">
.v-datatable__actions{
  display: none !important;
}
</style>
