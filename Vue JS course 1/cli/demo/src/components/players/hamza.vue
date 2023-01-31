<template>
    <div>
        <h3>Hamza is on</h3>
    </div>
</template>

<script>
export default {
    name: "playerHamza",
    mounted() {
        console.log('Hamza mounted')
    },
    unmounted() {
        console.log('Hamza unmounted')
    },
    activated() {
        console.log('Hamza activated')
    },
    deactivated() {
        console.log('Hamza deactivated')
    }
}
</script>