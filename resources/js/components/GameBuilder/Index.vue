<template>
    <h1>Acceuil du builder</h1>
    <h2>Sorts </h2> 
    <div class="input-group">
        <input type="text from-control" v-model="newSpell.name" name="spell-name" id="spell-name">
        <button class="btn btn-outline-primary" @click="addSpell()">+</button>
    </div>
    <SpellsList :spells="spells"></SpellsList>
</template>

<script>
import SpellsList from './addons/SpellsList.vue'
export default {
    components: {
        SpellsList
    },  
    data: function() {
        return {
            spells: [
                {
                    name: "Boule de feu",
                    shortDescription: "Le lanceur caste une immense boule de feu qui fait très mal",
                    description: "Après un temps de cast, le lanceur fait apparaitre une boule de feu dans sa main qui envoie ensuite dans une zone de 20m de diamètre à une distance de 10m. Toutes les cibles dans la zone doivent faire un test de dextérité ou sibur 6D8. En cas de réussite, ils ne subissent que la moitié",
                    composantes: "V,S",
                    incantation: "1 action",
                    duration: "instantanée"
                },
                {
                    name: "Armure du mage",
                    shortDescription: "La cible dispose de protection magique supplémentaire",
                    description: "Le lanceur touche une créature qui dispose à présent d'une armure magique. Ainsi sa CA passe à 14 et il obtient la résistance aux dégâts magiques",
                    composantes: "V,S",
                    incantation: "1 action",
                    duration: "5 rounds"
                }
            ],
            newSpell: {
                name: ''
            }
        }
    },
    methods: {
        addSpell() {
            this.spells.push({...this.newSpell})
            this.newSpell.name = ''
        }
    }
}
</script>