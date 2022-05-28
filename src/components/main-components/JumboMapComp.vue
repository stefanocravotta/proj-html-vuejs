<template>
    <div class="jumbotron">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.381155427026!2d-75.67891495724031!3d45.39604003753893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef374fb5a3427474!2zNDXCsDIzJzQ1LjYiTiA3NcKwNDAnMzUuNiJX!5e0!3m2!1sit!2sfr!4v1653767793752!5m2!1sit!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
export default {
    name : "JumboMapComp"
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/vars";
@import "../../assets/style/mixins";

.jumbotron{
    height: 400px;
    iframe{
        width: 100%;
        height: 100%;
    }
}
</style>