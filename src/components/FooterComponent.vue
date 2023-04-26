<template>
    <footer class="wrapper">

    </footer>
</template>

<script>
    import {store} from '../data/store';
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer{
        height: 300px;
        background-color: aqua;
    }
</style>