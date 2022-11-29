<template>
  <app-header></app-header>
        <div class="container">
            <!-- <compContact></compContact> -->
            <compValidate></compValidate>
        </div>
    <app-footer></app-footer>
</template>

<script>
  // import compContact from './components/contact';
  import compValidate from './components/validate';

  export default{
    components:{
      compValidate
    }
  }
</script>
