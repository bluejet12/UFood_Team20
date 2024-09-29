<!-- src/App.vue -->
<template>
    <div id="app">
      <MainNavBar />
      <router-view :key="$route.params.id"></router-view>
    </div>
  </template>
  
  <script>

  import MainNavBar from './components/MainNavbar.vue';


  export default {
    components: {
      MainNavBar,
    },
  };
  </script>

<style>
/*Global style here*/ 
</style>