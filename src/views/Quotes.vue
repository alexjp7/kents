<template>
    <div id="background">
        <v-row >
            <MemberListDesktop class="hidden-md-and-down"  :members="members"/>
            <MemberListMobile class="hidden-lg-and-up"  :members="members"/>
            <v-col>
                <br>
                <br> 
                <QuoteBoardDesktop class="hidden-md-and-down" :quotes="quotes"/> 
                <QuoteBoardMobile class="hidden-lg-and-up" :quotes="quotes"/> 
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import QuoteBoardDesktop from "@/components/QuoteBoardDesktop";
    import QuoteBoardMobile from "@/components/QuoteBoardMobile";
    import MemberListDesktop from "@/components/MemberListDesktop.vue";
    import MemberListMobile from "@/components/MemberListMobile.vue";

export default {
    //The data component relates to any of the static or dynamic data loaded into our application
    data: () => ({
      item: 1,
      members: [
        { text: 'Immi', icon: 'mdi-crown' },
        { text: 'Hamato', icon: 'mdi-weight-lifter' },
        { text: 'Alexjp', icon: 'mdi-thumb-up' },
        { text: 'Beetle', icon: 'mdi-fire' },
        { text: 'Frictionburn', icon: 'mdi-heart' },
        { text: 'G', icon: 'mdi-rss-off' },
        { text: 'Pap', icon: 'mdi-volume-off' },
        { text: 'Fishy', icon: 'mdi-trending-up' },
        { text: 'Pavey', icon: 'mdi-slot-machine' },
        { text: 'Rose', icon: 'mdi-matrix' },
        { text: 'Kevin', icon: 'mdi-kabaddi' },
        { text: 'Fuels', icon: 'mdi-fuel' },
        { text: 'Suffa', icon:  'mdi-battery-low' },
        { text: 'Willy', icon: 'mdi-glass-mug-variant' },
        { text: 'Darren', icon: 'mdi-thought-bubble' },
        { text: 'Jade', icon: 'mdi-glass-cocktail' },
        { text: 'Leafy', icon: 'mdi-check-circle' },
        { text: 'Zevos', icon:  'mdi-ear-hearing-off' },
        { text: 'Hop', icon:  'mdi-emoticon-angry-outline' },
        { text: 'Magnet', icon:  'mdi-sleep' },
        { text: 'Jenna', icon:  'mdi-air-conditioner' },
        { text: 'Luca', icon:  'mdi-emoticon-poop' },
        { text: 'Neo', icon:  'mdi-language-csharp' },
        { text: 'Ej', icon: 'mdi-bottle-tonic-skull' },
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
        QuoteBoardDesktop,
        QuoteBoardMobile,
        MemberListDesktop,
        MemberListMobile
    },
    methods: {

        
    }

  }
</script>

<style scoped>
 #background {
     width:100%;
     height:100%;
     background-color:#474747;
     background-image:url("../assets/homeBkg.png");
     background-size: cover;
background-repeat: no-repeat;
background-position: center center;
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