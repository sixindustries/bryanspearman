<template>
  <div style="height: 100%; width: 100%; background-image: url('/main-bg.png'); background-repeat: repeat;" id="top">
     <v-card 
      flat
      :rounded="$vuetify.display.lgAndUp ? 'xl' : '0'"
      max-width="1200"
      min-height="1000" 
      color="transparent" 
      class="px-6 px-sm-10 px-md-16 py-16 mx-auto" 
      style="background-image: url('/bryan.png'); background-position: top right; background-repeat: no-repeat;"
     >
     <h1 class="text-h3 text-sm-h2 font-weight-bold">
        Hi,<br />
        I'm Bryan.
      </h1>
      <p class="text-h5 text-sm-h4 font-weight-thin pt-1 pb-16 pb-sm-0">Front-end Web Developer</p>
      <v-row class="pt-16 pb-16 text-center" style="max-width: 550px;" align="start" justify="center">
        <v-col cols="3" sm="2">          
          <v-icon color="green-darken-2" size="x-large">mdi-vuejs</v-icon>
          <p class="text-caption text-white">VueJS</p>            
        </v-col>
        <v-col cols="3" sm="2">          
          <v-icon color="blue-darken-1" size="x-large">mdi-vuetify</v-icon>
          <p class="text-caption text-white">Vuetify</p>           
        </v-col>
        <v-col cols="3" sm="2">         
          <v-icon color="green" size="x-large">mdi-nuxt</v-icon>  
          <p class="text-caption text-white">Nuxt</p>         
        </v-col>
        <v-col cols="3" sm="2">          
          <v-icon color="black" size="x-large">mdi-material-design</v-icon> 
          <p class="text-caption text-white">Material</p>          
        </v-col>
        <v-col cols="3" sm="2">
          <v-icon color="blue-lighten-2" size="x-large">mdi-react</v-icon> 
          <p class="text-caption text-white">React</p>          
        </v-col>
        <v-col cols="3" sm="2">          
          <v-icon color="yellow" size="x-large">mdi-bitbucket</v-icon>
          <p class="text-caption text-white">BitBucket</p>          
        </v-col>        
      </v-row>

      <v-row class="pt-lg-16">
        <v-col cols="12" class="text-h5 font-weight-thin">          
          Portfolio
          <v-divider color="black" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  .dropShadow {
    text-shadow: #333 1px 1px 1px!important;
  }
</style>