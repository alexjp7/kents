
<template>
<!-- App.vue is the top-level 'component' for your applicaiton
    it is responsible for rendering static elements such as the navigation bar, page content -->
  <v-app>
    <!-- Navigation is a custom build component - refers to the code in components/Navigation.vue
      using the  <Navigation/> tag will 'effectively' copy and paste the code written in that source file
      in -->
    <Navigation/> 
    <v-content>
      <vue-page-transition name="fade"> 
        <!-- the router view refers to the content of the current page, (see router.js) -->
        <router-view/> 
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
//importing the Navigation component into local scope (the currently considered component)
import Navigation from "@/components/Navigation.vue"; 
export default {
  name: 'App',
  components: { //registring the Navigation component to be able to be used as the <Navigation/> within the <template> tag
    Navigation
  },
};
</script>
<style >
    #home-background {
        background-color:black; 
        width:100%;
    }
    #page-background {
        background-color:black; 
        width:100%;
    }
</style>
