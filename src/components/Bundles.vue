<script setup>

</script>

<template>
    <v-container style="background-color:#E2D2DC" class="mt-12" >
        <v-row>
            <div class="text-display-medium mb-12"> Bundles and Pricing</div>
        </v-row>
        
        <v-row>
            <v-col md="3">
                <v-card class="text-center" >
                    <v-icon color="#5B4258" icon="mdi-sun-clock" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#5B4258">Daily Pass</v-card-title>
                    <v-card-text>500 Ksh</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center" >
                    <v-icon color="#5B4258" icon="mdi-calendar-star-four-points" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#5B4258">1 Month</v-card-title>
                    <v-card-text>4,000 Ksh</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center" >
                    <v-icon color="#5B4258" icon="mdi-numeric-3-box-multiple-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#5B4258">3 Months</v-card-title>
                    <v-card-text>12,000 Ksh</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center" >
                    <v-icon color="#5B4258" icon="mdi-numeric-6-box-multiple-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#5B4258">6 Months</v-card-title>
                    <v-card-text>24,000 Ksh</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card class="text-center" >
                    <v-icon color="#5B4258" icon="mdi-dice-d12" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#5B4258">12 Months</v-card-title>
                    <v-card-text>48,000 Ksh</v-card-text>
                </v-card>

            </v-col>
        </v-row>

    </v-container>

    <!-- what's included -->
    <v-container style="background-color: #E2D2DC;" class="mt-12 text-center">
        <v-row class="text-center">
            <v-col md="12">
             <div class="text-display-medium mb-12">What's included in your gym membership?</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card variant="outlined">
                    <v-icon color="#5B4258" icon="mdi-food-apple" size="large" class="mt-8" ></v-icon>
                    <v-card-title color="#5B4258">Nutrition advice</v-card-title>
                </v-card>

            </v-col>
             <v-col md="3">
                <v-card variant="outlined">
                    <v-icon color="#5B4258" icon="mdi-hours-24" size="large" class="mt-8" ></v-icon>
                    <v-card-title color="#5B4258">24-hour access</v-card-title>
                </v-card>

            </v-col>
             <v-col md="3">
                <v-card variant="outlined">
                    <v-icon color="#5B4258" icon="mdi-weight-lifter" size="large" class="mt-8" ></v-icon>
                    <v-card-title color="#5B4258">Personal trainers</v-card-title>
                </v-card>

            </v-col>
             <v-col md="3">
                <v-card variant="outlined">
                    <v-icon color="#5B4258" icon="mdi-account-group" size="large" class="mt-8" ></v-icon>
                    <v-card-title color="#5B4258">Group classes</v-card-title>
                </v-card>

            </v-col>
            <v-col md="3">
                <v-card variant="outlined">
                    <v-icon color="#5B4258" icon="mdi-food-variant" size="large" class="mt-8" ></v-icon>
                    <v-card-title color="#5B4258">Personalized meal plan</v-card-title>
                </v-card>

            </v-col>
            <v-col md="3">
                <v-card variant="outlined">
                    <v-icon color="#5B4258" icon="mdi-shoe-sneaker" size="large" class="mt-8" ></v-icon>
                    <v-card-title color="#5B4258">Running club</v-card-title>
                </v-card>

            </v-col>
        </v-row>

    </v-container>

    <!-- how to join -->
    <v-container>
        <v-row>
            <v-col>
               <div class="text-display-medium mb-12">How to join the gym</div>
            </v-col>
        </v-row>

         <v-row>
            <v-col>
                <v-list>
                    <v-list-item>1.Create an account and register.</v-list-item>
                    <v-list-item>2.Choose a bundle and ill in the online form.</v-list-item>
                    <v-list-item>3.Make the payment and share confirmation.</v-list-item>
                    <v-list-item>4.Visit the gym to activate membership.</v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>