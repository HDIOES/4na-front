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
                <div>Тип:</div>
                <div>
                    <select class="chpa_combobox" v-model="kind">
                        <option value="ona">ona</option>
                        <option value="movie">movie</option>
                        <option value="ova">ova</option>
                        <option value="special">special</option>
                        <option value="tv">tv</option>
                    </select>
                </div>
            </div>
            <div class="chpa_status">
                <div>Статус:</div>
                <div>
                    <select class="chpa_combobox" v-model="status">
                        <option value="anons">anons</option>
                        <option value="ongoing">ongoing</option>
                        <option value="released">released</option>
                    </select>
                </div>
            </div>
            <div class="chpa_franchise">
                <div>Название франшизы</div>
                <div>
                    <input class="chpa_input_text" type="text" v-model="franchise" />
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
    .chpa_combobox {
        width: 190px;
        height: 40px;
        text-indent: 10px;
        border-radius: 20px;
        border-style: solid;
        border-color: #BEF6B9;
        border-width: 5px;
        background-color: white;
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
    .chpa_status {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa_status div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa_franchise {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa_franchise div {
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
                kind: "",
                status: "",
                franchise: ""
            };
        },
        methods: {
            search: function (event) {
                axios
                    .get('http://it.shadowhd.ru/animes/search', {
                        params: {
                            phrase: this.phrase === '' ? null : this.phrase,
                            kind: this.kind === '' ? null : this.kind,
                            status: this.status === '' ? null : this.status,
                            franchise: this.franchise === '' ? null : this.franchise
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