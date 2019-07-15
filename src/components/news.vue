<template>
    <div>
        <div class="news-component">
            <div v-model="anime">
                {{anime.name}}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .news-component {
        position: absolute;
        background-color: #E4FCDC;
        border-radius: 10px;
        border-style: solid;
        border-width: 5px;
        border-color: #BEF6B9;
        display: inline-block;
        height: 600px;
        width: 800px;
        left: 50px;
        top: 100px;
    }
</style>

<script>
    import axios from 'axios'

    export default {
        props: [],
        name: 'news',
        data() {
            return {
                anime: {}
            };
        },
        mounted() {
            axios.get("http://it.shadowhd.ru:10046/api/animes/search")
                .then(response => {
                    this.anime = response.data;
                })
        }
    }
</script>