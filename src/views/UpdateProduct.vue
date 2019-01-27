<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg4>
      <v-card>
        <v-card-text>
          <v-form v-model='valid' lazy-validation>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field v-model='initialProduct.id' label='ID' outline disabled></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model='initialProduct.name'
                    label='Name'
                    :rules='nameRules'
                    required
                    outline
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model='initialProduct.description'
                    label='Description'
                    :rules='descriptionRules'
                    required
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-btn :disabled='!valid' color='success' @click='updateProduct'>Save</v-btn>
              <router-link to='/'>
                <v-btn color='error'>Cancel</v-btn>
              </router-link>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UpdateProduct',
  data: () => ({
    initialProduct: {},
    id: 0,
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 256) || 'Name must be less than 256 characters'
    ],
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 256) || 'Description must be less than 256 characters'
    ]
  }),
  created () {
    this.id = this.$route.params.id
    let products = this.$store.getters.GET_PRODUCTS
    products.forEach(element => {
      if (Number(element.id) === Number(this.id)) {
        this.initialProduct = element
      }
    })
  },
  methods: {
    updateProduct () {
      this.initialProduct.id = this.id
      this.$store.commit('UPDATE_PRODUCT', this.initialProduct)
      this.$router.push('/')
    }
  }
}
</script>
