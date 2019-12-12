<template>
    <v-app-bar fixed color="secondary">
        <v-img
        src="../assets/madLadLogo.svg"
        max-height="100"
        max-width="100">
        </v-img>
        <v-spacer></v-spacer>
            <router-link to="/" class="link-text">
                <v-btn dark text >
                     <v-icon  >mdi-home</v-icon>
                      HOME
                    </v-btn>
            </router-link>
            <router-link to="/quotes" class="link-text">
                <v-btn dark text>
                    <v-icon  >mdi-format-quote-open</v-icon>
                    QUOTES
                    </v-btn>
            </router-link>
            <router-link to="/constitution" class="link-text">
                <v-btn dark  text>
                      <v-icon  >mdi-script-text-outline</v-icon>
                    CONSTITUTION
                </v-btn>
            </router-link>
            <router-link to="/about" class="link-text">
                <v-btn  dark text>
                          <v-icon  >mdi-help-circle-outline</v-icon>
                    ABOUT US
                    </v-btn>
            </router-link>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style scoped>
    .link-text {
        text-decoration:none;
        font-size: 1em;
        font-family: Arial;
    }
</style>