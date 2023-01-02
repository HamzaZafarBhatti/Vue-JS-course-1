<template>
  <div>
    <button class="btn btn-primary" @click="interupt = !interupt">
      INTERUPT
    </button>
    <div v-if="interupt">
      <button class="btn btn-primary" @click="status = !status">
        Toggle Status
      </button>
      <transition
        mode="out-in"
        name="custom"
        enter-active-class="dog"
        leave-active-class="cat"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <div
          class="p-3 mb-2 bg-success text-white"
          v-if="status"
          key="status_on"
        >
          ON
        </div>
        <div class="p-3 mb-2 bg-danger text-white" v-else key="status_off">
          OFF
        </div>
      </transition>
      <hr />

      <button class="btn btn-primary" @click="library = !library">
        Toggle Library animate.css
      </button>
      <transition
        name="unique-name"
        enter-active-class="animate__animated animate__backInDown"
        leave-active-class="animate__animated animate__backOutLeft"
      >
        <!-- <div class="p-3 mb-2 bg-success text-white" v-if="status" key="status_on">ON</div> -->
        <div
          class="p-3 mb-2 bg-info text-white"
          v-if="!library"
          key="status_off"
        >
          Hello
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  data() {
    return {
      status: false,
      library: false,
      interupt: true,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      Velocity(
        el,
        {
          opacity: 1,
          fontSize: "20px",
        },
        {
          duration: 2000,
          complete: done,
        }
      );
    },
    afterEnter() {
      console.log("after enter");
    },
    beforeLeave() {
      console.log("before leave");
    },
    leave(el, done) {
      Velocity(
        el,
        {
          opacity: 0,
          rotateZ: "180deg",
        },
        {
          loop: 2,
          complete: done,
        }
      );
    },
    afterLeave() {
      console.log("after leave");
    },
    enterCancelled() {
      console.log("enterCancelled");
    },
    leaveCancelled() {
      console.log("leaveCancelled");
    },
  },
};
</script>

<style>
.custom-enter-from,
.custom-leave-to {
  opacity: 0;
}
.dog,
.cat {
  transition: 0.5s;
}
.custom-enter-to,
.custom-leave-from {
  opacity: 1;
}
</style>