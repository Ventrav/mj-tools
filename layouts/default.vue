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

<script>
export default {
    computed: {
        nameRoute() {
            return this.$route.name
        }
    },
    methods: {
        goTo(name) {
            this.$router.push({name})
        }
    }
}
</script>