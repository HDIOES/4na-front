<template>
    <div>
        <div class="chpa-component">
            {{name}}
            <br/>
            <a v-bind:href="url">Перейти на shikimori.org</a>
            <br/>
            <img v-bind:src="poster_url" alt="image" />
        </div>
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
    import axios from 'axios'

    export default {
        props: [],
        name: 'chpa',
        data() {
            return {
                name: 'chpa-component',
                url: 'chpa-component',
                poster_url: 'chpa-component'
            };
        },
        mounted () {
            axios
                .get('http://localhost:10045/animes/random')
                .then(response => {
                    this.name = response.data.name;
                    this.url = response.data.url;
                    this.poster_url = response.data.poster_url;
                });
        }
    }
</script>