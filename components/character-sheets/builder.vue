<template>
    <b-container fluid>
        <b-tabs card>
            <b-tab title="Tab 1">
                <b-card-text>Tab contents 1</b-card-text>
            </b-tab>
            <template #tabs-end>
                <b-btn size="sm" variant="outline-primary" @click="addSection">Ajouter section</b-btn>
            </template>
        </b-tabs>
    </b-container>
</template>
<script>
export default {
    props: [
        "characterSheet"
    ],
    methods: {
        addSection() {
            this.characterSheet.sections.push({})
        }
    }
}
</script>