<template>
    <section id="News" class="wrapper pb-5">
        <div class="title-container">
            <h2 class="text-center mb-5">Latest From Our Blogs</h2>
            <p class="text-center mb-5">Whether you re considering a foundation card or an undergraduate degree master's or a PhD, academics is a place where students thrive.</p>
        </div>
        <div class="card-container d-flex gap-5">
            <div class="gs-card" v-for="card in store.BlogCards">
                <div class="card-header">
                    <img :src="card.img" class="w-100" alt="">
                </div>
                <div class="card-body">
                    <span class="pe-4 mb-3">Tophive</span>
                    <span class=" mb-3">University</span>
                    <h4  class="mb-3 pb-3 position-relative">{{ card.title }}</h4>
                    <span class="creator"><a href="">Read more</a></span>
                </div>
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

    section{
        margin-top: 7rem;
    }
    .title-container{
        width: 800px;
        margin: 0 auto;
    }
    .gs-card{
        width: 350px;
        background-color: white;
        box-shadow: 0px 0px 5px rgb(173, 173, 173);
        .card-body{
            padding: 2rem 1rem;
            line-height: 2rem;
            h4::before{
                content: '';
                width: 50px;
                height: 2px;
                background-color:  #D74D52;
                position: absolute;
                left: 0;
                top: 100%;
            }

            .creator{
                font-size: .85rem;
                color:  #D74D52;
            }
        }
        
    }

</style>