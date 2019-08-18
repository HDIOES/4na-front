<template>

    <div class="fourna-header">
        <h1 class="cpa-text">ЧЕМАЦАНЫАНИМЕ.РФ бета!</h1>

        <div class="newnews">
            Оставить новость
        </div>
        <div class="githublink">
            <a href="https://github.com/HDIOES/4na-front">GITHUB</a>
        </div>


    </div>

</template>

<script>
    import Header from "./components/Header.vue";
    import Interactive from "./components/Interactive.vue";
    import Blog from "./components/Blog.vue";
    import Footer from "./components/Footer.vue";

    export default {
        name: "App",
        components: {
            appBlog: Blog, 
            appInteractive: Interactive
        }
    }
</script>