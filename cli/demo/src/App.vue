<template>
  <app-header></app-header>
  <div class="container">
    <user-profile
      :aka="name"
      :userLastname="lastname"
      :userAge="userAge"
      :userParents="parents"
    ></user-profile>
    <button @click="updateName">Update Name</button>
  </div>
  <app-footer></app-footer>
</template>

<script>
import userProfile from "./components/user/Profile.vue";
export default {
  components: {
    userProfile,
  },
  data() {
    return {
      name: "kalu",
      lastname: "Bhatti",
      userAge: 18,
      parents: {
        father: "Zafar",
        mother: "Nuzhat",
      },
    };
  },
  methods: {
    updateName() {
      this.name = "Sufi";
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>