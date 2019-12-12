import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  data: () => ({
    // dark: this.$store.state.darkMode,
    // light: !this.dark
  }),
  icons: {
    iconfont: "mdiSvg" // 'mdi'  'mdiSvg'  'md'  'fa'  'fa4'
  },
  theme: {
    themes: {
      light: {
        primary: "#454545", // Dark Grey
        secondary: "#474747", // Dark Grey
        accent: "#4d6371" // Dark Grey
      }
    }
  }
});