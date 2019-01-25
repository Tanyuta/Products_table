<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>Are you sure that you want to delete this product?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="close">Reject</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="deleteProduct">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    deleteProduct() {
      this.$emit("deleteProduct");
    }
  }
};
</script>
