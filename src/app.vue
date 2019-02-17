<template>

    <div class="fourna-header">
        <h1 class="cpa-text">ЧЁПАЦАНЫАНИМЕ?Ф</h1>

        <div class="newnews">
            Оставить новость
        </div>
        <div class="githublink">
            <a href="https://github.com/HDIOES/4na-front">GITHUB</a>
        </div>

        <chpa></chpa>
        <!--news></news-->

    </div>

</template>

<script>
    import News from "./components/news.vue";
    import Chpa from "./components/chpa.vue";

    export default {
        components: {News, Chpa}
    }
</script>