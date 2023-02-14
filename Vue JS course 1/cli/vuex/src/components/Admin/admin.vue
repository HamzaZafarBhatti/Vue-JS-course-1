<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count:{{ this.$store.state.counter }} </strong>
      </p>

      <div>
        <label class="form-label">By how much</label>
        <input type="number" class="form-control" v-model="amount" />
      </div>
      <br />

      <button type="button" class="btn btn-primary" @click="adminIncrement">
        +
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="adminDecrement"
      >
        -
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      amount: 1,
    };
  },
  methods: {
    adminIncrement() {
      // this.$store.commit("increment", { value: this.amount });
      this.$store.commit({
        type: "increment",
        value: this.amount,
      });
    },
    adminDecrement() {
      // this.$store.commit("decrement", { value: this.amount });
      this.$store.commit({
        type: "decrement",
        value: this.amount,
      });
    },
  },
};
</script>