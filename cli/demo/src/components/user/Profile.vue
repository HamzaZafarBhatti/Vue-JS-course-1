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
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    aka: String,
    userLastname: String,
    userAge: Number,
    userParents: Object
  },
  data() {
    return {
      name: "Hamza",
    };
  },
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