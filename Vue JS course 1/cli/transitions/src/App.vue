<template>
  <app-header></app-header>
        <div class="container">
            <!-- <compTransitionsOne></compTransitionsOne> -->
            <!-- <compTransitionsTwo></compTransitionsTwo> -->
            <compTransitionsThree></compTransitionsThree>
        </div>
    <app-footer></app-footer>
</template>

<script>
  // import compTransitionsOne from './components/Transitions/one';
  // import compTransitionsTwo from './components/Transitions/two';
  import compTransitionsThree from './components/Transitions/three';

  export default{
    components:{
      // compTransitionsOne,
      // compTransitionsTwo
      compTransitionsThree
    }
  }
</script>
