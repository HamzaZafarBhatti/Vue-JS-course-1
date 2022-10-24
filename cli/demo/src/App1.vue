<template>
  <app-header></app-header>
  <div class="container">
    <user-profile
      :userLastname="lastname"
      :userAge="userAge"
      :userParents="parents"
      @update-lastname="lastname = $event"
      @say-hello="alertHello"
      :updateAge="updateAge"
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
    alertHello() {
      alert('Helooooo')
    },
    updateAge(value) {
      this.userAge = value
    }
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