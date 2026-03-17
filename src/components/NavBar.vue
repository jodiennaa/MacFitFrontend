<script setup>
 
import {useRouter} from "vue-router";
import {useAuth} from '../services/auth'

const router = useRouter();
const { logout} = useAuth()


const isLoggedIn = localStorage.getItem( "authToken")
const isAdmin = true

</script>
<template>
    <v-app-bar color="#5B4258">
        <v-app-bar-title>
            <router-link to="/">MacFit Gym</router-link>
        </v-app-bar-title>
        <v-btn to="/homepage" v-if="isLoggedIn">Home</v-btn>
        <v-btn to="/bundles">Bundles</v-btn>
        <v-btn to="/gym_locations">Our Gyms</v-btn>
        <v-btn to="/admin" v-if="isAdmin">Admin</v-btn>
        <v-btn icon="mdi-account" v-if="isLoggedIn">P
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="()=> {logout();router.push('/')}">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-btn to="/login" v-else>Login</v-btn>
    </v-app-bar>
</template>


<!-- Topic: Vuejs 3 Composables
1. https://vuejs.org/guide/reusability/composables.html
2. https://www.freecodecamp.org/news/how-vue-composables-work/
3. https://alexop.dev/posts/mastering-vue-3-composables-a-comprehensive-style-guide/
4. https://medium.com/@venkateshkondi1533/vue-3-composables-for-reusable-logic-916b861b7532 -->
