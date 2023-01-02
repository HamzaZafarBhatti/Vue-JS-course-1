<template>
  <div>
    <div class="form-group">
      <input v-model="name" class="form-control" />
    </div>
    <button class="btn btn-primary" @click="addItem">Add One</button>
    <hr />
    <div>
      <ul class="pl-0">
        <transition-group name="fade" appear>
          <li
            class="list-group-item"
            v-for="(item, index) in list"
            :key="item"
            @click="removeItem(index)"
          >
            {{ item }}
          </li>
        </transition-group>
      </ul>
      <transition name="fade" appear>
        <compHello></compHello>
      </transition>
    </div>
  </div>
</template>

<script>
import compHello from './hello.vue'
export default {
  components: {
    compHello
  },
  data() {
    return {
      list: ["Farrukh", "Adeel", "Hamza", "Khurram"],
      name: "",
    };
  },
  methods: {
    addItem() {
      if (!this.list.includes(this.name)) {
        this.list.unshift(this.name);
      }
    },
    removeItem(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: 1s;
}
.fade-leave-active {
  width: 100%;
  transition: .25s;
  position: absolute;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-move {
  transition: transform 1s;
}
</style>