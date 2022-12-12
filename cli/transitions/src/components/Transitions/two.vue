<template>
  <div>
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
    >
      <div class="p-3 mb-2 bg-success text-white" v-if="status" key="status_on">
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
      <div class="p-3 mb-2 bg-info text-white" v-if="!library" key="status_off">
        Hello
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      library: false,
    };
  },
  methods: {
    beforeEnter() {
      console.log('before enter');
    },
    enter() {
      console.log('enter');
    },
    afterEnter() {
      console.log('after enter');
    },
    beforeLeave() {
      console.log('before leave');
    },
    leave(el) {
      console.log('leave', el);
    },
    afterLeave() {
      console.log('after leave');
    }
  }
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