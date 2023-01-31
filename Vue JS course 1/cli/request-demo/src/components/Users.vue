<template>
    <div>
        <div v-if="loading">
            <app-loader></app-loader>
        </div>
        <div v-else>
            <div class="row">
              <div class="col-auto mb-4" v-for="user in users" :key="user.id">
                <div class="card" style="width: 14rem">
                  <img
                    class="card-img-top"
                    :src="'https://placebeard.it/300/300?' + user.id"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="card-text"><strong>Name:</strong> {{ user.name }}</div>
                    <div class="card-text">
                      <strong>Lastname:</strong> {{ user.lastname }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      loading: true
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios
        .get("http://localhost:3004/users")
        .then((response) => {
          this.users = response.data;
          this.loading = false
        })
        .catch((error) => {
            console.log(error)
            this.$toast.show('Oops! Something went wrong. Please contact admin', {
                type: 'error',
                position: "bottom-right",
                duration: 2000
            })
        });
    },
  },
};
</script>