<template>
  <app-header></app-header>
  <div class="container">
    <button @click="this.activeComp = 'playerBhatti'">Bhatti</button>
    <button @click="this.activeComp = 'playerHamza'">Hamza</button>
    <!-- <playerHamza></playerHamza>
    <playerBhatti></playerBhatti> -->
    <component :is="activeComp"></component>
  </div>
  <app-footer></app-footer>
</template>
  
<script>
import playerHamza from './components/players/hamza.vue'
import playerBhatti from './components/players/bhatti.vue'
export default {
  components: {
    playerHamza,
    playerBhatti,
  },
  data() {
    return {
        activeComp: 'playerHamza'
    };
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