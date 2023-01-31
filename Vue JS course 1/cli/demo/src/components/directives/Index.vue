<template>
    <div v-user-lastname="lastName"></div>
    <div v-awesome:red="text"></div>
    <!-- <div v-awesome.blue.big="text"></div>
    <div v-awesome="'Nice directive'"></div> -->
    <button @click="this.text = 'Text Changed'">
        Update text
    </button>
</template>

<script>
export default {
    name: 'directivesIndex',
    data() {
        return {
            text: 'Text from data',
            lastName: 'Jones'
        }
    },
    directives: {
        'user-lastname': {
            beforeMount(el, binding) {
                el.innerHTML = binding.value
            },
        }
    }
}
</script>