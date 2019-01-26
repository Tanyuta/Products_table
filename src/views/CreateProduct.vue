<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
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
              <v-btn :disabled="!valid" color="success" @click="createProduct">Save</v-btn>
              <v-btn color="error" @click="cancel">Cancel</v-btn>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CreateProduct",
  data: () => ({
    newProduct: {},
    valid: true,
    nameRules: [
      v => !!v || "Name is required"
    ],
    descriptionRules: [
      v => !!v || "Name is required"
    ]
  }),

  methods: {
    cancel() {
      console.log(this.$refs.form);
      // this.$refs.form.resetValidation();
      // this.$refs.form.reset();
      // this.newProduct = {}
      this.$router.push('/')
    },
    createProduct() {
      console.log(this.$refs.form);
           
      this.$store.commit('ADD_PRODUCT', this.newProduct)
      // this.$refs.form.resetValidation();
      // this.$refs.form.reset();
      // this.newProduct = {}
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
