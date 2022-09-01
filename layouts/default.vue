<template>
    <div>
        <b-navbar variant="dark" type="dark">
            <b-navbar-nav>
                <b-nav-item @click="goTo('index')" :active="nameRoute === 'index'">Acceuil</b-nav-item>
                <b-nav-item @click="goTo('games')" :active="nameRoute === 'games'">Jeux</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <Nuxt/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    computed: {
        nameRoute() {
            return this.$route.name
        }
    },
    methods: {
        goTo(name: string) {
            this.$router.push({name})
        }
    }
})
</script>