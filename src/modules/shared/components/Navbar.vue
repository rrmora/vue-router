<template>
    <div>
    <!-- <router-link :to="{name: 'home'}">Pokemon Lista</router-link>
    <router-link :to="{name: 'Pokemon-id', params: {id: 88}}">Pokemon por Id</router-link>
    <router-link :to="{name: 'about'}">About </router-link> -->
    <CustomNav v-for="link in links" :key="link.to" :link="link"/>
    </div>    
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
    data() {
        return {
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'Por ID', id: 150},
                {to: 'pokemon-about', name: 'About'},
                {to: 'dragonball-characters', name: 'Personajes'},
                {to: 'dragonball-about', name: 'DBZ-About'},
                {to: 'https://www.google.com/', name: 'Google'}
            ]
        }
    },
    components:{
        CustomNav: defineAsyncComponent(() => import('./CustomNav.vue'))
    }
}
</script>


<style scoped>
    div {
        padding: 0 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    /* .router-link-exact-active {
        color: #42b983
    } */
</style>