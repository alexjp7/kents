<template>
  <div id="home-background">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="10">
        <div id="title">
          <p class="display-1 font-weight-thin mb-4" id="guild-name">Sick Kents[sK]</p>
          <p class="subheading" id="motto">Unleash your toxicity</p>
        </div>
        <v-img height="90%" src="../assets/immiz.png">
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  components: {
  }
}
</script>

<style scoped>
#home-background {
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

#guild-name{
 animation: fadeIn 3s;
}

.subheading{
  animation: fadeIn 8s;
}


@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>