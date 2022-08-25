<template>
    <div>
        <b-navbar variant="dark" type="dark">
            <b-navbar-nav>
                <b-nav-item @click="goTo('index')">Acceuil</b-nav-item>
                <b-nav-item @click="goTo('games')">Jeux</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <Nuxt/>
    </div>
</template>
<script setup>
const goTo = (name) => { $nuxt.$router.push({name}) }
</script>