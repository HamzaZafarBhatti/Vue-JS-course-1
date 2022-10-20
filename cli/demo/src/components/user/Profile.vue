<template>
  <div class="user_profile">
    <h3>User Information:</h3>
    <ul>
      <li><span>Name: </span> {{ name }}</li>
      <li><span>Name: </span> {{ aka }}</li>
      <li><span>Last Name: </span> {{ userLastname }}</li>
      <li><span>Age: </span> {{ userAge }}</li>
      <ul>
        <li v-for="(value,key,index) in userParents" :key="index">
          <span>{{ key }}:</span> {{ value }}
        </li>
      </ul>
    </ul>
    <button @click="updateLastname">Change from Child</button>
    <button @click="sayHello">Say Hello</button>
    <button @click="updateAge(27)">Update Age</button>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    aka: {
      type: String,
      required: true,
      default: 'N/A'
    },
    userLastname: {
      type: String,
      // validator(value){
      //   if(value === 'Bhatti') {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
    },
    userAge: [Number, String],
    userParents: Object,
    updateAge: Function
  },
  emits: {
    'update-lastname': function(lastname ) {
      if(lastname === 'Zafar Bhatti') {
        return true
      }else {
        return false
      }
    }
  },
  data() {
    return {
      name: "Hamza",
    };
  },
  methods: {
    updateLastname() {
      this.$emit('update-lastname', 'Zafar Bhatti')
    },
    sayHello() {
      this.$emit('say-hello')
    }
  }
};
</script>

<style>
span {
  font-weight: 800;
}
.user_profile {
  border: 1px solid #2196f3;
  padding: 10px;
}
</style>