<template>
  <v-footer app absolute color="primary" dark>
    <v-spacer></v-spacer>
    <div>&copy;{{ new Date().getFullYear() + " " + footer }}</div>

    <v-btn icon @click="openDialog">
      <v-icon>
        mdi-pencil
      </v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>
          푸터 수정
          <v-spacer />
          <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="text"
            outline
            label="푸터"
            @keypress.enter="save"
            hide-details
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-footer>
</template>
<script>
export default {
  props: ["footer"],
  data() {
    return {
      dialog: false,
      text: ""
    };
  },
  methods: {
    openDialog() {
      console.log("openDialog");
      this.dialog = true;
      this.text = this.footer;
    },
    async save() {
      try {
        await this.$firebase
          .database()
          .ref()
          .child("site")
          .update({
            footer: this.text
          });
      } finally {
        this.dialog = false;
      }
    }
  }
};
</script>
<style></style>
