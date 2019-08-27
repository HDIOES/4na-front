<template>
<div>
<div class="chpa-content-block">
    <form v-on:submit.prevent="onSubmit" method="GET" action="/api/animes/search" >
        <div>
            <div>Есть в названии:</div>
            <div>
                <input class="chpa-input" type="text" name="phrase" v-model="query.phrase" />
            </div>
        </div>
        <div>
            <div>Тип:</div>
            <div>
                <select class="chpa-input" name="kind" v-model="query.kind">
                    <option value=""></option>
                    <option value="ona">ona</option>
                    <option value="movie">movie</option>
                    <option value="ova">ova</option>
                    <option value="special">special</option>
                    <option value="tv">tv</option>
                </select>
            </div>
        </div>
        <div>
            <div>Статус:</div>
            <div>
                <select class="chpa-input" name="status" v-model="query.status">
                    <option value=""></option>
                    <option value="anons">anons</option>
                    <option value="ongoing">ongoing</option>
                    <option value="released">released</option>
                </select>
            </div>
        </div>
        <div>
            <div>Название франшизы</div>
            <div>
                <input class="chpa-input" type="text" name="franchise" v-model="query.franchise" />
            </div>
        </div>
        <div>
            <div>Длительность:</div>
            <div>
                <select class="chpa-input" name="duration" v-model="query.duration">
                    <option value=""></option>
                    <option value="S">S</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
            </div>
        </div>
        <div>
            <div>Рейтинг:</div>
            <div>
                <select class="chpa-input" name="rating" v-model="query.rating">
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
        <button type="submit" class="chpa-input chpa-input-button">НАЙТИ</button>
        <button type="button" class="chpa-input chpa-input-button chpa-input-random" v-on:click="random">РАНДОМ!</button>
    </form>

</div>

<div class="chpa-content-block" v-show="status">
    <div v-show="status=='loading'">Загрузка...</div>
    <div v-show="status=='empty'">Ничего не нашлось :с<br/>Может стоит уточнить запрос?</div>

    <table v-show="animes" class="chpa-animelist">
        <tr v-for="a in animes" v-bind:key="a.shiki_id">
            <td>
                <img v-bind:src="a.poster_url" width="48px" alt="image" />
            </td>
            <td>{{a.name}}</td>
            <td>
                <a v-bind:href="a.url">Перейти на shikimori.org</a>
            </td>
        </tr>
    </table>

</div>

</div>
</template>

<style scoped>
    .chpa-input {
        width: 180px;
        height: 30px;

        border-radius: 5px;
        border-style: solid;
        border-color: rgb(255, 152, 0);
        border-width: 1px;
        
        font-size: 1rem;
    }

    .chpa-input-button {
        border-radius: 5px;
        border-style: none;
        background-color: rgb(255, 152, 0);
        color: white;

        height: auto;
        padding: 0.5rem;
        margin: 0 0.5rem;
        font-size: 1.2rem;

        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .chpa-input-button:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .chpa-input-random {
        background-color: rgb(79, 193, 246);
    }

    form div {
        margin-bottom: 0.5rem;
    }

    .chpa-animelist {
        vertical-align: middle;
    }
    
    .chpa-animelist tr {
        height: 100px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.2);
        border-bottom-width: 1px;
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
                query: {
                    phrase: "",
                    kind: "",
                    status: "",
                    franchise: "",
                    duration: "",
                    rating: "",
                },

                status: "",
                searchArray: false,
            };
        },
        methods: {
            search: function (event) {
                this.status = "loading";
                this.searchArray = true;
                axios
                    .get('/api/animes/search', {
                        params: {
                            phrase: this.query.phrase === '' ? null : this.query.phrase,
                            kind: this.query.kind === '' ? null : this.query.kind,
                            status: this.query.status === '' ? null : this.query.status,
                            franchise: this.query.franchise === '' ? null : this.query.franchise,
                            duration: this.query.duration === '' ? null : this.query.duration,
                            rating: this.query.rating === '' ? null : this.query.rating
                        }
                    })
                    .then(response => {
                        if (response.data.length == 0) {
                            this.status = "empty";
                        } else {
                            this.animes = response.data;
                            this.status = "ready";
                        }
                    });

            },
            random: function (event) {
                this.status = "loading";
                axios
                    .get('/api/animes/random', {
                        params: {
                            phrase: this.query.phrase === '' ? null : this.query.phrase,
                            kind: this.query.kind === '' ? null : this.query.kind,
                            status: this.query.status === '' ? null : this.query.status,
                            franchise: this.query.franchise === '' ? null : this.query.franchise,
                            duration: this.query.duration === '' ? null : this.query.duration,
                            rating: this.query.rating === '' ? null : this.query.rating
                        }
                    })
                    .then(response => {
                        if (response.data.length == 0) {
                            this.status = "empty";
                        } else {
                            if (this.searchArray) {
                                this.animes = [response.data];
                                this.searchArray = false;
                            }
                            else {
                                this.animes = [response.data].concat(this.animes);
                            }
                            this.status = "ready";
                        }
                    });

            },
            onSubmit () {
                this.search();
            },
        },
        mounted () {

        }
    }
</script>