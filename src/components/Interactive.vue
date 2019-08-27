<template>
<div>
<div class="chpa-content-block">
    <form v-on:submit.prevent="onSubmit" method="GET" action="/api/animes/search" >
        <div>
            <div>Есть в названии:</div>
            <div>
                <input class="chpa-input" type="text" name="phrase" v-model="p.phrase" />
            </div>
        </div>
        <div>
            <div>Тип:</div>
            <div>
                <select class="chpa-input" name="kind" v-model="p.kind">
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
                <select class="chpa-input" name="status" v-model="p.status">
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
                <input class="chpa-input" type="text" name="franchise" v-model="p.franchise" />
            </div>
        </div>
        <div>
            <div>Длительность:</div>
            <div>
                <select class="chpa-input" name="duration" v-model="p.duration">
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
                <select class="chpa-input" name="rating" v-model="p.rating">
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
        <button type="submit" class="chpa-input chpa-input-button">Найти</button>
    </form>

</div>

<div class="chpa-content-block" v-show="status">
    <div v-show="status=='loading'">Загрузка...</div>
    <div v-show="status=='empty'">Ничего не нашлось :с<br/>Может стоит уточнить запрос?</div>

    <table v-show="status=='ready'" class="chpa-animelist">
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
        font-size: 1.2rem;

        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .chpa-input-button:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
                p: {
                    phrase: "",
                    kind: "",
                    status: "",
                    franchise: "",
                    duration: "",
                    rating: "",
                },

                status: "",
            };
        },
        methods: {
            search: function (event) {
                this.status = "loading";
                axios
                    .get('/api/animes/search', {
                        params: {
                            phrase: this.p.phrase === '' ? null : this.p.phrase,
                            kind: this.p.kind === '' ? null : this.p.kind,
                            status: this.p.status === '' ? null : this.p.status,
                            franchise: this.p.franchise === '' ? null : this.p.franchise,
                            duration: this.p.duration === '' ? null : this.p.duration,
                            rating: this.p.rating === '' ? null : this.p.rating
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
            onSubmit () {
                this.search();
            },
        },
        mounted () {

        }
    }
</script>