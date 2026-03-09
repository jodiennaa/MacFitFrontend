<script setup>

</script>

<template>
    <!-- landing page -->
    <v-container max-width="100%">
        <v-row>
            <v-carousel>
                <v-carousel-item src="/dumbell.jpg" cover></v-carousel-item>
                <v-carousel-item src="/gymgymgym.jpg" cover></v-carousel-item>
                <v-carousel-item src="/smartwatch.jpg" cover></v-carousel-item>
            </v-carousel>
         </v-row>
    </v-container>

    <!-- about us -->
     <v-container style="background-color:#E2D2DC" max-width="100%">
        <v-row class="text-center">
            <v-col md="8">
                <div class="text-display-medium mb-12">MacFit Gym – Strength, Performance, Community</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">MacFit Gym is a modern fitness space designed to help individuals reach their health and strength goals. Whether you are just beginning your fitness journey or looking to push your limits, MacFit provides the equipment, guidance, and atmosphere needed to help you succeed.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">At MacFit, members have access to high-quality training equipment, structured workout programs, and experienced trainers who are committed to helping you improve your strength, endurance, and overall wellbeing.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">More than just a gym, MacFit is a community that encourages discipline, consistency, and personal growth. Members are supported every step of the way, making it easier to stay motivated and committed to a healthier lifestyle. At MacFit, every workout brings you one step closer to becoming your strongest self.</div>
                <v-btn color="#5B4258">LEARN MORE</v-btn>
            </v-col>
            <v-col md="2">
                <v-container class="d-flex align-center justify-center fill-height">
                <v-img src="/gymbottle.jpg"></v-img>
                </v-container>  
            </v-col>
        </v-row>
     </v-container>
     <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="/moredumbells.jpg" cover></v-img>
                    <v-card-title>Ever tried weight lifting?</v-card-title>
                    <v-card-text>Lifting weights is a great source of exercising allowing building of muscle.</v-card-text>
                    <v-btn color="#5B4258">READ MORE</v-btn>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-img src="/yoga.jpg" cover></v-img>
                    <v-card-title>Feeling sore?</v-card-title>
                    <v-card-text>yoga is a great for stretching and stress relief.</v-card-text>
                    <v-btn color="#5B4258">READ MORE</v-btn>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-img src="/treadmill.jpg" cover></v-img>
                    <v-card-title>Treadmills blablabla</v-card-title>
                    <v-card-text>Treadmill good for walk and run.</v-card-text>
                    <v-btn color="#5B4258">READ MORE</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- reviews -->
    <v-container>
        <v-row>
            <v-col md="3">
                <v-card color="#E2D2DC">
                    <v-card-text> Gym has very positive atmosphere and trainers are very friendly and helpful! </v-card-text>
                    <v-rating :length="5" :size="32" :model-value="3" active-colour="primary" ></v-rating>
                </v-card>

            </v-col>
            <v-col md="3">
                <v-card color="#E2D2DC">
                    <v-card-text> Very clean and tidy and equipment is well organized </v-card-text>
                    <v-rating :length="5" :size="32" :model-value="4" active-colour="primary" ></v-rating>
                </v-card>

            </v-col>
            <v-col md="3">
                <v-card color="#E2D2DC">
                    <v-card-text> Membership is very affordable and worth the money. </v-card-text>
                    <v-rating :length="5" :size="32" :model-value="5" active-colour="primary" ></v-rating>
                </v-card>

            </v-col>
            <v-col md="3">
                <v-card color="#E2D2DC">
                    <v-card-text>I love de gym i buy de gym</v-card-text> 
                    <v-rating :length="5" :size="32" :model-value="5" active-colour="primary" ></v-rating>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
 
    <!-- contact us -->
    <v-container style="background-color:#E2D2DC" max-width="100%">
        <v-row class="text-center">
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Get in touch</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">0724 678 098 | macfitgym@bleble.com</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Opening Hours</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Mon-Fri: 5.00am-9.00pm | Sat: 5.30am-6pm | Sun: 6.00am-7.00pm</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">MacFit Gym, 3rd Floor, Nairobi Mall, Mombasa Road</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Designed by AllanaBananaUnana Designs</div>
        </v-row>
    </v-container>


</template>