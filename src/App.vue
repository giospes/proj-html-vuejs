<template>
    <HeaderComponent class="w-100"></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';

  export default {
    components:{
      HeaderComponent,
      MainComponent,
      FooterComponent
    }
    
  }
</script>

<style lang="scss" scoped>

</style>