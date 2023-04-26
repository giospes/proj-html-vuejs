<template>
    <header>
        <div class="wrapper h-100 d-flex justify-content-between">
            <img id="logo" src="../assets/img/Logo.jpg" alt="logo" >
            <ul class="d-flex align-items-center justify-content-end gap-4 h-100">
                <li v-for="section in store.sections"><a :href="'#' + section" class="fw-bold">{{ section }}</a></li>
            </ul>   
        </div>
    </header>
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
    header{
        height: 60px;
        font-size: .85rem;

        #logo{  
            height: 90px
        }
    }

</style>