<template>
    <div>
        <b-navbar variant="dark" type="dark">
            <b-navbar-nav>
                <b-nav-item
                    @click="goTo('index')" :active="nameRoute === 'index'"
                >
                    Acceuil
                </b-nav-item>
                <b-nav-item
                    @click="goTo('games')" :active="nameRoute === 'games'"
                >
                    Jeux
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <div class="main-container">
            <Nuxt/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Layout-default',
  computed: {
    nameRoute(): string {
      return (this.$route.name) ? this.$route.name : '';
    },
  },
  methods: {
    goTo(name: string): void {
      this.$router.push({ name });
    },
  },
});
</script>
<style scoped>
    .main-container {
        max-width: 1350px;
        margin: auto;
    }
</style>
