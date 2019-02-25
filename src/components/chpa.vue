<template>
    <div>
        <div class="chpa-component">
            <div class="chpa_phrase">
                <div>Есть в названии:</div>
                <div>
                    <input class="chpa_input_text" type="text" v-model="phrase" />
                </div>
            </div>
            <div class="chpa_kind">
                <div class="chpa_kind_title">Тип:</div>
                <div>
                    <input class="chpa_input_text" type="text" v-model="kind" />
                </div>
            </div>
            <div class="chpa_button">
                <div>
                    <button class="chpa_input_button" v-on:click="search">Найти</button>
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
        width: 800px;
        left: 950px;
        top: 100px;
    }
    .chpa_input_text {
        width: 180px;
        height: 30px;
        border-radius: 20px;
        text-indent: 10px;
        border-style: solid;
        border-color: #BEF6B9;
        border-width: 5px;
    }
    .chpa_input_button {
        width: 180px;
        height: 40px;
        font-size: 18px;
        border-radius: 20px;
        text-indent: 10px;
        border-style: none;
        border-color: #BEF6B9;
        background-color: green;
        color: white;
    }
    .chpa_phrase {
        display: block;
        margin-top: 30px;
        height: 80px;
    }
    .chpa_phrase div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa_kind {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa_kind div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa_button {
        display: block;
        margin-top: 10px;
    }
    .chpa_button div {
        margin-left: 250px;
    }
    .chpa_animelist {
        display: block;
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
                phrase: "",
                kind: ""
            };
        },
        methods: {
            search: function (event) {
                axios
                    .get('http://it.shadowhd.ru/animes/search', {
                        params: {
                            phrase: this.phrase,
                            kind: this.kind
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