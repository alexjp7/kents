/****************************************************************************** 
  The entry point to the Vue application. the main.js file is responsible
  for registering your modules/dependancies aswell as creating an instance 
  of the Vue object.
 *******************************************************************************/

//Local imports used during application load up
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition'
import VueFlip from 'vue-flip';

//Registration of dependancies
Vue.use(VueFlip);
Vue.use(VuePageTransition);

//Disables production tips in the developer console (optional)
Vue.config.productionTip = false;

//Creation of our Vue instance.
//the Vue objet, takes in our router, store and vuetify packages, to allow them to be persistent throughout our app.
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app"); //renders the application to the App.vue (see App.vue)
