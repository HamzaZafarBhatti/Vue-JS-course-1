<template>
    <app-header></app-header>
    <div class="container">
        <!-- <h3>Children </h3> -->
        <index-cars></index-cars>
        <car-brands>
          <template v-slot:brands> 
            <div>
              <ul>
                <li v-for="(brand, index) in brands" :key="index">{{ brand }}</li>
              </ul>
            </div>
          </template>
          <template v-slot:other> 
            <div>
              Some other content
            </div>
          </template>
          <strong>Default Slot</strong>
        </car-brands>
        <!-- <h3>Parent</h3>
        <ul>
            <li :key="car.model" v-for="car in cars">
                <span>{{ car.brand }}:</span> {{ car.model }}
            </li>
        </ul> -->

        <!-- <button @click="changeCar">Change Car</button> -->
    </div>
    <app-footer></app-footer>
  </template>
  
  <script>
  import indexCars from './components/cars/Index.vue'
  import carBrands from './components/cars/Brands.vue'
  export default {
    components: {
        indexCars,
        carBrands
    },
    data() {
      return {
        brands: [
            'Mazda',
            'Honda',
            'Renault',
        ],
        cars: [
            {model: 'F9', brand: 'Ferarri'},
            {model: '2017', brand: 'Honda'},
            {model: '2019', brand: 'Honda'},
        ]
      };
    },
    /* This use cached/static version of data */
    // provide: {
    //     cars: [
    //         {model: 'F9', brand: 'Ferarri'},
    //         {model: '2017', brand: 'Honda'},
    //         {model: '2019', brand: 'Honda'},
    //         {model: '2019', brand: 'Toyota'},
    //     ]
    // },
    /* With this you can use data() properties which are dynamic */
    provide() {
        return {
            cars: this.cars,
            changeCar: this.changeCar
        }
    },
    methods: {
        changeCar() {
            this.cars[0].brand = 'Toyota'
        }
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