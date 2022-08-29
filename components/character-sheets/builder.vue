<template>
    <b-container fluid>
        <b-tabs card>
            <b-tab v-for="(section, sectionIndex) in sections" :key="section.key" :title="section.name">
                <b-card-text>
                    <b-container fluid>
                        <b-row>
                            <b-col cols="7">
                                <b-input-group prepend="Nom de la section">
                                    <b-input v-model="section.name"></b-input>
                                </b-input-group>
                            </b-col>
                            <b-col cols="5">
                                <b-btn-group>
                                    <b-button variant="success" @click="addRowToSection(section, sectionIndex)">Ajouter ligne</b-button>
                                    <b-button variant="danger" @click="deleteSection(sectionIndex)">Supprimer section</b-button>
                                </b-btn-group>
                            </b-col>
                        </b-row>
                        <b-row v-for="(row, rowIndex) in section.rows" :key="row.key">
                            <b-col cols="11" class="text-center">
                                {{ sumAttributesSizeRow(row.attributes) }}
                            </b-col>
                            <b-col cols="1">
                                <b-button @click="addAttributeToRow(row, sectionIndex, rowIndex)">Add attributes</b-button>
                            </b-col>
                            <b-col v-for="(attribute, attributeIndex) in row.attributes" :key="attributeIndex" cols="12">
                                <b-row>
                                    <b-col cols="3">
                                        <b-input-group prepend="Nom">
                                            <b-form-input v-model="attribute.name"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="1">
                                        <b-input-group prepend="Taille" append="/12">
                                            <b-form-input type="number" v-model="attribute.size"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="3">
                                        <b-input-group prepend="Type">
                                            <b-form-input disabled v-model="attribute.type"></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="3">
                                        <b-input-group prepend="Ordre">
                                            <b-form-input v-model="attribute.order"></b-form-input>
                                        </b-input-group>
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
        this.sections = [...this.characterSheetBuilding.sections];
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
                key: section.rows.length+1,
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
            // let newValue = {...this.characterSheetBuilding, sections:this.sections};
            // this.updateCharacterSheet(newValue);
        },
        sumAttributesSizeRow(attributes) {
            console.log(attributes)
            return attributes.reduce((accumulator, attribute) => accumulator + attribute.size, 0);
        }
    },
    computed: {
        characterSheetBuilding() {
            return this.$store.state["character-sheets"][this.characterSheetId];
        }
    }
}
</script>