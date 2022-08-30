<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <b-btn-group>
                    <b-button @click="enableEditMode">Passer en mode édition</b-button>
                </b-btn-group>
            </b-col>
        </b-row>  
        <b-row>  
            <b-col cols="12">          
                <b-tabs card>
                    <b-tab v-for="(section, sectionIndex) in this.characterSheetVisualized.sections" :key="sectionIndex" :title="section.name">
                        <b-card-text>
                            <b-container fluid>
                                <b-row v-for="(row, rowIndex) in section.rows" :key="rowIndex" class="mt-2">
                                    <b-col 
                                        v-for="(attribute, attributeIndex) in row.attributes" 
                                        :key="attributeIndex" 
                                        :cols="attribute.size">
                                        <b-input-group :prepend="attribute.name">
                                            <b-form-input></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row> 
    </b-container>    
</template>
<script>
export default {
    props: [
        'characterSheetId'
    ],
    computed: {
        characterSheetVisualized() {
            return this.$store.state['character-sheets'][this.characterSheetId];
        }
    },
    methods: {
        enableEditMode() {
            this.$emit('editModeAsked');
        }
    }
}
</script>