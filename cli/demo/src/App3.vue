<template>
    <app-header></app-header>
    <div class="container">
        <life-index v-if="showIt"></life-index>
    </div>
    <app-footer></app-footer>
  </template>
  
  <script>
  import lifeIndex from './components/life/Index.vue'
  export default {
    components: {
        lifeIndex,
    },
    data() {
      return {
        showIt: true
      };
    },
    mounted() {
        setTimeout(() => {
            this.showIt = false
        }, 3000)
    }
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