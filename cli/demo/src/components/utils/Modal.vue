<template>
    <dialog open>
        <h3>
            I am modal
        </h3>
    </dialog>
</template>

<script>
export default {
    name: 'utilModal'
}
</script>

<style scoped>
dialog {
    position: fixed;
    top: 20vh;
    left: 0%;
    width: 20%;
    background-color: #b9b9b9;
    text-align: center;
}
</style>