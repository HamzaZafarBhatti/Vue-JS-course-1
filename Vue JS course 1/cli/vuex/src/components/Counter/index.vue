<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
      <countComponent />
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          class="btn btn-primary btn-lg px-4 gap-3"
          @click="increment"
        >
          +
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="decrement"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import countComponent from "./count.vue";
export default {
  components: {
    countComponent,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>