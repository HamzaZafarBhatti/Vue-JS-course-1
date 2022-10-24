<template>
  <div>
    {{ text }}
  </div>
  <button @click="this.text = 'changed...'">Trigger Update</button>
</template>

<script>
export default {
  name: "lifeIndex",
  data() {
    return {
      text: "life",
    };
  },
  beforeCreate() {
    console.log("1-before Create");
  },
  created() {
    console.log("2-Created");
  },
  beforeMount() {
    console.log("3- Before Mount");
  },
  mounted() {
    console.log("4-Mounted");
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('before unmount')
  },
  unmounted() {
    console.log('unmounted')
  }
};
</script>