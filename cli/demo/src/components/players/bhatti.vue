<template>
    <div>
        <h3>bhatti is on</h3>
        <teleport to='body'>
            <modal></modal>
        </teleport>
        
    </div>
</template>

<script>
import modal from '../utils/Modal.vue'
export default {
    name: "playerBhatti",
    components: {
        modal
    },
    mounted() {
        console.log('Bhatti mounted')
    },
    unmounted() {
        console.log('Bhatti unmounted')
    },
    activated() {
        console.log('Bhatti activated')
    },
    deactivated() {
        console.log('Bhatti deactivated')
    }
}
</script>