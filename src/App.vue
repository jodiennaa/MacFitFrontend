<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterComponent from "@/components/Footer.vue"

</script>

<template>
  <v-app>
    <NavBar/>
    <v-main>
       <RouterView />
    </v-main>
    <FooterComponent />
  </v-app>
  </template>

