<template>
  <div style="height: 100%; width: 100%; background-image: url('/main-bg.png'); background-repeat: repeat;" id="top">
     <v-card 
      flat
      :rounded="$vuetify.display.lgAndUp ? 'xl' : '0'"
      max-width="1000"
      color="transparent" 
      class="px-6 px-sm-10 px-md-16 pt-16 mx-auto" 
      style="background-image: url('/bryan.png'); background-position: top right; background-repeat: no-repeat;"
     >
     <h1 class="text-h3 text-sm-h2 font-weight-bold pt-6">
        Hi,<br />
        I'm Bryan.
      </h1>
      <p class="text-h5 text-sm-h4 font-weight-thin pt-1 pb-16 pb-sm-0">Front-end Web Developer</p>
      <v-row class="pt-6 pb-16 text-center" style="max-width: 550px;" align="start" justify="center">
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
    </v-card>

    <v-card color="transparent" class="px-4 px-md-16 pb-16 mx-auto" flat>
      <v-row class="pt-lg-16">
        <v-col cols="12" class="text-h5 font-weight-thin text-white">          
          Portfolio
          <v-divider color="white" />
        </v-col>
        <v-col cols="12">
          <v-card flat color="rgba(255,255,255,.6)" class="pa-3 text-body-2" rounded="lg">
            <v-row>
              <v-col cols="12" style="background: rgba(255,255,255,.3)">
                <h2>Senior Front-end Web Developer, UI/UX Engineer</h2>
                <p>IAG, Inc.</p>
              </v-col>
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6">
                <h4>Embedded Onboarding Enrollment (EOE)</h4>
                <p>VueJS, Vuetify, Nuxt, Java, SQL</p>
                <p class="mt-3">Several months into this position I was asked to develop an internal application to allow new hires to fill out their onboarding paper work digitally and have it submitted to HR in PDF format.</p>
                <p class="mt-3">I began that development but as I reached the benefit enrollment portion I decided to go a little above and beyond the call to make the experience more intuitive and informative.  As the prototype took shape, myself and a back-end dev worked out some endpoints and data structuring to bring it to life.  When upper management saw the work they quickly realized an opportunity to push the application to clients as an embeddedable solution for onboarding systems in our staffing vertical.</p>
                <p class="mt-3">A year later the app was ready for launch and integrated into hundreds of staffing agencies' on-boarding platforms and became one of IAG's three core insurance enrollment applications.</p>
                <v-btn 
                  href="https://dev.eportalonboardingplatform.com/esc/eoe/?uuid=-688750843-20201105-182255153&companyId=3"
                  rounded
                  flat
                  text="Demo"
                  target="_blank"
                  append-icon="mdi-open-in-new"
                  color="orange-darken-2"
                  class="my-4"
                />
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6">
                <img src="/eoe.png" width="100%" />
              </v-col>
              <v-divider class="mt-3 mb-5" color="black" />
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6">
                <h4>Brand Websites</h4>
                <p>VueJS, Vuetify, Nuxt, Kontent.ai, Directus</p>
                <p class="mt-3">Each of the websites was constructed and existing on WordPress when I joined the company and the ad agency that was hosting them was charging over $7,000/month to do so. I saw an opportunity to both reduce the cost of hosting as well as greatly enhance the designs and ease of maintenance.</p>
                <p class="mt-3">So I began converting each website to a Vue, Vuetify, Nuxt implementation with a headless CMS via Kontent.ai and then eventually Directus.  The end result was hosting costs of less than $50/month and much more up-to-date websites with lightening fast cloud content updates.</p>
                <p class="mt-3">There are other sites not shown here for brevity.</p>
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6">
                <v-row class="mb-3">
                  <v-col cols="6">
                    <v-card rounded="lg" hover>
                      <h4 class="my-2 mx-4">IAG</h4>
                      <img src="/iag.png" width="100%" />
                      <v-btn 
                        href="https://iagbenefits.com"
                        rounded
                        flat
                        text="View"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        color="orange-darken-2"
                        class="ma-4"
                      />
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card rounded="lg" hover>
                      <h4 class="my-2 mx-4">Essential StaffCARE</h4>
                      <img src="/esc.png" class="border-t border-b" width="100%" />
                      <v-btn 
                        href="https://essentialstaffcare.com"
                        rounded
                        flat
                        text="View"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        color="orange-darken-2"
                        class="ma-4"
                      />
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card rounded="lg" hover>
                      <h4 class="my-2 mx-4">Essential StaffCARE Events</h4>
                      <img src="/events.png" width="100%" />
                      <v-btn 
                        href="https://events.essentialstaffcare.com"
                        rounded
                        flat
                        text="View"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        color="orange-darken-2"
                        class="ma-4"
                      />
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card rounded="lg" hover>
                      <h4 class="my-2 mx-4">HospitalityCARE</h4>
                      <img src="/hc.png" class="border-t border-b" width="100%" />
                      <v-btn 
                        href="https://hospitalitycare.com"
                        rounded
                        flat
                        text="View"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        color="orange-darken-2"
                        class="ma-4"
                      />
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card rounded="lg" hover>
                      <h4 class="my-2 mx-4">Flexible StaffCARE</h4>
                      <img src="/fsc.png" width="100%" />
                      <v-btn 
                        href="https://flexiblestaffcare.com"
                        rounded
                        flat
                        text="View"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        color="orange-darken-2"
                        class="ma-4"
                      />
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card rounded="lg" hover>
                      <h4 class="my-2 mx-4">Enrollment.care</h4>
                      <img src="/enrollcare.png" class="border-t border-b" width="100%" />
                      <v-btn 
                        href="https://enrollment.care/esc/talentlaunch/"
                        rounded
                        flat
                        text="View"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        color="orange-darken-2"
                        class="ma-4"
                      />
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>              
            </v-row>
          </v-card>
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