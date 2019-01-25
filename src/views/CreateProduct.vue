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
                    value="1"
                    label="ID"
                    disabled
                    outline
                  ></v-text-field>
                </v-flex>
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
              <v-btn :disabled="!valid" color="success" @click="validate">Save</v-btn>
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
  name: "CreateProduct",
  data: () => ({
    newProduct: {},
    valid: true,
    nameRules: [
      v => !!v || "Name is required"
      // v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    descriptionRules: [
      v => !!v || "Name is required"
      // v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
