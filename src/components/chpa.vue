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
                        <option value=""></option>
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
                        <option value=""></option>
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
            <div class="chpa_duration">
                <div>Длительность:</div>
                <div>
                    <select class="chpa_combobox" v-model="duration">
                        <option value=""></option>
                        <option value="S">S</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                </div>
            </div>
            <div class="chpa_rating">
                <div>Рейтинг:</div>
                <div>
                    <select class="chpa_combobox" v-model="rating">
                        <option value="none"></option>
                        <option value="g">G</option>
                        <option value="pg">PG</option>
                        <option value="pg_13">PG-13</option>
                        <option value="r">R</option>
                        <option value="r_plus">R+</option>
                        <option value="rx">RX</option>
                    </select>
                </div>
            </div>
            <div class="chpa_button">
                <div>
                    <button class="chpa_input_button" v-on:click="search">Найти</button>
                </div>
            </div>
            <div class="chpa_animelist">
                <div class="chpa-anime" v-for="a in animes">
                    <div>
                         <div>{{a.name}}</div>
                    <p>
                        <a v-bind:href="a.url">Перейти на shikimori.org</a>
                    </p>
                    <div>
                        <img v-bind:src="a.poster_url" width="300px" height="400px" alt="image" />
                    </div>
                    </div>
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
        display: block;
        min-height: 600px;
        width: 1600px;
        left: 130px;
        top: 180px;
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
    .chpa_duration {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa_duration div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa_rating {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa_rating div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa_button {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa_button div {
        margin-left: 250px;
    }
    .chpa_animelist {
        position: relative;
        display: block;
        max-width: 1000px;
        left: 550px;
        top: -550px;
    }
    .chpa-anime {
        display: inline-flex;
        margin: 5px;
        height: 500px;
    }
    .chpa-anime div div {
        width: 300px;
        display: block;
        height: 50px;
        word-break: break-all;
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
                franchise: "",
                duration: "",
                rating: ""
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
                            franchise: this.franchise === '' ? null : this.franchise,
                            duration: this.duration === '' ? null : this.duration,
                            rating: this.rating === '' ? null : this.rating
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