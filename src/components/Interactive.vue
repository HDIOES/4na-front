<template>
<div class="chpa-content-block">
    <div class="chpa-phrase">
        <div>Есть в названии:</div>
        <div>
            <input class="chpa-input-text" type="text" v-model="phrase" />
        </div>
    </div>
    <div class="chpa-kind">
        <div>Тип:</div>
        <div>
            <select class="chpa-combobox" v-model="kind">
                <option value=""></option>
                <option value="ona">ona</option>
                <option value="movie">movie</option>
                <option value="ova">ova</option>
                <option value="special">special</option>
                <option value="tv">tv</option>
            </select>
        </div>
    </div>
    <div class="chpa-status">
        <div>Статус:</div>
        <div>
            <select class="chpa-combobox" v-model="status">
                <option value=""></option>
                <option value="anons">anons</option>
                <option value="ongoing">ongoing</option>
                <option value="released">released</option>
            </select>
        </div>
    </div>
    <div class="chpa-franchise">
        <div>Название франшизы</div>
        <div>
            <input class="chpa-input-text" type="text" v-model="franchise" />
        </div>
    </div>
    <div class="chpa-duration">
        <div>Длительность:</div>
        <div>
            <select class="chpa-combobox" v-model="duration">
                <option value=""></option>
                <option value="S">S</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
        </div>
    </div>
    <div class="chpa-rating">
        <div>Рейтинг:</div>
        <div>
            <select class="chpa-combobox" v-model="rating">
                <option value="none"></option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
                <option value="r">R</option>
                <option value="r-plus">R+</option>
                <option value="rx">RX</option>
            </select>
        </div>
    </div>
    <div class="chpa-button">
        <div>
            <button class="chpa-input-button" v-on:click="search">Найти</button>
        </div>
    </div>
    <div class="chpa-animelist">
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
</template>

<style scoped>
    .chpa-input-text {
        width: 180px;
        height: 30px;
        text-indent: 10px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(255, 152, 0);
        border-width: 1px;
    }
    .chpa-input-button {
        width: 180px;
        height: 40px;
        font-size: 18px;
        border-radius: 20px;
        text-indent: 10px;
        border-style: none;
        background-color: rgb(255, 152, 0);
        color: white;
    }
    .chpa-combobox {
        width: 190px;
        height: 40px;
        text-indent: 10px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(255, 152, 0);
        border-width: 1px;
    }
    .chpa-phrase {
        display: block;
        margin-top: 30px;
        height: 80px;
    }
    .chpa-phrase div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa-kind {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa-kind div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa-status {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa-status div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa-franchise {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa-franchise div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa-duration {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa-duration div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa-rating {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa-rating div {
        display: inline;
        margin-left: 50px;
        width: 150px;
        float: left;
    }
    .chpa-button {
        display: block;
        margin-top: 10px;
        height: 80px;
    }
    .chpa-button div {
        margin-left: 250px;
    }
    .chpa-animelist {
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
        name: 'Interactive',
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
                    .get('/api/animes/search', {
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