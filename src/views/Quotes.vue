<template>
    <div id="background">
        <!-- Using rows and colums to set up a grid system 
           row = horizontal split  -->
        <v-row>
            <!-- cols = vertical split -->
            <v-col :cols="2">
            <br>
            <v-card class="mx-auto"  >
                <v-list shaped>
                    <v-subheader>sK Bonobos</v-subheader>
                    <v-list-item-group v-model="item" color="primary">
                            <v-list-item v-for="(item, i) in members" :key="i">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>             
        </v-col>
        <v-col>
        <br>
        <br>
        <v-row>
            <v-col>
                <!-- standard for loop directive
                 this reads as; 'for the first half of quotes in our array of quotes, print the text and author -->
                <div v-for="(quote) in quotes.slice(0,quotes.length/2)" v-bind:key="quote" >
                <br>
                    <vue-flip active-hover="true" width="750px" height="100px">
                            <div slot="front">
                                    <v-card dark raised elevation="20" color="primary">
                                        <v-card-title class="headline mb-1  justify-center">
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
                    </div>
                </v-col>
                <v-col>
                    <!-- same as above, but for 2nd half of quotes on right side -->
                    <div v-for="(quote) in quotes.slice((quotes.length/2) ,quotes.length)" v-bind:key="quote" >
                            <br>
                        <vue-flip active-hover="true" width="700px" height="100px">
                            <div slot="front">
                                    <v-card color="accent" >
                                        <v-card dark raised elevation="20">
                                            <v-card-title class="headline mb-1  justify-center">
                                            " {{quote.text}} ""
                                            </v-card-title>
                                        </v-card>
                                    </v-card>
                                </div> 
                            <div slot="back">
                                <v-card color="accent">
                                    <v-card  raised elevation="20">
                                        <v-card-title class="headline mb-1 justify-center">
                                            {{quote.author}}
                                        </v-card-title>
                                    </v-card>
                                </v-card>
                            </div> 
                        </vue-flip>
                    </div>                        
                </v-col>
            </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import VueFlip from 'vue-flip';
export default {
    //The data component relates to any of the static or dynamic data loaded into our application
    data: () => ({
      item: 1,
      members: [
        { text: 'Immi', icon: 'mdi-crown' },
        { text: 'Hamato', icon: 'mdi-weight-lifter' },
        { text: 'Alexjp', icon: 'mdi-thumb-up' },
        { text: 'Beetle', icon: 'mdi-chart-bell-curve' },
        { text: 'Frictionburn', icon: 'mdi-heart' },
        { text: 'G', icon: 'mdi-rss-off' },
        { text: 'Pap', icon: 'mdi-volume-off' },
        { text: 'Fishy', icon: 'mdi-trending-up' },
        { text: 'Darren', icon: 'mdi-thought-bubble' },
        { text: 'Pavey', icon: 'mdi-slot-machine' },
        { text: 'Rose', icon: 'mdi-matrix' },
        { text: 'Kevin', icon: 'mdi-kabaddi' },
        { text: 'Fuels', icon: 'mdi-fuel' },
        { text: 'Willy', icon: 'mdi-glass-mug-variant' },
        { text: 'Ej', icon: 'mdi-bottle-tonic-skull' },
        { text: 'Jade', icon: 'mdi-glass-cocktail' },
        { text: 'Leafy', icon: 'mdi-check-circle' },
        { text: 'Zevos', icon:  'mdi-bomb' },
        { text: 'Hop', icon:  'mdi-emoticon-angry-outline' },
      ],

      quotes: [
          {text: "Berry farming is berry farming  and raids are raids" , author: "Darren 2k17"},
          {text: "Suck as many dicks as you can" , author: "Immi"},
          {text: "The cinnamontogrpahy" , author: "Beetle"},
          {text: "What am I supposed to do?!Chase him with MY LAVA FONT?!" , author: "Luca"},
          {text: "The mesmer should tides of time the Matthias stomp" , author: "Gannon"},
          {text: "I read Taylor(Kevin) and thought Trad", author: "Rose"},
          {text: "Suddenly there is a dick in my face", author: "Salt"},
          {text: "Why don't you use tempest trident?", author: "Darren"},
          {text: "Air is better under 50%", author: "Darren"},
          {text: "Potentionally", author: "Darren"},
          {text: "I bet Homato slays more pussy than you", author: "Broski"},
          {text: "Do Dhuum CM, you can get teh SKYTHE", author: "Pavey"},
          {text: "You mean tailorsmith?", author: "Luca"},
          {text: "Age is subjective", author: "Hop"},
          {text: "Going to Elona is basically like going to desert North Korea", author: "Zevos"},
          {text: "Where can I find the latest version of ArcDPS", author: "Luca"},
      ]

    }),
    components: {
    'vue-flip': VueFlip
    },
    methods: {

        
    }

  }
</script>

<style scoped>
 #background {
     width:100%;
     height:100%;
     background-color:#4d6371;
 }

.content {
    font-size: 40px !important;
}
 #content-right {
     padding:5%;
     padding-left:30%;
 }

 #content-left {
     padding:5%;
     padding-right:30%;
 }

 #author {
     padding-right:5%;
     padding-left:5%;
     padding-bottom:2%;
 }

</style>