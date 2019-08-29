<template>

    <div class="chpa-header">
        <div class="chpa-logo"><a href=""><span>ЧЕ</span>ПАЦАНЫ<span>АНИМЕ.РФ</span></a> альфа!</div>

        <nav>
            <ul><li>
                <a href="">Оставить новость</a>
            </li><li>
                <a href="https://github.com/orgs/HDIOES/teams/4na-su/repositories" target="_blank">GitHub</a>
            </li>
            </ul>
            
        </nav>

    </div>
</template>

<style scoped>
.chpa-logo {
    font-size: 1.6em;
    float:left;
    margin: 0 20px;
    padding: 0.7rem 0;
    white-space: nowrap;
}

.chpa-logo a span {
    color: rgb(239, 108, 0);
}

.chpa-logo a:hover {
    color: rgb(79, 193, 246);
}

.chpa-logo a:hover span {
    color: #03A9F4;
}

nav {
    right: 0;
    height: 100%;
    float: right;
    
    font-weight: 600;
}

nav ul {
    display: inline;
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline;
    margin: 0 20px;
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