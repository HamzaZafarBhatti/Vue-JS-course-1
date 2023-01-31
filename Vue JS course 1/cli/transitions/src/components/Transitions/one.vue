<template>
  <div>
    <transition>
      <div class="p-3 mb-2 bg-success text-white" v-show="display">Hello</div>
    </transition>
    <button class="btn btn-primary" @click="display = !display">Toggle</button>
    <hr />
    <transition>
      <div class="p-3 mb-2 bg-warning text-white" v-if="display2">Hello 2</div>
    </transition>
    <button class="btn btn-primary" @click="display2 = !display2">
      Toggle 2
    </button>
    <hr />
    <transition name="slide">
      <div class="p-3 mb-2 bg-secondary text-white" v-if="display3">
        Hello 3
      </div>
    </transition>
    <button class="btn btn-primary" @click="display3 = !display3">
      Toggle 3
    </button>
    <hr />
    <transition name="slideUp">
      <div class="p-3 mb-2 bg-secondary text-white" v-if="display4">
        Hello 4
      </div>
    </transition>
    <button class="btn btn-primary" @click="display4 = !display4">
      Toggle 4
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      display2: false,
      display3: false,
      display4: false,
    };
  },
};
</script>

<style>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 1s;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-enter-active {
  transition: all 2s ease;
}
.slide-enter-to {
  opacity: 1;
}
.slide-leave-from {
  opacity: 1;
  background-color: red !important;
}
.slide-leave-active {
  transition: all 2s ease;
}
.slide-leave-to {
  opacity: 0;
  background-color: black;
  transform: translateX(100px);
}

.slideUp-enter-active {
  animation: slideUp 1s ease-in-out;
}
.slideUp-leave-active {
  animation: slideDown 1s ease-in-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>