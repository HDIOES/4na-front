import Vue from 'vue'
import App from './app.vue'
import Chpa from './components/chpa.vue'
import News from './components/news.vue'
import './app.css'
import './css/other.css'

new Vue({
    el: '#app',
    render: h => h(App)

});

var chpa = new Vue({
    el: '#chpa',
    render: h => h(Chpa)

});

var news = new Vue({
    el: '#news',
    render: h => h(News)

});