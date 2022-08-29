<template>
    <b-container fluid>
        <b-tabs card>
            <b-tab v-for="(section, sectionIndex) in sections" :key="sectionIndex" :title="section.name">
                <b-card-text>
                    <b-container fluid>
                        <b-row>
                            <b-col cols="6">
                                <b-input-group prepend="Nom de la section">
                                    <b-input v-model="section.name"></b-input>
                                </b-input-group>
                            </b-col>
                            <b-col cols="6" class="text-center">
                                <b-btn-group>
                                    <b-button variant="success" @click="addRowToSection(section, sectionIndex)">Ajouter ligne</b-button>
                                    <b-button variant="danger" @click="deleteSection(sectionIndex)">Supprimer section</b-button>
                                    <b-button variant="primary" @click="saveCharacterSheet">Sauvegarder</b-button>
                                    <b-button variant="warning">Visualiser la feuille</b-button>
                                </b-btn-group>
                            </b-col>
                        </b-row>
                        <b-row v-for="(row, rowIndex) in section.rows" :key="rowIndex" class="mt-1 pb-3 border-bottom">
                            <b-col cols="10" class="text-center">
                                <span :class="(sumAttributesSizeRow(row.attributes) > 12) ? 'text-danger' : ''">
                                    {{ (sumAttributesSizeRow(row.attributes) > 12) ? `${sumAttributesSizeRow(row.attributes)} taille de la ligne dépassée` : sumAttributesSizeRow(row.attributes)  }}
                                    </span>
                            </b-col>
                            <b-col cols="2">
                                <b-button @click="addAttributeToRow(row, sectionIndex, rowIndex)" block>Add attributes</b-button>
                            </b-col>
                            <b-col v-for="(attribute, attributeIndex) in row.attributes" :key="attributeIndex" cols="12">
                                <b-row class="mt-1">
                                    <b-col cols="3">
                                        <b-input-group prepend="Nom">
                                            <b-form-input v-model="attribute.name"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="2">
                                        <b-input-group prepend="Taille" append="/12">
                                            <b-form-input type="number" v-model="attribute.size"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="3">
                                        <b-input-group prepend="Type">
                                            <b-form-input disabled v-model="attribute.type"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="2">
                                        <b-input-group prepend="Ordre">
                                            <b-form-input v-model="attribute.order"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="2">
                                        <b-button variant="danger" block @click="deleteAttribute(sectionIndex, rowIndex, attributeIndex)">Supprimer</b-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-card-text>
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
        "characterSheetId"
    ],
    beforeMount(){
        for(const section of this.characterSheetBuilding.sections) {
            this.sections.push(JSON.parse(JSON.stringify(section)));
        }
    },
    data: () => {
        return {
            sections: []
        }
    },
    methods: {
        deleteSection(index) {
            console.log(index);
            this.sections.splice(index, 1);
        },
        deleteAttribute(sectionToUpdate, rowToUpdate, index) {
            this.sections[sectionToUpdate].rows[rowToUpdate].attributes.splice(index, 1);
        },
        addAttributeToRow(row, sectionToUpdate, rowToUpdate){
            row.attributes.push({
                name:"",
                size:1,
                type:"text",
                order:""
            });
            
            this.sections[sectionToUpdate].rows[rowToUpdate] = row;
        },
        addRowToSection(section, indexToUpdate) {            
            section.rows.push({
                order:"",
                attributes: []
            });
            this.sections[indexToUpdate] = section;
        },
        updateCharacterSheet(newValue) {
            this.$store.dispatch('character-sheets/updateForBuild', newValue)
        },
        addSection() {
            this.sections.push({
                key: this.sections.length+1,
                name:"new",
                rows:[] }
            );
        },
        sumAttributesSizeRow(attributes) {
            return attributes.reduce((accumulator, attribute) => {return accumulator + ~~attribute.size}, 0);
        },
        saveCharacterSheet() {
            let sections = [...this.sections];
            console.log(sections)
            let data = {...this.characterSheetBuilding, sections};
            this.$store.dispatch('character-sheets/update', data)
        }
    },
    computed: {
        characterSheetBuilding() {
            return this.$store.state["character-sheets"][this.characterSheetId];
        }
    }
}
</script>