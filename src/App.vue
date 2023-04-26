<template>
  <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/Main.Component.vue';

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