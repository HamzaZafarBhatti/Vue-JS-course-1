<template>
    <div>
        <ul>
            <li :key="car.model" v-for="car in cars">
                <span>{{ car.brand }}:</span> {{ car.model }}
            </li>
        </ul>
        <button @click="changeCar">Change Car</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "IndexCars",
    inject: ['cars', 'changeCar'], 
    data() {
      return {};
     },
  };
  </script>