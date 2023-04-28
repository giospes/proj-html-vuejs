<template>
        <section id="Home" :style="{backgroundImage: `url(${bgImg})` }">
            <div class="title">
                <h1 class="pb-5">{{jumbo[current].title}}</h1>
                <button><a href="" >Learn More</a></button>
            </div>
            <button id="left-btn" class="slider-btn" @click.prevent="changeJumbo"> <fa icon="fa-solid fa-arrow-left" /></button>
            <button id="right-btn" class="slider-btn" @click.prevent="changeJumbo"> <fa icon="fa-solid fa-arrow-right" /></button>
        </section>
</template>

<script>
    import {store} from '../data/store';
    export default {
        data(){
            return{
                store,
                jumbo: [
                    {
                        title : 'Professional Development For Coaches And Leaders',
                        background: './img/jumbotron_1.png'
                    },
                    {
                        title : 'Experience The Next Level Of Coaching Education',
                        background: './img/jumbotron_2.png'
                    }
                ], 
                current: 0,
                bgImg: './img/jumbotron_1.png'
            }
        },
        methods:{
            changeJumbo(){
                this.current = (this.current + 1) % this.jumbo.length;
                this.bgImg= this.jumbo[this.current].background
            }
        }
    }
</script>

<style lang="scss" scoped>
    #Home{
        height: 800px;
        position: relative;
        background-size: cover;
        background-position: 50% 50%;
                
        div.title{
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -60%);
            text-align: center;
            h1{
                font-size: 3rem;
            }
                
        }
        button{
            font-size: .9rem;
            padding: .5rem 1rem;
            border: 1px solid grey;
            background-color: transparent;
        }

        #right-btn{
            position: absolute;
            top: 40%;
            right: 2%;
        }
        #left-btn{
            position: absolute;
            top: 40%;
            left: 2%;
        }
    }            
            

</style>