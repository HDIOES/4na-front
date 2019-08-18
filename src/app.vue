<template>

  <div id="app">

    <appHeader></appHeader>
    
    <appInteractive></appInteractive>

  </div>

</template>

<script>
    import Header from "./components/Header.vue"
    import Interactive from "./components/Interactive.vue"
    import Blog from "./components/Blog.vue"
    import Footer from "./components/Footer.vue"

    export default {
        name: "app",
        components: {
            appHeader: Header, 
            appInteractive: Interactive,
            appBlog: Blog, 
            appFooter: Footer, 
        }
    }
</script>