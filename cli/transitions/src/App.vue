<template>
  <app-header></app-header>
        <div class="container">
            <!-- <compTransitionsOne></compTransitionsOne> -->
            <compTransitionsTwo></compTransitionsTwo>
        </div>
    <app-footer></app-footer>
</template>

<script>
  // import compTransitionsOne from './components/Transitions/one';
  import compTransitionsTwo from './components/Transitions/two';

  export default{
    components:{
      // compTransitionsOne,
      compTransitionsTwo
    }
  }
</script>
