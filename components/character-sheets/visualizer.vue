<template>
    <b-container fluid> 
        <div class="flex flex-column">  
            <b-tabs card>
                <b-tab v-for="(section, sectionIndex) in this.characterSheetVisualized.sections" :key="sectionIndex" :title="section.name">
                    <b-card-text>
                        <div class="flex flex-column" v-for="(row, rowIndex) in section.rows" :key="rowIndex">
                            <div class="flex flex-row gap--5px">
                                <div 
                                    v-for="(attribute, attributeIndex) in row.attributes"
                                    :key="attributeIndex"
                                    :class="`flex-grow-${attribute.size}`">
                                    <span><label>{{attribute.name}}</label></span>
                                    <input :type="attribute.type">
                                </div>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </div> 
    </b-container>    
</template>
<style scoped>
input {
    width: 100%;
}
</style>
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