<!-- src/App.vue -->
<template>
    <div id="app">
      <Navigation />
      <router-view :key="$route.params.id"></router-view>
    </div>
  </template>
  
  <script>

  import Navigation from './components/Navigation.vue';


  export default {
    components: {
      Navigation,
    },
  };
  </script>

<style>
/*Global style here*/ 
</style>