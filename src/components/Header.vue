<template>

    <div class="chpa-header">
        <h1 class="chpa-text">ЧЕПАЦАНЫАНИМЕ.РФ альфа!</h1>

        <nav>
            <div>
                Оставить новость
            </div>
            <div>
                <a href="https://github.com/HDIOES/4na-front">GITHUB</a>
            </div>
        </nav>

    </div>
</template>

<style scoped>
.chpa-text {
    margin-left: 20px;
    padding-top: 10px;
    display: inline-block;
}
nav {
    right: 0;
    position: absolute;
    height: 100%;
    display: inline-block;
    
}
nav div {
    display: inline;
}
</style>

<script>
    export default {
        
        name: 'Header',
    }
</script>