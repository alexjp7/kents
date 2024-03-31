<template>
  <div id="home-background">
    <v-card color="transparent" padding="5">
      <br>
      <v-row>
        <v-col class="text-center">
          <div id="title">
            <p class="display-1 font-weight-thin mb-4" id="guild-name">Sick Kents[sK]</p>
            <p class="subheading" id="motto"> Constitution of the sK Raid Dictatorship</p>
          </div>
        </v-col>
      </v-row>
      <v-col>
        <v-card id="constitution-background" color="accent">
          <p class="display-1 font-weight-thick mb-5" id="guild-name">Preamble</p>
          <p class="subheading" id="motto">We, the self-proclaimed sK Raid Dictators, hereby decree this constitution
            for our illustrious collective, paying homage to our glorious raid leader, Immi, and weaving a touch of
            satirical elitism into our digital dominion.</p>
        </v-card>
        <br>
        <v-card id="constitution-background" color="grey" elevation="2" outlined tile>
          <v-card-text>
            <p class="text-h3">
              Article 1: Immi's Supreme Leadership
            </p>
            <div class="text-h5">
              We, the loyal subjects of Immi, recognize our duty to bow to our esteemed raid leader,
              <br>
              understanding that his
              unmatched leadership is as certain as the sunrise.
            </div>
          </v-card-text>

        </v-card>

        <br>
        <v-card id="constitution-background" color="grey" elevation="2" outlined tile>
          <v-card-text>
            <p class="text-h3 ">
              Article 2: The Immi's Court
            </p>
            <div class="text-h5">
              We proudly adorn ourselves with the Immi's Court title, marked by our ironic and perhaps slightly
              exaggerated
              sense
              of reverence, always infused with a subtle nod to our glorious leader.
            </div>
          </v-card-text>

        </v-card>


        <br>
        <v-card id="constitution-background" color="grey" elevation="2" outlined tile>
          <v-card-text>
            <p class="text-h3 ">
              Article 3: Impeccable Raid Guidance
            </p>
            <div class="text-h5">
              In our gaming escapades, we shall adhere to Immi's impeccable guidance, moving through the digital
              battlefields
              with
              grace, wit, and a touch of irony.
            </div>
          </v-card-text>

        </v-card>

        <br>
        <v-card id="constitution-background" color="grey" elevation="2" outlined tile>
          <v-card-text>
            <p class="text-h3 ">
              Article 4: The Exclusively Devoted
            </p>
            <div class="text-h5">

              Membership in the sK Raid Dictatorship is a privilege granted only to those who wholeheartedly embrace the
              uniqueness of Immi's leadership, and who can appreciate the art of jesting at our own devotion to him.
            </div>
          </v-card-text>

        </v-card>

        <br>
        <v-card id="constitution-background" color="grey" elevation="2" outlined tile>
          <v-card-text>
            <p class="text-h3 ">
              Article 5: Satirical Immi Celebrations
            </p>
            <div class="text-h5">

              Celebrations within the sK Raid Dictatorship will be infused with a satirical flair, where minor
              accomplishments
              are
              elevated to epic proportions, all while raising a toast to our indomitable Immi.
              With this constitution, the sK Raid Dictatorship shall remain steadfast in our allegiance to Immi, upholding
              our
              humorously exaggerated devotion and our satirical sense of reverence in the gaming world.
            </div>
          </v-card-text>

        </v-card>



      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#home-background {
  background-image: url("../assets/homeBkg.png");
  background-image: linear-gradient(to bottom, transparent, #000000), url("../assets/homeBkg.png");

  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  margin: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#title {
  padding-top: 2%;
  color: white;
}

#constitution-background {
  color: white;
  padding: 30px;
}

.content-pane {
  padding-right: 30px;
  background-color: rgb(240, 240, 225);
}
</style>