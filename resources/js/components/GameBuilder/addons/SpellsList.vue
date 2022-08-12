<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <td>Nom</td>
                    <td>Description</td>
                    <td>Incantation</td>
                    <td>Durée</td>
                    <td>Composante(s)</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="spell in this.spells" @click="showModal(spell)">
                    <td>{{spell.name}}</td>
                    <td>{{spell.shortDescription}}</td>
                    <td>{{spell.incantation}}</td>
                    <td>{{spell.duration}}</td>
                    <td>{{spell.composantes}}</td>
                </tr>
            </tbody>
        </table>
        <SpellDetails :show="showDetails" :spell="currentSpell" @close="closeModal"></SpellDetails>
    </div>
</template>

<script>
    import SpellDetails from './SpellDetails.vue';
    export default {
        components: {
            SpellDetails
        },
        props: [
            'spells'
        ], 
        data: function() {
            return {
                showDetails: false,
                currentSpell: {}
            }
        }, 
        methods: {
            showModal(spell) {
                this.showDetails = true, 
                this.currentSpell = spell
            },
            closeModal() {
                this.showDetails = false
            }
        }
    }
</script>