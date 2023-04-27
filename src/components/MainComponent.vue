<template>
    <main>
        <section id="Home" >
            <div id="jumbo" :style="{backgroundImage: `url(${bgImg})` }">
                <div class="title">
                    <h1 class="pb-5">{{jumbo[current].title}}</h1>
                    <button><a href="" @click.prevent="changeJumbo">Learn More</a></button>
                </div>
            </div>
        </section>

    </main>
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
                        background: '../assets/img/jumbotron_1.png'
                    },
                    {
                        title : 'Experience The Next Level Of Coaching Education',
                        background: '../assets/img/jumbotron_1.png'
                    }
                ], 
                current: 0,
                bgImg: '../assets/img/jumbotron_1.png'
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
    main{
        padding-top: 60px;
        #Home{
            #jumbo{
                height: 800px;
                position: relative;
                background-size: cover;
                background-position: 50% 50%;
                
                div.title{
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -60%);
                    text-align: center;
                h1{
                    font-size: 3rem;
                }
                button{
                    font-size: .9rem;
                    padding: .5rem 1rem;
                    border: 1px solid grey;
                }
                
            }
            }
            
        }
    }
</style>