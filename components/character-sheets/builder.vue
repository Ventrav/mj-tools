    <template>
    <b-tabs card small>
        <b-tab v-for="(section, sectionIndex) in sections" :key="sectionIndex" :title="section.name" lazy>
            <b-card-text class="gap--10px flex flex-column">
                <div class="flex flex-row align-items-center gap--5px">
                    <b-input-group prepend="Nom de la section" class="flex-grow-1">
                        <b-input v-model="section.name"></b-input>
                    </b-input-group>
                    <b-btn-group>
                        <b-button variant="danger" @click="deleteSection(sectionIndex)">
                            <b-icon-trash-fill />
                        </b-button>
                    </b-btn-group>
                </div>
                <div class="flex flex-column row-container gap--10px">
                    <div class="flex flex-column custom-row gap--5px" v-for="(row, rowIndex) in section.rows" :key="rowIndex">
                        <div class="flex flex-row">
                            <h4 class="flex-grow-1">Lignes n° {{ rowIndex + 1 }}</h4>
                            <DeleteAreYouSure :i="`are-you-sure-${rowIndex}`" @sure="deleteLine(sectionIndex, rowIndex)" />
                        </div>
                        <!-- Line content  / attributes -->
                        <div v-for="(attribute, attributeIndex) in row.attributes" :key="attributeIndex" class="flex flex-row gap--5px">
                            <b-input-group prepend="Nom">
                                <b-form-input v-model="attribute.name"></b-form-input>
                            </b-input-group>
                            <!-- <b-input-group prepend="Taille" append="/12">
                                <b-form-input type="number" v-model="attribute.size"></b-form-input>
                            </b-input-group> -->
                            <InputNumber v-model="attribute.size" />
                            <b-input-group prepend="Type">
                                <b-form-input disabled v-model="attribute.type"></b-form-input>
                            </b-input-group>
                            <b-input-group prepend="Ordre">
                                <b-form-input type="number" v-model="attribute.order"></b-form-input>
                            </b-input-group>
                            <b-button variant="danger" @click="deleteAttribute(sectionIndex, rowIndex, attributeIndex)">
                                <b-icon-trash-fill />
                            </b-button>
                        </div>
                        <div class="flex justify-center">
                            <b-button @click="addAttributeToRow(row, sectionIndex, rowIndex)">Add attributes</b-button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-content-end">
                    <b-button variant="primary" @click="addRowToSection(section, sectionIndex)">
                        Ajouter une ligne
                    </b-button>
                </div>
            </b-card-text>
        </b-tab>
        <template #tabs-end>
            <b-btn size="sm" variant="outline" @click="addSection">
                <b-icon-folder-plus />
            </b-btn>
        </template>
    </b-tabs>
</template>
<style scoped>
    .custom-row {
        border-left: 6px solid rgb(64, 188, 64);
        border-right: 1px solid rgb(182, 182, 182);
        border-radius: 6px;
        padding: 5px;
        border-top: 1px solid rgb(182, 182, 182);
        border-bottom: 1px solid rgb(182, 182, 182);
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
</style>
<script>
import DeleteAreYouSure from '../global/delete-are-you-sure.vue';
import InputNumber from '../global/input-number.vue';

export default {
    props: [
        "characterSheetId"
    ],
    components: {
        DeleteAreYouSure,
        InputNumber
    },
    beforeMount(){
        for(const section of this.characterSheetBuilding.sections) {
            this.sections.push(JSON.parse(JSON.stringify(section)));
        }
    },
    data: () => {
        return {
            activeTab: 0,
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
        deleteLine(sectionIndex, index) {
            this.sections[sectionIndex].rows.splice(index, 1);
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
        },
        enableVisuMode() {
            this.$emit('visuModeAsked');
        }
    },
    computed: {
        characterSheetBuilding() {
            return this.$store.state["character-sheets"][this.characterSheetId];
        }
    }
}
</script>
