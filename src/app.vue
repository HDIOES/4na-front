<template>

  <div id="app">
      <app-header />
    
    
    <div class="chpa-content">
      <app-interactive></app-interactive>
      <app-footer></app-footer>
    </div><div class="chpa-content">
      <app-blog></app-blog>
      <app-footer></app-footer>
    </div>

  </div>

</template>

<style scoped>
.chpa-content {
  display: inline-block;
  width: 50%;
  margin-top: 100px;
}


</style>

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