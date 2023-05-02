<template>
    <section id="Recent Courses" class="wrapper pb-5 mb-5">
        <div class="title-container">
            <h2 class="text-center mb-5">Recent Courses</h2>
            <p class="text-center mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quia mollitia hic laboriosam nemo ad doloremque temporibus ipsam quae quo?</p>
        </div>
        <div class="card-container d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">
            <div class="gs-card" v-for="course in store.CoursesCards">
                <div class="card-header">
                    <img :src="course.img" class="w-100" alt="">
                </div>
                <div class="card-body">
                    <span class="price mb-3">${{ course.price }}</span>
                    <h4  class="mb-3">{{ course.title }}</h4>
                    <p class="fs-5">{{ course.text }}</p>
                    <span class="creator">Course by : Tophive</span>
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
    .title-container{
        max-width: 800px;
        margin: 0 auto;
    }
    .gs-card{
        width: 350px;
        height: 600px;
        background-color: white;
        box-shadow: 0px 0px 5px rgb(173, 173, 173);
        .card-body{
            padding: 2rem 1rem;
            line-height: 2rem;
            .price{
                display: block;
                font-size: 1.5rem;
                position: relative;
            }
            .price::before{
                content: '';
                width: 50px;
                height: 10px;
                background-color:  #D74D52;
                position: absolute;
                left: 0;
                top: 60%;
                opacity: 50%;
            }

            .creator{
                font-size: .85rem;
                color:  #D74D52;
            }
        }
        
    }

    @media screen and (max-width: 568px) {
        .gs-card{
            width: 100%;
        }
    }

</style>