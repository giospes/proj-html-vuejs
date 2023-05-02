<template>
    <div class="carousel pt-5" ref="carousel" @mouseover="stopScrolling" @mouseout="startScrolling">
      <img :src="image" class="carousel-image" v-for="(image, index) in images" :key="index">
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        images: [
          './img/gallery-1-3.jpg',
          './img/gallery-2-3.jpg',
          './img/gallery-3-3.jpg',
          './img/gallery-1-3.jpg',
          './img/gallery-2-3.jpg',
          './img/gallery-3-3.jpg',
        ],
        intervalId: null
      }
    },
    mounted() {
      this.startScrolling();
    },
    methods: {
      startScrolling() {
        this.intervalId = setInterval(() => {
          const scrollLeft = this.$refs.carousel.scrollLeft;
          const maxScrollLeft = this.$refs.carousel.scrollWidth - this.$refs.carousel.clientWidth;
          const nextScrollLeft = scrollLeft + 380;
          if (nextScrollLeft > maxScrollLeft) {
            this.$refs.carousel.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            this.$refs.carousel.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
          }
        }, 3000);
      },
      stopScrolling() {
        clearInterval(this.intervalId);
      }
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  };
</script>



<style lang="scss" scoped>
    .carousel{
        height: 300px;
        white-space: nowrap;
        overflow-x: scroll;
        img{
            width: calc(100% / 4);
            height: 100%;
            object-fit: cover;
        }
    }
    .carousel::-webkit-scrollbar {
        display: none;
    }
</style> 

