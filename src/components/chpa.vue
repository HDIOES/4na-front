<template>
    <div>
        <div class="chpa-component">
            <div class="chpa_phrase">
                <div>Есть в названии:</div>
                <div><input type="text" v-model="phrase" /></div>
                <div>
                    <button v-on:click="search">Найти</button>
                </div>
            </div>
            <div class="chpa_animelist">
                <div v-for="a in animes">
                    {{a.name}}
                    <br/>
                    <a v-bind:href="a.url">Перейти на shikimori.org</a>
                    <br/>
                    <img v-bind:src="a.poster_url" alt="image" />
                </div>
            </div>
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
    .chpa_phrase {
        position: absolute;
        left: 50px;
        top: 50px;
    }
    .chpa_phrase div {
        display: inline-block;
        margin-left: 40px;
    }
    .chpa_phrase div input {
        height: 30px;
        width: 200px;
        border-radius: 15px;
        border-style: solid;
        border-width: 5px;
        border-color: #BEF6B9;
        text-indent: 10px;
    }
    .chpa_phrase div button {
        position: absolute;
        top: 0px;
        height: 40px;
        width: 200px;
        border-radius: 15px;
        border-style: solid;
        border-width: 5px;
        background-color: green;
        border-color: green;
        color: white;
        font-size: 20px;
    }
    .chpa_animelist {
        position: absolute;
        top: 100px;
        left: 10px;
    }

</style>

<script>
    import axios from 'axios'

    export default {
        props: [],
        name: 'chpa',
        data() {
            return {
                animes: [],
                phrase: ""
            };
        },
        methods: {
            search: function (event) {
                axios
                    .get('http://localhost:10045/animes/search', {
                        params: {
                            phrase: this.phrase
                        }
                    })
                    .then(response => {
                        this.animes = response.data;
                    });
            }
        },
        mounted () {

        }
    }
</script>