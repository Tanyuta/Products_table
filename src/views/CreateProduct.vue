<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg4>
      <v-card>
        <v-card-text>
          <v-form v-model="valid" lazy-validation>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                    v-model="newProduct.name"
                    label="Name"
                    :rules="nameRules"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="newProduct.description"
                    label="Description"
                    :rules="descriptionRules"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-btn
                :disabled="(!valid || newProduct.name === '' || newProduct.description === '')"
                color="success"
                @click="createProduct"
              >Save</v-btn>
              <router-link to="/">
                <v-btn color="error">Cancel</v-btn>
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
  name: 'CreateProduct',
  data: () => ({
    newProduct: {
      name: '',
      description: ''
    },
    valid: false,
    nameRules: [v => !!v || 'Name is required'],
    descriptionRules: [v => !!v || 'Description is required']
  }),
  methods: {
    createProduct () {
      this.$store.commit('ADD_PRODUCT', this.newProduct)
      this.$router.push('/')
    }
  }
}
</script>
