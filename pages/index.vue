<template>  
  <div style="height: 100%; width: 100%; background-image: url('/main-bg.png'); background-repeat: repeat;">  
     <v-card 
      flat
      :rounded="$vuetify.display.lgAndUp ? 'xl' : '0'"
      max-width="1000"
      color="transparent" 
      class="px-4 px-sm-10 px-md-16 mt-sm-4 pt-5 mx-auto" 
      :style="$vuetify.display.smAndUp ? 'background-image: url(\'/bryan.png\'); background-position: center right; background-repeat: no-repeat;' : 'background-image: url(\'/bryan.png\'); background-position: top right; background-repeat: no-repeat;'"
     >
     <h1 class="text-h3 text-sm-h2 font-weight-bold pt-6">
        Hi,<br />
        I'm Bryan.
      </h1>
      <p class="text-h5 text-sm-h4 font-weight-thin pt-1 pb-16 pb-sm-0">Front-end Web Developer</p>
      <v-row class="pt-6 pb-16 text-center" style="max-width: 550px;" align="start" justify="center">
        <v-col cols="3" sm="2">          
          <v-icon color="green-darken-2" size="x-large">mdi-vuejs</v-icon>
          <p class="text-caption text-grey-lighten-2">VueJS</p>            
        </v-col>
        <v-col cols="3" sm="2">          
          <v-icon color="blue-darken-1" size="x-large">mdi-vuetify</v-icon>
          <p class="text-caption text-grey-lighten-2">Vuetify</p>           
        </v-col>
        <v-col cols="3" sm="2">         
          <v-icon color="green" size="x-large">mdi-nuxt</v-icon>  
          <p class="text-caption text-grey-lighten-2">Nuxt</p>         
        </v-col>
        <v-col cols="3" sm="2">          
          <v-icon color="black" size="x-large">mdi-material-design</v-icon> 
          <p class="text-caption text-grey-lighten-2">Material</p>          
        </v-col>
        <v-col cols="3" sm="2">
          <v-icon color="blue-lighten-2" size="x-large">mdi-react</v-icon> 
          <p class="text-caption text-grey-lighten-2">React</p>          
        </v-col>
        <v-col cols="3" sm="2">          
          <v-icon color="blue-darken-2" size="x-large">mdi-bitbucket</v-icon>
          <p class="text-caption text-grey-lighten-2">BitBucket</p>          
        </v-col>  
      </v-row>
      <div class="text-body-2 text-grey-lighten-2">
        bryanspearman@gmail <span class="mx-2">||</span> bryanspearman@yahoo<br />
        Phone: (Eight Six Four) Six One Seven - Four Eight Six Eight
      </div>
      <v-btn flat rounded density="comfortable" color="red-darken-3" class="mt-5 px-6" href="/Bryan_Spearman-Frontend-Web-Developer-UI-UX-Engineer.pdf" target="_blank">
        <v-icon icon="mdi-file-pdf-box" start />
       <span class="pt-1">Resume</span>
      </v-btn>
    </v-card>

    <v-card color="transparent" class="px-4 px-md-16 pt-16 pb-16 mx-auto">
      <v-row class="pt-lg-16">
        <v-col cols="12" class="text-h4 font-weight-thin text-white">          
          Portfolio
          <v-divider color="white" />
        </v-col>
        <v-col cols="12">
          <v-card elevation="10" color="rgba(0,0,0,.1)" class="pa-3 text-body-2" rounded="lg">
            <v-row>
              <v-col cols="12" class="px-sm-4 pa-lg-6 text-white" style="background: rgba(0,0,0,.2)">
                <h2 class="font-weight-light">Senior Front-end Web Developer, UI/UX Engineer</h2>
                <p>IAG, Inc.</p>
              </v-col>
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6 text-grey-lighten-4">
                <h3>Embedded Onboarding Enrollment (EOE)</h3>
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
                <img src="/eoe.png" class="elevation-10 rounded-lg" />
              </v-col>
              <v-divider class="mt-3 mb-5" color="black" />
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6 text-grey-lighten-4">
                <h3>Company Websites</h3>
                <p>VueJS, Vuetify, Nuxt, Kontent.ai, Directus</p>
                <p class="mt-3">Each of the websites was constructed and existing on WordPress when I joined the company and the ad agency that was hosting them was charging over $7,000/month to do so. I saw an opportunity to both reduce the cost of hosting as well as greatly enhance the designs and ease of maintenance.</p>
                <p class="mt-3">So I began coding each one in Vue, Vuetify and Nuxt with a headless CMS via Kontent.ai and then eventually Directus.  The end result was hosting costs of less than $50/month, much more up-to-date websites, and lightening fast content updates via REST API.</p>
                <p class="mt-3">There are other sites not shown here for brevity.</p>
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6">
                <v-row class="mb-3">
                  <v-col cols="12" sm="6">
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
                  <v-col cols="12" sm="6">
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
                  <v-col cols="12" sm="6">
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
                  <v-col cols="12" sm="6">
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
                  <v-col cols="12" sm="6">
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
                  <v-col cols="12" sm="6">
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

        <v-col cols="12">
          <v-card elevation="10" color="rgba(0,0,0,.1)" class="pa-3 text-body-2" rounded="lg">
            <v-row>
              <v-col cols="12" class="px-sm-4 pa-lg-6 text-white" style="background: rgba(0,0,0,.2)">
                <h2 class="font-weight-light">Front-end Web Developer</h2>
                <p>Vow, Inc.</p>
              </v-col>
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6 text-grey-lighten-4">
                <h4>TalkRx</h4>
                <p>VueJS, Vuetify, PHP</p>
                <p class="mt-3">At Vow I was brought onto the team to provide UI/UX improvements to their Angular front-end using whatever front-end framework I chose. I prefer Vue so I used Vue and Vuetify to code high fidelity prototypes for their TalkRx pharmacy communication platform.</p>
                <p class="mt-3">I worked closely with their senior back-end dev to consume their existing PHP endpoints.</p>
                <p class="mt-3">Here are a couple of examples of before and after.</p>
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6 text-center">
                <v-row class="text-center font-weight-bold text-h6 text-grey-lighten-4">
                  <v-col cols="6">Before</v-col>
                  <v-col cols="6">After</v-col>
                </v-row>
                <img src="/vow1.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
                <v-row class="text-center font-weight-bold text-h6 text-grey-lighten-4">
                  <v-col cols="6">Before</v-col>
                  <v-col cols="6">After</v-col>
                </v-row>
                <img src="/vow2.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card elevation="10" color="rgba(0,0,0,.1)" class="pa-3 text-body-2" rounded="lg">
            <v-row>
              <v-col cols="12" class="px-sm-4 pa-lg-6 text-white" style="background: rgba(0,0,0,.2)">
                <h2 class="font-weight-light">Front-end Web Developer/Content Director</h2>
                <p>iHeart Radio</p>
              </v-col>
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6 text-grey-lighten-4">
                <h4>WSSL 100 Radio Station</h4>
                <p>HTML, CSS, JavaScript</p>
                <p class="mt-3">At iHeart Radio I wore a lot of hats.  From coding UI/UX improvments for the station websites, to social media management and training for the staff, to producing web shows for the WSSL 100 Ellis & Bradley morning show, to creating custom graphics for shows, events and digital media ads for contests and sponsors.</p>
                <p class="mt-3">It was a fun place and I brought a lot of knowledge and talent to the team for their online presence and they told me often.</p>
                <p class="mt-3">Here's a before and after off WSSl's homepage and some other graphics that I made along the way.</p>
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6 text-center">
                <v-row class="text-center font-weight-bold text-h6 text-grey-lighten-4">
                  <v-col cols="6">Before</v-col>
                  <v-col cols="6">After</v-col>
                </v-row>
                <img src="/wssl-b4-after.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
                <img src="/iHeart2.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
                <img src="/iHeartRadio.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card elevation="10" color="rgba(0,0,0,.1)" class="pa-3 text-body-2" rounded="lg">
            <v-row>
              <v-col cols="12" class="px-sm-4 pa-lg-6 text-white" style="background: rgba(0,0,0,.2)">
                <h2 class="font-weight-light">Full Stack Developer</h2>
                <p>EYEOBIZ, LLC</p>
              </v-col>
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6 text-grey-lighten-4">
                <h4>Company Website</h4>
                <p>HTML, CSS, JavaScript</p>
                <p class="mt-3">In 2008 I decided to take a stab at running my own web design firm. I was able to bring a dozen or so clients in and I worked really hard as a one-man business but after my first year I realized I would probably not enjoy the break-neck pace that was required day in and day out nonstop.  But I stuck it out another 10 months and finally decided to sell the business to friend and move back over to working for a larger company.</p>
                <p class="mt-3">Either way, I enjoyed the experience and gained huge amounts of knowledge about business, sales and 'hussle' :)</p>
                <p class="mt-3">Here's a quick look at the company website I coded and a few oldie but goodie screen grabs from that time.</p>
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6 text-center">
                <img src="/eyeobiz.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
                <img src="/clients.jpg" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? '' : '100%'" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card elevation="10" color="rgba(0,0,0,.1)" class="pa-3 text-body-2" rounded="lg">
            <v-row>
              <v-col cols="12" class="px-sm-4 pa-lg-6 text-white" style="background: rgba(0,0,0,.2)">
                <h2 class="font-weight-light">Full Stack Developer</h2>
                <p>For Fun</p>
              </v-col>
              <v-col cols="12" lg="3" class="px-sm-4 pa-lg-6 text-grey-lighten-4">
                <h4>The EventListener</h4>
                <p>React, MongoDB, Node, Express</p>
                <p class="mt-3">This is a little app that I built for fun while learning React because I was frustrated that my 'DaysUntil' mobile app only counted down to events and then stopped counting.</p>
                <p class="mt-3">I wanted an app that would count past an event and show how many days (since) the event that it counted down to and I couldn't help but use a little play on words with the title that developers might appreciate. :)</p>
                <p class="mt-3">This is pretty old and the backend that I had setup on a free source has expired but here's a few screenshots and the repos for the front and back.</p>
                <v-btn 
                  href="https://github.com/sixindustries/event-listener-client"
                  rounded
                  flat
                  text="Front-end"
                  target="_blank"
                  append-icon="mdi-github"
                  color="orange-darken-2"
                  class="ma-4"
                />
                <v-btn 
                  href="https://github.com/sixindustries/event-listener-server"
                  rounded
                  flat
                  text="Back-end"
                  target="_blank"
                  append-icon="mdi-github"
                  color="orange-darken-2"
                  class="ma-4"
                />
                
              </v-col>
              <v-col cols="12" lg="9" class="px-sm-4 pa-lg-6 text-center">
                <img src="/event1.png" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? null : '100%'" />
                <img src="/event2.png" class="elevation-10 rounded-lg ma-2" :width="$vuetify.display.lgAndUp ? null : '100%'" />
                <img src="/event4.png" class="elevation-10 rounded-lg ma-2" />
                <img src="/event3.png" class="elevation-10 rounded-lg ma-2" />
              </v-col>
            </v-row>
          </v-card>
          <p class="text-grey-lighten-4 my-10">More to come...</p>
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