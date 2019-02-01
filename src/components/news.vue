<template>
    <div>
        <div>News component!!!</div>
        <div>{{ message }}</div>
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        props: [],
        name: 'news',
        data() {
            return {
                message: 'message',
            };
        }
    }
</script>