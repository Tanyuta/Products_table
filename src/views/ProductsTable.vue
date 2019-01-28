<template>
  <div>
    <v-data-table :headers="headers" :items="products" class="text-xs-left">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">
          <router-link :to="'/update/'+ props.item.id">
            <v-btn color="warning">Update</v-btn>
          </router-link>
          <v-btn color="info" @click="submitDeleteProduct(props.item.id)">Delete</v-btn>
        </td>
      </template>
      <template
        slot="pageText"
        slot-scope="props"
      >Lignes {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}</template>
    </v-data-table>
    <router-link to="/create">
      <v-btn color="success">Create</v-btn>
    </router-link>
    <Modal v-if="showModal" @close="showModal = !showModal"  @deleteProduct="deleteProduct"/>
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
    headers: [
      {
        text: 'ID',
        align: 'left',
        sortable: false,
        value: 'id'
      },
      { text: 'Name', value: 'name', sortable: false },
      { text: 'Description', value: 'description', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false }
    ]
  }),
  computed: {
    products () {
      return this.$store.getters.GET_PRODUCTS
    }
  },
  methods: {
    submitDeleteProduct (id) {
      this.currentId = id
      this.showModal = !this.showModal
    },
    deleteProduct () {
      this.$store.commit('DELETE_PRODUCT', this.currentId)
      this.showModal = !this.showModal
    }
  }
}
</script>
