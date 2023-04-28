<template>
    <main>
        <JumboComponent/>
        <AboutComponent/>
        <CoursesComponent></CoursesComponent>
        <EventsComponent/>
        <NewsComponent></NewsComponent>
    </main>
</template>

<script>
    import {store} from '../data/store';
    import JumboComponent from './JumboComponent.vue';
    import AboutComponent from './AboutComponent.vue';
    import CoursesComponent from './CoursesComponent.vue';
    import EventsComponent from './EventsComponent.vue';
import NewsComponent from './NewsComponent.vue';
    export default {
        components:{
            JumboComponent,
            AboutComponent,
            CoursesComponent,
            EventsComponent,
            NewsComponent
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

    main{
        padding-top: 60px;
        background: rgb(255,255,255);
        background-image: linear-gradient(to bottom, rgba(255,255,255,1)0%, rgba(248,248,248,1) 80%);
       
    }
</style>