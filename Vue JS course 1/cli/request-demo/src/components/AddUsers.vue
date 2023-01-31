<template>
  <div>
    <div v-if="loading">
      <app-loader></app-loader>
    </div>
    <div v-else>
      <h2>Add users</h2>

      <div class="form-group">
        <label>Name</label>
        <input
          class="form-control"
          type="text"
          v-model="user.name"
          name="firstname"
        />
      </div>

      <div class="form-group">
        <label>Lastname</label>
        <input
          class="form-control"
          type="text"
          v-model="user.lastname"
          name="lastname"
        />
      </div>

      <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      user: {
        name: "",
        lastname: "",
      },
    };
  },
  methods: {
    submit() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://localhost:3004/users",
        data: this.user,
      })
        .then((response) => {
          console.log(response);
          this.$toast.show("User has been added!", {
            type: "success",
            position: "bottom-right",
            duration: 2000,
          });
        })
        .catch((error) => {
          console.log(error);
          this.$toast.show("Oops! Something went wrong. Please contact admin", {
            type: "error",
            position: "bottom-right",
            duration: 2000,
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>