<template>
  <div class="user_profile">
    <h3>User Information:</h3>
    <ul>
      <li><span>Name: </span> {{ name }}</li>
      <li><span>Name: </span> {{ aka }}</li>
      <li><span>Last Name: </span> {{ lastname }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: ["aka", "lastname"],
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