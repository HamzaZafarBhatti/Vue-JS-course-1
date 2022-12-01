<template>
  <div>
    <button class="btn btn-primary">Toggle Status</button>
    <transition>
      <div class="p-3 mb-2 bg-success text-white">ON</div>
    </transition>
    <transition>
      <div class="p-3 mb-2 bg-danger text-white">OFF</div>
    </transition>
  </div>
</template>