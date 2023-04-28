<template>
    <p class="wrapper text-center fs-3 pb-5">"Academics was committed to my success from the moment I attended an Open House. With the support of caring <span class="fw-bold"> advisors, professors, and staff </span> i was able to thrive in courses, gain recognition through scholarships, and finish with <span class="fw-bold"> confidence in my @academics abilities.</span> "</p>
    <section id="Events" class="wrapper position-relative mt-5 pb-5">
        <div class="img-container">
            <img src="../../public/img/video-bg-3.jpg">
        </div>
        <div class="info-container p-5">
            <h3 class="mb-5">Upcoming Events</h3>
            <div class="d-flex mb-3">
                <div class="icon-side pe-4">
                    <fa class="fa-5x" icon="fa-solid fa-map" />  
                </div>
                <div class="text-side">
                    <p class="fs-5 ">Princeton offers admission information sessions and student-led tours to campus visitors</p>
                    <a class="fw-bold" href="">Learn more</a>
                </div>
            </div>
            <div class="d-flex mb-5">
                <div class="icon-side pe-4">
                    <fa class="fa-5x" icon="fa-solid fa-compass" />  
                </div>
                <div class="text-side">
                    <p class="fs-5 ">Admission information sessions and student-led tours to campus visitors</p>
                    <a class="fw-bold" href="">Learn more</a>
                </div>
            </div>
            <a class="d-block text-center fw-bold">Event Location</a>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .info-container{
        width: 700px;
        background-color: white;
        box-shadow: 0px 0px 5px rgb(173, 173, 173);
        position: absolute;
        top: 10%;
        left: 50%;
        h3{
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            display: inline-block;
            background-color: #D74D52;
            color: white;
            padding: 2rem;
        }
        .icon-side{
            width: 110px
        }
    }
</style>