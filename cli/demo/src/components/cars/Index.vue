<template>
  <div>
    <h1>This is car template</h1>
    <div>
      <list></list>
    </div>
  </div>
</template>

<script>
import list from "./List.vue";
export default {
  name: "IndexCars",
  components: {
    list,
  },
  // props: ["cars"],
  data() {
    return {};
  },
};
</script>