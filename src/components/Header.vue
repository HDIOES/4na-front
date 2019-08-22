<template>

    <div class="chpa-header">
        <h1 class="chpa-text">ЧЕПАЦАНЫАНИМЕ.РФ альфа!</h1>

        <nav>
            <div>
                <a href="">Оставить новость</a>
            </div><div>
                <a href="https://github.com/HDIOES/4na-front" target="_blank">GITHUB</a>
            </div>
            
        </nav>

    </div>
</template>

<style scoped>
.chpa-text {
    font-size: 1.6em;
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
    margin: 20px;
}

nav:after
{
content:"";
display:inline-block;
height:100%;
width:0px;
overflow:hidden;
vertical-align:middle;
}

a {
    color: rgb(255, 152, 0);
    text-decoration: none;
}

a:hover {
    color: rgb(3, 169, 244);
    text-decoration: none;
}

</style>

<script>
    export default {
        
        name: 'Header',
    }
</script>