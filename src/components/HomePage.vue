<script setup>

</script>

<template>
  <v-container fluid class="pa-0">
    
      <v-img
        src="src/assets/hehehe.jpg"
        height="100%"
        cover
      >
       <v-row
  class="fill-height"
  align="center"
  justify="center"
>
          <v-col>
            <div class="overlay-text">
              Aspire to be your best self
            </div>
          </v-col>
        </v-row>
      </v-img>
  </v-container>

  <v-container>
    <v-row>
        <div class="text-display-medium mb-12 mx-auto">Our available gym programs</div>
    </v-row>
     
    <v-row>
        <v-col md="4">
            <v-card>
                <v-img src="src/assets/yoga.jpg"></v-img>
                <v-card-title>Yoga classes</v-card-title>
                <v-card-text>Builds flexibility and agility</v-card-text>
                <v-btn color="#5B4258">JOIN NOW</v-btn>

            </v-card>
        </v-col>
         <v-col md="4">
            <v-card>
                <v-img src="src/assets/pilates.jpg"></v-img>
                <v-card-title>Pilates classes</v-card-title>
                <v-card-text>Increases mobility and strength</v-card-text>
                <v-btn color="#5B4258">JOIN NOW</v-btn>

            </v-card>
        </v-col>
        <v-col md="4">
            <v-card>
                <v-img src="src/assets/spinclass.jpg"></v-img>
                <v-card-title>Indoor cycling classes</v-card-title>
                <v-card-text>Combines fun and exercise into one</v-card-text>
                <v-btn color="#5B4258">JOIN NOW</v-btn>

            </v-card>
        </v-col>
        <v-col md="4">
            <v-card>
                <v-img src="src/assets/hiit.jpg"></v-img>
                <v-card-title>HIIT workouts</v-card-title>
                <v-card-text>Builds muscle and tones</v-card-text>
                <v-btn color="#5B4258">JOIN NOW</v-btn>

            </v-card>
        </v-col>
    </v-row>
  </v-container> 

  <v-container>
    <v-row>
        <div class="text-display-medium mb-12 mx-auto">Our trainers</div>
        
        </v-row>
        <v-row>
            <v-col cols="12 md=4">
                <v-card>
                    <v-img src=""></v-img>
                    <v-card-title>Lydia Mwangi</v-card-title>
                    <v-card-subtitle>Yoga Trainer</v-card-subtitle>
                    <v-card-text>Teaches and trains flexibility and mobility</v-card-text>
                    <v-btn color="#5B4258">VIEW PROFILE</v-btn>

                </v-card>

        </v-col>

        <v-col cols="12 md=4">
                <v-card>
                    <v-img src=""></v-img>
                    <v-card-title>Samson Wena</v-card-title>
                    <v-card-subtitle>Weight lifting Trainer</v-card-subtitle>
                    <v-card-text>Helps build and gain muscle</v-card-text>
                    <v-btn color="#5B4258">VIEW PROFILE</v-btn>

                </v-card>

        </v-col>
        <v-col cols="12 md=4">
                <v-card>
                    <v-img src=""></v-img>
                    <v-card-title>Stephen Omgwana</v-card-title>
                    <v-card-subtitle>Nutritionist</v-card-subtitle>
                    <v-card-text>Advices on correct nutrition and meal prepping</v-card-text>
                    <v-btn color="#5B4258">VIEW PROFILE</v-btn>

                </v-card>

        </v-col>
        <v-col cols="12 md=4">
                <v-card>
                    <v-img src=""></v-img>
                    <v-card-title>Tati Weru</v-card-title>
                    <v-card-subtitle>Pilates Trainer</v-card-subtitle>
                    <v-card-text>Teaches stregth and mobility</v-card-text>
                    <v-btn color="#5B4258">VIEW PROFILE</v-btn>

                </v-card>

        </v-col>
    </v-row>
  </v-container>

  <v-container>

     <v-row>
        <div class="text-display-medium mb-12 mx-auto">Latest News</div>
    </v-row>
    <v-row>
       
        <v-col md="4">
            <v-card>
                <v-img src="src/assets/food.jpg"></v-img>
                <v-card-title>Diet: Fuel Your Body</v-card-title>
                <v-card-text>A balanced diet is essential for maintaining energy, building muscle, and supporting overall health.</v-card-text>
                <v-btn color="#5B4258">READ MORE</v-btn>

            </v-card>
        </v-col>
        <v-col md="4">
            <v-card>
                <v-img src="src/assets/kickboxing.jpg"></v-img>
                <v-card-title>Build Strength, Speed, and Confidence</v-card-title>
                <v-card-text>Kickboxing is a high-energy workout that combines martial arts techniques with cardiovascular exercise.</v-card-text>
                <v-btn color="#5B4258">READ MORE</v-btn>

            </v-card>
        </v-col>
        <v-col md="4">
            <v-card>
                <v-img src="src/assets/running.jpg"></v-img>
                <v-card-title>Improve Endurance and Heart Health</v-card-title>
                <v-card-text>Running is one of the simplest and most effective forms of exercise for improving cardiovascular health and endurance.</v-card-text>
                <v-btn color="#5B4258">READ MORE</v-btn>

            </v-card>
        </v-col>
    </v-row>
  </v-container>

  <template>

<v-footer
  color="#5B4258"
  class="text-center text-white pa-4"
>

<v-container>

<v-row>

<v-col cols="12" md="6">
  <h3>MacFit</h3>
  <p>The road to greatness starts here.</p>
</v-col>



<v-col cols="12" md="6">
  <h3>Contact</h3>
  <p>Email: macfit@bleble.com</p>
  <p>Phone: +254 724 678 098</p>
</v-col>

</v-row>

<v-divider class="my-4"></v-divider>

<div>
  © 2026 MacFit. All rights reserved.
</div>

</v-container>

</v-footer>
</template>

</template>
<style scoped>
.overlay-text{
    color:aliceblue;
    font-size:40px;
    font-weight:bold;
    text-align:center;
}
</style>

