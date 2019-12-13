<template>
      <div>
        <v-card dark color="grey" style="padding:1%;">
            <h1 style="margin-left:3%;">
             Quotes By sK Bonobos
            </h1>
        </v-card>
    <!-- standard for loop directive
    this reads as; 'for the first half of quotes in our array of quotes, print the text and author -->
    <div v-for="(quote) in quotes" v-bind:key="quote" >
    <v-row style="margin-left:2%;margin-right:2%;padding-top:1%;width:100%;">
        <v-col >
        <vue-flip active-hover="true" width="85%" height="100px">
                <div slot="front">
                        <v-card dark raised elevation="20" color="accent">
                            <v-card-title class="justify-center">
                            " {{quote.text}} ""
                            </v-card-title>
                        </v-card>
                    </div> 
                <div slot="back">
                    <v-card  raised elevation="20" >
                        <v-card-title class="headline mb-1 justify-center">
                            {{quote.author}}
                        </v-card-title>
                    </v-card>
                </div> 
            </vue-flip>
        </v-col>
    </v-row>
    </div>
    </div>
</template>

<script>
import VueFlip from 'vue-flip';
export default {
    props: {
        quotes:Array
    },
    components: {
    'vue-flip': VueFlip
    },

}
</script>

<style>

</style>