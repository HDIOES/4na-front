<template>
    <div class="chpa-content-block">
        <!-- <div v-model="anime">
            {{anime.name}}
        </div> -->
    </div>
</template>

<style scoped>

</style>

<script>
    import axios from 'axios'

    export default {
        props: [],
        name: 'Blog',
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