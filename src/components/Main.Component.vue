<template>
    <main>
        <section id="Home">
            <div class="title">
                <h1 class="pb-5">Professional Development For Coaches And Leaders</h1>
                <button><a href="">Learn More</a></button>
            </div>
        </section>

    </main>
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
    main{
        padding-top: 60px;
        background-color: black;

        #Home{
            position: relative;
            height: 800px;
            background-image: url(../assets/img/jumbotron_1.PNG);
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
</style>