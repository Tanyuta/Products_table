<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field v-model="initialProduct.id" label="ID" disabled></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="initialProduct.name"
                    label="Name"
                    :rules="nameRules"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="initialProduct.description"
                    label="Description"
                    :rules="descriptionRules"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-btn type="submit" :disabled="!valid" color="success">Save</v-btn>
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
  name: "UpdateProduct",
//   props: ["product"],
  data: () => ({
    initialProduct: {},
    valid: true,
    nameRules: [
      v => !!v || "Name is required"
    ],
    descriptionRules: [
      v => !!v || "Name is required"
    ]
}),
  created() {
      console.log('LOL',this.$router.params);
      
    //   this.initialProduct = this.$store.getters.GET_CURRENT_PRODUCT(this.$router.)
      console.log('created', this.initialProduct);
      
// this.$store.commit('auth_success', response.data.email);
  },

  methods: {
   cancel() {
    //   this.$refs.form.resetValidation();
    //   this.$refs.form.reset();
    //   this.initialProduct = {}
      this.$router.push('/')
    },
    updateProduct() {
      this.$store.commit('UPDATE_PRODUCT', {'id': this.$router.params.id, 'payload': this.initialProduct})
    //   this.$refs.form.resetValidation();
    //   this.$refs.form.reset();
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
