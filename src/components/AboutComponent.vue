<template>
    <section id="About Us" class="wrapper pb-5">
        <h2 class="text-center fw-bold">Since 2000, we've been partnering with education leaders to <span class="text-highlight">increase equity and achievement</span> for all students.</h2>
        <div class="card-container d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
            <div class="gs-card mx-4 my-3" v-for="card in store.AboutCards">
                <fa :icon="card.icon" class="fa-5x"/>
                <h4 class="py-3">{{ card.title }}</h4>
                <p >{{ card.text }}</p>
            </div>
        </div>
        <div class="number-container d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
            <div class="number mx-3 my-3" v-for="number in store.numbers">
                <img :src="number.img" alt="">
                <span :style="{color: number.color}"  class="data fs-1 fw-bold">{{ number.number }}</span>
                <span class="fs-2 d-inline-block">{{ number.text }}</span>
            </div>
        </div>
    </section>
</template>

<script>
    import {store} from '../data/store';
    export default {
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

    .gs-card{
        width: 300px;
        padding: 1rem 1rem;
        text-align: center;
        background-color: white;
        p{
            font-size: 1.2rem;
        }
        box-shadow: 0px 0px 5px rgb(173, 173, 173);
    }

    @media screen and (max-width: 568px) {
        .gs-card{
            width: 100%;
        }
    }

    .number{
        position: relative;
        z-index: 1;
        img{
            z-index: 0;
            position: absolute;
            top: 0%;
            left: 0%;
        }
    }


</style>