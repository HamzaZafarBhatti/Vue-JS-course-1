<template>
  <app-header></app-header>
  <div class="container">
    <directiveIndex></directiveIndex>
  </div>
  <app-footer></app-footer>
</template>
  
<script>
import directiveIndex from './components/directives/Index.vue'
export default {
  components: {
    directiveIndex
  },
  data() {
    return {
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