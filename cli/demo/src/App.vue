<template>
  <app-header></app-header>
  <div class="container">
    <user-profile :aka="name" lastname="Bhatti"></user-profile>
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