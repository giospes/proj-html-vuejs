<template>
    <header class="position-fixed">
        <div class="wrapper d-flex w-100 h-100">
            <img id="logo" src="../../public/img/Logo.jpg" alt="logo" class=" d-none d-sm-block">   
            <ul class="d-flex align-items-center justify-content-end gap-4 h-100">
                <li v-for="(section, index) in store.sections" :key="index"><a :href="'#' + section" class="fw-bold">{{ section }}</a></li>
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
        font-size: .80rem;
        z-index: 100;
        background-color: white;



        #logo{  
            height: 80px
        }
        .wrapper{
            justify-content: space-between        
        }
        @media screen and (max-width: 568px){
            .wrapper{
                justify-content: center         
            }
        }
    }

</style>