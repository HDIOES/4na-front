<template>
    <div>
        <div class="chpa-component">{{name}}</div>
    </div>
</template>

<style scoped>
    .chpa-component {
        position: absolute;
        background-color: #E4FCDC;
        border-radius: 10px;
        border-style: solid;
        border-width: 5px;
        border-color: #BEF6B9;
        display: inline-block;
        height: 600px;
        width: 45%;
        left: 950px;
        top: 100px;
    }
</style>

<script>
    export default {
        props: [],
        name: 'chpa',
        data() {
            return {
                name: 'chpa-component',
            };
        }
    }
</script>